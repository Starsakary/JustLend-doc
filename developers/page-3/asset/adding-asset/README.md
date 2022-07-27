# Adding an Asset

JustLend enables users to supply and borrow digital assets through liquidity pools. Suppliers receive protocol-issued aTokens, holding the user’s supplied assets and accrued yield. Each borrow is secured by collateral acting as a risk mitigation tool against default.&#x20;

1. **Each additional token slightly increase the fee cost of transactions permanently.** The token must be included in the smart contract, adding complexity and thus costs.
2. **Each token added to** JustLend **protocol as collateral increases the protocol risk of insolvency.** From a financial perspective, the token enabled as collateral can be considered as assets of JustLend protocol, while the amount of tokens borrowed considered as the liabilities of the JustLend protocol. The underlying tokens of assets and liabilities often differ, with borrows mostly in stablecoins and tokens used as collateral being volatile tokens. Thus, it is crucial that while adding new tokens the JustLend Community considers:
   * Only assets with best risk profiles should be supported as collateral
   * Riskier assets should only be enabled as collateral in _Isolation mode_
   * New assets with higher risk and lower liquidity should be only considered listed in _Isolation mode_ (for both borrow and collateral use)
3. **A centralised asset accepted as collateral exposes the protocol to centralisation risk.** The single point of failure risks of underlying tokens flow into the JustLend Protocol.
4. **Assets that have risk of manipulable oracles are listed as single borrow assets** (i.e. if a user borrows said asset, they cannot borrow any other asset (a/k/a Siloed assets)).
5. Tokens only enabled for supplying and borrowing (i.e., not usable as collateral) present lower risk for the protocol. Collateral are the assets of the protocol. To remain solvent, these assets must remain greater than the liabilities borrowed from the protocol. Tokens which can only be used for borrowing should always be excessively backed by collateral assets.
6. **Having liquidity from different tokens reduces risks via diversification benefits.**

When adding a token to the protocol, significant analysis must be made by the JustLend community to ensure that the asset will add more value than risk. Only tokens with a worthy product and significant community should be considered. The asset risk methodology offers a framework to assess and compare tokens’ risks to the protocol, and how to calibrate model asset parameters to mitigate those risks.
