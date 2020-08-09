var web3 = new Web3 (new Web3.providers.HttpProvider("http://localhost:7545"));
 web3.eth.defaultAccount = web3.eth.accounts[0];
 //web3.eth.defaultAccount = '0x59493983A59D6384511193205c244169d0c979A8';
 //personal.unlockAccount(web3.eth.defaultAccount);
 //JSON.parse() is for "parsing" something that was received as JSON. JSON.stringify() is to create a JSON string out of an object/array. They are the inverse of each other. JSON.stringify() serializes a JS object into a JSON string, whereas JSON.parse() will deserialize a JSON string into a JS object
 var contractAbi = JSON.stringify([
    {
      "constant": true,
      "inputs": [
        {
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x01ffc9a7"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x06fdde03"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x081812fc"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x095ea7b3"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x18160ddd"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x23b872dd"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x2f745c59"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x42842e0e"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x4f6ccce7"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x6352211e"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x70a08231"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x95d89b41"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xa22cb465"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xb88d4fde"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xc87b56dd"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xe985e9c5"
    },
    {
      "inputs": [
        {
          "name": "_name",
          "type": "string"
        },
        {
          "name": "_symbol",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor",
      "signature": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event",
      "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event",
      "signature": "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event",
      "signature": "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "my_To",
          "type": "address"
        },
        {
          "name": "my_TokenId",
          "type": "uint256"
        }
      ],
      "name": "myMint",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x0334a4e4"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "S_id",
          "type": "uint256"
        }
      ],
      "name": "myMinter",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x09a8745a"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "my_TokenId",
          "type": "uint256"
        }
      ],
      "name": "myOwnerToken",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xd16ab386"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "my_Owner",
          "type": "address"
        }
      ],
      "name": "myBalanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x055dbc28"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "my_To",
          "type": "address"
        },
        {
          "name": "my_TokenId",
          "type": "uint256"
        }
      ],
      "name": "myApprove",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x7d09a63b"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "my_TokenId",
          "type": "uint256"
        }
      ],
      "name": "myGetApproved",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x4807a50d"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "my_To",
          "type": "address"
        },
        {
          "name": "my_Approved",
          "type": "bool"
        }
      ],
      "name": "mySetApprovalForAll",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x88064805"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "my_Owner",
          "type": "address"
        },
        {
          "name": "my_Operator",
          "type": "address"
        }
      ],
      "name": "myIsApprovedForAll",
      "outputs": [],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xd2c487fc"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "my_From",
          "type": "address"
        },
        {
          "name": "my_To",
          "type": "address"
        },
        {
          "name": "my_TokenId",
          "type": "uint256"
        }
      ],
      "name": "MyTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xb43134e1"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "my_From",
          "type": "address"
        },
        {
          "name": "my_To",
          "type": "address"
        },
        {
          "name": "my_TokenId",
          "type": "uint256"
        },
        {
          "name": "my_Data",
          "type": "bytes"
        }
      ],
      "name": "mySafeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xd002e870"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "my_From",
          "type": "address"
        },
        {
          "name": "my_To",
          "type": "address"
        },
        {
          "name": "my_TokenId",
          "type": "uint256"
        }
      ],
      "name": "mySafeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xde6252de"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "my_Owner",
          "type": "address"
        },
        {
          "name": "my_TokenId",
          "type": "uint256"
        }
      ],
      "name": "my_Burn",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x81f089e5"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "my_TokenId",
          "type": "uint256"
        }
      ],
      "name": "myTokenURI",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xa19081a7"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "my_TokenId",
          "type": "uint256"
        },
        {
          "name": "my_Uri",
          "type": "string"
        }
      ],
      "name": "my_SetTokenURI",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xbfcf8995"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "myGetChairPerson",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x03ee7aca"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "my_Address",
          "type": "address"
        }
      ],
      "name": "myIsActive",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x7ced5206"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "my_Address",
          "type": "address"
        }
      ],
      "name": "myGetBool",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x74788508"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "Id",
          "type": "uint256"
        }
      ],
      "name": "myGetStudentToken",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x7e7cdc56"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "my_Address",
          "type": "address"
        },
        {
          "name": "S_token",
          "type": "uint256"
        }
      ],
      "name": "myIsVerify",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x321024df"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "my_Address",
          "type": "address"
        }
      ],
      "name": "myGetVerify",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x0f1b46ae"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "my_Address",
          "type": "address"
        }
      ],
      "name": "myGetStudTokenFromAddr",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x1081f78f"
    }
  ]);

// quotes is important on either side of the address
var contractAddress = '0x46156d915CfBC8B4e7f04e4925124d5B94A2E9a3';

//var contract = web3.eth.contract(JSON.parse(contractAbi)).at(contractAddress);
// new way of setting up a contract
var contract = new web3.eth.Contract((JSON.parse(contractAbi)),contractAddress);
console.log(contract);

//----------- IPfs object
// const node = new Ipfs({ repo: 'ipfs-' + Math.random() })
// const node = new window.Ipfs();
// const IPFS = require('ipfs-api')
// const ipfs = new IPFS({host:'ipfs.infura.io', port:5001, protocol:'https'})
// export default ipfs




//<---------- Index page ---------->
//---------Solidity.png img click
$(document).ready(function(){
  $("#img_arrow").click(function () {
    window.location = "student.html";
  });
});



//<---------- Admin page ---------->
//--------submitAddress button click
$(document).ready(function() {
$("#submitAddress").click(function () {
  contract.methods.myGetChairPerson().call(function(error, result){
    if (!error) {
      var chair = document.getElementById('submit_Address').value;
      // %s is a place holder for the second argument. Any strings, integers, or arrays will be converted to a string and will replace the %s
      console.log('chair : %s', chair);
      console.log('From the contract : %s' , result);
      owner = result;
      //	sessionStorage maintains a separate storage area for each given origin that's available for the duration of the page session (as long as the browser is open, including page reloads and restores).
      sessionStorage.address = result;
      //console.log(web3.utils.isAddress(owner));
      if (result.localeCompare(chair, 'en', { sensitivity: 'base' }) === 0 ) {
        //The localeCompare() method returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order.
        console.log('Entered into if loop');
        console.log(owner);
        window.location = "admin_Internal.html";
      } else {
        alert("Please Enter the correct Admin Address");
      }
    }
  });
});
});



//<----------admin_Internal Page ---------->
//---------submit_wallet button click
$(document).ready(function(){
  $("#submit_wallet").click(function(){
    var selectedFile = document.getElementById('avatar').files[0];
    console.log(selectedFile);
    if(selectedFile){
      printFile(selectedFile,function(private){
        console.log(private);
        if (private){
          //clearWallet();
          web3.eth.accounts.wallet.clear();
          console.log("List after clearing:");
          console.log(web3.eth.accounts.wallet);

          //web3.eth.accounts.wallet.create(1);
          var create_Wallet_obj = addToWallet(private);
          // var address = sessionStorage.getItem("address");

          //Create an object to store account address to wallet Address
          // Sesionstorage cannot handle objects so you need to use Json.stringify while saving and Json.parse while retrieving
          var wallet = new Object({});
          sessionStorage.object = JSON.stringify(wallet);
          updateObject(create_Wallet_obj);

          //password for saving the wallet
          var password = prompt ("Please enter the password for your wallet");
          sessionStorage.password = password;

          //Saving the Wallet
          saveWallet();
          alert("Wallet Successfully Created");
        }else{
          alert("Process Failed");
        }
      });
    }else {
      alert("Select a file");
    }
  });
});

//--------submit_Invite_Address button click
$(document).ready(function() {
  $("#submit_Invite_Address").click(function () {

    var owner = sessionStorage.getItem("address");
    var address = document.getElementById('inviteAddress').value;
    console.log(owner);
    // web3.eth.getBalance(owner)
    //   .then(console.log);
    loadWallet();
    // You have to parse to object before using from session storage as session storage doesnt recognize string and we use JSON.stringify to store into it.
    console.log("Started");
    var fromaddress = JSON.parse(sessionStorage.getItem("object"))[owner];
    console.log(fromaddress);
    web3.eth.getBalance(fromaddress)
       .then(console.log);
    var tx = contract.methods.myIsActive(address).encodeABI();
    var transactionObject = {
      data: tx,
      from: fromaddress,
      to: contractAddress,
      gas: 100000
    };
    web3.eth.sendTransaction(transactionObject)
    .then(function(){
        saveWallet();
      alert("Successfully Invited");
    })
    .catch(function (error) {
      alert("Process Failed");
      console.log(error);
    });


    //var contract_address = "0x1a3e7c15759e0e57a245b074e5f9167caafad2f5";

// <----------- Working Sign Transaction -------------->

//     var privateKey = sessionStorage.getItem("owner_Private_Key");
//
//     web3.eth.getTransactionCount(owner, function (err, nonce) {
//     var data = contract.methods.inviteToBet(address).encodeABI();
//
//     var tx = new EthJS.Tx({
//       nonce: nonce,
//       gasPrice: web3.utils.toHex(web3.utils.toWei('20', 'gwei')),
//       gasLimit: 100000,
//       to: contractAddress,
//       value: 0,
//       data: data,
//     });
//     tx.sign(EthJS.Buffer.Buffer.from(privateKey, 'hex'));
//
//     var raw = '0x' + tx.serialize().toString('hex');
//     web3.eth.sendSignedTransaction(raw, function (err, transactionHash) {
//       if(!err){
//         console.log(transactionHash);
//         alert("Invited Successfully");
//       }
//     });
// });


// <---------- Wewb3js documentation sender balance zero error ---------->

  /*  let tx = contract.methods.inviteToBet(address);
    console.log(tx);
    let tx_convert = tx.encodeABI();
    console.log(tx_convert);
  //  let amountOfGas = "3000000";
    let contract_address = "0xd1b04247cc828538db5e2055caf519a563820718";
    // Creating a transaction object to pass as an argument to signTransaction
    let transactionObject = {
      gas: 3000000,
      data: tx_convert,
      from: owner,
      to: tx._parent._address
      //nonce: nonce
    };

    // private key of the owner - hardcoded for testing purposes
    let private_key = "4f0bf867f18a4cdfcd7c9980dab0e81aba2779e822530e5b57d7dad09b9df022";

    //Signing the transaction and sending the signed transaction
   web3.eth.accounts.signTransaction(transactionObject, private_key, function (error, signedTx) {
            if (!error) {
            console.log(signedTx);
            var rawTransaction = signedTx.rawTransaction;
            web3.eth.sendSignedTransaction(rawTransaction)
              .on('receipt', function (receipt) {
                  console.log(receipt);
            });

         }
         // else {
        //     web3.eth.sendSignedTransaction(signedTx.rawTransaction)
        //       .on('receipt', function (receipt) {
        //         console.log(receipt);
        //     });
        // }
    });
*/
    // <--------- sendTranaction code is working ------------->

    // contract.methods.inviteToBet(address).send({from:owner},function(error,result) {
    //  if(!error){
    //     alert("Successfully Invited");
    //     $("#inviteAddress").val("");
    //     console.log(result);
    //   }
    //   else{
    //     console.log(error);
    //     alert("Failed");
    //   }
    // });
  });
});

//---------home_Button button click
$(document).ready(function() {
  $("#home_Button").click(function () {
    HomePage();
  });
});

//--------- submit_Clear_All button click
$(document).ready(function () {
  $("#submit_Clear_All").click(function () {
    clearAll()
  })
})



// <--------- College page --------->
//---------submit_User_Address button click
$(document).ready(function(){
  $("#submit_User_Address").click(function(){
    var address = document.getElementById('submitUserAddress').value;
    sessionStorage.address = address;
    console.log("address: ", address);
    contract.methods.myGetBool(address).call()
    .then(function(bet){
      console.log(bet);
      if(bet === true){
        var object = JSON.parse(sessionStorage.getItem("object"));
        console.log(object);
        console.log("address is:", address);
        console.log(object[address]);
        if(object[address] != undefined){
          window.location = "college_Internal.html";
        }
        else{
          alert("Please create a  wallet");
          // userWallet();
          var x = document.getElementById("user_wallet");
          x.style.display = "block";
        }
      }
      else{
        alert("User not invited!!!");
      }
    })
    .catch(function(error){
      console.log(error.message);
    });
  });
});

//---------submit_User_Wallet button click
$(document).ready(function(){
  $("#submit_User_Wallet").click(function(){
    var selectedFile = document.getElementById('user_avatar').files[0];
    if (selectedFile) {
      printFile(selectedFile, function(private){
        if (private) {
          loadWallet();
          var create_Wallet_obj = addToWallet(private);
          updateObject(create_Wallet_obj);
          saveWallet();
          window.location = "college_Internal.html";
        }else{
          alert("Process Failed");
        }
      });
    }else {
      alert("Select a file");
    }
  });
});



//<---------- college_internal page ---------->
//--------- submit_transcript button
$(document).ready(function(){
  $("#submit_transcript").click(function(){
    var file    = document.querySelector('#transcript_img').files[0];
    const reader = new FileReader();
    reader.onloadend = function() {
      console.log("File contents as array: ", reader.result);
      //requires ipfs instance to be loaded each time the reader is loaded that is a file loaded
      const ipfs = new window.Ipfs();
      ipfs.on('ready', () => {
        //requires the script <script src="https://wzrd.in/standalone/buffer"></script> for the buffer to work
        const buf = buffer.Buffer(reader.result) // Convert data into buffer
        console.log('buffer:',buf);
        ipfs.files.add(buf,function (err, result) {
          if (err) {
            console.log(err);
            return;
          }
            console.log(result[0].hash);
            // hashimage = result[0].hash;
            let url = `https://ipfs.io/ipfs/${result[0].hash}`;
            console.log('url:',url);
            var image = document.getElementById("dummyimage");
            image.src = "./loading.gif"
            var downloadingImage = new Image();
            downloadingImage.onload = function(){
              // $("#dummyimage").attr("src",url)
              image.src = downloadingImage.src;
            }
            downloadingImage.src = url;
            sessionStorage.url = url;
            alert("Successfully created IPFS link");
        });
      });
    };
    //Reads the provided file
    reader.readAsArrayBuffer(file);
  });
});

//--------- college_submit button
$(document).ready(function(){
  $("#college_submit").click(function(){
    var first = document.getElementById('college_first').value;
    var last = document.getElementById('college_last').value;
    var id = document.getElementById('college_ID').value;
    console.log("ID:",id);
    var dob = document.getElementById('college_DOB').value;
    // var address = '0xa180235e8f7cce436a05d5510a34374bcfc04fc8';
    // var stud_address ='0x5f0ed6cd0789fefa39db265183e3dd655346a5b6';
    var owner = sessionStorage.getItem("address");
    //var address = document.getElementById('inviteAddress').value;
    console.log(owner);
    // web3.eth.getBalance(owner)
    //   .then(console.log);
    loadWallet();
    // You have to parse to object before using from session storage as session storage doesnt recognize string and we use JSON.stringify to store into it.
    console.log("Started Minting");
    var fromaddress = JSON.parse(sessionStorage.getItem("object"))[owner];
    console.log(fromaddress);
    web3.eth.getBalance(fromaddress)
       .then(console.log);
    var tx = contract.methods.myMinter(id).encodeABI();
    var transactionObject = {
      data: tx,
      from: fromaddress,
      to: contractAddress,
      gas: 250000
    };
    web3.eth.sendTransaction(transactionObject)
    .then(function(tx1){
        // saveWallet();
        console.log(tx1);
        console.log("Hash:",tx1.transactionHash);
        localStorage.trans = JSON.stringify(tx1.transactionHash);
        // setHash(tx1.transactionHash,fromaddress,address);
        alert("Successfully Minted");
        // var sampMeta = {name:"Wishnoo", id:"01752949"};
        var sampMeta = new Object({});
        sampMeta.first = first;
        sampMeta.last = last;
        sampMeta.id = id;
        sampMeta.dob = dob;
        sampMeta.transaction = tx1.transactionHash;
        sampMeta.url = sessionStorage.getItem("url");
        console.log(sampMeta);

        //Solidity fuctiion call to get the token Id after minting
        contract.methods.myGetStudentToken(id).call({from:owner})
        .then(function(tokenId){
          console.log(tokenId);
          // get meta data from token
          putMetaData(sampMeta,fromaddress,tokenId);
          // getTokenOwner(owner,tokenId,function (tOwner){
          //   console.log("token owner:",tOwner);
          // });
        })
        .catch(function(error){
          console.log(error);
        });
    })
    .catch(function (error) {
      alert("Process Failed");
      console.log(error);
    });
  });
});


//---------- studLayout function which sets the table in the college_Internal
function studLayout() {
  var retStudObj = JSON.parse(sessionStorage.getItem("studArrObj"));
  var address = sessionStorage.getItem('address');
  var i;
  for(i=0; i < retStudObj.length; i++){
    if(retStudObj[i] != null){
      if(retStudObj[i].schAddress == address){
        $('#clg_stud_tbl').append('<tr><td>'+retStudObj[i].id+'</td><td>'+retStudObj[i].first+'</td><td>'+retStudObj[i].last+'</td><td>'+retStudObj[i].dob+'</td><td><button id="verify" class="btn btn-dark" type="button" value = '+ retStudObj[i].id + '> Verify </button></td></tr>');
      }
    }
  }

  var buttons = document.querySelectorAll('#verify');

      for (var j = 0; j < buttons.length; j++) {
        buttons[j].onclick = bgChange;
      }
      function bgChange(){
        var fired_button = $(this).val();
        studVerify(fired_button);
      }
}

//---------- studVerify function to implement the verification process when verify button is clicked
function studVerify(val){
  console.log(val);
  var owner = sessionStorage.getItem("address");
  contract.methods.myGetStudentToken(val).call({from:owner})
  .then(function(tokenNo){
    console.log(tokenNo);
    var owner = sessionStorage.getItem("address");
    var retStudObj = JSON.parse(sessionStorage.getItem("studArrObj"));
    for(var i=0; i<retStudObj.length;i++){
      if(retStudObj[i] != null){
        if(retStudObj[i].id == val){
          console.log(retStudObj);
          var address = retStudObj[i].address;
          console.log("address of student:",address);
        }
      }
    }
    console.log("address of student:",address);
    // var address = document.getElementById('C_studentAddress').value;
    console.log(owner);
    // web3.eth.getBalance(owner)
    //   .then(console.log);
    loadWallet();
    // You have to parse to object before using from session storage as session storage doesnt recognize string and we use JSON.stringify to store into it.
    console.log("Started");
    var fromaddress = JSON.parse(sessionStorage.getItem("object"))[owner];
    console.log(fromaddress);
    web3.eth.getBalance(fromaddress)
       .then(console.log);
    var tx = contract.methods.myIsVerify(address,tokenNo).encodeABI();
    var transactionObject = {
      data: tx,
      from: fromaddress,
      to: contractAddress,
      gas: 100000
    };
    web3.eth.sendTransaction(transactionObject)
    .then(function(){
        // saveWallet();
      alert("Successfully Invited");

        //transfer the token to the student
        var tx = contract.methods.MyTransferFrom(owner,address,tokenNo).encodeABI();
        var transactionObject = {
          data: tx,
          from: fromaddress,
          to: contractAddress,
          gas: 205000
        };
        web3.eth.sendTransaction(transactionObject)
        .then(function(){
          saveWallet();
          alert("Successfully transferred");
          for(var i=0; i<retStudObj.length;i++){
            if(retStudObj[i] != null){
              if(retStudObj[i].id == val){
                delete retStudObj[i];
                console.log(retStudObj);
              }
              sessionStorage.studArrObj = JSON.stringify(retStudObj);
            }
          }
        })
    })
  })
  .catch(function(error){
    console.log(error);
  });
}



//<--------- Student page ---------->
//---------- submit_Login_Student
$(document).ready(function(){
  $("#submit_Login_Student").click(function(){
    var address = document.getElementById('submitLoginStudent').value;
    sessionStorage.address = address;
    console.log("address: " + address);
    contract.methods.myGetVerify(address).call()
    .then(function(bet){
      console.log(bet);
      if(bet === true){
          window.location = "student_Internal.html";
      }
      else{
        // alert("User not invited!!!");
        console.log("Ever register variable:",sessionStorage.getItem("everRegister"));
        if(sessionStorage.getItem("everRegister") == null){
          alert("User not registered!!!");

          var x = document.getElementById("studentBody");
          x.style.display = "none";
          var y = document.getElementById("studRegister");
          y.style.display = "block";
        }
        else{
          // var studFirst = document.getElementById('stud_first').value;
          var retStudObj = JSON.parse(sessionStorage.getItem("studArrObj"));
          var i;
          var temp = false;
          console.log("retStudObj:",retStudObj);
          console.log("address var:",address);
          for (i=0;i < retStudObj.length; i++) {
            if(retStudObj[i] != null){
              if (retStudObj[i].address == address){
                temp = true;
                alert("Please wait for the college to approve you!!!");
                document.getElementById('submitLoginStudent').value = "";
                return;
              }
            }
          }
          if(temp == false){
            alert("Please register!!!");
            var x = document.getElementById("studentBody");
            x.style.display = "none";
            var y = document.getElementById("studRegister");
            y.style.display = "block";
          }

        }
      }
    })
    .catch(function(error){
      console.log(error.message);
    });
  });
});

//---------stud_Register button
$(document).ready(function(){
  $("#stud_Register").click(function(){
    var studFirst = document.getElementById('stud_first').value;
    var studLast = document.getElementById('stud_last').value;
    var studID = document.getElementById('stud_ID').value;
    var studDOB = document.getElementById('stud_DOB').value;
    var address = document.getElementById('stud_Address').value;
    var schAddress = document.getElementById('school_Address').value;
    if(sessionStorage.getItem("everRegister") == null){
      sessionStorage.everRegister = true;
      console.log("Ever register variable:",sessionStorage.getItem("everRegister"));
      var studArrObj = [];
      sessionStorage.studArrObj = JSON.stringify(studArrObj);
      console.log(studArrObj);
      updateStudArrObj(studFirst,studLast,studID,studDOB,address,schAddress);
    }
    else{
      updateStudArrObj(studFirst,studLast,studID,studDOB,address,schAddress);
    }
    alert("Registration Completed");
    var x = document.getElementById("studentBody");
    x.style.display = "block";
    var y = document.getElementById("studRegister");
    y.style.display = "none";
    document.getElementById('submitLoginStudent').value = "";
    document.getElementById('stud_first').value = "";
    document.getElementById('stud_last').value = "";
    document.getElementById('stud_ID').value = "";
    document.getElementById('stud_DOB').value = "";
    document.getElementById('stud_Address').value = "";
    document.getElementById('school_Address').value = "";
  });
});


//<----------- Student Internal ---------->
//--------------function to get Ipfs image
$(document).ready(function(){
  $("#Student_hash").click(function () {
    var address = sessionStorage.getItem("address");
    contract.methods.myGetStudTokenFromAddr(address).call()
    .then(function(tokenNo){
      console.log(tokenNo);
      getMetaDatawith(tokenNo,function(meta){
        var m = JSON.parse(meta);
        console.log("Meta Object:",m);
        var image = document.getElementById("Stud_Int_Trans");
        console.log(m.url);
        image.src = "./loading.gif";
        var downloadingImage = new Image();
        downloadingImage.onload = function(){
          // $("#dummyimage").attr("src",url)
          image.src = downloadingImage.src
        }
        downloadingImage.src = m.url;
        image.style.display = "block";
        var btn = document.getElementById("Student_hash");
        btn.style.display = "none";
        $("#Student_Internal_Body").append('<br> Hash of Token Transfer: ' + m.transaction);
        $("#Student_Internal_Body").append('<br> Token ID:' + tokenNo);
      });
    })
  });
});




//<---------- Functions ---------->
//---------function to read file
function printFile(selectedFile,callback) {
  console.log("Inside print file");
  var reader = new FileReader();
  reader.onload = function(evt) {
    callback(evt.target.result);
    console.log("File contents: ", evt.target.result);

      // Reference to the address in the object ---------->
      //console.log(testobj[0].address);


      //var snippet = Object.keys(testobj)[0];
      //console.log(snippet.address);

      // console.log(obj.address);
      // var address = obj.address;
      // sessionStorage.owner_Wallet_Address = address;
      // sessionStorage.owner_Private_Key = private;
      // var password = prompt ("Please enter the password for your wallet");
      // web3.eth.accounts.wallet.save(password, address);
      // alert("Wallet created Successfully");
      // objadd = web3.eth.accounts.wallet.load(password, address);
      // console.log(objadd);
      // console.log(objadd.address);

  };
  reader.readAsText(selectedFile);
}

//----------function to create add account and save the wallet
function addToWallet(private){
  // web3.eth.accounts.wallet.create(1);
  var obj = web3.eth.accounts.wallet.add(private);
  console.log("Function createWallet - Wallet:  ");
  console.log(web3.eth.accounts.wallet);
  return obj;
}

//---------function to load the Wallet
function loadWallet(){
  //var password = prompt ("Please enter the password for your wallet");
  var password = sessionStorage.getItem("password");
  var obj = web3.eth.accounts.wallet.load(password);
  console.log("Load Wallet: ");
  console.log(obj);
}

//---------function to save the Wallet
function saveWallet(){
  //var password = prompt ("Please enter the password for your wallet");
  var password = sessionStorage.getItem("password");
  var obj = web3.eth.accounts.wallet.save(password);
  console.log("Save Wallet: ");
  console.log(obj);
}

//---------function to clear the entire Wallet
function clearWallet() {
  web3.eth.accounts.wallet.clear();
  console.log("clearWallet:");
  console.log(web3.eth.accounts.wallet);

}

//---------funtion to update the object Wallet
function updateObject(createobj) {
  var address = sessionStorage.getItem("address");
  var object = JSON.parse(sessionStorage.getItem("object"));
  object[address] = createobj.address;
  console.log("Updated Object:");
  console.log(object);
  sessionStorage.object = JSON.stringify(object);
}

//function to update the array of objects that stores the regiestered student details
function updateStudArrObj(studFirst,studLast,studID,studDOB,address,schAddress) {
  var retStudObj = JSON.parse(sessionStorage.getItem("studArrObj"));
  console.log("Before adding new object:",retStudObj);
  var obj = new Object({});
  obj.first = studFirst;
  obj.last = studLast;
  obj.id = studID;
  obj.dob = studDOB;
  obj.address = address;
  obj.schAddress = schAddress;
  retStudObj.push(obj);
  sessionStorage.studArrObj = JSON.stringify(retStudObj);
  console.log("After adding new object:",retStudObj);
}

// //function to create object for each student
// function stud(studFirst, studLast, studID,studDOB) {
//
// }
//---------function to Clear Wallet and Storage
function clearAll() {
  clearWallet();
  sessionStorage.clear();
  localStorage.clear();
  var studArrObj = [];
  sessionStorage.studArrObj = JSON.stringify(studArrObj);
}

//---------function to redirect to home Page
function HomePage(){
  window.location = "index.html";
}

//---------function to add the hash to the struct in the MyERC721.sol
function setHash(tx1,fromaddress,address){
  var tx = contract.methods.mySetHash(tx1,address).encodeABI();
  var transactionObject = {
    data: tx,
    from: fromaddress,
    to: contractAddress,
    gas: 250000
  };
  web3.eth.sendTransaction(transactionObject)
  .then(function(tx1){
      saveWallet();
      console.log(tx1);
      alert("Successfully stored Hash");
  })
  .catch(function (error) {
    alert("Process Failed");
    console.log(error);
  });
}

//---------function to insert Meta deta
function putMetaData(sampMeta,fromaddress,tokenId){
  var meta = JSON.stringify(sampMeta);
  console.log(meta);
  // var test = "hello";
  console.log(tokenId);
  var tx1 = contract.methods.my_SetTokenURI(tokenId,meta).encodeABI();
  var transactionObject = {
    data: tx1,
    from: fromaddress,
    to: contractAddress,
    gas: 250000
  };
  web3.eth.sendTransaction(transactionObject)
  .then(function(){
    getMetaData(tokenId);
    console.log("Inside promise of put Meta Data");
  })
  .catch(function(error){
    console.log(error);
  });
}

//---------function to retrieve the token meta data
function getMetaData(tokenId) {
  contract.methods.myTokenURI(tokenId).call()
  .then(function(meta){
    console.log(meta);
  });
}

//---------function to retrieve the token meta data with callback
function getMetaDatawith(tokenId,callback) {
  contract.methods.myTokenURI(tokenId).call()
  .then(function(meta){
    console.log(meta);
    callback(meta);
  });
}

//---------funciton to retrive the token owner
function getTokenOwner(sender,tokenId,callback){
  contract.methods.myOwnerToken(tokenId).call({from:sender})
  .then(function(owner){
    console.log(owner);
    callback(owner);
  });
}
