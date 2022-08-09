const Calculator = artifacts.require("Calculator");
const { assert } = require('chai');
const truffleAssert = require('truffle-assertions');

contract ('Contract Name : Calculator', async () => {
  var contractInstance;
  
  before(async () =>{
    contractInstance =await Calculator.deployed();
  });

  it('should deploy calculator contract properly', async () => {
    assert(contractInstance.address != '');
    console.log("Contract deployed successfully at " + contractInstance.address);
  });

  it('checking initial values of a and b' , async () => {
    const resultA = await contractInstance.a.call();
    const resultB = await contractInstance.b.call();
    assert(resultA == 0 && resultB == 0);
  });

  it('trying division by zero', async () => {
    truffleAssert.reverts(
      contractInstance.div(),
      "b can't be zero"
    )
  });

  it('setting values of a and b', async () => {
    await contractInstance.set(79,83);
    const resultA = await contractInstance.a.call();
    const resultB = await contractInstance.b.call();
    assert(resultA == 79 && resultB == 83);
  });

  it('checking calculator functions' , async () => {
    const resultAddition = await contractInstance.add();
    const resultMultiplication = await contractInstance.mul();
    const resultDivision = await contractInstance.div();
    assert(resultDivision == 0 && resultAddition == 162 && resultMultiplication == 6557);
    truffleAssert.reverts(
      contractInstance.sub(),
      "b must be less than or equal to a"
    );
  });
  //read : https://www.npmjs.com/package/truffle-assertions
  it('Creating error in Addtion and multiplication operations', async () => {
    await contractInstance.setAToMax();
    await truffleAssert.fails(
      contractInstance.add(),
      truffleAssert.ErrorType.REVERT
    );
    await truffleAssert.fails(
      contractInstance.mul(),
      truffleAssert.ErrorType.REVERT
    );
    // try{
    //   const resultAddition = await contractInstance.mul();
    // }catch(e){
    //   console.error(e);
    // }
  });
});