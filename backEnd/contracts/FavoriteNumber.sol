// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract FavoriteNumber {
    uint256 s_number;

    function setFavoriteNumber(uint256 _s_number) external {
        s_number=_s_number;
    }

    function getFavoriteNumber() external view returns(uint256){
        return s_number;
    }
   
}
