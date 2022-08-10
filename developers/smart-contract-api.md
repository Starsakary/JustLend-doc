# Smart Contract API

### Smart Contract Address

| Name       | Contract Address                   |
| ---------- | ---------------------------------- |
| Unitroller | TGjYzgCyPobsNS9n6WcbdLVR9dH7mWqFx7 |
| jTRX       | TE2RzoSV3wFK99w6J9UnnZ4vLfXYoxvRwP |
| jUSDD      | TX7kybeP6UwTBRHLNPYmswFESHfyjm9bAS |
| jUSDT      | TXJgMdjVX5dKiQaUi9QobwNxtSQaFqccvd |
| jUSDJ      | TL5x9MtSnDy537FXKx53yAaHRRNdg9TkkA |
| jSUNOLD    | TGBr8uh9jBVHJhhkwSJvQN2ZAKzVkxDmno |
| jSUN       | TPXDpkg9e3eZzxqxAUyke9S4z4pGJBJw9e |
| jWIN       | TRg6MnpsFXc82ymUPgf5qbj59ibxiEDWvv |
| jBTC       | TLeEu311Cbw63BcmMHDgDLu7fnk9fqGcqT |
| jETH       | TR7BUFRQeq1w5jAZf1FKx85SHuX6PfMqsV |
| jJST       | TWQhCXaWz4eHK4Kd1ErSDHjMFPoPc9czts |
| jWBTT      | TUY54PVeH6WCcYCd6ZXXoBDsHytN9V5PXt |
| jTUSD      | TSXv71Fy5XdL3Rh2QfBoUu3NAaM4sMif8R |
| jUSDC      | TNSBA6KvSvMoTqQcEgpVK7VhHT3z7wifxy |
| jNFT       | TFpPyDCKvNFgos3g3WVsAqMrdqhB81JXHE |
| jBTT       | TUaUHU9Dy8x5yNi1pKnFYqHWojot61Jfto |

#### Query interface

**Liquidation Incentive**

function liquidationIncentiveMantissa() view returns (uint)

**Feature description:** By calling the liquidationIncentiveMantissa function of the Unitroller contract, liquidation incentives can be inquired. Liquidators will be given a proportion of the borrower's collateral as an incentive, which is defined as liquidation incentive. This is to encourage liquidators to perform liquidation of underwater accounts.

**Parameter description:** N/A

Returns：

**getAccountLiquidity function**

getAccountLiquidity(address account) view returns (uint, uint, uint)

**Feature description:** By calling the getAccountLiquidity function of the Unitroller contract, account information can be accessed through an account's address to determine whether the account should be liquidated or not.

**Parameter description**:

| Parameter | Type    | Description  |
| --------- | ------- | ------------ |
| account   | address | User address |

**Return value:**

| uint256 | error (error code, 0 means success)                                                                                                                     |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| uint256 | liquidity                                                                                                                                               |
| uint256 | shortfall (When the value is bigger than 0, the current account does not meet the market requirement for collateralization and needs to be liquidated.) |

{% hint style="info" %}
Note: There should be at most one non-zero value between liquidity and shortfall.
{% endhint %}

#### Modification Interface

**Liquidate Borrow（jTrc20）**

function liquidateBorrow(address borrower, uint repayAmount, address jTokenCollateral) returns (uint)

**Feature description:** By calling liquidateBorrow function of the corresponding jTrc20 contract (e.g. jUSDT), accounts whose liquidity does not meet the market requirement for collateralization will be liquidated by other users to restore the account liquidity to a normal level (i.e. higher than the market requirement for collateralization). In the event of liquidation, liquidators may repay part or 50% of the loan for the borrower. Liquidators will be given a proportion of the borrower's collateral as an incentive.

**Parameter description:**

| Parameter        | Type    | Description                                                                               |
| ---------------- | ------- | ----------------------------------------------------------------------------------------- |
| borrower         | address | Address of a liquidated account                                                           |
| repayAmount      | uint256 | Amount of token to be repaid in the event of liquidation (measured in the borrowed asset) |
| jTokenCollateral | address | Address of the jTOKEN contract to set aside the collateralized asset of a borrower        |

**Returns:**

**Liquidate Borrow（jTRX）**

function liquidateBorrow(address borrower, address jTokenCollateral) payable

**Function description:** By calling the liquidateBorrow function of the jTRX contract, accounts whose liquidity does not meet the market requirement for collateralization will be liquidated by other users to restore the account liquidity to a normal level (i.e., higher than the market requirement for collateralization). In the event of liquidation, liquidators may repay part or 50% of the loan for the borrower. Liquidators will be given a proportion of the borrower's collateral as an incentive.

**Parameter description:**

| Parameter        | Type    | Description                                                                      |
| ---------------- | ------- | -------------------------------------------------------------------------------- |
| borrower         | address | Address of a liquidated account                                                  |
| msg.value        | uint256 | Amount of TRX to be repaid in the event of liquidation (measured in SUN)         |
| jTokenCollateral | address | Address of the jTRX contract to set aside the collateralized asset of a borrower |

**Returns:**

No return. If any error occurs, the transaction will be reverted.

#### Appendix

**jToken Decimals**

All jTokens on JustLend have 8 decimal places.

**jToken Balance Query**

We suggest you use Tronweb to query jToken balance. For example, you can follow the steps below to query jUSDT balance:

```javascript
//Example 1
async function triggercontract(){
  let instance =
awaittronWeb.contract().at('TXJgMdjVX5dKiQaUi9QobwNxtSQaFqccvd');
  let res = await instance.balanceOf().call();
  console.log(res);
}

triggercontract();

//Example 2
async function triggercontract(){
  let instance =
awaittronWeb.contract().at('TXJgMdjVX5dKiQaUi9QobwNxtSQaFqccvd');
  let res = await instance["balanceOf"]().call();
  console.log(res);
}

triggercontract();
```
