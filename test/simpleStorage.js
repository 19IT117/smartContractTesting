const SimpleStorage = artifacts.require("SimpleStorage");

contract('Contract name : SimpleStorage', async () => {
  var contractInstance; 
  it('deploy smart contract properly', async () => {
    contractInstance = await SimpleStorage.deployed();
    assert(contractInstance.address != '');
    console.log("Simple Storage contract address is : ", contractInstance.address);
  });
  it('checking value initially' , async () => {
    const result = await contractInstance.number.call();
    assert(result == "0");
  });
  it('checking values after updating the value' , async () => { 
    await contractInstance.setNumber(1);
    const result = await contractInstance.number.call();
    assert(result == "1");
  })
});