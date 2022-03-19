const { getContract } = require('../scripts/helpers');
const { task  } = require("hardhat/config");


task(
    "set-base-uri",
    "Sets the base uri string")
    .addParam("uri", "The URI to set")
    .setAction(async (taskArgs, hre) => {
        const { uri: uriArg } = taskArgs;

        const instance = await getContract();

        console.debug(`Setting uri to: ${uriArg}`);

        const txReceipt = await instance.setBaseURI(uriArg, {
            gasLimit: 50000
        });
        console.debug('Tx broadcasted. Tx Hash: ', txReceipt.hash);
        const resp = await txReceipt.wait();
        console.debug('Set base uri status response: ', resp);
        console.debug(`Base URI set to: ${uriArg}`);
    });

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



module.exports = {};
