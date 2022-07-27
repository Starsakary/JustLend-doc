# Add BTT as a collateralizable asset

## Add BTT as a collateralizable asset

### Details

1. Add a new BTT price oracle for BTT/TRX;
2. Add support for jBTT on JustLend smart contracts; [View](https://tronscan.org/#/contract/TUaUHU9Dy8x5yNi1pKnFYqHWojot61Jfto/code)
3. Set the collateral factor of BTT at 60%; [View](https://tronscan.org/#/contract/TUaUHU9Dy8x5yNi1pKnFYqHWojot61Jfto/code)
4. Set the reserve factor of BTT at 20%; [View](https://tronscan.org/#/contract/TUaUHU9Dy8x5yNi1pKnFYqHWojot61Jfto/code)
5. The interest rate will surge when the utilization ratio exceeds 80%.
6. Modify the maximum number of markets supporting collateralizing.

The proposal is to enable the supplying/borrowing of BTT (TRC20) on JustLend and have the oracle provide trusted BTT/TRX prices.



#### Market Parameters: <a href="#h.km4kcslj0e1" id="h.km4kcslj0e1"></a>

[BitTorrent (BTT)](https://tronscan.org/#/token20/TAFjULxiVgT4qWk6UZwjqwZXTSaGaqnVp4) is a TRC20 token based on the TRON network, bringing in the value of BitTorrent Chain to the TRON network and empowering the JUST token in the ecosystem.

BitTorrent Chain, the first scalable heterogeneous cross-chain interoperability protocol on TRON, adopts the POS (Proof of Stake) mechanism and leverages side chains for the scaling of smart contracts. It now facilitates transactions across chains such as Ethereum, TRON and BSC, with more public chains to be supported in the future. A new era of connecting all chains is on the horizon.

As it is an emerging market, the collateral factor of BTT is set at 60%, while its reserve factor is set at 20%.

The BTT market adopts the similar interest model as WIN does, where the interest rate rockets to a higher tier when the utilization rate exceeds 80%. Its Supply Base APY hits 89.6% when the utilization rate reaches 100%. Supply and borrow APYs at different utilization rates are as follows:

| Utilization Ratio | Borrow Base APY | Supply Base APY |
| ----------------- | --------------- | --------------- |
| 0%                | 2.00%           | 0.00%           |
| 10%               | 5.75%           | 0.46%           |
| 20%               | 9.50%           | 1.52%           |
| 30%               | 13.25%          | 3.18%           |
| 40%               | 17.00%          | 5.44%           |
| 50%               | 20.75%          | 8.30%           |
| 60%               | 24.50%          | 11.76%          |
| 70%               | 28.25%          | 15.82%          |
| 80%               | 32.00%          | 20.48%          |
| 90%               | 72.00%          | 51.84%          |
| 100%              | 112.00%         | 89.60%          |

### Contract

The smart contract of jBTT is upgradeable. Once a new feature is added, the administrative access of the contract will be transferred over to the smart contract used by JustLend for voting & governance. In other words, the administrative access of jBTT won't belong to any individual or organization. Rather, it will be transferred over to the “hybrid smart contract” for voting & governance.

The smart contract of jBTT has been reviewed by the JustLend team and community developers.

The oracle price system has already started to feed BTT/TRX prices, but no changes have been made to the oracle's smart contracts.

We believe that adding support for the BTT market facilitates the growth of JustLend and further improves its ecosystem.
