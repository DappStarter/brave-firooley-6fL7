require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski stool cruise situate unknown hockey cloth equal giant'; 
let testAccounts = [
"0x982ffe9530040bc76585f324b39ce0ee52158ad6c0ca74bc3488effe69ee8f15",
"0xffb16464330dd9859f0a58c8d6e17ac949ccb21abc7b6b93b00a76b1f9c7db81",
"0xc42c653f841f83b2d245bbde4a468654d20e940a81393e6382105289dcde8d8a",
"0xa670aa77a60810a063bce39be300fcf95a30ea30231b1c81d776e135a8a61b48",
"0x9561afb1d11fcf8d999df36136217bd3bc7ae0593917c7debc3196335ff8f486",
"0x3fdb21c5b94d1ec761bbaa778336102c85bc2fc482a969076f56b0f65a9a41c6",
"0xe90ad85587e394f0cdc1255e3f6b4e821486e59986aac7bbb9eed5e0913139f6",
"0x48c53e309f949ab458e243c71f049ebb5a9479bd023ada7e27cc1b96b3500d98",
"0x008a3c161187560202c74372bce11e7d1b047cf3b490e14bb29adfac862a239f",
"0xe6278b9bb79ced867192b3de54dd1253a7238dfc6ed13155d4be3bcd1d1e6f09"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

