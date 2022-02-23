# Starknet Hardhat TypeScript Example 
Example setup of a Starknet-Hardhat-TypeScript project. This is an empty project that you can take a fork. It's configured and works following the instructions. 


## Setup

Install system dependencies:
```
brew install python gmp
```

Setup the python venv:
```
# Create a local venv
python3 -m venv .venv

# Activate it
source .venv/bin/activate

# Install cairo-lang in the local venv
pip3 install cairo-lang
```

If you are on macOS and installing `cairo-lang` fails, use [this guide](https://mirror.xyz/clacla.eth/obrY1Y89LjH4xrc4C0GR5OLudLpJq5dKClSsTJBOVFg).


Install the node dependencies:
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


## Useful links
Repo is inspired from [Starknet Hardhat Example](https://github.com/Shard-Labs/starknet-hardhat-example).
Based on the [Starknet Hardhat plugin](https://github.com/Shard-Labs/starknet-hardhat-plugin).


## Author
Claudio, clacla.eth
