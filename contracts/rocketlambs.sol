// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RocketLamb is ERC721, Ownable {

    constructor() ERC721("Rocket Lamb", "RLAMB") {}

    function setTokenURI(string memory baseUri) public onlyOwner() {
        _baseURI(baseUri);
        tokenURI();
    }
}
