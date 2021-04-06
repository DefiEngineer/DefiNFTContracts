const hre = require("hardhat");
const { deployDiamond, deployFacets } = require("./diamond");
const { getCollaterals } = require("./collateralTypes");
const { itemTypes } = require("./itemTypes");

async function createDiamond() {
  const [
    deployer,
    linkAcct,
    daoAcct,
    companyAcct,
  ] = await hre.ethers.getSigners();
  const deployerAddr = await deployer.getAddress();
  const network = hre.network.name;

  const name = "Daily Fantasy Sports NFT";
  const symbol = "DFSNFT";
  const packPrice = ethers.utils.parseEther("100");

  let tx;
  let linkAddress;
  let linkContract;
  let vrfCoordinator;
  let keyHash;
  let fee;
  let initialReleaseSize;
  let dao;
  let daoTreasury;
  let dfsnft;
  let daiAddress;

  if (network === "hardhat") {
    const LinkTokenMock = await hre.ethers.getContractFactory("LinkTokenMock");
    linkContract = await LinkTokenMock.deploy();
    await linkContract.deployed();

    linkAddress = linkContract.address;
    daiAddress = linkAddress;
    vrfCoordinator = await linkAcct.getAddress();
    keyHash =
      "0x6c3699283bda56ad74f6b855546325b68d482e983852a7a82979cc4807b641f4";
    fee = hre.ethers.utils.parseEther("0.0001");
    initialReleaseSize = "10000";
    dao = await daoAcct.getAddress();
    daoTreasury = dao;
    dfsnft = await companyAcct.getAddress();
  } else if (network === "localhost") {
    linkAddress = "0x514910771af9ca656af840dff83e8264ecf986ca";
    linkContract = await hre.ethers.getContractAt("ILink", linkAddress);
    daiAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
    vrfCoordinator = await linkAcct.getAddress();
    keyHash =
      "0x6c3699283bda56ad74f6b855546325b68d482e983852a7a82979cc4807b641f4";
    fee = hre.ethers.utils.parseEther("0.0001");
    initialReleaseSize = "10000";
    dao = await daoAcct.getAddress();
    daoTreasury = dao;
    dfsnft = await companyAcct.getAddress();
  } else if (network === "kovan") {
    linkAddress = "0xa36085f69e2889c224210f603d836748e7dc0088";
    daiAddress = "0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD";
    linkContract = await hre.ethers.getContractAt("ILink", linkAddress);
    vrfCoordinator = "0xdD3782915140c8f3b190B5D67eAc6dc5760C46E9";
    keyHash =
      "0x6c3699283bda56ad74f6b855546325b68d482e983852a7a82979cc4807b641f4";
    fee = hre.ethers.utils.parseEther("0.1");
    initialReleaseSize = "10000";
    dao = await daoAcct.getAddress();
    daoTreasury = dao;
    dfsnft = await companyAcct.getAddress();
  } else {
    throw Error(`No network settings available for ${network}.`);
  }

  // Get facet names programatically from file directory
  const deployedFacets = await deployFacets([
    "AavegotchiFacet",
    "AavegotchiGameFacet",
    "SvgFacet",
    "ItemsFacet",
    "ItemsTransferFacet",
    "CollateralFacet",
    "DAOFacet",
    "VrfFacet",
    "ShopFacet",
    "MetaTransactionsFacet",
    "ERC1155MarketplaceFacet",
    "ERC721MarketplaceFacet",
  ]);

  const diamond = await deployDiamond({
    initDiamond: "InitDiamond",
    owner: deployerAddr,
    deployedFacets,
    args: [
      [
        dao,
        daoTreasury,
        dfsnft,
        daiAddress,
        keyHash,
        fee,
        vrfCoordinator,
        linkAddress,
        name,
        symbol,
      ],
    ],
  });

  const diamondFacets = {};
  for (let i = 0; i < deployedFacets.length; i++) {
    const name = deployedFacets[i][0];
    const diamondFacet = await ethers.getContractAt(name, diamond.address);
    diamondFacets[name] = diamondFacet;
  }

  const { DAOFacet } = diamondFacets;

  // Add initial release
  tx = await DAOFacet.createHaunt(
    initialReleaseSize,
    packPrice,
    "0x000000",
    "https://cdn11.bigcommerce.com/s-0kvv9/images/stencil/1280x1280/products/333664/487120/mosaic1920blasterpack__81086.1594411359.jpg"
  );
  await tx.wait();

  // Add collaterals
  tx = await DAOFacet.addCollateralTypes(getCollaterals(network, linkAddress));
  await tx.wait();

  // Add items
  tx = await DAOFacet.addItemTypes(itemTypes);
  await tx.wait();

  return {
    diamond,
    linkContract,
    linkAddress,
    facets: deployedFacets,
    ...diamondFacets,
  };
}

module.exports = createDiamond;
