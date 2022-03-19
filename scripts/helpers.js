const { NFT_CONTRACT_ADDRESS } = process.env;

async function getContract() {
    if (!NFT_CONTRACT_ADDRESS) {
        throw new Error('No contract address available');
    }
    const wwvContractFactory = await ethers.getContractFactory("WomenWithVases");
    return wwvContractFactory.attach(NFT_CONTRACT_ADDRESS);
}


module.exports = {
    getContract
};
