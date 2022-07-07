const { BASE_URI } = process.env;

async function main() {
    // Grab the contract factory
    const factory = await ethers.getContractFactory("KuullectorEditions");

    // Start deployment, returning a promise that resolves to a contract object
    const instance = await factory.deploy({
        gasPrice: 20000000000,
        gasLimit: 6000000
    }); // Instance of the contract
    console.log("Contract deployed to address:", instance.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
