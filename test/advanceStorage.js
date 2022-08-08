const AdvanceStorage = artifacts.require('AdvanceStorage');

contract ('Contract Name : AdvanceStorage', async ()=> {
  var contractInstance;
  before(async ()=> {
    contractInstance = await AdvanceStorage.deployed();
  });
  it('should deploy the contract properly', async ()=> {
  assert(contractInstance.address != '');
  console.log('Contract deployed successfully  at address : ' , contractInstance.address);
  });
  it ('checking initial length', async ()=> {
    const result = await contractInstance.getLength();
    assert(result == 0);
  });
  it('adding one element to data array', async ()=> {
    await contractInstance.add(10);
    const result = await contractInstance.get(0);
    assert(result == 10);
  });
  it('adding multiple elements to data array', async ()=> {
    await contractInstance.add(20);
    await contractInstance.add(30);
    await contractInstance.add(40);
    await contractInstance.add(50);
    const result = await contractInstance.get(3);
    assert(result == 40);
  });
  it('checking complete array' , async () => {
    const array = [10, 20, 30, 40, 50];
    const resultArray = await contractInstance.getArray();
    for( let i = 0; i < array.length; i++ ) {
      assert(resultArray[i].toNumber() , array[i]);
    }
  });
  it('checking final length',async () => {
    const result = await contractInstance.getLength();
    assert(result.toNumber() === 5);
  });
});
