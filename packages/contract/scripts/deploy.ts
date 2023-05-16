import { ethers } from "hardhat";

async function main() {
  const BlockProtect = await ethers.getContractFactory("BlockProtect");
  const blockProtect = await BlockProtect.deploy();

  await blockProtect.deployed();

  console.log(`contract deployed to ${blockProtect.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
