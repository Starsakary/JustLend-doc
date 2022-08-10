# Add SUN as a Collateralizable Asset

### Add SUN as a collateralizable asset

#### Details

1. Add a new SUN price oracle for SUN/TRX;
2. Add support for jSUN on JustLend smart contracts; [View](https://tronscan.org/#/contract/TPXDpkg9e3eZzxqxAUyke9S4z4pGJBJw9e/)
3. Set the collateral factor of SUN at 50%; [View](https://tronscan.org/#/contract/TPXDpkg9e3eZzxqxAUyke9S4z4pGJBJw9e/)
4. Set the reserve factor of SUN at 30%; [View](https://tronscan.org/#/contract/TPXDpkg9e3eZzxqxAUyke9S4z4pGJBJw9e/)
5. The interest rate will surge when the utilization ratio exceeds 45%.

The proposal is to enable supply/borrow of SUN (TRC20) on JustLend and have the oracle to provide trusted SUN/TRX prices.

**Market Parameters:**

\
SUN is a TRON network-based TRC20 token. SUN platform ([sun.io](https://sun.io/?lang=en-US#/home)) is TRON’s first integrated platform for stablecoin swap, stake-mining and self-governance. As a multi-purpose governance token on the SUN platform, SUN grants its holders a variety of rights and benefits including voting, governance, value capture, staking rewards, etc.

The collateral factor of SUN is set at 50%, while its reserve factor is set at 30%.

The SUN market adopts the similar interest model as SUNOLD does, where the interest rate rockets to a higher tier when the utilization rate exceeds 45%. Its Supply Base APY hits192.50% when the utilization rate reaches 100%. Supply and borrow APYs at different utilization rates are as follows:

| Utilization rate | Borrow Base APY | Supply Base APY |
| ---------------- | --------------- | --------------- |
| 0%               | 5.00%           | 0.00%           |
| 10%              | 16.11%          | 1.13%           |
| 20%              | 27.22%          | 3.81%           |
| 30%              | 38.33%          | 8.05%           |
| 40%              | 49.44%          | 13.84%          |
| 50%              | 75.00%          | 26.25%          |
| 60%              | 115.00%         | 48.30%          |
| 70%              | 155.00%         | 75.95%          |
| 80%              | 195.00%         | 109.20%         |
| 90%              | 235.00%         | 148.05%         |
| 100%             | 275.00%         | 192.50%         |

#### Contract

The smart contract of jSUN is upgradeable. Once a new feature is added, the administrative access of the contract will be transferred over to the smart contract used by JustLend for voting & governance. In other words, the administrative access of jSUN won't belong to any individual or organization. Rather, it will be transferred over to the “hybrid smart contract” for voting & governance.

The smart contract of jSUN has been reviewed by the JustLend team and community developers.

The oracle price system has already started to feed SUN/TRX prices, but no changes have been made to the oracle's smart contracts.

We believe that adding support for the SUN market facilitates the growth of JustLend and further improves its ecosystem.
