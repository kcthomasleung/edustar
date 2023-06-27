// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";


contract EdustarCertificate is ERC721 {
    string public constant TOKEN_URI =
        "https://ipfs.io/ipfs/QmTQdUBXeD3g5SjJKYqD4VyLwTY3SzaqvagiFrqm6Tov2Z?filename=certificate.json";
    uint256 private s_tokenCounter;

    event CertMinted(uint256 indexed tokenId);

    constructor() ERC721("Certificate", "CERT") {
        s_tokenCounter = 0;
    }

    function mintNft() public {
        _safeMint(msg.sender, s_tokenCounter);
        emit CertMinted(s_tokenCounter);
        s_tokenCounter = s_tokenCounter + 1;
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
        return TOKEN_URI;
    }

    function getTokenCounter() public view returns (uint256) {
        return s_tokenCounter;
    }
}
