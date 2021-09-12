// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RocketLamb is ERC1155, Ownable{

    string contractURI;
    IERC1155 currentToken;
    uint currentSupply;
    
    constructor() ERC1155(contractURI) {}

    function setContractURI(string memory _contractURI) public onlyOwner {
        contractURI = _contractURI;
    }

    function prepLambs(uint _amount) public onlyOwner {
        require(currentSupply + _amount < 8501, "Too many lambs");
        _mint(msg.sender, 0, _amount, "");
        currentSupply = currentSupply + _amount;
    }

    function showPreppedLambs(address _address) public view onlyOwner returns(uint) {
        uint lambsPrepped = balanceOf(address(_address), 0);
        return lambsPrepped;
    }
}