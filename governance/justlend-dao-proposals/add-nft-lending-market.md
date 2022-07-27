# Add NFT Lending Market

## Add NFT as a collateralizable asset

### Details



1. Add a new NFT price oracle for NFT/TRX;
2. Add support for jNFT on JustLend smart contracts; [View](https://tronscan.org/#/contract/TFpPyDCKvNFgos3g3WVsAqMrdqhB81JXHE/code\&sa=D\&source=editors\&ust=1624534635568000\&usg=AOvVaw1YaATQIpDDn-a9sr0xh068)
3. Set the collateral factor of NFT at 60%; [View](https://tronscan.org/#/contract/TFpPyDCKvNFgos3g3WVsAqMrdqhB81JXHE/code\&sa=D\&source=editors\&ust=1624534635569000\&usg=AOvVaw1cIw0XDBQg8BUDfqZoWjC2)
4. Set the reserve factor of NFT at 20%; [View](https://tronscan.org/#/contract/TFpPyDCKvNFgos3g3WVsAqMrdqhB81JXHE/code\&sa=D\&source=editors\&ust=1624534635569000\&usg=AOvVaw1cIw0XDBQg8BUDfqZoWjC2)
5. The interest rate will surge when the utilization ratio exceeds 80%.

The proposal is to enable supply/borrow of NFT (TRC20) on JustLend and have the oracle to provide trusted NFT/TRX prices.

#### Market Parameters <a href="#h.km4kcslj0e1" id="h.km4kcslj0e1"></a>

APENFT（NFT） is a TRON-based TRC20 token that brings the value of TrueUSD onto the TRON network to power tokens in the JUST ecosystem.

APENFT was born with the mission to register world-class artworks as NFTs on blockchain. We aim to be the ARK Funds in the NFT space, to build a bridge between top-notch artists and blockchain, and to support the growth of native crypto NFT artists.

As it is an emerging market, the collateral factor of NFT is set at 60%, while its reserve factor is set at 20%.

The NFT market adopts the similar interest model as WIN does, where the interest rate rockets to a higher tier when the utilization rate exceeds 80%. Its Supply Base APY hits 89.6% when the utilization rate reaches 100%. Supply and borrow APYs at different utilization rates are as follows:

| Utilization rate | Borrow Base APY | Supply Base APY |
| ---------------- | --------------- | --------------- |
| 0%               | 2.00%           | 0.00%           |
| 10%              | 5.75%           | 0.46%           |
| 20%              | 9.50%           | 1.52%           |
| 30%              | 13.25%          | 3.18%           |
| 40%              | 17.00%          | 5.44%           |
| 50%              | 20.75%          | 8.30%           |
| 60%              | 24.50%          | 11.76%          |
| 70%              | 28.25%          | 15.82%          |
| 80%              | 32.00%          | 20.48%          |
| 90%              | 72.00%          | 51.84%          |
| 100%             | 112.00%         | 89.60%          |

### Contract

The smart contract of jNFT is upgradeable. Once a new feature is added, the administrative access of the contract will be transferred over to the smart contract used by JustLend for voting & governance. In other words, the administrative access of jNFT won't belong to any individual or organization. Rather, it will be transferred over to the “hybrid smart contract” for voting & governance.

The smart contract of jNFT has been reviewed by the JustLend team and community developers.

The oracle price system has already started to feed NFT/TRX prices, but no changes have been made to the oracle's smart contracts.

We believe that adding support for the NFT market facilitates the growth of JustLend and further improves its ecosystem.
