# Liquidity Risk

JustLend DAO requires users to deposit a certain amount of assets as collateral when they are borrowing. The amount of borrowed asset is determined by the collateral factor, i.e. max loan = collateral value \* collateral factor.As crypto assets are subject to great market volatility, collateral value changes all the time. Therefore, JustLend DAO monitors the overall health of each borrowing account in real time and automatically liquidates accounts whose health value is lower than 1. Health value = value of the total collateral (converted and denoted in TRX) / value of the total borrowed asset (converted and denoted in TRX).

In this section, we dive into JustLend's liquidity risk by analysing the historical availability of JustLend's assets and identify periods of lack of liquidity. Then we look at the valuation of aTokens, illiquid assets often suffer from illiquidity discounts due to the difficulty to find counterparties.

The historical utilisation and aToken valuation help us assess the level of liquidity risk of the protocol. Once this risk is understood, we can put in place risk management techniques through the borrow interest rate model and set up alternative sources of aToken liquidity.
