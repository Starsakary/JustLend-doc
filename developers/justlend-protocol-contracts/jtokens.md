# jTokens

### Introduction

Each asset supported by the Compound Protocol is integrated through a jToken contract, which is an [EIP-20](https://eips.ethereum.org/EIPS/eip-20)s as collateral.

jTokens are the primary means of interacting with the Compound Protocol; when a user mints, redeems, borrows, repays a borrow, liquidates a borrow, or transfers jTokens, she will do so using the jToken contract.

There are currently two types of jTokens: CErc20 and CEther. Though both types expose the EIP-20 interface, CErc20 wraps an underlying ERC-20 asset, while CEther simply wraps Ether itself. As such, the core functions which involve transferring an asset into the protocol have slightly different interfaces depending on the type, each of which is shown below.

#### How do jTokens earn interest?

Each market has its own Supply interest rate (APR). Interest isn't distributed; instead, simply by holding jTokens, you'll earn interest.

jTokens accumulates interest through their exchange rate — over time, each jToken becomes convertible into an increasing amount of it's underlying asset, even while the number of jTokens in your wallet stays the same.

#### Do I need to calculate the jToken exchange rate?

When a market is launched, the jToken exchange rate (how much ETH one cETH is worth) begins at 0.020000 — and increases at a rate equal to the compounding market interest rate. For example, after one year, the exchange rate might equal 0.021591.

Each user has the same jToken exchange rate; there’s nothing unique to your wallet that you have to worry about.

#### Can you walk me through an example?

Let’s say you supply 1,000 DAI to the Compound protocol, when the exchange rate is 0.020070; you would receive 49,825.61 cDAI (1,000/0.020070).

A few months later, you decide it’s time to withdraw your DAI from the protocol; the exchange rate is now 0.021591:

* Your 49,825.61 cDAI is now equal to 1,075.78 DAI (49,825.61 \* 0.021591)
* You could withdraw 1,075.78 DAI, which would redeem all 49,825.61 cDAI
* Or, you could withdraw a portion, such as your original 1,000 DAI, which would redeem 46,315.59 cDAI (keeping 3,510.01 cDAI in your wallet)

#### How do I view my jTokens?

Each jToken is visible on [Etherscan](https://etherscan.io/tokens/label/compound), and you should be able to view them in the list of tokens associated with your address

jToken balances have been integrated into [Coinbase Wallet](https://itunes.apple.com/us/app/coinbase-wallet/id1278383455) and MetaMask; other wallets may add jToken support

#### Can I transfer jTokens?

Yes, but exercise caution! By transferring jTokens, you’re transferring your balance of the underlying asset inside the Compound protocol. If you send a jToken to your friend, your balance (viewable in the [Compound Interface](https://app.compound.finance/)) will decline, and your friend will see their balance increase.

A jToken transfer will fail if the account has entered that jToken market and the transfer would have put the account into a state of negative liquidity.

### Mint

The mint function transfers an asset into the protocol, which begins accumulating interest based on the current Supply Rate for the asset. The user receives a quantity of jTokens equal to the underlying tokens supplied, divided by the current Exchange Rate.

**CErc20**

```js
function mint(uint mintAmount) returns (uint)
```

* msg.sender: The account which shall supply the asset, and own the minted jTokens.
* mintAmount: The amount of the asset to be supplied, in units of the underlying asset.
* RETURN: 0 on success, otherwise an Error code

Before supplying an asset, users must first [approve](https://eips.ethereum.org/EIPS/eip-20#approve) the jToken to access their token balance.

**CEther**

```js
function mint() payable
```

* msg.valuepayable: The amount of ether to be supplied, in wei.
* msg.sender: The account which shall supply the ether, and own the minted jTokens.
* RETURN: No return, reverts on error.

**Solidity**

```js
Erc20 underlying = Erc20(0xToken...);     // get a handle for the underlying asset contract
CErc20 jToken = CErc20(0x3FDA...);        // get a handle for the corresponding jToken contract
underlying.approve(address(jToken), 100); // approve the transfer
assert(jToken.mint(100) == 0);            // mint the jTokens and assert there is no error
```

**Web3 1.0**

```js
const jToken = CEther.at(0x3FDB...);
await jToken.methods.mint().send({from: myAccount, value: 50});
```

### Redeem

The redeem function converts a specified quantity of jTokens into the underlying asset, and returns them to the user. The amount of underlying tokens received is equal to the quantity of jTokens redeemed, multiplied by the current Exchange Rate. The amount redeemed must be less than the user's Account Liquidity and the market's available liquidity.

**CErc20 / CEther**

```js
function redeem(uint redeemTokens) returns (uint)
```

* msg.sender: The account to which redeemed funds shall be transferred.
* redeemTokens: The number of jTokens to be redeemed.
* RETURN: 0 on success, otherwise an Error code

**Solidity**

```js
CEther jToken = CEther(0x3FDB...);
require(jToken.redeem(7) == 0, "something went wrong");
```

**Web3 1.0**

```js
const jToken = CErc20.at(0x3FDA...);
jToken.methods.redeem(1).send({from: ...});
```

### Redeem Underlying

The redeem underlying function converts jTokens into a specified quantity of the underlying asset, and returns them to the user. The amount of jTokens redeemed is equal to the quantity of underlying tokens received, divided by the current Exchange Rate. The amount redeemed must be less than the user's Account Liquidity and the market's available liquidity.

**CErc20 / CEther**

```js
function redeemUnderlying(uint redeemAmount) returns (uint)
```

* msg.sender: The account to which redeemed funds shall be transferred.
* redeemAmount: The amount of underlying to be redeemed.
* RETURN: 0 on success, otherwise an Error code

**Solidity**

```js
CEther jToken = CEther(0x3FDB...);
require(jToken.redeemUnderlying(50) == 0, "something went wrong");
```

**Web3 1.0**

```js
const jToken = CErc20.at(0x3FDA...);
jToken.methods.redeemUnderlying(10).send({from: ...});
```

### Borrow

The borrow function transfers an asset from the protocol to the user, and creates a borrow balance which begins accumulating interest based on the Borrow Rate for the asset. The amount borrowed must be less than the user's Account Liquidity and the market's available liquidity.

To borrow Ether, the borrower must be 'payable' (solidity).

**CErc20 / CEther**

```js
function borrow(uint borrowAmount) returns (uint)
```

* msg.sender: The account to which borrowed funds shall be transferred.
* borrowAmount : The amount of the underlying asset to be borrowed.
* RETURN: 0 on success, otherwise an Error code

**Solidity**

```js
CErc20 jToken = CErc20(0x3FDA...);
require(jToken.borrow(100) == 0, "got collateral?");
```

**Web3 1.0**

```js
const jToken = CEther.at(0x3FDB...);
await jToken.methods.borrow(50).send({from: 0xMyAccount});
```

### Repay Borrow

The repay function transfers an asset into the protocol, reducing the user's borrow balance.

**CErc20**

```js
function repayBorrow(uint repayAmount) returns (uint)
```

* msg.sender: The account which borrowed the asset, and shall repay the borrow.
* repayAmount: The amount of the underlying borrowed asset to be repaid. A value of -1 (i.e. 2256 - 1) can be used to repay the full amount.
* RETURN: 0 on success, otherwise an Error code

Before repaying an asset, users must first [approve](https://eips.ethereum.org/EIPS/eip-20#approve) the jToken to access their token balance.

**CEther**

```js
function repayBorrow() payable
```

* msg.valuepayable: The amount of ether to be repaid, in wei.
* msg.sender: The account which borrowed the asset, and shall repay the borrow.
* RETURN: No return, reverts on error.

**Solidity**

```js
CEther jToken = CEther(0x3FDB...);
require(jToken.repayBorrow.value(100)() == 0, "transfer approved?");
```

**Web3 1.0**

```js
const jToken = CErc20.at(0x3FDA...);
jToken.methods.repayBorrow(10000).send({from: ...});
```

### Repay Borrow Behalf

The repay function transfers an asset into the protocol, reducing the target user's borrow balance.

**CErc20**

```js
function repayBorrowBehalf(address borrower, uint repayAmount) returns (uint)
```

* msg.sender: The account which shall repay the borrow.
* borrower: The account which borrowed the asset to be repaid.
* repayAmount: The amount of the underlying borrowed asset to be repaid. A value of -1 (i.e. 2256 - 1) can be used to repay the full amount.
* RETURN: 0 on success, otherwise an Error code

Before repaying an asset, users must first [approve](https://eips.ethereum.org/EIPS/eip-20#approve) the jToken to access their token balance.

**CEther**

```js
function repayBorrowBehalf(address borrower) payable
```

* msg.valuepayable: The amount of ether to be repaid, in wei.
* msg.sender: The account which shall repay the borrow.
* borrower: The account which borrowed the asset to be repaid.
* RETURN: No return, reverts on error.

**Solidity**

```js
CEther jToken = CEther(0x3FDB...);
require(jToken.repayBorrowBehalf.value(100)(0xBorrower) == 0, "transfer approved?");
```

**Web3 1.0**

```js
const jToken = CErc20.at(0x3FDA...);
await jToken.methods.repayBorrowBehalf(0xBorrower, 10000).send({from: 0xPayer});
```

### Transfer

Transfer is an ERC-20 method that allows accounts to send tokens to other Ethereum addresses. A jToken transfer will fail if the account has entered that jToken market and the transfer would have put the account into a state of negative liquidity.

**CErc20 / CEther**

```js
function transfer(address recipient, uint256 amount) returns (bool)
```

* recipient: The transfer recipient address.
* amount: The amount of jTokens to transfer.
* RETURN: Returns a boolean value indicating whether or not the operation succeeded.

**Solidity**

```js
CEther jToken = CEther(0x3FDB...);
jToken.transfer(0xABCD..., 100000000000);
```

**Web3 1.0**

```js
const jToken = CErc20.at(0x3FDA...);
await jToken.methods.transfer(0xABCD..., 100000000000).send({from: 0xSender});
```

### Liquidate Borrow

A user who has negative account liquidity is subject to liquidation by other users of the protocol to return his/her account liquidity back to positive (i.e. above the collateral requirement). When a liquidation occurs, a liquidator may repay some or all of an outstanding borrow on behalf of a borrower and in return receive a discounted amount of collateral held by the borrower; this discount is defined as the liquidation incentive.

A liquidator may close up to a certain fixed percentage (i.e. close factor) of any individual outstanding borrow of the underwater account. Unlike in v1, liquidators must interact with each jToken contract in which they wish to repay a borrow and seize another asset as collateral. When collateral is seized, the liquidator is transferred jTokens, which they may redeem the same as if they had supplied the asset themselves. Users must approve each jToken contract before calling liquidate (i.e. on the borrowed asset which they are repaying), as they are transferring funds into the contract.

**CErc20**

```js
function liquidateBorrow(address borrower, uint amount, address collateral) returns (uint)
```

* msg.sender: The account which shall liquidate the borrower by repaying their debt and seizing their collateral.
* borrower: The account with negative account liquidity that shall be liquidated.
* repayAmount: The amount of the borrowed asset to be repaid and converted into collateral, specified in units of the underlying borrowed asset.
* jTokenCollateral: The address of the jToken currently held as collateral by a borrower, that the liquidator shall seize.
* RETURN: 0 on success, otherwise an Error code

Before supplying an asset, users must first [approve](https://eips.ethereum.org/EIPS/eip-20#approve) the jToken to access their token balance.

**CEther**

```js
function liquidateBorrow(address borrower, address jTokenCollateral) payable
```

* msg.valuepayable: The amount of ether to be repaid and converted into collateral, in wei.
* msg.sender: The account which shall liquidate the borrower by repaying their debt and seizing their collateral.
* borrower: The account with negative account liquidity that shall be liquidated.
* jTokenCollateral: The address of the jToken currently held as collateral by a borrower, that the liquidator shall seize.
* RETURN: No return, reverts on error.

**Solidity**

```js
CEther jToken = CEther(0x3FDB...);
CErc20 jTokenCollateral = CErc20(0x3FDA...);
require(jToken.liquidateBorrow.value(100)(0xBorrower, jTokenCollateral) == 0, "borrower underwater??");
```

**Web3 1.0**

```js
const jToken = CErc20.at(0x3FDA...);
const jTokenCollateral = CEther.at(0x3FDB...);
await jToken.methods.liquidateBorrow(0xBorrower, 33, jTokenCollateral).send({from: 0xLiquidator});
```

### Key Events

| Event                                                                                                               | Description                                 |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| Mint(address minter, uint mintAmount, uint mintTokens)                                                              | Emitted upon a successful Mint.             |
| Redeem(address redeemer, uint redeemAmount, uint redeemTokens)                                                      | Emitted upon a successful Redeem.           |
| Borrow(address borrower, uint borrowAmount, uint accountBorrows, uint totalBorrows)                                 | Emitted upon a successful Borrow.           |
| RepayBorrow(address payer, address borrower, uint repayAmount, uint accountBorrows, uint totalBorrows)              | Emitted upon a successful Repay Borrow.     |
| LiquidateBorrow(address liquidator, address borrower, uint repayAmount, address jTokenCollateral, uint seizeTokens) | Emitted upon a successful Liquidate Borrow. |

### Error Codes

| Code | Name                              | Description                                                                                                                                                                    |
| ---- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 0    | NO\_ERROR                         | Not a failure.                                                                                                                                                                 |
| 1    | UNAUTHORIZED                      | The sender is not authorized to perform this action.                                                                                                                           |
| 2    | BAD\_INPUT                        | An invalid argument was supplied by the caller.                                                                                                                                |
| 3    | COMPTROLLER\_REJECTION            | The action would violate the comptroller policy.                                                                                                                               |
| 4    | COMPTROLLER\_CALCULATION\_ERROR   | An internal calculation has failed in the comptroller.                                                                                                                         |
| 5    | INTEREST\_RATE\_MODEL\_ERROR      | The interest rate model returned an invalid value.                                                                                                                             |
| 6    | INVALID\_ACCOUNT\_PAIR            | The specified combination of accounts is invalid.                                                                                                                              |
| 7    | INVALID\_CLOSE\_AMOUNT\_REQUESTED | The amount to liquidate is invalid.                                                                                                                                            |
| 8    | INVALID\_COLLATERAL\_FACTOR       | The collateral factor is invalid.                                                                                                                                              |
| 9    | MATH\_ERROR                       | A math calculation error occurred.                                                                                                                                             |
| 10   | MARKET\_NOT\_FRESH                | Interest has not been properly accrued.                                                                                                                                        |
| 11   | MARKET\_NOT\_LISTED               | The market is not currently listed by its comptroller.                                                                                                                         |
| 12   | TOKEN\_INSUFFICIENT\_ALLOWANCE    | ERC-20 contract must _allow_ Money Market contract to call transferFrom. The current allowance is either 0 or less than the requested supply, repayBorrow or liquidate amount. |
| 13   | TOKEN\_INSUFFICIENT\_BALANCE      | Caller does not have sufficient balance in the ERC-20 contract to complete the desired action.                                                                                 |
| 14   | TOKEN\_INSUFFICIENT\_CASH         | The market does not have a sufficient cash balance to complete the transaction. You may attempt this transaction again later.                                                  |
| 15   | TOKEN\_TRANSFER\_IN\_FAILED       | Failure in ERC-20 when transfering token into the market.                                                                                                                      |
| 16   | TOKEN\_TRANSFER\_OUT\_FAILED      | Failure in ERC-20 when transfering token out of the market.                                                                                                                    |

### Failure Info

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

### Exchange Rate

Each jToken is convertible into an ever increasing quantity of the underlying asset, as interest accrues in the market. The exchange rate between a jToken and the underlying asset is equal to:

```js
exchangeRate = (getCash() + totalBorrows() - totalReserves()) / totalSupply()
```

**CErc20 / CEther**

```js
function exchangeRateCurrent() returns (uint)
```

* RETURN: The current exchange rate as an unsigned integer, scaled by 1 \* 10^(18 - 8 + Underlying Token Decimals).

**Solidity**

```js
CErc20 jToken = CToken(0x3FDA...);
uint exchangeRateMantissa = jToken.exchangeRateCurrent();
```

**Web3 1.0**

```js
const jToken = CEther.at(0x3FDB...);
const exchangeRate = (await jToken.methods.exchangeRateCurrent().call()) / 1e18;
```

Tip: note the use of call vs. send to invoke the function from off-chain without incurring gas costs.

### Get Cash

Cash is the amount of underlying balance owned by this jToken contract. One may query the total amount of cash currently available to this market.

**CErc20 / CEther**

```js
function getCash() returns (uint)
```

* RETURN: The quantity of underlying asset owned by the contract.

**Solidity**

```js
CErc20 jToken = CToken(0x3FDA...);
uint cash = jToken.getCash();
```

**Web3 1.0**

```js
const jToken = CEther.at(0x3FDB...);
const cash = (await jToken.methods.getCash().call());
```

### Total Borrow

Total Borrows is the amount of underlying currently loaned out by the market, and the amount upon which interest is accumulated to suppliers of the market.

**CErc20 / CEther**

```js
function totalBorrowsCurrent() returns (uint)
```

* RETURN: The total amount of borrowed underlying, with interest.

**Solidity**

```js
CErc20 jToken = CToken(0x3FDA...);
uint borrows = jToken.totalBorrowsCurrent();
```

**Web3 1.0**

```js
const jToken = CEther.at(0x3FDB...);
const borrows = (await jToken.methods.totalBorrowsCurrent().call());
```

### Borrow Balance

A user who borrows assets from the protocol is subject to accumulated interest based on the current borrow rate. Interest is accumulated every block and integrations may use this function to obtain the current value of a user's borrow balance with interest.

**CErc20 / CEther**

```js
function borrowBalanceCurrent(address account) returns (uint)
```

* account: The account which borrowed the assets.
* RETURN: The user's current borrow balance (with interest) in units of the underlying asset.

**Solidity**

```js
CErc20 jToken = CToken(0x3FDA...);
uint borrows = jToken.borrowBalanceCurrent(msg.caller);
```

**Web3 1.0**

```js
const jToken = CEther.at(0x3FDB...);
const borrows = await jToken.methods.borrowBalanceCurrent(account).call();
```

### Borrow Rate

At any point in time one may query the contract to get the current borrow rate per block.

**CErc20 / CEther**

```js
function borrowRatePerBlock() returns (uint)
```

* RETURN: The current borrow rate as an unsigned integer, scaled by 1e18.

**Solidity**

```js
CErc20 jToken = CToken(0x3FDA...);
uint borrowRateMantissa = jToken.borrowRatePerBlock();
```

**Web3 1.0**

```js
const jToken = CEther.at(0x3FDB...);
const borrowRate = (await jToken.methods.borrowRatePerBlock().call()) / 1e18;
```

### Total Supply

Total Supply is the number of tokens currently in circulation in this jToken market. It is part of the EIP-20 interface of the jToken contract.

**CErc20 / CEther**

```
function totalSujspply() returns (uint)
```

* RETURN: The total number of tokens in circulation for the market.

**Solidity**

```js
CErc20 jToken = CToken(0x3FDA...);
uint tokens = jToken.totalSupply();
```

**Web3 1.0**

```js
const jToken = CEther.at(0x3FDB...);
const tokens = (await jToken.methods.totalSupply().call());
```

### Underlying Balance

The user's underlying balance, representing their assets in the protocol, is equal to the user's jToken balance multiplied by the Exchange Rate.

**CErc20 / CEther**

```js
function balanceOfUnderlying(address account) returns (uint)
```

* account: The account to get the underlying balance of.
* RETURN: The amount of underlying currently owned by the account.

**Solidity**

```js
CErc20 jToken = CToken(0x3FDA...);
uint tokens = jToken.balanceOfUnderlying(msg.caller);
```

**Web3 1.0**

```js
const jToken = CEther.at(0x3FDB...);
const tokens = await jToken.methods.balanceOfUnderlying(account).call();
```

### Supply Rate

At any point in time one may query the contract to get the current supply rate per block. The supply rate is derived from the borrow rate, reserve factor and the amount of total borrows.

**CErc20 / CEther**

```js
function supplyRatePerBlock() returns (uint)
```

* RETURN: The current supply rate as an unsigned integer, scaled by 1e18.

**Solidity**

```js
CErc20 jToken = CToken(0x3FDA...);
uint supplyRateMantissa = jToken.supplyRatePerBlock();
```

**Web3 1.0**

```js
const jToken = CEther.at(0x3FDB...);
const supplyRate = (await jToken.methods.supplyRatePerBlock().call()) / 1e18;
```

### Total Reserves

Reserves are an accounting entry in each jToken contract that represents a portion of historical interest set aside as cash which can be withdrawn or transferred through the protocol's governance. A small portion of borrower interest accrues into the protocol, determined by the reserve factor.

**CErc20 / CEther**

```js
function totalReserves() returns (uint)
```

* RETURN: The total amount of reserves held in the market.

**Solidity**

```js
CErc20 jToken = CToken(0x3FDA...);
uint reserves = jToken.totalReserves();
```

**Web3 1.0**

```js
const jToken = CEther.at(0x3FDB...);
const reserves = (await jToken.methods.totalReserves().call());
```

### Reserve Factor

The reserve factor defines the portion of borrower interest that is converted into reserves.

**CErc20 / CEther**

```js
function reserveFactorMantissa() returns (uint)
```

* RETURN: The current reserve factor as an unsigned integer, scaled by 1e18.

**Solidity**

```js
CErc20 jToken = CToken(0x3FDA...);
uint reserveFactorMantissa = jToken.reserveFactorMantissa();
```

**Web3 1.0**

```js
const jToken = CEther.at(0x3FDB...);
const reserveFactor = (await jToken.methods.reserveFactorMantissa().call()) / 1e18;
```
