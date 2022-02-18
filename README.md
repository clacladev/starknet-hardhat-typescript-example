# Starknet Hardhat Example setup
Example setup.

## Install
First install Cairo on the machine. Follow [this guide](https://mirror.xyz/clacla.eth/obrY1Y89LjH4xrc4C0GR5OLudLpJq5dKClSsTJBOVFg) on macOS.

Install Docker devnet in case the venv version does not work:
```
docker pull shardlabs/starknet-devnet
```

Install the project dependencies:
```
yarn install
```


## Getting started
In a tab start the devnet via venv (currently broken)
```
# Via venv
starknet-devnet

# or via Docker
docker run -it -p 127.0.0.1:5000:5000 shardlabs/starknet-devnet
```


In another tab:
```
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
