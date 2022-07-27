# Backend API

## Backend API

### Market Information

**GET**: https://openapi.just.network/lend/jtoken&#x20;

**Parameters**: N/A&#x20;

**Returns**:

![](<../../.gitbook/assets/image (2) (1).png>)

```json
{
	"code": 0,
	"message": "SUCCESS",
	"data": {
		"tokenList": [{
			"address": "TDchKqQ8T2BhGfL7m2DfWfxp5eqa1we5hu", //address of jToken
			"underlyingAddress": "T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb", //address of the underlying
			asset "underlyingDecimal": 6, //decimal of the underlying asset
			"underlyingPriceInTrx": "1.000000", //price of the underlying asset (in TRX)
			"symbol": "jTRX", //symbol of jToken
			"underlyingSymbol": "TRX", //symbol of the underlying asset
			"collateralFactor": "0.750000000000000000", //collateral factor
			"reserveFactor": "0.100000000000000000", //reserve factor
			"exchangeRate": "0.010004175484185673", //exchange rate between jToken and the
			corresponding Token "borrowRate": "0.032076159971472000", //borrowing APY
			"supplyRate": "0.003486211548048000", //supplying APY
			"cash": "540965.907046000000000000", //amount of cash in the contract
			"reserves": "27.193286000000000000", //amount of reserve in the contract
			"totalBorrows": "74296.866915000000000000", //total borrowed amount
			"totalSupply": "61497879.72507555", //total supply of jToken
		}]
	}
}
```

### Account Information&#x20;

**GET**: https://openapi.just.network/lend/account&#x20;

**Parameter**:

<table><thead><tr><th>Parameter</th><th>Type</th><th data-type="select">Required</th><th>Description</th></tr></thead><tbody><tr><td>addresses</td><td>String</td><td></td><td>Query of the address list; separated by commas when there are multiple addresses</td></tr><tr><td>minBorrowValueInTrx</td><td>String</td><td></td><td>Query of the minimum value of borrowed asset in TRX</td></tr><tr><td>maxHealth</td><td>String</td><td></td><td></td></tr><tr><td>pageNo</td><td>int</td><td></td><td></td></tr><tr><td>pageSize</td><td>int</td><td></td><td></td></tr></tbody></table>

**Returns:**

![](<../../.gitbook/assets/image (3) (1).png>)

##



[https://www.justlend.link/docs/JustLend-api-cn.pdf](https://www.justlend.link/docs/JustLend-api-cn.pdf)
