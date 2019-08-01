module.exports = function(deployer, network) {deployer.then(async () => {
    console.log("Current network:", network);

    global.web3 = web3;
    const { web3tx } = require("@decentral.ee/web3-test-helpers");
    const RToken = artifacts.require("RToken");

    if (network === "rinkeby") {
        // Contract addresses: https://compound.finance/developers#enter-markets
        const cDAIAddress = "0x6d7f0754ffeb405d23c51ce938289d4835be3b14";
        const rToken = await web3tx(RToken.new, `RToken.new cDAI ${cDAIAddress}`)(
            cDAIAddress
        );
        console.log("rToken deployed at: ", rToken.address);
    }
});};
