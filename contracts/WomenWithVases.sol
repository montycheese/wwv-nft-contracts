// SPDX-License-Identifier: MIT

// Contract by Montana Wong

pragma solidity ^0.8.7;

import '@openzeppelin/contracts/access/Ownable.sol';
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "erc721a/contracts/ERC721A.sol";


contract WomenWithVases is ERC721A, Ownable {

    uint256 public MAX_SUPPLY = 100;
    string public baseURI;

    address private ADMIN_ADDRESS = 0x18866C05Ac6BbdC0e0cB8Fc5E2e9be400aF516c3;

    constructor(string memory _baseTokenURI) ERC721A("WomenWithVases", "WWV") {
        setBaseURI(_baseTokenURI);
        _safeMint(ADMIN_ADDRESS, MAX_SUPPLY);
    }

    function setBaseURI(string memory _baseTokenURI) public onlyOwner {
        baseURI = _baseTokenURI;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseURI;
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
