const { BASE_URI } = process.env;

async function main() {
    // Grab the contract factory
    const wwvContractFactory = await ethers.getContractFactory("WomenWithVases");

    // Start deployment, returning a promise that resolves to a contract object
    const wwvInstance = await wwvContractFactory.deploy(BASE_URI); // Instance of the contract
    console.log("Contract deployed to address:", wwvInstance.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
