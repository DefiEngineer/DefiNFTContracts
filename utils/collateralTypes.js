// networks 'kovan' 'localhost' 'hardhat'
// 0, USDC
// 1, DAI
// 2, TUSD
// 3, USDT
// 4, sUSD
// 5, LINK

// USDC
// aToken kovan: 0xe12AFeC5aa12Cf614678f9bFeeB98cA9Bb95b5B0
// Token kovan: 0xe22da380ee6B445bb8273C81944ADEB6E8450422
// aToken mainnet: 0xBcca60bB61934080951369a648Fb03DF4F96263C
// Token mainnet: 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48
// decimals: 6

const collaterals = [
  {
    name: "aUSDC",
    kovanAddress: "0xe12AFeC5aa12Cf614678f9bFeeB98cA9Bb95b5B0",
    mainnetAddress: "0xBcca60bB61934080951369a648Fb03DF4F96263C",
    maticAddress: "",
    primaryColor: "#FF7D00",
    secondaryColor: "#F9D792",
    cheekColor: "#F4AF24",
    svgId: 0,
    eyeShapeSvgId: 18,
    modifiers: [1, 0, 0, 0, 0, 0],
    conversionRate: 1, // 1 USDC equals 1 USD
  },
];

function getCollaterals(network, defaultAddr) {
  const collateralTypes = [];
  for (const type of collaterals) {
    const typeInfo = {
      primaryColor: "0x" + type.primaryColor.slice(1),
      secondaryColor: "0x" + type.secondaryColor.slice(1),
      cheekColor: "0x" + type.cheekColor.slice(1),
      svgId: type.svgId,
      eyeShapeSvgId: type.eyeShapeSvgId,
      modifiers: type.modifiers,
      conversionRate: type.conversionRate,
      delisted: false,
    };
    const item = {};
    if (network === "kovan") {
      item.collateralType = type.kovanAddress;
    } else if (network === "hardhat") {
      item.collateralType = defaultAddr;
    } else if (network === "localhost") {
      item.collateralType = type.mainnetAddress;
    }
    item.collateralTypeInfo = typeInfo;
    collateralTypes.push(item);
  }
  return collateralTypes;
}

exports.getCollaterals = getCollaterals;
