# Price Oracle

## Introduction <a href="#introduction" id="introduction"></a>

As blockchain-powered smart contracts are unable to directly communicate with the external system, JustLend DAO protocol requires reliable price feeds. We have chosen [WinkLink](https://winklink.org/#/home?lang=en-US)'s price service as our price feed. JustLend DAO protocol uses a [PriceOracle](https://tronscan.org/#/contract/TD8bq1aFY8yc9nsD2rfqqJGDtkh7aPpEpr/code) contract to set and display token prices in `sun(10^-6 TRX)`, scaled by `10^(tokenDecimal - 6)`. Prices of the underlying tokens are posted every 30 minutes via `setPrice()`by a specified poster.

`SimplePriceOracle.sol` allows users to:

* Price Poster
* Get Asset Price
* Set Price

The source code is available on [Github](https://github.com/justlend/justlend-protocol/blob/main/contracts/SimplePriceOracle.sol).



## Contracts ABI <a href="#solidity-api" id="solidity-api"></a>

### Anchor Token Price <a href="#anchors" id="anchors"></a>

Calling this methods returns the current price anchor of a specified token.

```solidity
function anchors(address) view returns(uint256, uint256)
```

* **Parameter description**:
  * `token`: the address of the underlying token(e.g. TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t for USDT)
* **Returns：**
  * `period`: the current time period. Calculated as: current block height/ 600 (the TRON network produces approx. 600 blocks per 30 mins)
  * `riceMantissa`: token prices in sun(10^-6 TRX), scaled by 10^(tokenDecimal - 6).

***

### Price Poster <a href="#poster" id="poster"></a>

Calling this methods returns the current price poster.

```solidity
function poster() view returns(address)
```

* **Parameter description**: N/A.
* **Returns：**&#x41;ddress of the current poster.

***

### Asset Prices <a href="#assetprices" id="assetprices"></a>

Calling this method returns the current price of the specified asset.

```solidity
function assetPrices(address asset) public view returns (uint)
```

* **Parameter description**:&#x20;
  * `asset`: the address of the token to query.
* **Returns：**&#x74;he current price of the token in sun(10^-6 TRX), scaled by 10^(tokenDecimal - 6).

***

### Get Price <a href="#getprice" id="getprice"></a>

Calling this method returns the current price of the specified asset.

```solidity
function getPrice(address asset) public view returns (uint)
```

* **Parameter description**:&#x20;
  * `asset`: the address of the token to query.
* **Returns：**&#x74;he current price of the token in sun(10^-6 TRX), scaled by 10^(tokenDecimal - 6).

***

### Set Price (poster-only) <a href="#setprice" id="setprice"></a>

Calling this methods set a token price for the current time period.

```solidity
function setPrice(address asset, uint requestedPriceMantissa) public returns (uint)
```

* **Parameter description**:&#x20;
  * `asset`: The address of the underlying token (e.g. TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t for USDT);
  * requestedPriceMantissa: new price, scaled by 10^18.
* **Returns：**&#x30; for success, otherwise an error code.
