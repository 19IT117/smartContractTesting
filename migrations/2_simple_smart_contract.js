const simpleSmartContract = artifacts.require("SimpleSmartContract");

module.exports = function (deployer) {
  deployer.deploy(simpleSmartContract);
};
