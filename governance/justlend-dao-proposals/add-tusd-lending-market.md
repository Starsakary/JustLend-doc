# Add TUSD Lending Market

### Add TUSD as a collateralizable asset

#### Details

1. Add a new TUSD price oracle for TUSD/TRX;
2. Add support for jTUSD on JustLend smart contracts; [View](https://tronscan.io/#/contract/TSXv71Fy5XdL3Rh2QfBoUu3NAaM4sMif8R/code)
3. Set the collateral factor of TUSD at 75%; [View](https://tronscan.io/#/contract/TSXv71Fy5XdL3Rh2QfBoUu3NAaM4sMif8R/code)
4. Set the reserve factor of TUSD at 5%; [View](https://tronscan.io/#/contract/TSXv71Fy5XdL3Rh2QfBoUu3NAaM4sMif8R/code)
5. The interest rate will surge when the utilization ratio exceeds 80%.

The proposal is to enable supply/borrow of TUSD (TRC20) on JustLend and have the oracle to provide trusted TUSD/TRX prices.

**Market Parameters**

TUSD is a TRON-based TRC20 token that brings the value of TrueUSD onto the TRON network to power tokens in the JUST ecosystem.

TrueUSD is the first asset token among the TrueCurrencies built by TrustToken. TrueCurrencies consist of stablecoins for several fiat currencies, which follow similar legal and technical standards to TrueUSD. Its price on JustLend is consistent with that of the ERC20 [TUSD](https://etherscan.io/token/0x0000000000085d4780B73119b644AE5ecd22b376). TrueUSD is priced conservatively at $1. As this is a new market, a more conservative interest rate model (smooth model) is needed to find out the supply and demand of TUSD (TRC20) on JustLend.

Due to the large amount of circulation, the collateral factor is set at 75%, while its reserve factor is set at 5% to encourage more supply and borrow of the asset.

The TUSD market adopts the same interest model as USDJ does, where the interest rate rockets to a higher tier when the utilization rate exceeds 80%. Its APY hits 25.46% when the utilization rate reaches 100%. Supply and borrow APYs at different utilization rates are as follows:

| Utilization rate | Borrow APY | Supply APY |
| ---------------- | ---------- | ---------- |
| 0%               | 0.00%      | 0.00%      |
| 10%              | 0.63%      | 0.06%      |
| 20%              | 1.25%      | 0.24%      |
| 30%              | 1.88%      | 0.53%      |
| 40%              | 2.5%       | 0.95%      |
| 50%              | 3.13%      | 1.48%      |
| 60%              | 3.75%      | 2.14%      |
| 70%              | 4.38%      | 2.91%      |
| 80%              | 5%         | 3.80%      |
| 90%              | 15.9%      | 13.59%     |
| 100%             | 26.8%      | 25.46%     |

#### Contract

The smart contract of jTUSD is upgradeable. Once a new feature is added, the administrative access of the contract will be transferred over to the smart contract used by JustLend for voting & governance. In other words, the administrative access of jTUSD won't belong to any individual or organization. Rather, it will be transferred over to the “hybrid smart contract” for voting & governance.

The smart contract of jTUSD has been reviewed by the JustLend team and community developers.

The oracle price system has already started to feed TUSD/TRX prices, but no changes have been made to the oracle's smart contracts.

We believe that adding support for the TUSD market facilitates the growth of JustLend and further improves its ecosystem.
