# WWV NFT Contracts

This repository contains the core smart contracts for the WWV NFT drop.

### Commands


To see available tasks to run:
`npx hardhat`

Deploy contract
```shell script
npx hardhat run scripts/deploy.js
```

Note: Make sure deployed contract address is added to .env file for remainder of commands

dev base uri 

`https://gateway.pinata.cloud/ipfs/QmXVMz9kUagD9eju9XnpSuBDXPoQPXoLA3MNaaUZcVRhG4/`

montanawong@Ms-MacBook-Pro unrevealed-clay % npx hardhat verify --network rinkeby --contract contracts/Chalices.sol:Chalices 0x10a9B340Ca519D0e757eD972D8C25fB48a94194B ""
