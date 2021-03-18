const hre = require("hardhat");
const { deployDiamond, deployFacets } = require("./diamond");

async function createDiamond(test = false) {
  const [
    deployer,
    linkAcct,
    daoAcct,
    farmingAcct,
    companyAcct,
  ] = await hre.ethers.getSigners();
  const deployerAddr = await deployer.getAddress();
  const network = hre.network.name;

  const name = "Daily Fantasy Sports NFT";
  const symbol = "DFSNFT";

  let linkAddress;
  let linkContract;
  let vrfCoordinator;
  let keyHash;
  let fee;
  let initialReleaseSize;
  let dao;
  let daoTreasury;
  let rarityFarming;
  let pixelCraft;

  if (network === "hardhat") {
    const LinkTokenMock = await hre.ethers.getContractFactory("LinkTokenMock");
    linkContract = await LinkTokenMock.deploy();
    await linkContract.deployed();

    linkAddress = linkContract.address;

    vrfCoordinator = await linkAcct.getAddress();
    keyHash =
      "0x6c3699283bda56ad74f6b855546325b68d482e983852a7a82979cc4807b641f4";
    fee = hre.ethers.utils.parseEther("0.0001");
    initialReleaseSize = "10000";
    dao = await daoAcct.getAddress();
    daoTreasury = dao;
    rarityFarming = await farmingAcct.getAddress();
    pixelCraft = await companyAcct.getAddress();
  } else if (network === "localhost") {
    const LinkTokenMock = await hre.ethers.getContractFactory("LinkTokenMock");
    linkContract = await LinkTokenMock.deploy();
    await linkContract.deployed();

    linkAddress = linkContract.address;

    vrfCoordinator = await linkAcct.getAddress();
    keyHash =
      "0x6c3699283bda56ad74f6b855546325b68d482e983852a7a82979cc4807b641f4";
    fee = hre.ethers.utils.parseEther("0.0001");
    initialReleaseSize = "10000";
    dao = await daoAcct.getAddress();
    daoTreasury = dao;
    rarityFarming = await farmingAcct.getAddress();
    pixelCraft = await companyAcct.getAddress();
  } else if (network === "kovan") {
  } else {
    throw Error(`No network settings available for ${network}.`);
  }

  // Get facet names programatically from file directory
  const facets = await deployFacets([
    "BridgeFacet",
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
    facets,
    args: [
      [
        dao,
        daoTreasury,
        pixelCraft,
        rarityFarming,
        linkAddress,
        keyHash,
        fee,
        vrfCoordinator,
        linkAddress,
        deployerAddr,
        name,
        symbol,
      ],
    ],
  });

  return { diamond, facets };
}

module.exports = createDiamond;
