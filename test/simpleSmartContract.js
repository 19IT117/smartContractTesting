const SimpleSmartContract = artifacts.require('SimpleSmartContract'); 
/* creating smartcontract object named 'SimpleSmartContract' for the smart contract in the file SimpleSmartContract.sol 
and name of contract is the argument of artifact.require.
*/
// This will create a new instance of 'SimpleSmartContract'
// Each it block must have one assert statement
contract('Contract Name : SimpleSmartContract', () =>  {
  it('should deploy smart contract properly',async () => {
    const simpleSmartContract = await SimpleSmartContract.deployed();
    console.log('SimpleSmartContract address is ' + simpleSmartContract.address);
    assert(simpleSmartContract.address != '');
  });
});