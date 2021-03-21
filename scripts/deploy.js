const { writeFileSync } = require("fs");
const hre = require("hardhat");
const createDiamond = require("../utils/create");

async function main() {
  const network = hre.network.name;
  const { diamond, facets } = await createDiamond();

  if (network === "kovan") {
    for (let i = 0; i < facets.length; i++) {
      const [name, contract] = facets[i];
      await hre.tenderly.verify({
        name,
        address: contract.address,
        network,
      });
    }
    await hre.tenderly.verify({
      name: "KovanDiamond",
      address: diamond.address,
      network,
    });
  }

  const path = `${hre.config.paths.artifacts}/Diamond.${hre.network.name}.address`;
  writeFileSync(path, diamond.address);
  console.log(`Diamond: ${diamond.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
