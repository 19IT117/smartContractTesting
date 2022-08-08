const HelloWorldContract = artifacts.require('HelloWorld');

// helloWorld is contract instance while HelloWorldContract is contract artifact
contract('Contract Name : HelloWorld',async () => {
  var helloWorld;
  it('should deploy contract properly', async () => {
    helloWorld = await HelloWorldContract.deployed();
    console.log('HelloWorld is deployed at address : ' + helloWorld.address);
    assert(helloWorld.address != '');
   });
   it('should return hello world',async () => {  
    const response = await helloWorld.hello();
    assert( response === 'Hello World');   
  });
});