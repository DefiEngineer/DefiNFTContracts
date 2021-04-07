require("dotenv").config();
require("@nomiclabs/hardhat-waffle");
require("@tenderly/hardhat-tenderly");

const defaultNetwork = "localhost";

task("accounts", "Prints the list of accounts", async () => {
  const accts = await ethers.getSigners();
  accts.forEach((acct) => console.log(acct.address));
});

// task("createRelease", "Creates a new release", async () => {
//   const contract = await ethers.getContractAt(
//     "DAOFacet",
//     "0x9A676e781A523b5d0C0e43731313A708CB607508"
//   );
//   const packPrice = ethers.utils.parseEther("100");
//   const tx = await contract.createRelease("10000", packPrice, "0x000000");
//   await tx.wait();
// });

module.exports = {
  defaultNetwork,
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    kovan: {
      url: process.env.KOVAN_URL,
      accounts: {
        mnemonic: process.env.MNEMONIC,
      },
    },
  },
  solidity: {
    version: "0.8.3",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 300000,
  },
  tenderly: {
    username: "masterchief",
    project: "sandbox",
  },
};
