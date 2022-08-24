# Price Oracle

## Introduction

As blockchain-powered smart contracts are unable to directly communicate with the external system, JustLend DAO protocol requires reliable price feeds. We have chosen [WinkLink](https://winklink.org/#/home?lang=en-US)'s price service as our price feed.

JustLend DAO protocol uses a [PriceOracle](https://tronscan.org/#/contract/TD8bq1aFY8yc9nsD2rfqqJGDtkh7aPpEpr/code) contract to set and display token prices in `sun(10^-6 TRX)`,  scaled by `10^(tokenDecimal - 6)`.

Prices of the underlying tokens are posted every 30 minutes via `setPrice()`by a specified poster.

## Relevant Methods

### anchors()

```solidity
function anchors(address) view returns(uint256, uint256)
```

Calling this methods returns the current price anchor of a specified token.

| Parameter | Type    | Description                                                                            |
| --------- | ------- | -------------------------------------------------------------------------------------- |
|           | address | The address of the underlying token(e.g. TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t for USDT)  |

| Returns       | Type    | Description                                                                                                                    |
| ------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------ |
| period        | uint256 | The current time period. Calculated as: `current block height`/ 600 (the TRON network produces approx. 600 blocks per 30 mins) |
| priceMantissa | uint256 | Token prices in `sun(10^-6 TRX)`,  scaled by `10^(tokenDecimal - 6)`.                                                          |

```javascript
const result = priceOracle.anchors(token).call();
```

### poster()

```solidity
function poster() view returns(address)
```

Calling this methods returns the current price poster.

Returns: Address of the current poster.

```javascript
const result = priceOracle.poster().call();
```

### assetPrices()

```solidity
function assetPrices(address asset) public view returns (uint)
```

Calling this method returns the current price of the specified asset.

| Parameter | Type    | Description                       |
| --------- | ------- | --------------------------------- |
| asset     | address | The address of the token to query |

Returns: The current price of the token in `sun(10^-6 TRX)`, scaled by `10^(tokenDecimal - 6)`.

### getPrice()

```solidity
function getPrice(address asset) public view returns (uint)
```

Calling this method returns the current price of the specified asset.

| Parameter | Type    | Description                       |
| --------- | ------- | --------------------------------- |
| asset     | address | The address of the token to query |

Returns: The current price of the token in `sun(10^-6 TRX)`, scaled by `10^(tokenDecimal - 6)`.

### setPrice()

```solidity
function setPrice(address asset, uint requestedPriceMantissa) public returns (uint)
```

Calling this methods sets a token price for the current time period.

{% hint style="info" %}
This method is poster-only.
{% endhint %}

| Parameter              | Type    | Description                                                                            |
| ---------------------- | ------- | -------------------------------------------------------------------------------------- |
| asset                  | address | The address of the underlying token(e.g. TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t for USDT)  |
| requestedPriceMantissa | uint    | New price, scaled by 10^18                                                             |

Returns: 0 for success, otherwise an error code.

```javascript
const result = priceOracle.setPrice(asset, price).send({
  feeLimit:10_000_000_000,
  callValue:0,
  shouldPollResponse:true
});
```

###
