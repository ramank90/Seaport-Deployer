const { ethers, artifacts } = require('hardhat');
const { utils, Wallet }  = require("zksync-web3");
const { Deployer }  = require("@matterlabs/hardhat-zksync-deploy");
import { HardhatRuntimeEnvironment } from "hardhat/types";
require("dotenv").config();

export default async function (hre: HardhatRuntimeEnvironment) {
  const wallet = new Wallet("");
  
  const deployer = new Deployer(hre, wallet);

  const conduit = await deployer.loadArtifact("ConduitController");
  const seaport = await deployer.loadArtifact("Seaport");

  const conduit_contract = await deployer.deploy(conduit);
  console.log('conduit controller',conduit_contract.address)

  const seaport_contract = await deployer.deploy(seaport,[conduit_contract.address]);
  console.log('seaport contract', seaport_contract.address)
  
}