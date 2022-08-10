const Mapping = artifacts.require("mappingContract");
const { assert } = require('chai');
const truffleAssert = require('truffle-assertions');

contract('contract name : mappingContract' , async () => {
  var contractInstance;
 
  before(async() => {
    contractInstance = await Mapping.deployed();
  });

  it('should deploy contract instance properly', async () => {
    assert(contractInstance.address != '');
    console.log(" Contract Address",contractInstance.address);
  });
  
  it('setting value in normalMapping', async () => {
    await contractInstance.setElement(2);
  });
  
  it('checking value of mapping that is previously setted ', async () => {
    const result = await contractInstance.normalMapping.call("0x010aA18A4dAdBA2356733b4348B3FAA8967DD506");
    assert(result == 2);
  });
});