# Comptroller

## Introduction

The Comptroller is the risk management module of the JustLend DAO protocol. It determines how much collateral should users keep to avoid liquidation.

The Comptroller is implemented as an upgradable contract. The entrance is [Unitroller](https://tronscan.org/#/contract/TGjYzgCyPobsNS9n6WcbdLVR9dH7mWqFx7/code); the implementation is [Comptroller](https://tronscan.org/#/contract/TJZi9eWzCLGBi9tuwvPxnaZTGa2iUpRc8v/code).

## Relevant Methods

### Markets

#### enterMarkets()

```javascript
function enterMarkets(address[] memory cTokens) public returns (uint[] memory)
```

Calling this method enters a list of markets to supply or borrow.

| Parameter | Type       | Description                          |
| --------- | ---------- | ------------------------------------ |
| cTokens   | address\[] | Address list of the markets to enter |

Returns: For each market, returns 0 for success, otherwise an error code.

```javascript
const result = comptroller.enterMarket(addresses).send({
  feeLimit:10_000_000_000,
  callValue:0,
  shouldPollResponse:true
});
```

#### exitMarket()

```javascript
function exitMarket(address cTokenAddress) external returns (uint)
```

Calling this method exits a currently entered market.

| Parameter     | Type    | Description            |
| ------------- | ------- | ---------------------- |
| cTokenAddress | address | Market address to quit |

Returns: 0 on success, otherwise an error code.

```javascript
const result = comptroller.exitMarket(address).send({
  feeLimit:10_000_000_000,
  callValue:0,
  shouldPollResponse:true
});
```

#### getAssetsIn()

```javascript
function getAssetsIn(address account) external view returns (CToken[] memory)
```

Calling this method returns a list of already entered markets.

| Parameter | Type    | Description                                       |
| --------- | ------- | ------------------------------------------------- |
| account   | address | The markets this account enters will be returned  |

Returns: Markets have been entered by the specified address.
