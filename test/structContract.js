const { assert } = require("chai");

const StructContract = artifacts.require("structContract");

contract('Contract Name : StuctContract', () => {
  var contractInstance;
  before(async () => {
    contractInstance = await StructContract.deployed();
  });
  it('should deploy contract properly',async () => { 
    console.log(" contract address : ",contractInstance.address);
  });
  it('reading structExample Variable' , async () => {
    const result = await contractInstance.structExample();
    //console.log(result[1]);
    assert(result[0] == 19 && result[1] == 'viraj');
  });

  it('adding task in todos it is array of struct' , async () => {
    await contractInstance.create("Task1").then(async () => {
        const result = await contractInstance.todos.call(0);
        assert(result[0] == 'Task1' && result[1] == false);  
    });
  });

  it('adding car in CarMapping' , async () => {
    await contractInstance.addCar(1,"Farrai",380).then(async () => {
      const result = await contractInstance.CarMapping.call(1);
      assert(result[0] == 'Farrai' && result[1] == 380);
    });
  });
  it('adding car to Mapping having array of struct' , async () => {
    await contractInstance.addCarToMOSA(1,"Farrai",380).then(async () =>{
      await contractInstance.addCarToMOSA(1,"BMW",290).then(async () =>{
        const result  = await contractInstance.CarMappingArr.call(1,0);
        assert(result[0] == 'Farrai' && result[1] == 380);
      }).then(async () => { 
        const result  = await contractInstance.CarMappingArr.call(1,1);
        assert(result[0] == 'BMW' && result[1] == 290);
      }); 
    });
  });
});