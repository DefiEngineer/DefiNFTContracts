require("dotenv").config();
require("@nomiclabs/hardhat-waffle");
require("@tenderly/hardhat-tenderly");

const defaultNetwork = "localhost";

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();
  accounts.forEach((account) => console.log(account));
});

module.exports = {
  defaultNetwork,
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
      forking: {
        url: process.env.FORK_URL,
      },
    },
    kovan: {
      url: process.env.KOVAN_URL,
      accounts: {
        mnemonic: process.env.MNEMONIC,
      },
    },
  },
  solidity: {
    version: "0.8.2",
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
    timeout: 20000,
  },
  tenderly: {
    username: "masterchief",
    project: "sandbox",
  },
};
