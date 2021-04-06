const { expect } = require("chai");
const createDiamond = require("../utils/create");

describe("Diamond Deployment Process", async () => {
  before(async () => {
    const deployed = await createDiamond();
    global.set = true;
    global.diamond = deployed.diamond;
    global.bridgeFacet = deployed.BridgeFacet;
    global.basketballFacet = deployed.BasketballFacet;
    global.basketballGameFacet = deployed.BasketballGameFacet;
    global.itemsFacet = deployed.ItemsFacet;
    global.itemsTransferFacet = deployed.ItemsTransferFacet;
    global.collateralFacet = deployed.CollateralFacet;
    global.shopFacet = deployed.ShopFacet;
    global.daoFacet = deployed.DAOFacet;
    global.vrfFacet = deployed.VrfFacet;
    global.svgFacet = deployed.SvgFacet;
    global.linkAddress = deployed.linkAddress;
    global.linkContract = deployed.linkContract;
    global.metaTransactionsFacet = deployed.MetaTransactionsFacet;
    global.erc1155MarketplaceFacet = deployed.ERC1155MarketplaceFacet;
    global.erc721MarketplaceFacet = deployed.ERC721MarketplaceFacet;
  });
  it("Should have an address", async () => {
    expect(global.diamond.address).to.exist;
  });

  it("Should have diamond address for all facets", async () => {
    expect(global.bridgeFacet.address).to.equal(global.diamond.address);
    expect(global.basketballFacet.address).to.equal(global.diamond.address);
    expect(global.basketballGameFacet.address).to.equal(global.diamond.address);
    expect(global.itemsFacet.address).to.equal(global.diamond.address);
    expect(global.itemsTransferFacet.address).to.equal(global.diamond.address);
    expect(global.collateralFacet.address).to.equal(global.diamond.address);
    expect(global.shopFacet.address).to.equal(global.diamond.address);
    expect(global.daoFacet.address).to.equal(global.diamond.address);
    expect(global.vrfFacet.address).to.equal(global.diamond.address);
    expect(global.svgFacet.address).to.equal(global.diamond.address);
    expect(global.erc1155MarketplaceFacet.address).to.equal(
      global.diamond.address
    );
    expect(global.erc721MarketplaceFacet.address).to.equal(
      global.diamond.address
    );
    expect(global.metaTransactionsFacet.address).to.equal(
      global.diamond.address
    );
  });
});
