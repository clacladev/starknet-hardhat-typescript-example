# Starknet Hardhat Example setup
Example setup.

## Install
First install Cairo on the machine. Follow [this guide](https://mirror.xyz/clacla.eth/obrY1Y89LjH4xrc4C0GR5OLudLpJq5dKClSsTJBOVFg) on macOS.

Install the project dependencies:
```
yarn install
```


## Getting started
In a tab start the devnet:
```
nvm use
starknet-devnet
```


In another tab:
```
nvm use

# Compile
yarn hardhat starknet-compile

# Test
yarn hardhat test

# Deploy
yarn hardhat starknet-deploy --starknet-network devnet --inputs "123"

# Deploy an account
yarn hardhat starknet-deploy-account --starknet-network devnet --wallet OpenZeppelin
```

For more [documentation](https://github.com/Shard-Labs/starknet-hardhat-plugin).


## Links
Repo is inspired from [Starknet Hardhat Example](https://github.com/Shard-Labs/starknet-hardhat-example).
Based on the [Starknet Hardhat plugin](https://github.com/Shard-Labs/starknet-hardhat-plugin).
