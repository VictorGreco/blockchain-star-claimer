const { SHA256 } = require('crypto-js');
const BlockClass = require('./src/block');
const BlockchainClass = require('./src/blockchain');



(async () => {
    const blockchain = await new BlockchainClass.Blockchain();
    console.log(await blockchain.getBlockByHeight(1))
})()

