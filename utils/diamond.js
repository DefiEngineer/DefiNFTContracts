const FacetCutAction = {
  Add: 0,
  Replace: 1,
  Remove: 2,
};

async function deployDiamond({
  initDiamond,
  deployedFacets,
  owner,
  args = [],
}) {
  const diamondCut = [];
  const diamondFactory = await ethers.getContractFactory("Diamond");

  for (const [_, deployedFacet] of deployedFacets) {
    diamondCut.push([
      deployedFacet.address,
      FacetCutAction.Add,
      getSelectors(deployedFacet),
    ]);
  }

  if (typeof initDiamond === "string") {
    initDiamond = await ethers.getContractFactory(initDiamond);
    initDiamond = await initDiamond.deploy();
    await initDiamond.deployed();
  }
  const funcCall = initDiamond.interface.encodeFunctionData("init", args);
  const deployedDiamond = await diamondFactory.deploy(owner);
  await deployedDiamond.deployed();

  const diamondCutFacet = await ethers.getContractAt(
    "DiamondCutFacet",
    deployedDiamond.address
  );
  const tx = await diamondCutFacet.diamondCut(
    diamondCut,
    initDiamond.address,
    funcCall
  );
  await tx.wait();
  return deployedDiamond;
}

async function deployFacets(facetList) {
  const result = [];
  for (const facet of facetList) {
    const factory = await ethers.getContractFactory(facet);
    const contract = await factory.deploy();
    await contract.deployed();
    console.log(`${facet}: ${contract.address}`);
    result.push([facet, contract]);
  }
  return result;
}

function getSelectors(contract) {
  const signatures = Object.keys(contract.interface.functions);
  return signatures.reduce((acc, val) => {
    if (val !== "init(bytes)") {
      acc.push(contract.interface.getSighash(val));
    }
    return acc;
  }, []);
}

exports.deployDiamond = deployDiamond;
exports.deployFacets = deployFacets;
