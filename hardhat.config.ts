require('dotenv').config();
import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import '@openzeppelin/hardhat-upgrades';

const config: HardhatUserConfig = {
	solidity: {
		version: '0.8.24',
		settings: {
			optimizer: {
				enabled: true,
				runs: 2000,
			},
		},
	},
	networks: {
		hardhat: {},
		sepolia: {
			chainId: 11155111,
			url: 'https://rpc.sepolia.org',
			accounts: [process.env.SEPOLIA_OWNER_PRIVATE_KEY!],
		},
	},
	gasReporter: {
		// coinmarketcap: 'abc123...',
		enabled: true,
	},
};

export default config;
