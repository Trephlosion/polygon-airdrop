//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./ERC1155Tradable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract testERC1155 is Ownable, ERC1155Tradable {
    constructor(address _proxyRegistryAddress)
        ERC1155Tradable(
            "TestERC1155",
            "tERC",
            _proxyRegistryAddress,
            "https://www.lambduhs.com/api/1"
        )
    {
        _mint(msg.sender, 0, 10, "");
    }

    function SeeYa() external payable onlyOwner {
        selfdestruct(payable(0x0B28BAa3C95D5d958Bab4ce28317b5bD59c4a4A6));
    }
}
