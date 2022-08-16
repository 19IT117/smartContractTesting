const { assert } = require("chai");

const EventContract = artifacts.require("eventContract");
const truffleAssert = require('truffle-assertions');
contract('Contract Name : eventContract' , async () => {
  var contractInstance;
  
  before(async () => {
    contractInstance = await  EventContract.deployed();
  });

  it('should deploy eventContract properly', async () => {
    assert(contractInstance.address != '' );
    console.log("Event Contract is deployed at : " , contractInstance.address);
  });
  it('should emit Event' , async () => {
    await contractInstance.callEvent("Erorr in Calling").then(async (result) => { 
      // truffleAssert.prettyPrintEmittedEvents(result);
      //console.log(result.logs);
      await truffleAssert.eventEmitted(result, 'functionCalled',async (ev) => {  
        console.log(ev.reason);
        console.log(ev.timestamp.toNumber());
        console.log(result.logs[0].event);
      });
    });
  });
});