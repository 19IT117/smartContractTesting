const StructContract = artifacts.require("structContract");
module.exports = function (deployer) {
  deployer.deploy(StructContract);
};
