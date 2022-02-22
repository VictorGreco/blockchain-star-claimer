const { SHA256 } = require('crypto-js');
const BlockClass = require('./src/block');
const BlockchainClass = require('./src/blockchain');



(async () => {
    const blockchain = await new BlockchainClass.Blockchain();

    await blockchain._addBlock(new BlockClass.Block({ data: 'asd' }));

    console.log(blockchain.chain);

    blockchain.chain[1].previousBlockHash = 1;
    await blockchain._addBlock(new BlockClass.Block({ data: 'asd' }));
    console.log(blockchain.chain);
})()

