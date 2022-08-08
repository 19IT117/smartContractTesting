const Helloworld = artifacts.require("HelloWorld");

module.exports = function (deployer) {
  deployer.deploy(Helloworld);
};
