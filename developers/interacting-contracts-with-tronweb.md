# Integration JustLend DAO Protocol

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

#### Constant Calls

You can call `pure` and `view` methods with `methodname.call()`. Take `getAccountLiquidity` as an example:

```javascript
const result = await comptroller.getAccountLiquidity("the account to calculate liquidity").call()
```

When calling other methods, simply change `getAccountLiquidity` to the corresponding method name and input the correct parameters within the brackets.

{% hint style="info" %}
If a contract's ABI is not stored on the blockchain, ABI should be manually loaded and `_isConstant: true`is required, like below.
{% endhint %}

```javascript
comptroller.loadAbi(ABI JSON)
const result = await comptroller.methodname(params).call(_isConstant:true)
```

#### Trigger Calls

Calls that modify on-chain data are called trigger calls. Take `castVote()` as an example:

```javascript
const result = governorAlpha.castVote(proposalId,votes,support).send({
  feeLimit:10_000_000_000,
  callValue:0,
  shouldPollResponse:true
});
```

There are several available parameters in a trigger call:

| Parameter          | Description                                                                                                                                                                                           |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| feeLimit           | <p>The maximum energy can be used during a trigger call(in 10^-6 TRX, or sun)<br>Please refer to <a href="https://developers.tron.network/docs/resource-model#energy">TRON Energy Explanation</a></p> |
| callValue          | The number of TRX to be sent in the transaction(in 10^-6 TRX, or sun)                                                                                                                                 |
| shouldPollResponse | Returns after confirmation if set as `true`                                                                                                                                                           |
