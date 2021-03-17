require("dotenv").config();
require("@nomiclabs/hardhat-waffle");

const defaultNetwork = "localhost";

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork,
  networks: {
    localhost: {
      url: "http://localhost:8545",
    },
    kovan: {
      url: process.env.KOVAN_URL,
      accounts: {
        mnemonic: process.env.MNEMONIC,
      },
    },
  },
  solidity: "0.8.2",
};
