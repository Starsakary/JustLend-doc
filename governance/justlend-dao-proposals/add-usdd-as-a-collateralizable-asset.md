# Add USDD as a Collateralizable Asset

#### Details:

* 1\. Add a new USDD price oracle for USDD/TRX;
* 2\. Add support for jUSDD on JustLend smart contracts; [View](https://tronscan.org/#/contract/TX7kybeP6UwTBRHLNPYmswFESHfyjm9bAS/code)
* 3\. Set the collateral factor of USDD at 0%; [View](https://tronscan.org/#/contract/TX7kybeP6UwTBRHLNPYmswFESHfyjm9bAS/code)
* 4\. Set the reserve factor of USDD at 5%; [View](https://tronscan.org/#/contract/TX7kybeP6UwTBRHLNPYmswFESHfyjm9bAS/code)
* 5\. The interest rate will surge when the utilization ratio exceeds 80%.

The proposal is to enable supply/borrow of USDD (TRC20) on JustLend and have the oracle to provide trusted USDD/TRX prices.

**Market Parameters:**

USDD is a TRON-based decentralized stablecoin issued by TRON DAO Reserve.

The collateral factor is set at 0%, while its reserve factor is set at 5% to encourage more supply and borrow of the asset.

The USDD market adopts the same interest model as USDT does, where the interest rate rockets to a higher tier when the utilization rate exceeds 80%. Its APY hits 25.46% when the utilization rate reaches 100%. Supply and borrow APYs at different utilization rates are as follows:

| Utilization rate | Borrow Base APY | Supply Base APY |
| ---------------- | --------------- | --------------- |
| 0%               | 0.00%           | 0.00%           |
| 10%              | 0.63%           | 0.06%           |
| 20%              | 1.25%           | 0.24%           |
| 30%              | 1.88%           | 0.53%           |
| 40%              | 2.50%           | 0.95%           |
| 50%              | 3.13%           | 1.48%           |
| 60%              | 3.75%           | 2.14%           |
| 70%              | 4.38%           | 2.91%           |
| 80%              | 5.00%           | 3.80%           |
| 90%              | 15.90%          | 13.59%          |
| 100%             | 26.80%          | 25.46%          |

#### Contract

The smart contract of jUSDD is upgradeable. Once a new feature is added, the administrative access of the contract will be transferred over to the smart contract used by JustLend for voting & governance. In other words, the administrative access of jUSDD won't belong to any individual or organization. Rather, it will be transferred over to the “hybrid smart contract” for voting & governance.

The smart contract of jUSDD has been reviewed by the JustLend team and community developers.

The oracle price system has already started to feed USDD/TRX prices, but no changes have been made to the oracle's smart contracts.

We believe that adding support for the USDD market facilitates the growth of JustLend and further improves its ecosystem.
