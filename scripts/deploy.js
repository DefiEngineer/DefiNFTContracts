const { writeFileSync } = require("fs");
const hre = require("hardhat");
const createDiamond = require("../utils/create");

async function main() {
  const network = hre.network.name;
  const { diamond, deployedfacets } = await createDiamond();

  if (network === "kovan") {
    deployedfacets.forEach(async (facet) => {
      const [name, contract] = facet;
      await hre.tenderly.verify({
        name,
        address: contract.address,
        network,
      });
    });
  }

  const path = `${hre.config.paths.artifacts}/Diamond.${hre.network.name}.address`;
  writeFileSync(path, diamond.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
