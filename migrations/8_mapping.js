const Mapping = artifacts.require("mappingContract");
module.exports = function (deployer) {
  deployer.deploy(Mapping);
};
