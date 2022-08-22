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

```javascript
const result = comptroller.getAssetsIn(account).call();
```

#### markets()

```javascript
function markets(address cTokenAddress) view returns (bool, uint, bool)
```

Calling this method returns the status of a market(isListed, collateralFactorMantissa, comped)

| Parameter     | Type    | Description    |
| ------------- | ------- | -------------- |
| cTokenAddress | address | Market address |

| Returns                  | Type | Description                                         |
| ------------------------ | ---- | --------------------------------------------------- |
| isListed                 | bool | Whether recognized by comptroller                   |
| collateralFactorMantissa | uint | The value can be borrowed(scaled by 1e18)           |
| comped                   | bool | Whether suppliers & borrowers can get jst dividends |

```javascript
const {0: isListed, 1: collateralFactorMantissa, 2: isComped} = comptroller.markets(address).call();
```

### Collateral & Liquidation

#### getAccountLiquidity()

```javascript
function getAccountLiquidity(address account) public view returns (uint256, uint256, uint256)
```

Calling this method returns the liquidity and shortfall of a user.&#x20;

| Parameter | Type    | Description           |
| --------- | ------- | --------------------- |
| account   | address | Address to be queried |

| Returns   | Type  | Description                                                  |
| --------- | ----- | ------------------------------------------------------------ |
| error     | uint  | 0 for success, otherwise an error code                       |
| liquidity | uint  | current liquidity                                            |
| shortfall | uint  | The shortfall value of the account's collateral requirement  |

```javascript
const {0: error, 1: liquidity, 2: shortfall} = comptroller.getAccountLiquidity(account).call();
```

#### closeFactorMantissa()

```javascript
function closeFactorMantissa() view returns (uint256)
```

Calling this method gets the percentage of a liquidatable account should repay in a single liquidation. The range is 0%-100%. The calculation result of this method applies to a single asset.

Returns: The close factor, scaled by 1e18

```javascript
const result = comptroller.closeFactorMantissa().call();
```

#### liquidationIncentiveMantissa()

```javascript
function liquidationIncentiveMantissa() view returns (uint256)
```

Calling this method gets liquidators' incentives. The incentive is for underwater accounts. Part of this will be given to jToken reserves according to the seize share.

Returns: The liquidation incentive, scaled by 1e18

```javascript
const result = comptroller.liquidationIncentiveMantissa().call();
```

## Key Events

| Event                                          | Description                               |
| ---------------------------------------------- | ----------------------------------------- |
| MarketEntered(address cToken, address account) | Emits when successfully entering a market |
| MarketExited(address cToken, address account)  | Emits when successfully exit a market     |

## Error Codes

| Code | Name                            | Description                                                                          |
| ---- | ------------------------------- | ------------------------------------------------------------------------------------ |
| 0    | NO\_ERROR                       | Success                                                                              |
| 1    | UNAUTHORIZED                    | The sender is not authorized to perform this action.                                 |
| 2    | COMPTROLLER\_MISMATCH           | Liquidation cannot be performed in markets with different comptrollers.              |
| 3    | INSUFFICIENT\_SHORTFALL         | The account does not have sufficient shortfall to perform this action.               |
| 4    | INSUFFICIENT\_LIQUIDITY         | The account does not have sufficient liquidity to perform this action.               |
| 5    | INVALID\_CLOSE\_FACTOR          | The close factor is not valid.                                                       |
| 6    | INVALID\_COLLATERAL\_FACTOR     | The collateral factor is not valid.                                                  |
| 7    | INVALID\_LIQUIDATION\_INCENTIVE | The liquidation incentive is invalid.                                                |
| 8    | MARKET\_NOT\_ENTERED            | The market has not been entered by the account.                                      |
| 9    | MARKET\_NOT\_LISTED             | The market is not currently listed by the comptroller.                               |
| 10   | MARKET\_ALREADY\_LISTED         | An admin tried to list the same market more than once.                               |
| 11   | MATH\_ERROR                     | A math calculation error occurred.                                                   |
| 12   | NONZERO\_BORROW\_BALANCE        | The action cannot be performed since the account carries a borrow balance.           |
| 13   | PRICE\_ERROR                    | The comptroller could not obtain a required price of an asset.                       |
| 14   | REJECTION                       | The comptroller rejects the action requested by the market.                          |
| 15   | SNAPSHOT\_ERROR                 | The comptroller could not get the account borrows and exchange rate from the market. |
| 16   | TOO\_MANY\_ASSETS               | Attempted to enter more markets than are currently supported.                        |
| 17   | TOO\_MUCH\_REPAY                | Attempted to repay more than is allowed by the protocol.                             |

## Failure Info



| Code | Value                                           |
| ---- | ----------------------------------------------- |
| 0    | ACCEPT\_ADMIN\_PENDING\_ADMIN\_CHECK            |
| 1    | ACCEPT\_PENDING\_IMPLEMENTATION\_ADDRESS\_CHECK |
| 2    | EXIT\_MARKET\_BALANCE\_OWED                     |
| 3    | EXIT\_MARKET\_REJECTION                         |
| 4    | SET\_CLOSE\_FACTOR\_OWNER\_CHECK                |
| 5    | SET\_CLOSE\_FACTOR\_VALIDATION                  |
| 6    | SET\_COLLATERAL\_FACTOR\_OWNER\_CHECK           |
| 7    | SET\_COLLATERAL\_FACTOR\_NO\_EXISTS             |
| 8    | SET\_COLLATERAL\_FACTOR\_VALIDATION             |
| 9    | SET\_COLLATERAL\_FACTOR\_WITHOUT\_PRICE         |
| 10   | SET\_IMPLEMENTATION\_OWNER\_CHECK               |
| 11   | SET\_LIQUIDATION\_INCENTIVE\_OWNER\_CHECK       |
| 12   | SET\_LIQUIDATION\_INCENTIVE\_VALIDATION         |
| 13   | SET\_MAX\_ASSETS\_OWNER\_CHECK                  |
| 14   | SET\_PENDING\_ADMIN\_OWNER\_CHECK               |
| 15   | SET\_PENDING\_IMPLEMENTATION\_OWNER\_CHECK      |
| 16   | SET\_PRICE\_ORACLE\_OWNER\_CHECK                |
| 17   | SUPPORT\_MARKET\_EXISTS                         |
| 18   | SUPPORT\_MARKET\_OWNER\_CHECK                   |
