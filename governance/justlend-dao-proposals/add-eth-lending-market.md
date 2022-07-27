# Add ETH Lending Market

## Add ETH Lending Market

### Details

1. Add a new ETH price oracle for ETH/TRX;
2. Add support for jETH on JustLend smart contracts: [View](https://tronscan.io/#/contract/TR7BUFRQeq1w5jAZf1FKx85SHuX6PfMqsV/code) ;
3. Set the collateral factor of ETH to 75%: [View](https://tronscan.io/#/contract/TR7BUFRQeq1w5jAZf1FKx85SHuX6PfMqsV/code) ;
4. Set the reserve factor of ETH to 10%: [View](https://tronscan.io/#/contract/TR7BUFRQeq1w5jAZf1FKx85SHuX6PfMqsV/code) ;

The proposal is to enable supply and borrow of [Ethereum (TRC20)](https://tronscan.io/#/token20/THb4CqiFdwNHsWsQCs4JhzwjMWys4aqCbF) on JustLend, and have the oracle to provide trusted ETH prices.

#### Market Parameters <a href="#h.g5blwn1cpa8d" id="h.g5blwn1cpa8d"></a>

ETH is a TRON-based TRC20 token that brings the value of Ethereum onto the TRON network to power tokens in the JUST ecosystem. Despite being a new market on JustLend, ETH boasts large circulation on its mainnet. We will devise a more conservative interest rate model (smoothing interest rate model) to monitor the supply and demand of ETH on JustLend.

Due to the large amount of circulation, the collateral factor of ETH is set at 75%, while its reserve factor is set at 10% to encourage more supply and borrow of the asset. &#x20;

ETH market adopts the same interest rate model as BTC (Bitcoin-TRC20), where the borrowing interest rate will be 28.8% when the utilization rate reaches 100%. Supply and borrow APYs for ETH with different utilization rates are as follows:

| Utilization rate | Borrow APY | Supply APY |
| ---------------- | ---------- | ---------- |
| 0%               | 2.00%      | 0.00%      |
| 10%              | 5.00%      | 0.45%      |
| 20%              | 8.00%      | 1.44%      |
| 30%              | 11.00%     | 2.97%      |
| 40%              | 14.00%     | 5.04%      |
| 50%              | 17.00%     | 7.65%      |
| 60%              | 20.00%     | 10.80%     |
| 70%              | 23.00%     | 14.49%     |
| 80%              | 26.00%     | 18.72%     |
| 90%              | 29.00%     | 23.49%     |
| 100%             | 32.00%     | 28.80%     |

### Contract

The smart contract of jETH is upgradeable. Once a new feature is added, the administrative access of the contract will be transferred over to the smart contract used by JustLend for voting & governance. In other words, the administrative access of jETH won't belong to any individual or organization. Rather, it will be transferred over to the “hybrid smart contract” for voting & governance. &#x20;

The smart contract of jETH has been reviewed by the JustLend team and community developers.

The oracle price system has already started to feed ETH prices, but no changes have been made to the oracle's smart contracts.

We believe that adding support for the ETH market facilitates the growth of JustLend and further improves its ecosystem.
