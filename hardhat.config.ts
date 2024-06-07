require('dotenv').config();
import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import '@openzeppelin/hardhat-upgrades';

const config: HardhatUserConfig = {
	solidity: '0.8.24',
	networks: {
		hardhat: {},
		sepolia: {
			chainId: 11155111,
			url: 'https://rpc.sepolia.org',
			accounts: [process.env.SEPOLIA_OWNER_PRIVATE_KEY!],
		},
	},
};

export default config;
