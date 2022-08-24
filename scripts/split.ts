// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";


const SPLITTER_ADDRESS = '0x06e8c853d643bf913a1cebab062317a385973eea'

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const EthSplitter = await ethers.getContractFactory("EthSplitter");

  const [signer] = await ethers.getSigners();
  const splitter = (await EthSplitter.connect(signer)).attach(SPLITTER_ADDRESS);

  const addrs = [
"0x85Df0EFEd48Bb24Cd54E339F67706b76132f651C",
"0xb8F80C130fA10491C0f06D7b4eE1d87093940640",
"0xEefc712293477de480c9D1b8a627B0fB468d0Ec6",
"0xeD03eB80F1e8D5cAcBE80b8d1D4dB599F32C41A2",
"0x34CD3652248C9B726aA4fa07f6c4600901ABAa2E",
"0xb27f27bfe5904e7a6dCc3015eCdd37A878784b6c",
"0x6Cf61c97674C65c68D1E816eCCf36061aCD9a65c",
"0xCf4ecfAaDA0D6332B8DEb584D15D5a559F67Dbe3",
"0xF631aa067D3649206f2ddd8fb02A2bc2beF50803",
"0x2cE9ced10675855488c06793a1597cE1666A4821",
"0x77e83607F6305Aed55D3F602D7791A06392F1159",
"0x07D91674A34523eb5F52bA3b30B13b1103880cFa",
"0xC3D5C6dEF05DBF7F389108939509EA2c2d52C17F",
"0x01DaA18f5164aA32b37EB4655d8Cbc8f2CDfD106",
"0xeE223B2C6E49AE6F235A2B928c355454152d6ecc",
"0x1F1A8eC07D62AcCfdfeD34b69aB4E0Da6a4804C6",
"0xe00f896b4B1BDa27bAf351638B4169BEbFd8716b",
"0x7aDCE3D80dD0C310b759E8e1757cAFb8E53EF6cC",
"0xF3f8d518347a3F46E8a3cDb4207fB92e177Be5e2"]

  const receipt = await splitter.split(addrs, {value: ethers.utils.parseEther("0.057")})

  console.log(`Split successful: ${JSON.stringify(receipt, null, 2)}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
