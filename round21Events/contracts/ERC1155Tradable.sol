//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract OwnableDelegateProxy {}

contract OpenSeaProxyRegistry {
    mapping(address => OwnableDelegateProxy) public proxies;
}

contract ERC1155Tradable is Ownable, ERC1155 {
    using Strings for string;

    /*
     * OpenSea Proxy Registry addresses:
     * _________________________________
     * Rinkeby: 0xf57b2c51ded3a29e6891aba85459d600256cf317
     * Mainnet: 0xa5409ec958c83c3f309868babaca7c86dcb077c1
     */
    address public proxyRegistryAddress;
    string public name;
    string public symbol;

    constructor(
        string memory _name,
        string memory _symbol,
        address _proxyRegistryAddress,
        string memory _uri
    ) ERC1155(_uri) {
        name = _name;
        symbol = _symbol;
        proxyRegistryAddress = _proxyRegistryAddress;
    }

    function setProxyAddress(address _addr) public onlyOwner {
        proxyRegistryAddress = _addr;
    }

    function setURI(string memory _uri) public onlyOwner {
        _setURI(_uri);
    }

    function isApprovedForAll(address _owner, address operator)
        public
        view
        override
        returns (bool)
    {
        OpenSeaProxyRegistry proxyRegistry = OpenSeaProxyRegistry(
            proxyRegistryAddress
        );
        if (address(proxyRegistry.proxies(_owner)) == operator) return true;
        return super.isApprovedForAll(_owner, operator);
    }
}
