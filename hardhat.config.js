/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

require('./tasks/nft');
require("@nomiclabs/hardhat-etherscan");


const { API_URL_PROD, API_URL_BETA, PRIVATE_KEY_PROD, PRIVATE_KEY_BETA} = process.env;
module.exports = {
  solidity: "0.8.7",
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {},
    mainnet: {
      url: API_URL_PROD,
      accounts: [`0x${PRIVATE_KEY_PROD}`]
    },
    rinkeby: {
      url: API_URL_BETA,
      accounts: [`0x${PRIVATE_KEY_BETA}`]
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "QZKR1WM9Y3R113VFKDSV1EE7GIXT51N8Z9"
  }
};
