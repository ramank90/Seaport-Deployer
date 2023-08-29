async function main() {

    const [deployer] = await ethers.getSigners();

    console.log(
    "Deploying contracts with the account:",
    deployer.address
    );

    const conduitController = await ethers.getContractFactory("ConduitController");
    const conduitContract = await conduitController.deploy();

    console.log("Conduit Contract deployed at:", conduitContract.address);
    
    
    const seaport = await ethers.getContractFactory("Seaport");
    const seaportContract = await seaport.deploy(conduitContract.address);

    console.log("Seaport Contract deployed at:", seaportContract.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

