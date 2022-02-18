import { HardhatUserConfig } from "hardhat/types";
import "@shardlabs/starknet-hardhat-plugin";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const config: HardhatUserConfig = {
  starknet: {
    // dockerizedVersion: "0.7.1", // alternatively choose one of the two venv options below
    // venv: "path/to/my-venv", // uses (my-venv) defined by `python -m venv path/to/my-venv`
    venv: "active", // uses the currently active Python environment (hopefully with available Starknet commands!)
    network: "devnet",
    wallets: {
      OpenZeppelin: {
        accountName: "OpenZeppelin",
        modulePath: "starkware.starknet.wallets.open_zeppelin.OpenZeppelinAccount",
        accountPath: "~/.starknet_accounts"
      }
    }
  },
  networks: {
    devnet: {
      url: "http://localhost:5000/"
    }
  },
};

export default config;