// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.11;
import "./Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract FavoriteNumber is Ownable {
    uint256 s_number;
    uint s_price=0.01 ether;
    uint s_balance=5;

    receive() external payable{
        s_balance=s_balance+msg.value;
    }
    fallback() external payable{

    }

    function setFavoriteNumber(uint256 _s_number) external payable {
        require(msg.value >= s_price);
        s_number=_s_number;
        s_balance=s_balance+msg.value;
       
    }

    function getFavoriteNumber() external view returns(uint256){
        return s_number;
    }
    function getPrice() external view onlyOwner returns(uint){
        return s_price;
    }
    function getBalance() external view  returns(uint){
        return s_balance;
    } 
    function getOwner() external view returns(address){
        return owner();
    }
}
