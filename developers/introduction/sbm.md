# SBM

## Introduction <a href="#introduction" id="introduction"></a>

The JustLend DAO Supply and Borrow Market (SBM) is a decentralized  liquidity pool where users can participate as suppliers, borrowers or liquidators. Suppliers provide liquidity to a market and can earn interest on the assets provided, where borrowers are able to borrow in a collateralize assets way.&#x20;

The SBM contract is the main user-facing contract. Most user interactions with the JustLend DAO Protocol occur via the **Ctoken** contract. It exposes the liquidity management methods that can be invoked using either _**Solidity**_ or _**Web3**_ libraries.

`Ctoken.sol` allows users to:

* Supply
* Borrow
* Withdraw
* Repay
* Liquidation

The source code is available on [Github](https://github.com/justlend/justlend-protocol/blob/main/contracts/CToken.sol).\




## Query Interface <a href="#solidity-api" id="solidity-api"></a>

### **ExchangeRate**

Calling this method accrues interest and returns the up-to-date exchange rate.

```solidity
function exchangeRateCurrent() public nonReentrant returns (uint)
```

* **Parameter description:** N/A
* **Returns:** calculated exchange rate scaled by 1e18.

***

### **Get Cash**

Calling this method gets the total amount of underlying balance currently available to this market.

```solidity
function getCash() public view returns (uint)
```

* **Parameter description:** N/A
* **Returns:** The quantity of underlying assets owned by this contract.

***

### **Total Borrows**

Calling this method gets the sum of the currently loaned-outs and the accrued interests.

```solidity
function totalBorrowsCurrent() external nonReentrant returns (uint)
```

* **Parameter description:** N/A
* **Returns:** The total borrows with interest.

***

### **Borrow Balance**

Calling this method accrues interest to the updated borrowIndex and then calculates the account's borrow balance using the updated borrowIndex.

```solidity
function borrowBalanceCurrent(address account) external nonReentrant returns (uint)
```

* **Parameter description:**
  * `account`:  the address whose balance should be calculated after updating borrowIndex.
* **Returns:** The calculated balance.

***

### **Borrow Rate**

Calling this method gets the current per-block borrow interest rate for this jToken.

```solidity
function borrowRatePerBlock() external view returns (uint)
```

* **Parameter description:** N/A
* **Returns:** The borrow interest rate per block, scaled by 1e18.

***

### **Total Supply**

Calling this method gets the total number of tokens in circulation.

```solidity
function totalSupply() external view returns (uint256)
```

* **Parameter description:** N/A
* **Returns:** The supply of tokens.

***

### **Underlying Balance**

Calling this method gets the underlying balance of the owner.

```solidity
function balanceOfUnderlying(address owner) external returns (uint)
```

* **Parameter description:**
  * `owner`: the address of the account.
* **Returns:** The amount of underlying owned by owner.

***

### **Supply Rate**

Calling this method gets the current per-block supply interest rate for this jToken.

```solidity
function supplyRatePerBlock() external view returns (uint)
```

* **Parameter description:** N/A
* **Returns:** the supply interest rate per block, scaled by 1e18.

***

### **Total Reserves**

Calling this method gets the reserves. Reserve represents a portion of historical interest set aside as cash which can be withdrawn or transferred through the protocol's governance.

```solidity
function totalReserves() returns (uint)
```

* **Parameter description:** N/A
* **Returns:** the total amount of reserves.

***

### **Reserve Factor**

Calling this method gets the current reserve factor.

```solidity
function reserveFactorMantissa() returns (uint)
```

* **Parameter description:** N/A
* **Returns:** The current reserve factor.

***

### **Liquidation Incentive**

By calling the liquidationIncentiveMantissa function of the Unitroller contract, liquidation incentives can be inquired. Liquidators will be given a proportion of the borrower's collateral as an incentive, which is defined as liquidation incentive. This is to encourage liquidators to perform liquidation of underwater accounts.

```solidity
function liquidationIncentiveMantissa() view returns (uint)
```

* **Parameter description:** N/A
* **Returns:** N/A

***

### **Get Account Liquidity**

By calling the getAccountLiquidity function of the Unitroller contract, account information can be accessed through an account's address to determine whether the account should be liquidated or not.

```solidity
getAccountLiquidity(address account) view returns (uint, uint, uint)
```

* **Parameter description**:
  * `account`: user address.
* **Returns:**&#x20;
  * `error`: error code, 0 means success.
  * `liquidity`: liquidity.
  * `shortfall`: When the value is bigger than 0, the current account does not meet the market requirement for collateralization and needs to be liquidated.

Note: There should be at most one non-zero value between liquidity and shortfall.

***

## **Wtite Interface**

### **Borrow**

Calling this method borrows assets from JustLend DAO protocol to the sender's owner address.

```solidity
function borrow(uint borrowAmount) external returns (uint)
```

* **Parameter description:**
  * `borrowAmount`: the amount of the underlying asset to borrow.
* **Returns:** None, reverts on error.

**📅 Event**

```solidity
Borrow(address borrower, uint borrowAmount, uint accountBorrows, uint totalBorrows, uint borrowIndex)
```

* Emits when user successfully borrow.
  * `borrower`: address of borrow assets account;&#x20;
  * `borrowAmount`: the amount of borrowed assets;
  * `accountBorrows`: the account borrow the assets;
  * `totalBorrows`: total borrow assets form the account;
  * `borrowIndex`: the index of this borrow order.

***

### **repayBorrow**

Calling this method repays their own borrow.

```solidity
function repayBorrow(uint amount) external payable
```

* **Parameter description:**
  * `amount`: the amount of the asset to repay.
* **Returns:** None, reverts on error.

**📅 Event**

```solidity
RepayBorrow(address payer, address borrower, uint repayAmount, uint accountBorrows, uint totalBorrows, uint borrowIndex)
```

* Emits when user successfully repay borrow.
  * `payer`: operate repay borrow;
  * `borrower`: address of borrow assets account;&#x20;
  * `repayAmount`: the amount of repaid assets;
  * `accountBorrows`: the account borrow the assets;
  * `totalBorrows`: total borrow assets form the account;
  * `borrowIndex`: the index of this borrow order.

***

### **repayBorrowBehalf**

Calling this method repays a borrow belonging to borrower.

```solidity
function repayBorrowBehalf(address borrower) external payable
```

* **Parameter description:**
  * `borrower`: the account with the debt being payed off.
  * `msg.value`: the amount to repay.
* **Returns:** None, reverts on error.

***

### **Mint**

Calling this method supplies assets into the market and receives jTokens in exchange.

```solidity
function mint() external payable
```

* **Parameter description:**
  * `msg.value`: the amount of TRX to supply.
* **Returns:** None, reverts on error.

**📅 Event**

```solidity
Mint(address minter, uint mintAmount, uint mintTokens)
```

* Emits when user successfully mint.
  * `minter`: operate supply assets into the market;
  * `mintAmount`: the amount of supplied assets;
  * `mintTokens`: the tokens need to mint.

***

### **Redeem**

Calling this method redeems jTokens in exchange for the underlying asset and accrues interest whether or not the operation succeeds.

```solidity
function redeem(uint redeemTokens) external returns (uint)
```

* **Parameter description:**
  * redeemTokens: the number of jTokens to redeem into underlying.
* **Returns:** 0 for success, reverts on error.

**📅 Event**

```solidity
Redeem(address redeemer, uint redeemAmount, uint redeemTokens)
```

* Emits when user successfully redeem.
  * `redeemer`: operate redeem jTokens;
  * `redeemAmount`: the amount of redeem assets;
  * `redeemTokens`: the tokens need to redeem.

***

### **RedeemUnderlying**

Calling this method redeems jTokens in exchange for a specified amount of underlying asset.

```solidity
function redeemUnderlying(uint redeemAmount) external returns (uint)
```

* **Parameter description:**
  * redeemAmount: the amount of underlying to redeem.
* **Returns:** 0 for success, reverts on error.

***

### **Transfer**

Calling this method transfers a specified amount of jtokens to the destination. This action will fail if the account's liquidity become negative due to the transfer.

```solidity
function transfer(address dst, uint256 amount) external nonReentrant returns (bool)
```

* **Parameter description:**
  * `dst`: the receiver's address.
  * `amount`: amount of token to be transferred.
* **Returns:** A boolean value indicating whether or not the transfer succeeded.

***

### **Liquidate Borrow（jTrc20）**

By calling liquidateBorrow function of the corresponding jTrc20 contract (e.g. jUSDT), accounts whose liquidity does not meet the market requirement for collateralization will be liquidated by other users to restore the account liquidity to a normal level (i.e. higher than the market requirement for collateralization). In the event of liquidation, liquidators may repay part or 50% of the loan for the borrower. Liquidators will be given a proportion of the borrower's collateral as an incentive.

```solidity
function liquidateBorrow(address borrower, uint repayAmount, address jTokenCollateral) returns (uint)
```

* **Parameter description:**
  * borrower: address of a liquidated account.
  * repayAmount: amount of token to be repaid in the event of liquidation (measured in the borrowed asset).
  * jTokenCollateral: address of the jTOKEN contract to set aside the collateralized asset of a borrower.
* **Returns:** None, reverts on error.

***

### **Liquidate Borrow（jTRX）**

By calling the liquidateBorrow function of the jTRX contract, accounts whose liquidity does not meet the market requirement for collateralization will be liquidated by other users to restore the account liquidity to a normal level (i.e., higher than the market requirement for collateralization). In the event of liquidation, liquidators may repay part or 50% of the loan for the borrower. Liquidators will be given a proportion of the borrower's collateral as an incentive.

```solidity
function liquidateBorrow(address borrower, address jTokenCollateral) payable
```

* **Parameter description:**
  * `borrower`: address of a liquidated account.
  * `jTokenCollateral`: address of the jTRX contract to set aside the collateralized asset of a borrower.
  * `msg.value`: amount of TRX to be repaid in the event of liquidation (measured in SUN).
* **Returns:** No return. If any error occurs, the transaction will be reverted.

**📅 Event**

```solidity
LiquidateBorrow(address liquidator, address borrower, uint repayAmount, address cTokenCollateral, uint seizeTokens)
```

* Emits when user successfully liquidate borrow order.
  * `liquidator`: operate liquidation;
  * `borrower`: address of a liquidated account;
  * `repayAmount`: the amount of repaid assets;
  * `cTokenCollateral`: address of the jTRX contract to set aside the collateralized asset of a borrower.
  * `seizeTokens`: the tokens need to be liquidated.

***

## Error Code And Failure info <a href="#error-code-and-failure-info" id="error-code-and-failure-info"></a>

{% tabs %}
{% tab title="Error Codes" %}
<table><thead><tr><th width="211">Code</th><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>0</td><td>NO_ERROR</td><td>Not a failure.</td></tr><tr><td>1</td><td>UNAUTHORIZED</td><td>The sender is not authorized to perform this action.</td></tr><tr><td>2</td><td>BAD_INPUT</td><td>An invalid argument was supplied by the caller.</td></tr><tr><td>3</td><td>COMPTROLLER_REJECTION</td><td>The action would violate the comptroller policy.</td></tr><tr><td>4</td><td>COMPTROLLER_CALCULATION_ERROR</td><td>An internal calculation has failed in the comptroller.</td></tr><tr><td>5</td><td>INTEREST_RATE_MODEL_ERROR</td><td>The interest rate model returned an invalid value.</td></tr><tr><td>6</td><td>INVALID_ACCOUNT_PAIR</td><td>The specified combination of accounts is invalid.</td></tr><tr><td>7</td><td>INVALID_CLOSE_AMOUNT_REQUESTED</td><td>The amount to liquidate is invalid.</td></tr><tr><td>8</td><td>INVALID_COLLATERAL_FACTOR</td><td>The collateral factor is invalid.</td></tr><tr><td>9</td><td>MATH_ERROR</td><td>A math calculation error occurred.</td></tr><tr><td>10</td><td>MARKET_NOT_FRESH</td><td>Interest has not been properly accrued.</td></tr><tr><td>11</td><td>MARKET_NOT_LISTED</td><td>The market is not currently listed by its comptroller.</td></tr><tr><td>12</td><td>TOKEN_INSUFFICIENT_ALLOWANCE</td><td>ERC-20 contract must <em>allow</em> Money Market contract to call transferFrom. The current allowance is either 0 or less than the requested supply, repayBorrow or liquidate amount.</td></tr><tr><td>13</td><td>TOKEN_INSUFFICIENT_BALANCE</td><td>Caller does not have sufficient balance in the ERC-20 contract to complete the desired action.</td></tr><tr><td>14</td><td>TOKEN_INSUFFICIENT_CASH</td><td>The market does not have a sufficient cash balance to complete the transaction. You may attempt this transaction again later.</td></tr><tr><td>15</td><td>TOKEN_TRANSFER_IN_FAILED</td><td>Failure in ERC-20 when transfering token into the market.</td></tr><tr><td>16</td><td>TOKEN_TRANSFER_OUT_FAILED</td><td>Failure in ERC-20 when transfering token out of the market.</td></tr></tbody></table>
{% endtab %}

{% tab title="Failure Info" %}
| Code | Name                                                              |
| ---- | ----------------------------------------------------------------- |
| 0    | ACCEPT\_ADMIN\_PENDING\_ADMIN\_CHECK                              |
| 1    | ACCRUE\_INTEREST\_ACCUMULATED\_INTEREST\_CALCULATION\_FAILED      |
| 2    | ACCRUE\_INTEREST\_BORROW\_RATE\_CALCULATION\_FAILED               |
| 3    | ACCRUE\_INTEREST\_NEW\_BORROW\_INDEX\_CALCULATION\_FAILED         |
| 4    | ACCRUE\_INTEREST\_NEW\_TOTAL\_BORROWS\_CALCULATION\_FAILED        |
| 5    | ACCRUE\_INTEREST\_NEW\_TOTAL\_RESERVES\_CALCULATION\_FAILED       |
| 6    | ACCRUE\_INTEREST\_SIMPLE\_INTEREST\_FACTOR\_CALCULATION\_FAILED   |
| 7    | BORROW\_ACCUMULATED\_BALANCE\_CALCULATION\_FAILED                 |
| 8    | BORROW\_ACCRUE\_INTEREST\_FAILED                                  |
| 9    | BORROW\_CASH\_NOT\_AVAILABLE                                      |
| 10   | BORROW\_FRESHNESS\_CHECK                                          |
| 11   | BORROW\_NEW\_TOTAL\_BALANCE\_CALCULATION\_FAILED                  |
| 12   | BORROW\_NEW\_ACCOUNT\_BORROW\_BALANCE\_CALCULATION\_FAILED        |
| 13   | BORROW\_MARKET\_NOT\_LISTED                                       |
| 14   | BORROW\_COMPTROLLER\_REJECTION                                    |
| 15   | LIQUIDATE\_ACCRUE\_BORROW\_INTEREST\_FAILED                       |
| 16   | LIQUIDATE\_ACCRUE\_COLLATERAL\_INTEREST\_FAILED                   |
| 17   | LIQUIDATE\_COLLATERAL\_FRESHNESS\_CHECK                           |
| 18   | LIQUIDATE\_COMPTROLLER\_REJECTION                                 |
| 19   | LIQUIDATE\_COMPTROLLER\_CALCULATE\_AMOUNT\_SEIZE\_FAILED          |
| 20   | LIQUIDATE\_CLOSE\_AMOUNT\_IS\_UINT\_MAX                           |
| 21   | LIQUIDATE\_CLOSE\_AMOUNT\_IS\_ZERO                                |
| 22   | LIQUIDATE\_FRESHNESS\_CHECK                                       |
| 23   | LIQUIDATE\_LIQUIDATOR\_IS\_BORROWER                               |
| 24   | LIQUIDATE\_REPAY\_BORROW\_FRESH\_FAILED                           |
| 25   | LIQUIDATE\_SEIZE\_BALANCE\_INCREMENT\_FAILED                      |
| 26   | LIQUIDATE\_SEIZE\_BALANCE\_DECREMENT\_FAILED                      |
| 27   | LIQUIDATE\_SEIZE\_COMPTROLLER\_REJECTION                          |
| 28   | LIQUIDATE\_SEIZE\_LIQUIDATOR\_IS\_BORROWER                        |
| 29   | LIQUIDATE\_SEIZE\_TOO\_MUCH                                       |
| 30   | MINT\_ACCRUE\_INTEREST\_FAILED                                    |
| 31   | MINT\_COMPTROLLER\_REJECTION                                      |
| 32   | MINT\_EXCHANGE\_CALCULATION\_FAILED                               |
| 33   | MINT\_EXCHANGE\_RATE\_READ\_FAILED                                |
| 34   | MINT\_FRESHNESS\_CHECK                                            |
| 35   | MINT\_NEW\_ACCOUNT\_BALANCE\_CALCULATION\_FAILED                  |
| 36   | MINT\_NEW\_TOTAL\_SUPPLY\_CALCULATION\_FAILED                     |
| 37   | MINT\_TRANSFER\_IN\_FAILED                                        |
| 38   | MINT\_TRANSFER\_IN\_NOT\_POSSIBLE                                 |
| 39   | REDEEM\_ACCRUE\_INTEREST\_FAILED                                  |
| 40   | REDEEM\_COMPTROLLER\_REJECTION                                    |
| 41   | REDEEM\_EXCHANGE\_TOKENS\_CALCULATION\_FAILED                     |
| 42   | REDEEM\_EXCHANGE\_AMOUNT\_CALCULATION\_FAILED                     |
| 43   | REDEEM\_EXCHANGE\_RATE\_READ\_FAILED                              |
| 44   | REDEEM\_FRESHNESS\_CHECK                                          |
| 45   | REDEEM\_NEW\_ACCOUNT\_BALANCE\_CALCULATION\_FAILED                |
| 46   | REDEEM\_NEW\_TOTAL\_SUPPLY\_CALCULATION\_FAILED                   |
| 47   | REDEEM\_TRANSFER\_OUT\_NOT\_POSSIBLE                              |
| 48   | REDUCE\_RESERVES\_ACCRUE\_INTEREST\_FAILED                        |
| 49   | REDUCE\_RESERVES\_ADMIN\_CHECK                                    |
| 50   | REDUCE\_RESERVES\_CASH\_NOT\_AVAILABLE                            |
| 51   | REDUCE\_RESERVES\_FRESH\_CHECK                                    |
| 52   | REDUCE\_RESERVES\_VALIDATION                                      |
| 53   | REPAY\_BEHALF\_ACCRUE\_INTEREST\_FAILED                           |
| 54   | REPAY\_BORROW\_ACCRUE\_INTEREST\_FAILED                           |
| 55   | REPAY\_BORROW\_ACCUMULATED\_BALANCE\_CALCULATION\_FAILED          |
| 56   | REPAY\_BORROW\_COMPTROLLER\_REJECTION                             |
| 57   | REPAY\_BORROW\_FRESHNESS\_CHECK                                   |
| 58   | REPAY\_BORROW\_NEW\_ACCOUNT\_BORROW\_BALANCE\_CALCULATION\_FAILED |
| 59   | REPAY\_BORROW\_NEW\_TOTAL\_BALANCE\_CALCULATION\_FAILED           |
| 60   | REPAY\_BORROW\_TRANSFER\_IN\_NOT\_POSSIBLE                        |
| 61   | SET\_COLLATERAL\_FACTOR\_OWNER\_CHECK                             |
| 62   | SET\_COLLATERAL\_FACTOR\_VALIDATION                               |
| 63   | SET\_COMPTROLLER\_OWNER\_CHECK                                    |
| 64   | SET\_INTEREST\_RATE\_MODEL\_ACCRUE\_INTEREST\_FAILED              |
| 65   | SET\_INTEREST\_RATE\_MODEL\_FRESH\_CHECK                          |
| 66   | SET\_INTEREST\_RATE\_MODEL\_OWNER\_CHECK                          |
| 67   | SET\_MAX\_ASSETS\_OWNER\_CHECK                                    |
| 68   | SET\_ORACLE\_MARKET\_NOT\_LISTED                                  |
| 69   | SET\_PENDING\_ADMIN\_OWNER\_CHECK                                 |
| 70   | SET\_RESERVE\_FACTOR\_ACCRUE\_INTEREST\_FAILED                    |
| 71   | SET\_RESERVE\_FACTOR\_ADMIN\_CHECK                                |
| 72   | SET\_RESERVE\_FACTOR\_FRESH\_CHECK                                |
| 73   | SET\_RESERVE\_FACTOR\_BOUNDS\_CHECK                               |
| 74   | TRANSFER\_COMPTROLLER\_REJECTION                                  |
| 75   | TRANSFER\_NOT\_ALLOWED                                            |
| 76   | TRANSFER\_NOT\_ENOUGH                                             |
| 77   | TRANSFER\_TOO\_MUCH                                               |
{% endtab %}
{% endtabs %}
