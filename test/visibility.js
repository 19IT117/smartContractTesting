const { assert } = require("chai");

const Visibility = artifacts.require("Visibility");

contract('Contract Name : Visibility', async() =>{
  var contractInstance ;
  before(async () =>{ 
    contractInstance = await Visibility.deployed();
  });
  it('Checking value of Public variable', async () =>{
    const public = await contractInstance.a();
    assert(public == 10);
  });
  it('Checking value of Private variable', async () =>{
    
    try{
      const private = await contractInstance.b();
    }catch(e){
      const error = e.message;
      assert(error.includes("contractInstance.b is not a function"));
    } 
  });
  it('Checking value of internal variable', async () =>{
   try{
      const internal = await contractInstance.c();
    }catch(e){
      const error = e.message;
      assert(error.includes("contractInstance.c is not a function"));
    } 
  });
  it('calling public method', async () =>{
    const public = await contractInstance.pub();
    //console.log(public);
    assert(public == 10);
  });
  it('calling private method', async () =>{
    try{
      const private = await contractInstance.priv();
    }catch(e){
      const error = e.message;
      assert(error.includes("contractInstance.priv is not a function"));
    }
  });
  it('calling internal method', async () =>{
    try{
      const internal = await contractInstance.intern();
    }catch(e){
      const error = e.message;
      assert(error.includes("contractInstance.intern is not a function"));
    }
  });

  it('calling external method', async () =>{
      const external = await contractInstance.ext();
      assert(external == 25);
  });
});