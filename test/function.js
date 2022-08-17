const { assert } = require("chai");
const truffleAssert = require("truffle-assertions");
const FunctionContract = artifacts.require('functionContract');

contract ('Contract Name : functionContract' , async () => { 
  var contractInstance ; 
  
  before(async() => {
    contractInstance = await FunctionContract.deployed();
  });

  it('should deploy contract properly', async () => {
    assert(contractInstance.address != '');
    console.log(contractInstance.address);
  });
  
  it('calling a function', async () => {
  
    const result  = await contractInstance.pubFunction.call();
    console.log(result.toNumber());

  });

  it('calculating estimated gas and failing function with limited gas', async () => {
    
    var estimatedGas ;
    const result  = await contractInstance.pubFunction;
  
    // await result.call().then(async (returnValue) => {
    //   console.log(returnValue.toNumber());
    // });
    
    await result.estimateGas.call().then(async(result) => {
        estimatedGas = result;
    });

    await truffleAssert.fails(
      contractInstance.pubFunction({gas : estimatedGas/2})
    );
  
  });

  it('checking payable function' , async () => {
    await contractInstance.payableFunction.call({value : 123}).then(async (returnValue) => {
      console.log(returnValue.toNumber());
    });
  });

  it('failing payable function by sending less wei', async () => {  
    
    // try{
    //   await contractInstance.payableFunction.call({value : 1});
    // }catch(e){
    //   const err = e.message;
    //   console.log(err);
    // }
    
    truffleAssert.reverts(
     contractInstance.payableFunction({value : 1}),
      "send more eth"
    );

  });

  it('sending wei to non payable function', async () => {
    try{
      const result  = await contractInstance.pubFunction.call({value : 10});
    } catch(e) {
      const err = e.message;
      //console.log(e);
    } 
  });

  // it('calling fallback function' , async() => {
  //   try{
  //     const result = await contractInstance.haha.call();    
  //   }catch(e){
  //     console.log(e);
  //   }

  // });
});