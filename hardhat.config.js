require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
const dotenv = require("dotenv")
dotenv.config()

module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  networks: {
    lineaTestnet: {
      url:'https://rpc.goerli.linea.build',
      accounts:[process.env.privkey]
    },
    lineaMainnet: {
      url: 'https://rpc.linea.build',
      accounts:[process.env.privkey]
    }
  }
};

