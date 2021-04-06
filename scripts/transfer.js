const chalk = require("chalk");
const hre = require("hardhat");
const impersonateAddress = require("../utils/rpc");
const usdc = require("../outside-contracts/usdc.json");

const asset = "USDC";
const amount = hre.ethers.utils.parseUnits("10000", "mwei");
const beneficiary = "0x5233aF283E7C359a1011Dc0ff480298E90c8CFd6";
const whale = "0x47ac0Fb4F2D84898e4D9E7b4DaB3C24507a6D503";

async function main() {
  console.log(
    chalk.cyan(
      `Transferring ${ethers.utils.formatEther(
        amount
      )} ${asset} from a large holder to ${beneficiary}...`
    )
  );

  const [hardhat1] = await hre.ethers.getSigners();
  await hardhat1.sendTransaction({
    to: beneficiary,
    value: ethers.utils.parseEther("20"),
  });

  await hardhat1.sendTransaction({
    to: whale,
    value: ethers.utils.parseEther("20"),
  });

  const holder = await impersonateAddress(whale);

  let token = new hre.ethers.Contract(usdc.address, usdc.abi, holder);

  const holderBalance = await token.balanceOf(holder.address);
  console.log(
    chalk.gray(
      ` > holder balance: ${hre.ethers.utils.formatUnits(
        holderBalance,
        "mwei"
      )}`
    )
  );
  if (amount.gt(holderBalance)) {
    throw new Error(chalk.red("Holder does not have enough funds"));
  }

  let balance = await token.balanceOf(beneficiary);
  console.log(
    chalk.gray(
      ` > Beneficiary balance before: ${hre.ethers.utils.formatUnits(
        balance,
        "mwei"
      )}`
    )
  );

  token = token.connect(holder);

  console.log(chalk.cyan(" > Transferring..."));
  await token.transfer(beneficiary, amount);

  balance = await token.balanceOf(beneficiary);
  console.log(
    chalk.gray(
      ` > Beneficiary balance after: ${hre.ethers.utils.formatUnits(
        balance,
        "mwei"
      )}`
    )
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
