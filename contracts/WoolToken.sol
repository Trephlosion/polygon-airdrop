//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract WoolToken is ERC20 {
    constructor() ERC20('Wool Token', 'WOOL') {
        _mint(msg.sender, 1000000000000 * 10 ** 18);
    }

    function burn(uint amount) external {
        _burn(msg.sender, amount);
    }
}