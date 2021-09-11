// SPDX-License-Identifier: MIT

/*HUGE thanks to xtremetom in the creation of the code
*https://xtremetom.medium.com/cool-cats-air-dropper-v2-f02c32b162c8
*/

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import '@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol';
import "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol";
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/utils/Context.sol';

contract airDropper is Ownable, ERC1155Holder {

    address tokenContractAddress;
    uint16 tokenId;
    IERC1155 currentToken;

    function receiveLambs(uint _amount) public {
        //currentToken.isApprovedForAll(address(this), msg.sender);
        //currentToken.setApprovalForAll(msg.sender, true);
        currentToken.safeTransferFrom(_msgSender(), address(this), 0, _amount, "");
    }
    
    function setTokenData(address _contractAddress, uint16 _tokenId) public onlyOwner() {
        tokenContractAddress = _contractAddress;
        tokenId = _tokenId;
        currentToken = IERC1155(tokenContractAddress);
    }
    
    function drop(address[] memory dropAddresses) external onlyOwner() {
    // limit drops to 100
    require(dropAddresses.length < 101, "Dropping to too many addresses");
    
        for(uint256 i; i < dropAddresses.length; i++){
        address to = dropAddresses[i];
        currentToken.safeTransferFrom(address(this), to, tokenId, 1, "");
        }
    }
} 