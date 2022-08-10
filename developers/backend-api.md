# Backend API

#### Market Information

**GET**: https://openapi.just.network/lend/jtoken

**Parameters**: N/A

**Returns**:

```json
{
	"code": 0,
	"message": "SUCCESS",
	"data": {
		"tokenList": [{
			"address": "TDchKqQ8T2BhGfL7m2DfWfxp5eqa1we5hu", //address of jToken
			"underlyingAddress": "T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb", //address of the underlying asset 
			"underlyingDecimal": 6, //decimal of the underlying asset
			"underlyingPriceInTrx": "1.000000", //price of the underlying asset (in TRX)
			"symbol": "jTRX", //symbol of jToken
			"underlyingSymbol": "TRX", //symbol of the underlying asset
			"collateralFactor": "0.750000000000000000", //collateral factor
			"reserveFactor": "0.100000000000000000", //reserve factor
			"exchangeRate": "0.010004175484185673", //exchange rate between jToken and the corresponding Token 
			"borrowRate": "0.032076159971472000", //borrowing APY
			"supplyRate": "0.003486211548048000", //supplying APY
			"cash": "540965.907046000000000000", //amount of cash in the contract
			"reserves": "27.193286000000000000", //amount of reserve in the contract
			"totalBorrows": "74296.866915000000000000", //total borrowed amount
			"totalSupply": "61497879.72507555", //total supply of jToken
		}]
	}
}
```

#### Account Information

**GET**: https://openapi.just.network/lend/account

**Parameter**:

<table><thead><tr><th>Parameter</th><th>Type</th><th data-type="select">Required</th><th>Description</th></tr></thead><tbody><tr><td>addresses</td><td>String</td><td></td><td>Query of the address list; separated by commas when there are multiple addresses</td></tr><tr><td>minBorrowValueInTrx</td><td>String</td><td></td><td>Query of the minimum value of borrowed asset in TRX</td></tr><tr><td>maxHealth</td><td>String</td><td></td><td></td></tr><tr><td>pageNo</td><td>int</td><td></td><td></td></tr><tr><td>pageSize</td><td>int</td><td></td><td></td></tr></tbody></table>

**Returns:**

```json
{
	"code": 0,
	"data": {
		"totalPage": 1, // total pages
		"list": [{
			"address": "TTJJvoPKGVKnbUBPVTn1Zi8o6k3EfFDXVS", //user address
			"health": "1.051123", //health value, when health value is smaller than 1, the account can be liquidated
			"tokens": [{
				"address": "TTUtHMoRLR97C3kd6gyGPWb1ReCWDcRAyA", //jToken address
				"entered": 1, //collateral switch for the underlying asset; 1 means open, 0 means closed
				"underlyingSymbol": "USDT" //token symbol of the underlying asset
				"borrowBalanceUnderlying": "690.34863897809162688555918", //balance of the underlying asset for borrowing 
				"supplyBalanceUnderlying": "15.00524721487779258852751065", //balance of the underlying asset for supplying
			}],
			"totalBorrowValueInTrx": "1823305.071152", //total loan of the account (in TRX)
			"totalCollateralValueInTrx": "1916517.351443" //total collateral of the account (in TRX)
		}],
		"totalCount": 1 //total number of entries
	},
	"message": "SUCCESS"
}
```

[https://www.justlend.link/docs/JustLend-api-cn.pdf](https://www.justlend.link/docs/JustLend-api-cn.pdf)
