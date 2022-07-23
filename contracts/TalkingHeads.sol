// SPDX-License-Identifier: MIT

/***
 __ _  _  _  _  _  ____   __  ____  ____  ____  ____  _  _
(  / )/ )( \/ )( \(  _ \ /  \(_  _)(_  _)(  __)(  _ \( \/ )
 )  ( ) \/ () \/ ( ) __/(  O ) )(    )(   ) _)  )   / )  /
(__\_)\____/\____/(__)   \__/ (__)  (__) (____)(__\_)(__/
*/

// Contract by @Montana_Wong

pragma solidity ^0.8.7;

import "erc721a/contracts/extensions/ERC721ABurnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./ERC2981Collection.sol";

contract TalkingHeads is ERC721ABurnable, Ownable, ERC2981Collection {

    string public baseURI;

    constructor(string memory _baseTokenURI) ERC721A("Talking Heads", "TH") {
        setBaseURI(_baseTokenURI);
        _setRoyalties(0x18866c05ac6bbdc0e0cb8fc5e2e9be400af516c3, 7);
    }

    function fireKiln(uint256 numPieces) external onlyOwner {
        _mint(msg.sender, numPieces);
    }

    function setBaseURI(string memory _baseTokenURI) public onlyOwner {
        baseURI = _baseTokenURI;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseURI;
    }
}
