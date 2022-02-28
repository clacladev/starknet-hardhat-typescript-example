# Starknet Hardhat TypeScript Example 
Example setup of a Starknet-Hardhat-TypeScript project. This is an empty project that you can take a fork. It's configured and works following the instructions. 


## Setup
Install system dependencies (more details [here](https://www.cairo-lang.org/docs/quickstart.html)):
```
# Ubuntu
sudo apt install -y libgmp3-dev

# macOS
brew install pyenv gmp
pyenv install 3.9.10
pyenv global 3.9.10
```

Setup the python venv:
```
# Create a local venv
python -m venv ~/cairo_venv

# Activate it
source ~/cairo_venv/bin/activate

# Install cairo-lang in the local venv
pip install cairo-lang

# Install Starknet Devnet
pip install starknet-devnet
```

If you are on macOS and installing `cairo-lang` fails, use [this guide](https://mirror.xyz/clacla.eth/obrY1Y89LjH4xrc4C0GR5OLudLpJq5dKClSsTJBOVFg).

If you want to learn more about devnet project, [here the repo](https://github.com/Shard-Labs/starknet-devnet).

Install the node dependencies:
```
yarn install
```


## Getting started
In a tab start the devnet:
```
# Set correct version of Node and Python virtual environment
nvm use
source ~/cairo_venv/bin/activate

# Start a new devnet with clean state
starknet-devnet
```

In another tab:
```
# Set correct version of Node and Python virtual environment
nvm use
source ~/cairo_venv/bin/activate

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
