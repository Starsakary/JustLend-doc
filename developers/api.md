# API

The JUST API provides three groups of endpoints, relating to Supply and Borrow Market (SBM), Staked TRX Market, and the Energy Rental Market.

### Base URL

The JustLend Protocol API is decentralized and hosted on IPFS, mapping the following DNS names to their respective gateways:

**Mainnet:** _https://openapi.just.network_



## **Supply and Borrow Market**

### **Get Supply and Borrow Market Information**

Return the list of market information.

```markup
https://openapi.just.network/lend/jtoken
```

> Try this endpoint in your [**browser**](https://openapi.just.network/lend/jtoken) 🔗&#x20;

{% tabs %}
{% tab title="Request" %}
**Query Parameters**

No Parameters
{% endtab %}

{% tab title="Response" %}
**Body**

<table><thead><tr><th width="215">Parameter</th><th width="215">Tpye</th><th></th><th data-hidden></th></tr></thead><tbody><tr><td>code</td><td>integer</td><td>0 means success</td><td></td></tr><tr><td>message</td><td>string</td><td>description information</td><td></td></tr><tr><td>data</td><td>map&#x3C;string, map&#x3C;string, string>></td><td>token information of each market</td><td></td></tr></tbody></table>

**Output**

```solidity
Sample：
{
    "code": 0,
    "data": {
        "tokenList": [
            {
                "address": "TE2RzoSV3wFK99w6J9UnnZ4vLfXYoxvRwP",
                "borrowIndex": "1224530412174750380",
                "borrowRate": "0.064673716541040000",
                "cash": "349909392.537020000000000000",
                "collateralFactor": "0.750000000000000000",
                "exchangeRate": "0.010448063811832339",
                "reserveFactor": "0.100000000000000000",
                "reserves": "2300647.881336000000000000",
                "supplyRate": "0.009044500002192000",
                "symbol": "jTRX",
                "totalBorrows": "63951044.565948000000000000",
                "totalSupply": "39391010299.49149122",
                "underlyingAddress": "T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb",
                "underlyingDecimal": 6,
                "underlyingPriceInTrx": "1.000000000000000000000000",
                "underlyingSymbol": "TRX"
            },
            ... 
        ]
    },
    "message": "SUCCESS"
}
```
{% endtab %}
{% endtabs %}

### **Get Account Information**

Return the list of user account information.

```markup
https://openapi.just.network/lend/account
```

> Try this endpoint in your [**browser**](https://openapi.just.network/lend/account) 🔗&#x20;

{% tabs %}
{% tab title="Request" %}
**Query Parameters**

<table><thead><tr><th width="248">Parameter</th><th width="150">Tpye</th><th></th><th data-hidden></th></tr></thead><tbody><tr><td>address</td><td>string</td><td>query of the addresses list   </td><td></td></tr><tr><td>minBorrowValueInTrx</td><td>string</td><td>query the minimum value of borrowed asset in TRX</td><td></td></tr><tr><td>mathHealth</td><td>string</td><td>query the max health level</td><td></td></tr><tr><td>pageNo </td><td>integer</td><td>page number</td><td></td></tr><tr><td>pageSize </td><td>integer</td><td>page size, maximum 1000</td><td></td></tr></tbody></table>
{% endtab %}

{% tab title="Response" %}
**Body**

<table><thead><tr><th width="215">Parameter</th><th width="215">Tpye</th><th></th><th data-hidden></th></tr></thead><tbody><tr><td>code</td><td>integer</td><td>0 means success</td><td></td></tr><tr><td>message</td><td>string</td><td>description information</td><td></td></tr><tr><td>data</td><td>map&#x3C;string, map&#x3C;string, string>></td><td>user token information</td><td></td></tr></tbody></table>

**Output**

```solidity
Sample：
{
    "code": 0,
    "data": {
        "tokenList": [
            {
                "address": "TE2RzoSV3wFK99w6J9UnnZ4vLfXYoxvRwP",
                "borrowIndex": "1224530412174750380",
                "borrowRate": "0.064673716541040000",
                "cash": "349909392.537020000000000000",
                "collateralFactor": "0.750000000000000000",
                "exchangeRate": "0.010448063811832339",
                "reserveFactor": "0.100000000000000000",
                "reserves": "2300647.881336000000000000",
                "supplyRate": "0.009044500002192000",
                "symbol": "jTRX",
                "totalBorrows": "63951044.565948000000000000",
                "totalSupply": "39391010299.49149122",
                "underlyingAddress": "T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb",
                "underlyingDecimal": 6,
                "underlyingPriceInTrx": "1.000000000000000000000000",
                "underlyingSymbol": "TRX"
            },
            ... 
        ]
    },
    "message": "SUCCESS"
}
```
{% endtab %}
{% endtabs %}

### Get User Supply Mining Reward&#x20;

Returns the user's supply mining reward  information.

```markup
https://openapi.just.network/mining/reward?address=
```

> Try this endpoint in your [**browser**](https://openapi.just.network/mining/reward?address=) 🔗&#x20;

{% tabs %}
{% tab title="Request" %}
**Query Parameters**

<table><thead><tr><th width="155">Parameter</th><th width="179">Tpye</th><th></th><th data-hidden></th></tr></thead><tbody><tr><td>address</td><td>string</td><td>query of the user address</td><td></td></tr></tbody></table>
{% endtab %}

{% tab title="Response" %}
**Body**

<table><thead><tr><th width="215">Parameter</th><th width="215">Tpye</th><th></th><th data-hidden></th></tr></thead><tbody><tr><td>code</td><td>integer</td><td>0 means success</td><td></td></tr><tr><td>message</td><td>string</td><td>description information</td><td></td></tr><tr><td>data</td><td>map&#x3C;string, map&#x3C;string, RewardInfo>></td><td>reward information for each pool</td><td></td></tr></tbody></table>

**Output Parameters**

<table><thead><tr><th width="182">Parameter</th><th width="140">Tpye</th><th></th><th data-hidden></th></tr></thead><tbody><tr><td>lastReward</td><td>string</td><td>last period reward</td><td></td></tr><tr><td>currReward</td><td>string</td><td>current period reward</td><td></td></tr><tr><td>lastStartTime</td><td>string</td><td>last period start time</td><td></td></tr><tr><td>lastEndTime</td><td>string</td><td>last period end time</td><td></td></tr><tr><td>lastRewardStatus</td><td>string</td><td>whether the reward has been distributed in the previous period, 1 not distributed 2 distributed</td><td></td></tr><tr><td>currStartTime</td><td>string</td><td>current period start time</td><td></td></tr><tr><td>currEndTime</td><td>string</td><td>current period end time</td><td></td></tr><tr><td>currRewardStatus</td><td>string</td><td>the current reward status, 1 mining 2 settlement</td><td></td></tr><tr><td>currPhase</td><td>string</td><td>current phase</td><td></td></tr><tr><td>price</td><td>string</td><td>reward token price</td><td></td></tr></tbody></table>

```solidity
Sample：
{
    "code":0,
    "data":{
        "TKM7w4qFmkXQLEF2MgrQroBYpd5TY7i1pq":{
            "USDDNEW":{
                "currStartTime":"2022-10-27 19:25",
                "lastEndTime":"2022-10-27 19:25",
                "price":"1.000000000000000000",
                "lastStartTime":"2022-10-28 21:00",
                "currEndTime":"2022-11-25 21:00",
                "lastReward":"127.995654",
                "currReward":"137327.054386",
                "currPhase": "24",
                "lastRewardStatus":"2"
            }
        }
    },
    "message":"SUCCESS"
}
```
{% endtab %}
{% endtabs %}

### **Get User Supply Mining Reward Distributions**

Return the user's all reward cycles, including those that have been claimed and those that have not been claimed. Filter out the cycles where claimed is **false**, that is, the **unclaimed** reward cycles.

```
https://openapi.just.network/mining/distributions?address=
```

> Try this endpoint in your [**browser**](https://openapi.just.network/mining/distributions?address=) 🔗&#x20;

{% tabs %}
{% tab title="Request" %}
**Query Parameters**

<table><thead><tr><th width="158">Parameter</th><th width="179">Tpye</th><th></th><th data-hidden></th></tr></thead><tbody><tr><td>address</td><td>string</td><td>query of the user address</td><td></td></tr></tbody></table>
{% endtab %}

{% tab title="Response" %}
**Body**

<table><thead><tr><th width="215">Parameter</th><th width="215">Tpye</th><th></th><th data-hidden></th></tr></thead><tbody><tr><td>code</td><td>integer</td><td>0 means success</td><td></td></tr><tr><td>message</td><td>string</td><td>description information</td><td></td></tr><tr><td>data</td><td>map&#x3C;string, map&#x3C;string, RewardInfo>></td><td>reward information for each mining period</td><td></td></tr></tbody></table>

**Output Parameters**

<table><thead><tr><th width="182">Parameter</th><th width="140">Tpye</th><th></th><th data-hidden></th></tr></thead><tbody><tr><td>amount</td><td>string</td><td>amount of rewards</td><td></td></tr><tr><td>claimed</td><td>boolean</td><td>whether the reward has been claimed</td><td></td></tr><tr><td>index</td><td>string</td><td>parameter index for merkle verification</td><td></td></tr><tr><td>merkleIndex</td><td>string</td><td>parameter merkleIndex for merkle verification</td><td></td></tr><tr><td>proof</td><td>list</td><td>parameters for merkle verification merkleProof</td><td></td></tr><tr><td>merkleRoot</td><td>string</td><td>merkleRoot for merkle verification</td><td></td></tr></tbody></table>

```solidity
Sample：
{
    "code": 0,
    "data": {
        "22": {
            "amount": "0xf748f6f4d54861",
            "claimed": true,
            "index": "0x1801",
            "merkleIndex": "0x00",
            "proof": [
                "0x655c3609bae4d1db3d905b25d3bdd8ec79b83f5288b5756921d02fa7127714de",
                "0xa9a6df5b336a2e52018a079eaec6c477952d56ecfdfdb0745160037c865a83d8",
                "0xdd91a2295b96128ea32196f6a2228970dc22342f957be76c4297b517236a4daf",
                "0xa29184873648fbf6d5fe67db3fc8036c145f4b5e7861c1c35bfa2606826a5d7d",
                "0xdcd82bc3bea2e7a7a1d1a6502ab93c293f92f7e9928f0826d731da9d2a537b41",
                "0xfda762589af4cd6812450f1f8b5b199094a81bde881d4f5f645b4dc32f74547c",
                "0x3fb4c0c830f88413b6b9fd5f6f2a237ea36f1399f292e1303387f0499bda712d",
                "0x2d16294f4390501b16eb8f94f5e8396b76d5307e9a38b099b6cbc5c083aa0534",
                "0x2eabb0d475248f1f7ab63542a2c21f056f80d230cd6fb3c76afd3c32984115be",
                "0x6cf17401cda4a192dc9e05bb5f67ac0e4d20834a93a6db85ddcd9a971720f2d8",
                "0x8a137a9c92302ec8b9194fb313fa8074d308092ba3238e43d57b1972fbda9a33",
                "0xd93c82752e5202d4006fb01a4af3b1381d6f6ae8871f392f993f474b2dc71d20",
                "0xfacc476d236171a5fb8177283188d125756254e18865ce4fbd3367c1dec989e4",
                "0xeed1fc29326b1156d0b44d431e4e3a5b21a78e70d156db235662da428421d2a8",
                "0xb3c366576c84eb2e9a6abb9f9676ef6483a2a4945e4b32482e6ab8c2d8630971"
            ],
            "merkleRoot": "0x560729bcf5ab7fc1916f6d67b22d59b2d007577174e1d6c6b77bd078598ef788"
        },
        "23": {
            "amount": "0xf748f6f4d54861",
            "claimed": false,
            "index": "0x1801",
            "merkleIndex": "0x01",
            "proof": [
                "0x655c3609bae4d1db3d905b25d3bdd8ec79b83f5288b5756921d02fa7127714de",
                "0xa9a6df5b336a2e52018a079eaec6c477952d56ecfdfdb0745160037c865a83d8",
                "0xdd91a2295b96128ea32196f6a2228970dc22342f957be76c4297b517236a4daf",
                "0xa29184873648fbf6d5fe67db3fc8036c145f4b5e7861c1c35bfa2606826a5d7d",
                "0xdcd82bc3bea2e7a7a1d1a6502ab93c293f92f7e9928f0826d731da9d2a537b41",
                "0xfda762589af4cd6812450f1f8b5b199094a81bde881d4f5f645b4dc32f74547c",
                "0x3fb4c0c830f88413b6b9fd5f6f2a237ea36f1399f292e1303387f0499bda712d",
                "0x2d16294f4390501b16eb8f94f5e8396b76d5307e9a38b099b6cbc5c083aa0534",
                "0x2eabb0d475248f1f7ab63542a2c21f056f80d230cd6fb3c76afd3c32984115be",
                "0x6cf17401cda4a192dc9e05bb5f67ac0e4d20834a93a6db85ddcd9a971720f2d8",
                "0x8a137a9c92302ec8b9194fb313fa8074d308092ba3238e43d57b1972fbda9a33",
                "0xd93c82752e5202d4006fb01a4af3b1381d6f6ae8871f392f993f474b2dc71d20",
                "0xfacc476d236171a5fb8177283188d125756254e18865ce4fbd3367c1dec989e4",
                "0xeed1fc29326b1156d0b44d431e4e3a5b21a78e70d156db235662da428421d2a8",
                "0xb3c366576c84eb2e9a6abb9f9676ef6483a2a4945e4b32482e6ab8c2d8630971"
            ],
            "merkleRoot": "0x560729bcf5ab7fc1916f6d67b22d59b2d007577174e1d6c6b77bd078598ef788"
        },
        "24": {
            "amount": "0xf748f6f4d54861",
            "claimed": false,
            "index": "0x1801",
            "merkleIndex": "0x02",
            "proof": [
                "0x655c3609bae4d1db3d905b25d3bdd8ec79b83f5288b5756921d02fa7127714de",
                "0xa9a6df5b336a2e52018a079eaec6c477952d56ecfdfdb0745160037c865a83d8",
                "0xdd91a2295b96128ea32196f6a2228970dc22342f957be76c4297b517236a4daf",
                "0xa29184873648fbf6d5fe67db3fc8036c145f4b5e7861c1c35bfa2606826a5d7d",
                "0xdcd82bc3bea2e7a7a1d1a6502ab93c293f92f7e9928f0826d731da9d2a537b41",
                "0xfda762589af4cd6812450f1f8b5b199094a81bde881d4f5f645b4dc32f74547c",
                "0x3fb4c0c830f88413b6b9fd5f6f2a237ea36f1399f292e1303387f0499bda712d",
                "0x2d16294f4390501b16eb8f94f5e8396b76d5307e9a38b099b6cbc5c083aa0534",
                "0x2eabb0d475248f1f7ab63542a2c21f056f80d230cd6fb3c76afd3c32984115be",
                "0x6cf17401cda4a192dc9e05bb5f67ac0e4d20834a93a6db85ddcd9a971720f2d8",
                "0x8a137a9c92302ec8b9194fb313fa8074d308092ba3238e43d57b1972fbda9a33",
                "0xd93c82752e5202d4006fb01a4af3b1381d6f6ae8871f392f993f474b2dc71d20",
                "0xfacc476d236171a5fb8177283188d125756254e18865ce4fbd3367c1dec989e4",
                "0xeed1fc29326b1156d0b44d431e4e3a5b21a78e70d156db235662da428421d2a8",
                "0xb3c366576c84eb2e9a6abb9f9676ef6483a2a4945e4b32482e6ab8c2d8630971"
            ],
            "merkleRoot": "0x560729bcf5ab7fc1916f6d67b22d59b2d007577174e1d6c6b77bd078598ef788"
        }
    },
    "message":"SUCCESS"
}
```
{% endtab %}
{% endtabs %}

### **Get Reward Pool APY Information**

Return the APY information of each pool's USDD rewards.

```markup
https://openapi.just.network/mining/apy
```

> Try this endpoint in your [**browser**](https://openapi.just.network/mining/apy) 🔗&#x20;

{% tabs %}
{% tab title="Request" %}
**Query Parameters**

No Parameters.
{% endtab %}

{% tab title="Response" %}
**Body**

<table><thead><tr><th width="215">Parameter</th><th width="215">Tpye</th><th></th><th data-hidden></th></tr></thead><tbody><tr><td>code</td><td>integer</td><td>0 means success</td><td></td></tr><tr><td>message</td><td>string</td><td>description information</td><td></td></tr><tr><td>data</td><td>map&#x3C;string, map&#x3C;string, string>></td><td>APY information of each pool</td><td></td></tr></tbody></table>

**Output Parameters**

<table><thead><tr><th width="182">Parameter</th><th width="140">Tpye</th><th></th><th data-hidden></th></tr></thead><tbody><tr><td>USDD</td><td>integer</td><td>amount of rewards</td><td></td></tr></tbody></table>

```solidity
Sample：
{
    "code": 0,
    "data": {
        "TKM7w4qFmkXQLEF2MgrQroBYpd5TY7i1pq": {
            "USDD": "147.52469583"
        },
        "TBGCExAC3iRk5EXAVXEer3bwhTi9EN9rht": {
            "USDD": "0.00141447"
        },
        "TPovsintcLMh9udvXgt45jvb1RYQ86imnL": {
            "USDD": "0.00202115"
        },
        "TZ51C31Zh3qBSRBnTmbcuRX1rqyhzoCe8Q": {
            "USDD": "0.00000000"
        },
        "TMBRbGrkx2d3m8nAZWezFzSyJG6KrEGjj1": {
            "USDD": "0.25934355"
        },
        "TXNg6MoDTDEZKwPzTAdnzdQwfTF4LdU1QW": {
            "USDD": "0.01498227"
        },
        "TYVr8QECrDkf6EAiKehok5FF3ckWV5Ds7k": {
            "USDD": "0.00000023"
        },
        "TYf16sZLR9uXpm63bXsRCNQMQFvqqvXQ2t": {
            "USDD": "9.88180497"
        },
        "TT6Qk1qrBM4MgyskYZx5pjeJjvv3fdL2ih": {
            "USDD": "0.02702548"
        },
        "TMsoCkr2yhukcGnvjhVk8Gj541BCQPEHwm": {
            "USDD": "2.77067603"
        },
        "TRM3faiTDB9D4Vq4mwezUeo5rQLzCDqGSE": {
            "USDD": "0.18871094"
        },
        "TAj5XxJtkrEDvTT7mTsS3uqMcvSCp82cnR": {
            "USDD": "0.00000000"
        },
        "TXFDQpnXxNSEsxo8R3brAaTMWk4Nv6uGji": {
            "USDD": "14.83349289"
        },
        "TQ7JUeFHWAxNru1Yp8YjPP3c7guZSe4e2E": {
            "USDD": "0.00000000"
        },
        "TLBoPBNAfrBPxq3rTQzSKzTXrRjjAqaiJ6": {
            "USDD": "0.01210423"
        }
    },
    "message": "SUCCESS"
}
```
{% endtab %}
{% endtabs %}

## **Staked TRX Market**

### **Get Staked TRX and Energy Rental Markets Information**

Return  the sTRX staking and energy rental markets information.

```markup
https://openapi.just.network/lend/strx
```

> Try this endpoint in your [**browser**](https://openapi.just.network/lend/strx) 🔗&#x20;

{% tabs %}
{% tab title="Request" %}
**Query Parameters**

No Parameters
{% endtab %}

{% tab title="Response" %}
**Body**

<table><thead><tr><th width="215">Parameter</th><th width="215">Tpye</th><th></th><th data-hidden></th></tr></thead><tbody><tr><td>code</td><td>integer</td><td>0 means success</td><td></td></tr><tr><td>message</td><td>string</td><td>description information</td><td></td></tr><tr><td>data</td><td>map&#x3C;string, map&#x3C;string, string>></td><td>rent and stake information of each market</td><td></td></tr></tbody></table>

**Output**

```solidity
Sample：
{
    "code": 0,
    "data": {
        "rentInfo": {
            "priceFor10KEnergByBurn": "4.20000000",
            "priceFor10KEnergByRent": "0.62942700",
            "priceFor10KEnergByStake": "751.26757603",
            "rentMarketAddress": "TU2MJ5Veik1LRAgjeSzEdvmDYx7mefJZvd",
            "totalDelegatedEnergyRate": "0.09000960",
            "totalDelegatedEnergyTrx": "44655753.977400"
        },
        "stakeInfo": {
            "decimal": "18",
            "exchangeRate": "1.066512539052733131",
            "rentReserveFactor": "0.200000000000000000",
            "reserves": "6388303.396213",
            "rewardReserveFactor": "0.200000000000000000",
            "strxAddress": "TU3kjFuhtEo42tsCBtfYUAZxoqQ4yuSLQ5",
            "supplyRate": "0.05523306",
            "symbol": "sTRX",
            "totalSupply": "465151516.636180968215445743",
            "totalSupplyUsd": "60500822.89916245",
            "totalUnderlying": "496089925.051883",
            "trxPrice": "0.121955354954719223",
            "underlyingDecimal": "6"
        }
    },
    "message": "SUCCESS"
}
```
{% endtab %}
{% endtabs %}

### **Get user data of sTRX liquidity staking**

Returns the list of user sTRX staking information.

```markup
https://openapi.just.network/lend/strxStake/account
```

> Try this endpoint in your [**browser**](https://openapi.just.network/lend/strxStake/account) 🔗&#x20;

{% tabs %}
{% tab title="Request" %}
**Query Parameters**

<table><thead><tr><th width="248">Parameter</th><th width="150">Tpye</th><th></th><th data-hidden></th></tr></thead><tbody><tr><td>address</td><td>string</td><td>query of the addresses list   </td><td></td></tr><tr><td>pageNo </td><td>integer</td><td>page number, starting from 1</td><td></td></tr><tr><td>pageSize </td><td>integer</td><td>page size, maximum 1000</td><td></td></tr><tr><td>minStrxBalance</td><td>string</td><td>minimum amount of sTRX held</td><td></td></tr></tbody></table>
{% endtab %}

{% tab title="Response" %}
**Body**

<table><thead><tr><th width="215">Parameter</th><th width="215">Tpye</th><th></th><th data-hidden></th></tr></thead><tbody><tr><td>code</td><td>integer</td><td>0 means success</td><td></td></tr><tr><td>message</td><td>string</td><td>description information</td><td></td></tr><tr><td>data</td><td>map&#x3C;string, map&#x3C;string, string>></td><td>user staking sTRX information</td><td></td></tr></tbody></table>

**Output**

```solidity
Sample：
{
    "code": 0,
        "data": {
            "totalPage": 61,
            "list": [
                {
                    "address": "TU3kjFuhtEo42tsCBtfYUAZxoqQ4yuSLQ5",
                    "availableWithdrawAmount": "150865439.643028",
                    "unstakingAmount": "5839206.921368",
                    "sTRXBalance": "1.000000000000000000"
                },
                {
                    "address": "TUTde1uYe37xK6G4k3EkxiHheHkNxka1Yo",
                    "availableWithdrawAmount": "1.000000",
                    "unstakingAmount": "0.000000",
                    "sTRXBalance": "99.000000000000000000"
                },
                {
                    "address": "TXU8sXdSJYzhMrxWKQmoEXffvaWcFXbQXE",
                    "availableWithdrawAmount": "0.000007",
                    "unstakingAmount": "0.000000",
                    "sTRXBalance": "10.850239779339813291"
                },
                ...
            ],
        "totalCount": 3029
    },
    "message": "SUCCESS"
}
```
{% endtab %}
{% endtabs %}

## **Energy Rental Market**

### **Get user data of resource rent (only supports Energy Rental currently)**

Return the list of user energy rental information.

```markup
https://openapi.just.network/lend/rentResource/account
```

> Try this endpoint in your [**browser**](https://openapi.just.network/lend/rentResource/account) 🔗&#x20;

{% tabs %}
{% tab title="Request" %}
**Query Parameters**

<table><thead><tr><th width="252">Parameter</th><th width="150">Tpye</th><th></th><th data-hidden></th></tr></thead><tbody><tr><td>address</td><td>string</td><td>query of the addresses list   </td><td></td></tr><tr><td>pageNo </td><td>integer</td><td>page number, starting from 1</td><td></td></tr><tr><td>pageSize </td><td>integer</td><td>page size, maximum 1000</td><td></td></tr><tr><td>minStrxBalance</td><td>string</td><td>minimum amount of sTRX held</td><td></td></tr><tr><td>maxRemainingRentAmount </td><td>string</td><td>maximum remaining rent</td><td></td></tr></tbody></table>
{% endtab %}

{% tab title="Response" %}
**Body**

<table><thead><tr><th width="215">Parameter</th><th width="215">Tpye</th><th></th><th data-hidden></th></tr></thead><tbody><tr><td>code</td><td>integer</td><td>0 means success</td><td></td></tr><tr><td>message</td><td>string</td><td>description information</td><td></td></tr><tr><td>data</td><td>map&#x3C;string, map&#x3C;string, string>></td><td>user rent information</td><td></td></tr></tbody></table>

**Output**

```solidity
Sample：
{
    "code": 0,
    "data": {
        "totalPage": 847,
        "list": [
            {
                "rentRemainAmount": "0.000000",
                "receiver": "TWdWEHRLPBVGsXhwjSUv45XwnsfUHXydJa",
                "delegatedAmount": "0.000000",
                "rentAmountPerDay": "0.000000",
                "rentType": "Energy",
                "renter": "TWdWEHRLPBVGsXhwjSUv45XwnsfUHXydJa"
            },
            {
                "rentRemainAmount": "0.000000",
                "receiver": "TFTosnoA2Th26qezdxmXMEsLrEerstzzHm",
                "delegatedAmount": "0.000000",
                "rentAmountPerDay": "0.000000",
                "rentType": "Energy",
                "renter": "TFTosnoA2Th26qezdxmXMEsLrEerstzzHm"
            },
            {
                "rentRemainAmount": "0.000000",
                "receiver": "TMvjdJCDj619ihifGLnKSLBx9Xf1oqck3C",
                "delegatedAmount": "0.000000",
                "rentAmountPerDay": "0.000000",
                "rentType": "Energy",
                "renter": "TMvjdJCDj619ihifGLnKSLBx9Xf1oqck3C"
            },
            ...
        ],
        "totalCount": 42310
    },
    "message": "SUCCESS"
}
```
{% endtab %}
{% endtabs %}
