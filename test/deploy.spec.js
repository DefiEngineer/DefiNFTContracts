const { expect } = require("chai");
const create = require("../utils/create");

describe("Diamond Deployment Process", async () => {
  before(async () => {
    const deployed = await create(true);
    global.set = true;
    global.diamond = deployed.diamond;
  });
  it("Should have an address", async () => {
    expect(global.diamond.address).to.exist;
  });
});
