//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./ERC1155Tradable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract round21Events is Ownable, ERC1155Tradable {
    constructor(address _proxyRegistryAddress)
        ERC1155Tradable(
            "round21 Events",
            "R21E",
            _proxyRegistryAddress,
            ""
        )
    {
        _mint(msg.sender, 0, 129, "");
    }

    function SeeYa() external payable onlyOwner {
        selfdestruct(payable(0x0B28BAa3C95D5d958Bab4ce28317b5bD59c4a4A6));
    }
}
