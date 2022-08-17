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

You are able to load a smart contract in a JavaScript variable. Take `Comptroller` as an example:

```javascript
// The main net address of Comptroller is : TJZi9eWzCLGBi9tuwvPxnaZTGa2iUpRc8v
const comptroller = tronWeb.contract().at("TJZi9eWzCLGBi9tuwvPxnaZTGa2iUpRc8v")
```

All set. Now you can call contract methods with `comptroller`.

### Calling Contract Methods

You can call `pure` and `view` methods with `methodname.call()`. Take `getAccountLiquidity` as an example:

```javascript
const result = await comptroller.getAccountLiquidity("the account to calculate liquidity").call()
```

When calling other methods, simply change `getAccountLiquidity` to the corresponding method name and input the correct parameters within the brackets.
