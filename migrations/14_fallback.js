const Fallback = artifacts.require("Fallback");
module.exports = function (deployer) {
  deployer.deploy(Fallback);
};
