import { ethers, upgrades } from 'hardhat';
import { getImplementationAddress } from '@openzeppelin/upgrades-core';

async function main() {
	const Lock = await ethers.getContractFactory('Lock');
	const lock = await upgrades.deployProxy(Lock, [1817755703], {
		kind: 'uups',
		initializer: 'initialize',
	});
	await lock.waitForDeployment();

	const proxyAddress = await lock.getAddress();
	console.log(`proxy address: ${proxyAddress}`);
	console.log(
		`implementation address: ${await getImplementationAddress(
			ethers.provider,
			proxyAddress
		)}`
	);
}

main();
