import { ethers } from "hardhat";

async function main() {
  const BlockProtect = await ethers.getContractFactory("BlockProtect");
  const blockProtect = await BlockProtect.deploy();

  await blockProtect.deployed();

  console.log(`contract deployed to ${blockProtect.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
