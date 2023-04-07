// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

/**
 * This script hashes the state of an optimistic rollup's challenge-response state. It should be used with this
 * script: 
 * 
 https://www.evm.codes/playground?fork=merge&unit=Wei&codeType=Mnemonic&code='~~ADDz~SSTOREzSTOPz'~PUSH1%200x01zz%5Cn%01z~_
 * 
 * The game involves 2 players, a malicious state proposer and an honest challenger. The malicious state proposer
 * should change 1 opcode in the evm.codes assembly linked above, and then the two players will go back and forth in a logarithmic
 * algorithm to find the opcode that was changed. The malicious state proposer will lose if they can find the opcode that was changed.
 * This function below emulates the hashing of the state of the optimistic rollup. The state of the optimistic rollup is the stack,
 * memory, and storage of the EVM. The malicious state proposer will change the storage of the EVM, and the honest challenger will
 * point out which value of the stack was changed
 */
async function main() {
  // these values should be filled in with the appropriate values, given the state of the EVM
  const stack: Array<number> = [];
  const memory: Array<number> = [];
  const storage = {};

  const pseudoRoot = ethers.utils.keccak256(
    ethers.utils.defaultAbiCoder.encode(
      ["uint256[]", "uint256[]", "string"],
      [stack, memory, JSON.stringify(storage)]
    )
  );

  console.log(pseudoRoot);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
