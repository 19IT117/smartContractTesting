const { assert } = require("chai");

const EnumContract = artifacts.require("enumContract");

contract('Contract Name EnumContract' , async() => {
  var contractInstance;
  before(async () => { 
    contractInstance = await EnumContract.deployed();
   });
   it('deploy smart contract properly', async () => {
    assert(contractInstance.address != '');
    console.log("EnumContract is deployed at address is : ", contractInstance.address);
  });
  it('check the values of enum' , async () => {
    const result = await contractInstance.RSVP.call();
    //console.log(result.toNumber());
    assert(result == 2);
  });
  it('change the value of enum' , async () => {
    await contractInstance.changeEnum(1).then(async () => {
      const result = await contractInstance.RSVP.call();
     // console.log(result.toNumber());
      assert(result == 1);
    });
  });
  
});