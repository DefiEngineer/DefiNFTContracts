// const WEARABLE_SLOT_SHOES = 0;

const itemTypes = [
  {
    svgId: 0,
    name: "Void",
    setId: [],
    author: "Who Cares",
    description: "The Void",
    dimensions: "",
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    allowedCollaterals: [],
    minLevel: 1,
    ghstPrice: 0,
    maxQuantity: 0,
    traitModifiers: [0, 0, 0, 0, 0, 0],
    canPurchaseWithGhst: false,
    slotPositions: "",
    category: 0,
    canBeTransferred: false,
    totalQuantity: 0,
    experienceBonus: 0,
    kinshipBonus: 0,
  },
  {
    svgId: 1,
    name: "Normal Basketball Shoe",
    setId: [1],
    author: "Nike",
    description: "XP +20, Kinship +5",
    dimensions: { x: 15, y: 2, width: 34, height: 20 },
    x: 15,
    y: 2,
    width: 34,
    height: 20,
    allowedCollaterals: [],
    minLevel: 1,
    ghstPrice: 5,
    maxQuantity: "1000",
    traitModifiers: [0, 0, 0, 1, 0, 1],
    canPurchaseWithGhst: true,
    slotPositions: "shoes",
    category: 0,
    canBeTransferred: true,
    totalQuantity: 0,
    experienceBonus: 20,
    kinshipBonus: 5,
  },
  {
    svgId: 2,
    name: "Chuck Taylor",
    setId: [2],
    author: "Converse",
    description: "XP +50, Kinship +50",
    dimensions: { x: 15, y: 2, width: 34, height: 20 },
    x: 15,
    y: 2,
    width: 34,
    height: 20,
    allowedCollaterals: [],
    minLevel: 1,
    ghstPrice: 5,
    maxQuantity: "250",
    traitModifiers: [0, 2, 0, 0, 2, 0],
    canPurchaseWithGhst: false,
    slotPositions: "shoes",
    category: 0,
    canBeTransferred: true,
    totalQuantity: 0,
    experienceBonus: 50,
    kinshipBonus: 50,
  },
  {
    svgId: 3,
    name: "Original Air Jordans",
    setId: [3],
    author: "Nike",
    description: "XP +5000, Kinship +500",
    dimensions: { x: 15, y: 2, width: 34, height: 20 },
    x: 15,
    y: 2,
    width: 34,
    height: 20,
    allowedCollaterals: [],
    minLevel: 5,
    ghstPrice: 1000,
    maxQuantity: "2",
    traitModifiers: [10, 10, 10, 10, 10, 10],
    canPurchaseWithGhst: false,
    slotPositions: "shoes",
    category: 0,
    canBeTransferred: true,
    totalQuantity: 0,
    experienceBonus: 5000,
    kinshipBonus: 500,
  },
];

function stringToSlotPositions(str) {
  if (str.length === 0) {
    return [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ];
  }
  // Slot 0 Body
  else if (str === "shoes")
    return [
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ];
  // Slot 1 Face
  else if (str === "face")
    return [
      false,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ];
  // Slot 2 Eyes
  else if (str === "eyes")
    return [
      false,
      false,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ];
  // Slot 3 Head
  else if (str === "head")
    return [
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ];
  // Slot 4/5 Either hand
  else if (str === "hands")
    return [
      false,
      false,
      false,
      false,
      true,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ];
  // Slot 4 Left hand
  else if (str === "handLeft")
    return [
      false,
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ];
  // Slot 5 Right Hand
  else if (str === "handRight")
    return [
      false,
      false,
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ];
  // Slot 6 Pet
  else if (str === "pet")
    return [
      false,
      false,
      false,
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ];
  // Slot 7 Background
  else if (str === "background")
    return [
      false,
      false,
      false,
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ];
  else {
    throw Error("Wrong slot string: " + str);
  }
}

function calculateRarityScoreModifier(maxQuantity) {
  if (maxQuantity >= 1000) return 1;
  if (maxQuantity >= 500) return 2;
  if (maxQuantity >= 250) return 5;
  if (maxQuantity >= 100) return 10;
  if (maxQuantity >= 10) return 20;
  if (maxQuantity >= 1) return 50;
  return 0;
}

function getItemTypes() {
  const result = [];
  for (const itemType of itemTypes) {
    itemType.ghstPrice = ethers.utils.parseEther(itemType.ghstPrice.toString());
    itemType.slotPositions = stringToSlotPositions(itemType.slotPositions);
    if (itemType.dimensions === "" || itemType.dimensions === 0) {
      itemType.dimensions = { x: 0, y: 0, width: 0, height: 0 };
    } else {
      itemType.dimensions = itemType.dimensions;
    }

    itemType.rarityScoreModifier = calculateRarityScoreModifier(
      itemType.maxQuantity
    );
    if (!Array.isArray(itemType.allowedCollaterals)) {
      throw Error("Is not array.");
    }
    result.push(itemType);
  }
  return result;
}

exports.itemTypes = getItemTypes();
