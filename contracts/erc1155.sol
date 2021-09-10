// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RocketLamb is ERC1155, Ownable, IERC1155Receiver {

    string contractURI;
    IERC1155 currentToken;

    constructor() ERC1155(contractURI) {}

    function setContractURI(string memory _contractURI) public onlyOwner {
        contractURI = _contractURI;
    }

    function prepLambs(uint _amount) public onlyOwner {
        _mint(address(this), 0, _amount, "");
    }

    function showPreppedLambs() public view onlyOwner returns(uint) {
        uint lambsPrepped = balanceOf(address(this), 0);
        return lambsPrepped;
    }
}
    /* function setTokenData(address _contractAddress) public onlyOwner() {
        currentToken = IERC1155(_contractAddress);
    }

    function launchLambs(address[] memory dropAddresses) external onlyOwner() {
    // limit drops to 100
        require(dropAddresses.length < 101, "Not enough rocketships");
    
            for(uint256 i; i < dropAddresses.length; i++){
            address to = dropAddresses[i];
            currentToken.safeTransferFrom(address(this), to, tokenId, 1, "");
        }
    } */
