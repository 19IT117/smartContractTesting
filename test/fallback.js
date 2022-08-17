
const {Web3} = require('web3');
const { assert } = require("chai");

const Fallback = artifacts.require("Fallback");
const truffleAssert = require('truffle-assertions');

contract('Contract Name : Fallback' , async (accounts) => {
  var contractInstance;
  
  before(async () => {
    contractInstance = await    Fallback.deployed();
  });

  it('should deploy eventContract properly', async () => {
    assert(contractInstance.address != '' );
    console.log("Fallback Contract is deployed at : " , contractInstance.address);
  });

  it('experimenting with fallback ' , async () => {

     contractAddress = await contractInstance.address;
    /* var result ;
    // await web3.eth.sendTransaction({
    //   from :accounts[0],
    //   to : contractAddress,
      
     });*/

    const valueToUpdate = 1234;
    const signature = web3.utils.sha3('set(uint256)').slice(0,10);
    const msgData = signature + web3.utils.toHex(valueToUpdate).slice(2).padStart(64, '0');
    await web3.eth.sendTransaction({
        from :accounts[0],
        to : contractAddress,
       // value: 1000,     // If you want to send ether with the call.
        data: msgData
    },
    );
    const results = await contractInstance.getPastEvents();
    const event = await results[0].event;
    const message = await results[0].args[0];
    assert(event == 'Log' && message == 'fallback called');
  });
  
});