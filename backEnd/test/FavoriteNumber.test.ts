import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { assert} from "chai";
import { ethers } from "hardhat";


describe("FavoriteNubmer",function(){
  async function deployFavoriteNumberFixture() {
    const FavoriteNumber = await ethers.getContractFactory("FavoriteNumber")
    const favoriteNumber = await FavoriteNumber.deploy();

    
  
    return{favoriteNumber};
  }
  describe("getFavoriteNumber", function () {
    it("get Favorite Number", async ()=>{
      const {favoriteNumber} = await loadFixture(deployFavoriteNumberFixture);
      let number = await favoriteNumber.getFavoriteNumber()
      assert.equal(number.toString(),"0")
    })
  })
    

  describe("setFavoriteNumber", function () {
    it("set Favorite Number", async ()=>{
      const {favoriteNumber} = await loadFixture(deployFavoriteNumberFixture);
      let transaction = await favoriteNumber.setFavoriteNumber(7)
      await transaction.wait(1)
      let number = await favoriteNumber.getFavoriteNumber()
      assert.equal(number.toString(),"7")
    })
    



  })
     
});
