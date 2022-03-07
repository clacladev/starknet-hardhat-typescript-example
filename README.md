# Starknet Hardhat TypeScript Example 
Example setup of a Starknet-Hardhat-TypeScript project. This is an empty project that you can take a fork. It's configured and works following the instructions. 


## Setup
Install python's virtual environment to make sure this project uses specific versions of pythons and its dependencies:
```
# macOS
brew install pyenv

# Install specific version of python and set it as local default
pyenv install 3.9.10
pyenv local 3.9.10

# Create a local venv
python -m venv .venv

# Activate it (execute this command for every terminal for the project)
source .venv/bin/activate
```


Install system dependencies (more details [here](https://www.cairo-lang.org/docs/quickstart.html)):
```
# Ubuntu
sudo apt install -y libgmp3-dev

# macOS
brew install gmp

# On M1 based macOS
CFLAGS=-I`brew --prefix gmp`/include LDFLAGS=-L`brew --prefix gmp`/lib pip3 install ecdsa fastecdsa sympy
```

Setup the python venv:
```
# Install Cairo
pip install cairo-lang

# Install Starknet Devnet
pip install starknet-devnet
```

If you are on macOS and installing `cairo-lang` fails, use [this guide](https://mirror.xyz/clacla.eth/obrY1Y89LjH4xrc4C0GR5OLudLpJq5dKClSsTJBOVFg).

If you want to learn more about devnet project, [here the repo](https://github.com/Shard-Labs/starknet-devnet).


Install the Node.js dependencies:
```
yarn install
```


## Getting started
In a tab start the devnet:
```
# Set correct version of Node and Python virtual environment
nvm use
source .venv/bin/activate

# Start a new devnet with clean state
starknet-devnet
```

In another tab:
```
# Set correct version of Node and Python virtual environment
nvm use
source .venv/bin/activate

# Compile
yarn hardhat starknet-compile

# Test
yarn hardhat test

# Deploy
yarn hardhat starknet-deploy --starknet-network devnet --inputs "123"

# Deploy an account
yarn hardhat starknet-deploy-account --starknet-network devnet --wallet OpenZeppelin

# Read the deployed account details
code ~/.starknet_accounts/starknet_open_zeppelin_accounts.json
```

For more [documentation](https://github.com/Shard-Labs/starknet-hardhat-plugin).


## Verify your contract on Voyager (only on Alpha Goerli and Alpha Mainnet, no devnet)
After deploying your contract on alpha, open it on Voyager and wait 10 minutes or so, for it to be indexed. You will be able to see the Read and Write interface when it is.
```
Alpha Goerli (testnet)
https://goerli.voyager.online/contract/0x123

Alpha Mainnet
https://voyager.online/contract/0x123
```

When it has been indexed, then you can finally verify it:
```
yarn hardhat starknet-verify \
  --starknet-network alpha \
  --address 0x0123 \
  --path ./contracts/contract.cairo
```

*Note: right now the verifier is quite limited to very simple contracts with dependencies in the same directory. So it's not really production ready*


## Disable ESLint
In case you don't want ESLint helping you to format and pretty your TS code, just delete `.eslintrc.js` in root folder. then remove all the dependencies in `package.json` that mentions `eslint` and `yarn install` again.


## Useful links
Repo is inspired from [Starknet Hardhat Example](https://github.com/Shard-Labs/starknet-hardhat-example).
Based on the [Starknet Hardhat plugin](https://github.com/Shard-Labs/starknet-hardhat-plugin).


## Author
Claudio, clacla.eth
