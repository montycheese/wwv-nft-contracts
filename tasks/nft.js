const { getContract } = require('../scripts/helpers');
const { task  } = require("hardhat/config");
const fs = require('fs');

task(
    "withdraw",
    "Withdraw ETH funds from contract to owner address")
    .setAction(async (_, hre) => {
        const instance = await getContract();

        console.debug(`Withdrawing funds from contract to owner address`);

        const txReceipt = await instance.withdraw({
            gasLimit: 50000
        });
        console.debug('Tx broadcasted. Tx Hash: ', txReceipt.hash);
        const resp = await txReceipt.wait();
        console.debug('Withdraw response: ', resp);
    });

task(
    "generate-dummy-metadata",
    "Generate dummy metadata for testnet")
    .setAction(async () => {
        const totalSupply = 100;
        for (let i = 0; i < totalSupply; i++) {
            const metadata = {
                description: "Test description",
                image: "https://gateway.pinata.cloud/ipfs/QmWHUnAg8omMvfDj5RLuPFRS7ypBrukAsuQxHNNcBNfTbP",
                name: `Women with Vases #${i}`,
                attributes: {
                    char: "abcdefghijklmnopqrstuvwxyz".charAt(Math.floor(Math.random() * "abcdefghijklmnopqrstuvwxyz".length))
                }
            };

            fs.writeFileSync(`./metadata/${i}`, JSON.stringify(metadata));
            console.log('done');
        }
    });

task(
    "set-base-uri",
    "Sets the base uri")
    .addParam("uri", "The uri to set")
    .setAction(async (taskArgs, hre) => {
        const { uri } = taskArgs;

        const instance = await getContract();

        console.debug(`Setting uri to: ${uri}`);

        const txReceipt = await instance.setBaseURI(uri, {
            gasLimit: 50000
        });
        console.debug('Tx broadcasted. Tx Hash: ', txReceipt.hash);
        const resp = await txReceipt.wait();
        console.debug('Set baseuri response: ', resp);
        console.debug(`uri set to: ${uri}`);
    });


module.exports = {};
