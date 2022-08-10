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
    //console.log(result);
    assert(result == 2);
  });

  it('setting value in nested mapping', async () => {
    await contractInstance.setElementNestedMapping(2,true).then(async () => {
      const result = await contractInstance.nestedMapping.call(2,"0x010aA18A4dAdBA2356733b4348B3FAA8967DD506");
      //console.log(result);
      assert(result == true);
    });
  });

  it('setting value in double nested mapping', async () => {
   await contractInstance.setElementinDoubleNestedMapping(1,"0x010aA18A4dAdBA2356733b4348B3FAA8967DD506","0x010aA18A4dAdBA2356733b4348B3FAA8967DD506","this is viraj").then(async () => {
    const result = await contractInstance.doubleNestedMapping.call(1,"0x010aA18A4dAdBA2356733b4348B3FAA8967DD506","0x010aA18A4dAdBA2356733b4348B3FAA8967DD506");
    //console.log(result);
    assert(result == "this is viraj");
    });
  });
});