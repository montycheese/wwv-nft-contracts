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

Mint for team
```shell script
npx hardhat mint-for-team
```

Set public sale status
```shell script
npx hardhat set-public-sale-status --status <true/false>
```
