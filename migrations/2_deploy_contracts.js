const MyERC721 = artifacts.require("./MyERC721.sol");

// module.exports = async function(deployer) {
//  await deployer.deploy(MyERC721, "TranscriptZ", "Hello", { from: accounts[0] })
//  const erc721 = await MyERC721.deployed()
// };

module.exports = function(deployer){
  deployer.deploy(MyERC721, "TranscriptZ", "Hello", { from: "0x59493983a59d6384511193205c244169d0c979a8" });
};
