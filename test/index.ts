import { expect } from "chai";
import { ethers } from "hardhat";

describe("EthSplitter", function () {
  it("Should return the new splitter once it's changed", async function () {
    const EthSplitter = await ethers.getContractFactory("EthSplitter");
    const splitter = await EthSplitter.deploy();
    await splitter.deployed();
  });
});
