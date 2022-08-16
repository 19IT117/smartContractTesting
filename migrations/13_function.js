const FunctionContract = artifacts.require("functionContract");
module.exports = function (deployer) {
  deployer.deploy(FunctionContract);
};
