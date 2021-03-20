const fs = require("fs");
const hre = require("hardhat");
const chalk = require("chalk");

function publishContract(name, pubDir, graphDir) {
  console.log(" 💽 Publishing", chalk.cyan(name), "to", chalk.gray(pubDir));
  try {
    let artifacts = hre.config.paths.artifacts;
    let contract = fs
      .readFileSync(`${artifacts}/contracts/${name}.sol/${name}.json`)
      .toString();
    const address = fs.readFileSync(`${artifacts}/${name}.address`).toString();
    contract = JSON.parse(contract);
    let graphConfigPath = `${graphDir}/config/config.json`;
    let graphConfig;
    try {
      if (fs.existsSync(graphConfigPath)) {
        graphConfig = fs.readFileSync(graphConfigPath).toString();
      } else {
        graphConfig = "{}";
      }
    } catch (err) {
      console.log(err);
    }
    graphConfig = JSON.parse(graphConfig);
    graphConfig[`${name}Address`] = address;
    fs.writeFileSync(
      `${pubDir}/${name}.address.js`,
      `exports default "${address}"`
    );
    fs.writeFileSync(
      `${pubDir}/${name}.abi.js`,
      `exports default ${JSON.stringify(contract.abi, null, 2)}`
    );
    fs.writeFileSync(
      `${pubDir}/${name}.bytecode.js`,
      `exports default "${contract.bytecode}"`
    );
    const folderPath = graphConfigPath.replace("/config.json", "");
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }
    fs.writeFileSync(graphConfigPath, JSON.stringify(graphConfig, null, 2));
    fs.writeFileSync(
      `${graphDir}/abis/${name}.json`,
      JSON.stringify(contract.abi, null, 2)
    );

    console.log(`📠 Published ${chalk.green(name)} to the frontend`);
    return true;
  } catch (err) {
    if (err.toString().indexOf("no such file or directory") >= 0) {
      console.log(
        chalk.yellow(
          `⚠️  Can't publish ${name} yet (make sure it's getting deployed).`
        )
      );
      console.log(err);
    } else {
      console.log(err);
      return false;
    }
  }
}

async function main() {
  const pubDir = `../dfsnft-client/src/@contracts/${hre.network.name}`;
  const graphDir = "../dfsnft-subgraph";
  if (!fs.existsSync(pubDir)) {
    fs.mkdirSync(pubDir);
  }
  fs.readdirSync(hre.config.paths.sources).forEach((file) => {
    if (file.indexOf(".sol") >= 0) {
      const contractName = file.replace(".sol", "");
      publishContract(contractName, pubDir, graphDir);
    }
  });
  // TODO: Create an export scheme on the frontend so contracts can be consumed.
  // fs.writeFileSync(
  //   `${publishDir}/contracts.js`,
  //   `export default ${JSON.stringify(finalContractList)};`
  // );
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
