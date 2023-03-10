import { ethers } from "hardhat";

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const lockedAmount = ethers.utils.parseEther("0.001");

  const FavoriteNumber = await ethers.getContractFactory("FavoriteNumber");

  const favoriteNumber = await FavoriteNumber.deploy();
  await favoriteNumber.deployed();

  console.log(
    `FavoriteNumber deployed to ${favoriteNumber.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
