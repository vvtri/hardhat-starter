import {UUPSUpgradeable} from "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

abstract contract CustomUUPSUpgradeable is UUPSUpgradeable {
    receive() external payable {}
}
