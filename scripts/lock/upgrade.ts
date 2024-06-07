import { ethers, upgrades } from 'hardhat';
import { getImplementationAddress } from '@openzeppelin/upgrades-core';

async function main() {
	const proxyAddress = process.env.SEPOLIA_PROXY_ADDERSS_LOCK!;

	const LockUpgraded = await ethers.getContractFactory(
		process.env.CONTRACT_NAME_TO_UPGRADE!
	);
	const proxy = await upgrades.upgradeProxy(proxyAddress, LockUpgraded, {
		kind: 'uups',
		redeployImplementation: 'onchange',
	});
	await proxy.waitForDeployment();

	console.log(`proxy address: ${proxyAddress}`);

	console.log(
		`implementation address: ${await getImplementationAddress(
			ethers.provider,
			proxyAddress
		)}`
	);
}

main();
