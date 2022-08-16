const EventContract = artifacts.require("eventContract");
module.exports = function (deployer) {
  deployer.deploy(EventContract);
};
