const hre = require("hardhat");

async function main() {
  console.log("Network:", hre.network.name);
  const HN = await hre.ethers.getContractFactory("HackerNews");
  const hn = await HN.deploy("Hello");

  await hn.deployed();

  console.log("HackerNews deployed to:", hn.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
