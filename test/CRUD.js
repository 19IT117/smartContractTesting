const Curd = artifacts.require("Curd");
const truffleAssert = require('truffle-assertions');
contract ('Contract Name : Curd',async () => {
  var contractInstance;
  before(async () => { 
    contractInstance = await Curd.deployed();
   });
  
  it('deploy smart contract properly', async () => {
    assert(contractInstance.address != '');
    console.log("Curd contract is deployed at address is : ", contractInstance.address);
  });
  
  it('check the value of NextId', async () => {
    const result = await contractInstance.nextId.call();
    assert(result.toNumber() === 1);
  });
  
  it('create a new user', async () => { 
    await contractInstance.create('Viraj');
    const result = await contractInstance.nextId.call();
    assert(result.toNumber() === 2);
  });
  
  it('read user name from Users struct', async () => {
    const user = await contractInstance.read(1);
    assert(user[0].toNumber() === 1 && user[1].toString() === "Viraj");
  });
  
  it('creating second user', async() =>{
    await contractInstance.create('John');
    const user = await contractInstance.read(2);
    assert(user[0].toNumber() === 2 && user[1].toString() === "John");
  });
  
  it('updating user 2', async () =>{
    await contractInstance.update(2,'Alice');
    const user = await contractInstance.read(2);
    assert(user[0].toNumber() === 2 && user[1].toString() === "Alice");
  });
  
  it('deleting user 2' , async() =>{
    await contractInstance.destroy(2);
    // try{
    //   const user = await contractInstance.read(2);
    // }catch(e){   
    //   console.error(e.data);
    //   assert(e.inlude('User does not exist'));
    // }
    await truffleAssert.reverts(
      contractInstance.read(2),
      "User does not exist"
  );
  });

  it('reading user that does not exist', async () =>{
    await truffleAssert.reverts(
      contractInstance.read(3),
      "User does not exist"
    )   
  });

  it('updating user that does not exist', async () =>{
    await truffleAssert.reverts(
      contractInstance.update(2, 'Viraj'),
      "User does not exist"
    );
  });
  it('deleting user that does not exist', async () =>{
    await truffleAssert.reverts(
      contractInstance.destroy(3),
      "User does not exist"
    );
  });
});