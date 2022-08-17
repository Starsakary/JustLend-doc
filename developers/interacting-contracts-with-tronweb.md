# Interacting Contracts with Tronweb

[Tronweb](https://github.com/tronprotocol/tronweb) is a JavaScript SDK for TRON. It is designed for web browsers, Node.js and IoT devices. If you are familiar with web3, Tronweb will bring you the same brilliant experience.

## Installation

Either `npm` or `yarn` is available for installation.

```shell
npm install tronweb
```

```shell
yarn add tronweb
```

## Initialisation

Create a Tronweb instance before other actions:

```javascript
const TronWeb = require('tronweb')
const HttpProvider = TronWeb.providers.HttpProvider
// You may put your node ip:port for HttpProvider
// also, you may use TronGrid services for main net and test nets:
// main net: https://api.trongrid.io
// shasta test net https://api.shasta.trongrid.io
// nile test net: https://api.nileex.io
const fullNode = new HttpProvider("")
const solidityNode = new HttpProvider("")
const eventServer = new HttpProvider("") 
const privateKey = "your private key"
const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privKey)
```

## Interacting with Contracts

