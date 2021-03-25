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
    image: "",
  },
  {
    svgId: 1,
    name: "Nike Adapt BB 2.0",
    setId: [],
    author: "Nike",
    description:
      "Power laces work with the press of a button. Flyknit construction shroud is lightweight and breathable for cool comfort. Padded tongue and flexible collar for easy entry.",
    dimensions: { x: 15, y: 2, width: 34, height: 20 },
    x: 15,
    y: 2,
    width: 34,
    height: 20,
    allowedCollaterals: [],
    minLevel: 1,
    ghstPrice: 350,
    maxQuantity: "10000",
    traitModifiers: [0, 0, 0, 5, 0, 5],
    canPurchaseWithGhst: true,
    slotPositions: "shoes",
    category: 0,
    canBeTransferred: true,
    totalQuantity: 0,
    experienceBonus: 50,
    kinshipBonus: 50,
    image:
      "https://images.footlocker.com/is/image/EBFL2/Q5397100_a1?wid=630&hei=630&fmt=png-alpha",
  },
  {
    svgId: 2,
    name: "Li-Ning WOW 8",
    setId: [],
    author: "Li-Ning",
    description:
      "The Way of Wade 8.0 brings spectacular performance and unrivaled style, meaning every time you lace up a pair you up your game. Channel the explosive performance of the modern legend in his latest signature shoe.",
    dimensions: { x: 15, y: 2, width: 34, height: 20 },
    x: 15,
    y: 2,
    width: 34,
    height: 20,
    allowedCollaterals: [],
    minLevel: 1,
    ghstPrice: 225,
    maxQuantity: "10000",
    traitModifiers: [0, 2, 0, 0, 2, 0],
    canPurchaseWithGhst: false,
    slotPositions: "shoes",
    category: 0,
    canBeTransferred: true,
    totalQuantity: 0,
    experienceBonus: 25,
    kinshipBonus: 20,
    image:
      "https://images.footlocker.com/is/image/EBFL2/BAP11312_a1?wid=630&hei=630&fmt=png-alpha",
  },
  {
    svgId: 3,
    name: "Under Armour Curry 8",
    setId: [],
    author: "Under Armour",
    description:
      "Make a splash on the court in the fast and agile Under Armour Curry 8. UA flow cushioning adds more springiness to your step while the flexible Pebax® gives you additional support throughout the game. Dominate your opponents and bring home victory. ",
    dimensions: { x: 15, y: 2, width: 34, height: 20 },
    x: 15,
    y: 2,
    width: 34,
    height: 20,
    allowedCollaterals: [],
    minLevel: 5,
    ghstPrice: 160,
    maxQuantity: "10000",
    traitModifiers: [2, 0, 0, 1, 1, 2],
    canPurchaseWithGhst: true,
    slotPositions: "shoes",
    category: 0,
    canBeTransferred: true,
    totalQuantity: 0,
    experienceBonus: 10,
    kinshipBonus: 20,
    image:
      "https://images.footlocker.com/is/image/EBFL2/24456102_a1?wid=630&hei=630&fmt=png-alpha",
  },
  {
    svgId: 4,
    name: "New Balance Kawhi Signature",
    setId: [],
    author: "New Balance",
    description:
      "Designed with two-time NBA Champion and NBA Finals MVP Kawhi Leonard, the New Balance KAWHI Signature is built for position less play and worn on game day by the maestro himself. It features Kawhi edits like braid-inspired stitching, resume-repping tongue, and eyelets based on his classic ride. \
      This signature shoe can be used on and off court, packing in performance tech like the FuelCell midsole, providing ultimate energy return and support to stay explosive throughout the game. Our new full-length performance plate (a New Balance first) is designed specifically for Kawhi with cutting, jumping, and stability in mind. \
      The upper is engineered with Kinetic Stitch, a data-driven thread application that helps control movement where you need it the most. It’s durable enough to hold up to your independent style of play and smooth enough to wear home. Play the game your way in the New Balance KAWHI Signature kicks.",
    dimensions: { x: 15, y: 2, width: 34, height: 20 },
    x: 15,
    y: 2,
    width: 34,
    height: 20,
    allowedCollaterals: [],
    minLevel: 5,
    ghstPrice: 160,
    maxQuantity: "10000",
    traitModifiers: [3, 0, 0, 1, 0, 0],
    canPurchaseWithGhst: true,
    slotPositions: "shoes",
    category: 0,
    canBeTransferred: true,
    totalQuantity: 0,
    experienceBonus: 10,
    kinshipBonus: 10,
    image:
      "https://images.footlocker.com/is/image/EBFL2/BBKLSMT1_a1?wid=630&hei=630&fmt=png-alpha",
  },
  {
    svgId: 5,
    name: "Adidas Kid Cudi Artlry High",
    setId: [],
    author: "Adidas",
    description:
      "Top off your favorite street-ready look in vintage adidas style with the Kid Cudi Artlry High. A tribute to Bill and Ted’s famous musical adventure film, these timeless kicks from the ‘90s offer superior style and performance on-demand. Constructed with lightweight and breathable materials for a comfortable, seamless fit, the adidas Kid Cudi Artlry High keeps you on the move and ready to go!",
    dimensions: { x: 15, y: 2, width: 34, height: 20 },
    x: 15,
    y: 2,
    width: 34,
    height: 20,
    allowedCollaterals: [],
    minLevel: 5,
    ghstPrice: 160,
    maxQuantity: "10000",
    traitModifiers: [1, 1, 1, 1, 1, 1],
    canPurchaseWithGhst: true,
    slotPositions: "shoes",
    category: 0,
    canBeTransferred: true,
    totalQuantity: 0,
    experienceBonus: 15,
    kinshipBonus: 15,
    image:
      "https://images.footlocker.com/is/image/EBFL2/FZ0883_a1?wid=630&hei=630&fmt=png-alpha",
  },
  {
    svgId: 6,
    name: "Reebok Hot Ones Question Mid",
    setId: [],
    author: "Reebok",
    description:
      'Mix up a master blend of B-ball culture and culinary art. Bring the heat in these men\'s Reebok Question Mid Shoes dubbed "The Last Dab." Designed in collaboration with the viral show "Hot Ones," these Allen Iverson shoes add spice to your collection. The extra hit of spicy sauce added to hot wings at the end of the show inspires their design. The plush leather upper comes in a fiery neon red color to fit the theme. A spicy sauce graphic splashed on the midsole and heel adds a fierce look, and the custom tongue label takes it to the max with a Scoville heat scale. The sockliner brings it all home with a mosaic of wings, refreshments and sauce. No clean-up required.',
    dimensions: { x: 15, y: 2, width: 34, height: 20 },
    x: 15,
    y: 2,
    width: 34,
    height: 20,
    allowedCollaterals: [],
    minLevel: 5,
    ghstPrice: 160,
    maxQuantity: "10000",
    traitModifiers: [2, 0, 2, 0, 2, 0],
    canPurchaseWithGhst: true,
    slotPositions: "shoes",
    category: 0,
    canBeTransferred: true,
    totalQuantity: 0,
    experienceBonus: 10,
    kinshipBonus: 0,
    image:
      "https://images.footlocker.com/is/image/EBFL2/GV7093_a1?wid=630&hei=630&fmt=png-alpha",
  },
  {
    svgId: 7,
    name: "Nike AlphaDunk",
    setId: [],
    author: "Nike",
    description:
      "The Nike Men's AlphaDunk offers futuristic styling and serious bounce on the basketball courts. Based on the classic Hyperdunk line, it offers a spongy, 270-degree Zoom Air unit, snug Flyknit construction from the forefoot to the back, and a full-height external heel counter for support.",
    dimensions: { x: 15, y: 2, width: 34, height: 20 },
    x: 15,
    y: 2,
    width: 34,
    height: 20,
    allowedCollaterals: [],
    minLevel: 5,
    ghstPrice: 60,
    maxQuantity: "10000",
    traitModifiers: [1, 0, 1, 1, 0, 0],
    canPurchaseWithGhst: true,
    slotPositions: "shoes",
    category: 0,
    canBeTransferred: true,
    totalQuantity: 0,
    experienceBonus: 10,
    kinshipBonus: 5,
    image:
      "https://images.footlocker.com/is/image/EBFL2/Q5401600_a1?wid=630&hei=630&fmt=png-alpha",
  },
  {
    svgId: 8,
    name: "Protein Shake",
    setId: [],
    author: "DFS/NFT",
    description: "A blended shake of protein. +15 to Kinship",
    dimensions: { x: 27, y: 37, width: 10, height: 14 },
    x: 27,
    y: 37,
    width: 10,
    height: 14,
    allowedCollaterals: [],
    minLevel: 1,
    ghstPrice: 5,
    maxQuantity: "10000",
    traitModifiers: [0, 0, 0, 0, 0, 0],
    canPurchaseWithGhst: true,
    slotPositions: "",
    category: 2,
    canBeTransferred: true,
    totalQuantity: 0,
    experienceBonus: 0,
    kinshipBonus: 15,
    image: "https://images.albertsons-media.com/is/image/ABS/960025012",
  },
  {
    svgId: 9,
    name: "Protein Bar",
    setId: [],
    author: "DFS/NFT",
    description: "A bar of protein. +25 to XP",
    dimensions: { x: 3, y: 26, width: 10, height: 18 },
    x: 3,
    y: 26,
    width: 10,
    height: 18,
    allowedCollaterals: [],
    minLevel: 1,
    ghstPrice: 20,
    maxQuantity: "10000",
    traitModifiers: [0, 0, 0, 0, 0, 0],
    canPurchaseWithGhst: true,
    slotPositions: "",
    category: 2,
    canBeTransferred: true,
    totalQuantity: 0,
    experienceBonus: 25,
    kinshipBonus: 0,
    image:
      "https://target.scene7.com/is/image/Target/GUEST_c3fca206-ea70-4340-be9f-245611061e20?wid=488&hei=488&fmt=pjpeg",
  },
  {
    svgId: 10,
    name: "Michael's Secret Stuff",
    setId: [],
    author: "SpaceJam",
    description:
      "As seen in the movie SpaceJam. +1000 to XP and +1000 to Morale",
    dimensions: { x: 3, y: 26, width: 10, height: 18 },
    x: 3,
    y: 26,
    width: 10,
    height: 18,
    allowedCollaterals: [],
    minLevel: 1,
    ghstPrice: 20,
    maxQuantity: "10000",
    traitModifiers: [0, 0, 0, 0, 0, 0],
    canPurchaseWithGhst: true,
    slotPositions: "",
    category: 2,
    canBeTransferred: true,
    totalQuantity: 0,
    experienceBonus: 1000,
    kinshipBonus: 1000,
    image:
      "https://i5.walmartimages.com/asr/39b7e9f9-6ab7-419e-a759-67e31ad2e93d_1.0092b1209eca9a84aee5e18fce6bc78e.png?odnWidth=612&odnHeight=612&odnBg=ffffff",
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
