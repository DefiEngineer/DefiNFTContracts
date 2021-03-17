const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const contractName = "HackerNews";
  const Artifacts = await hre.ethers.getContractFactory(contractName);
  const deployed = await Artifacts.deploy();
  await deployed.deployed();

  fs.writeFileSync(
    `${hre.config.paths.artifacts}/${contractName}.address`,
    deployed.address
  );

  console.log(`${contractName} deployed to: `, deployed.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
