# API

## Backend API

### Market Information

**GET**: https://openapi.just.network/lend/jtoken&#x20;

**Parameters**: N/A&#x20;

**Returns**:

![](<../../.gitbook/assets/image (2).png>)

### Account Information&#x20;

**GET**: https://openapi.just.network/lend/account&#x20;

**Parameter**:

<table><thead><tr><th>Parameter</th><th>Type</th><th data-type="select">Required</th><th>Description</th></tr></thead><tbody><tr><td>addresses</td><td>String</td><td></td><td>Query of the address list; separated by commas when there are multiple addresses</td></tr><tr><td>minBorrowValueInTrx</td><td>String</td><td></td><td>Query of the minimum value of borrowed asset in TRX</td></tr><tr><td>maxHealth</td><td>String</td><td></td><td></td></tr><tr><td>pageNo</td><td>int</td><td></td><td></td></tr><tr><td>pageSize</td><td>int</td><td></td><td></td></tr></tbody></table>

**Returns:**

![](<../../.gitbook/assets/image (3).png>)

## Smart Contract API

### Smart Contract Address

![](<../../.gitbook/assets/image (4).png>)

### Query Interface



[https://www.justlend.link/docs/JustLend-api-cn.pdf](https://www.justlend.link/docs/JustLend-api-cn.pdf)
