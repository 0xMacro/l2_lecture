import { expect } from "chai";
import { ethers } from "hardhat";

describe("AEthSplitter", function () {
  it("Should return the new splitter once it's changed", async function () {
    const AEthSplitter = await ethers.getContractFactory("AEthSplitter");
    const splitter = await AEthSplitter.deploy();
    await splitter.deployed();
  });
});
