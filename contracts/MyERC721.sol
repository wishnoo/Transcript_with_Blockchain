pragma solidity 0.4.24;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";

contract MyERC721 is ERC721Full {

  address chairperson;
  // address school;
  // bool active;
  mapping (address => bool) my_Can_Mint;
  mapping (address => bool) my_Student_Verify;

  struct Student {
        // string S_Hash;
        // uint S_ID;
        // // uint S_DOB;
        // string S_first;
        // string S_last;
        address S_Address;
        uint S_TokenId;
    }

  //mapping to track student is and token
  mapping (address => mapping (uint => Student)) my_Tracking;

  mapping(address => uint) my_Stud_Token;

  uint my_TokenNo = 1000;

// You require the object of the contract to call an external function of the inherited contract.
  ERC721Metadata meta;

  //Constructor that also gives input to the IERC72Metadata.sol Constructor
    constructor (string _name, string _symbol)  ERC721Full(_name, _symbol)
    public
    {
      chairperson = msg.sender;
    }

    //function to call the mint function in ERC721.sol
    function myMint (address my_To, uint256 my_TokenId) public{
      require(msg.sender == chairperson || my_Can_Mint[msg.sender]);
      super._mint(my_To, my_TokenId);
    }

    //function to mint and update my_Tracking mapping
    function myMinter (uint S_id) public{
      require(msg.sender == chairperson || my_Can_Mint[msg.sender]);
      my_TokenNo =my_TokenNo + 1;
      my_Tracking[msg.sender][S_id].S_TokenId = my_TokenNo;
      // my_Tracking[msg.sender][my_To].S_Hash = my_hash;
      // my_Tracking[msg.sender][my_To].S_ID = id;
      // // my_Tracking[msg.sender][my_To].S_DOB = dob;
      // my_Tracking[msg.sender][my_To].S_first = first;
      // my_Tracking[msg.sender][my_To].S_last = last;
      super._mint(msg.sender, my_TokenNo);
    }

    // Function to get the owner of the token
    function myOwnerToken(uint256 my_TokenId) public view returns (address) {
      // require(msg.sender == chairperson);
      address my_Owner = super.ownerOf(my_TokenId);
      return my_Owner;
    }

    //function to get the balance token of the specified address
    function myBalanceOf(address my_Owner) public view returns (uint256) {
      require(msg.sender == chairperson);
      return super.balanceOf(my_Owner);
    }

    //function to approve another address to transfer the given token ID
    function myApprove(address my_To, uint256 my_TokenId) public{
      address my_Owner_Token = myOwnerToken(my_TokenId);
      require(my_Owner_Token == msg.sender|| super.isApprovedForAll(my_Owner_Token, msg.sender));

      super.approve(my_To, my_TokenId);
    }

    //function to get the approved address of a particular token ID
    function myGetApproved(uint256 my_TokenId) public view returns (address) {
      require(msg.sender == chairperson);
      address my_Approved = super.getApproved(my_TokenId);
      return my_Approved;
    }

    // A function to Set or unset the approval of a given operator
    // An operator is allowed to transfer all tokens of the sender on their behalf
    function mySetApprovalForAll(address my_To, bool my_Approved) public {
      uint balance = myBalanceOf(msg.sender);
      require (balance > 0);
      require(my_To != msg.sender);
      super.setApprovalForAll(my_To, my_Approved);
    }

    //A function to tell whether an operator is approved by a given owner
    function myIsApprovedForAll(address my_Owner, address my_Operator) view public {
      require(msg.sender == chairperson);
      super.isApprovedForAll(my_Owner, my_Operator);
    }

    //Transfers the ownership of a given token ID to another address
    // Usage of this method is discouraged, use `safeTransferFrom` whenever possible
    // Requires the msg sender to be the owner, approved, or operator
    function MyTransferFrom(address my_From, address my_To, uint256 my_TokenId) public {
      address my_Owner_Token = myOwnerToken(my_TokenId);
      require(my_Owner_Token == msg.sender);
      require(super._isApprovedOrOwner(msg.sender, my_TokenId));

      super.transferFrom(my_From, my_To, my_TokenId);
    }

    // Safely transfers the ownership of a given token ID to another address
    // If the target address is a contract, it must implement `onERC721Received`,
    // which is called upon a safe transfer, and return the magic value
    // `bytes4(keccak256("onERC721Received(address,address,uint256,bytes)"))`; otherwise, the transfer is reverted.
    function mySafeTransferFrom(address my_From, address my_To, uint256 my_TokenId) public {
      address my_Owner_Token = myOwnerToken(my_TokenId);
      require(my_Owner_Token == msg.sender);

      super.safeTransferFrom(my_From, my_To, my_TokenId);
    }

    //Safely transfers the ownership of a given token ID to another address with option to send data
    function mySafeTransferFrom(address my_From, address my_To, uint256 my_TokenId, bytes my_Data) public {
      address my_Owner_Token = myOwnerToken(my_TokenId);
      require(my_Owner_Token == msg.sender);

      super.safeTransferFrom(my_From, my_To, my_TokenId, my_Data);
    }

    //function to burn a specific token
    //only can be done by the owner
    function my_Burn(address my_Owner, uint256 my_TokenId) public {
      require(msg.sender == chairperson);

      super._burn(my_Owner, my_TokenId);
    }

    //Returns an URI for a given token ID
    function myTokenURI(uint256 my_TokenId) public view returns (string) {
      return super.tokenURI(my_TokenId);
    }

    //Set the token URI for a given token
    function my_SetTokenURI(uint256 my_TokenId, string my_Uri) public  {
      super._setTokenURI(my_TokenId, my_Uri);
    }



    //<----------- Own Functions ------------->
    // Function to get chairperson
    function myGetChairPerson() public view returns (address) {
      return chairperson;
    }
    //--------- Function to give the school access to mint
    // also used for logging in beta version
    function myIsActive(address my_Address) public {
      require (msg.sender == chairperson);
      my_Can_Mint[my_Address] = true;
    }

    //--------- Get my_Can_Mint bool value
    function myGetBool(address my_Address) public view returns (bool){
      return my_Can_Mint[my_Address];
    }

    //function to return token no with respect to student id
    function myGetStudentToken(uint Id) public view returns (uint) {
      return my_Tracking[msg.sender][Id].S_TokenId;
    }

    //--------- Function to give the user login access
    function myIsVerify(address my_Address, uint S_token) public {
      my_Student_Verify[my_Address] = true;
      my_Stud_Token[my_Address] = S_token;
    }

    //--------- Get my_Can_Mint bool value
    function myGetVerify(address my_Address) public view returns (bool){
      return my_Student_Verify[my_Address];
    }

    //--------- function to get Token from Student address
    function myGetStudTokenFromAddr(address my_Address) public view returns(uint){
      return my_Stud_Token[my_Address];
    }

    //--------- Get student details
    // function myGetStudentDetails(address my_Col_Address, address my_Stud_Address) public view returns (string,uint,string,string,uint){
    //   return (my_Tracking[my_Col_Address][my_Stud_Address].S_Hash,my_Tracking[my_Col_Address][my_Stud_Address].S_ID,my_Tracking[my_Col_Address][my_Stud_Address].S_first,my_Tracking[my_Col_Address][my_Stud_Address].S_last,my_Tracking[my_Col_Address][my_Stud_Address].S_TokenId);
    // }

    // //--------- set student details -Hash
    // function mySetHash(string tx1,address my_Stud_Address) public {
    //   my_Tracking[msg.sender][my_Stud_Address].S_Hash = tx1;
    // }

}
