import dotenv from "dotenv";
dotenv.config();
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-gas-reporter";

if (!process.env.PRIVATE_KEY) {
  throw new Error("Private key required");
}

if (!process.env.INFURA_KEY) {
  throw new Error("INFURA_KEY required");
}

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  gasReporter: {
    currency: "USD",
    gasPrice: 64,
  },
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_KEY}`,
      accounts: [process.env.PRIVATE_KEY],
    },
    mainnet: {
      url: "https://mainnet.infura.io/v3/08215b982417464da306f103cc93cf50",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};

export default config;
