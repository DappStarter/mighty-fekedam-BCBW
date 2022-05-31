require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope enroll sure trophy name rebel noble hole good arena equal gasp'; 
let testAccounts = [
"0x9a6b365363a69e3280952029ef5a5caeaa2c3e11287728bf7e6b1b6164ce1bad",
"0x47e9ce27c041adddad87b90fb86013bca228c259e296ac3827a65f4c00517438",
"0x3fb3101260be0d484ee4caa48a89e99ff4b1f2def39522c38696de7fdaef22fd",
"0xd59a5096877338fbe13b2d4ff7323b631f4b5700bbb1011232a3a924e4202d2b",
"0xbf6e8782d1c60516cd804f14c4a7db8e86d3454ddaa351cffd3bd78a1fa7caed",
"0x50e33288c04020eff07f87b8c57b23684a09dba2d7cd051771a03f3552f7859a",
"0x6dd1ac3dd21fe9f1c64f8e9c9f7ed698f7d857ad5bdf12691141e62e12badab8",
"0xeddb3a53bbd7dbf15f8de7484b08c3801129f0d585766f1d30c36e03983296a7",
"0x0d5cead23b4f94fa9b8e249673e74de1fe61363a0ace630bd5006a37c32bf34b",
"0x86cd0ca3ec4ffed0cd83cc32febcb429689043988e2aba592a1e66f5bcaeb4e5"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

