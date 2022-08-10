const EnumContract = artifacts.require("enumContract");
module.exports = function (deployer) {
  deployer.deploy(EnumContract);
};
