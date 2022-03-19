// SPDX-License-Identifier: MIT

// Contract by Montana Wong

pragma solidity ^0.8.7;

import './ERC721Enumerable.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/utils/cryptography/MerkleProof.sol';
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";


// TODO: ERC721A? to save our initial mint gas
contract WomenWithVases is ERC721Enumerable, Ownable {

    uint public MAX_SUPPLY = 100;
    string public baseURI;

    string private ADMIN_ADDRESS = "0x18866C05Ac6BbdC0e0cB8Fc5E2e9be400aF516c3";

    constructor(string _baseURI) ERC721("WomenWithVases", "WWV") {
        baseURI = _baseURI;
        for (uint256 i; i < MAX_SUPPLY; i++) {
            _safeMint(ADMIN_ADDRESS, supply + i);
        }
    }

    function setBaseURI(string calldata _baseURI) external onlyOwner {
        baseURI = _baseURI;
    }

    // Send balance of contract to owner
    function withdrawETH() public onlyOwner {
        uint256 balance = address(this).balance;
        payable(msg.sender).transfer(balance);
    }

    function withdrawErc20(IERC20 token) public onlyOwner {
        require(token.transfer(msg.sender, token.balanceOf(address(this))), "Transfer failed");
    }
}
