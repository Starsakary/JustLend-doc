# Liquidations

Liquidation is determined by **Risk Value**, which is a a critical metric within the JustLend DAO Protocol that measures the safety of a borrow position. It is calculated as:

$$
Risk\ Value = Total\ Borrow\ /\ Borrow\ Limit\ *\ 100
$$

* `Total Borrow`: sum of all assets borrowed by the user;
* `Borrow Limit`: ∑ (Asset supplied by the user \* Collateral Factor of the asset)

The **Risk Value** measures a borrow position’s stability. The Borrow Limit, set by JustLend DAO Governance for each asset, determines the maximum percentage of value that can be borrowed against the asset. For example, if a user supplies $100 in TRX with an collateral factor 80% and $200 in SUN with an collateral factor 75%. Then, borrows $90 worth of USDD and $50 worth of JST tokens from SBM. we can see:&#x20;

**Borrow Limit**  =  ∑ (Asset supplied \* Collateral Factor) = 100 \* 80% + 200 \* 75% = 230

**Risk Value** = Total Borrow / Borrow Limit \* 100 = (90 + 50) / 230 \* 100 = 60.87

A risk value above 100 represents a position that is above the liquidation threshold. Regular monitoring is essential, as the risk value fluctuates based on both the value of collateral factor and borrowed assets. To reduce the risk value , users can either supply more collateral or repay part of the borrow position. The risk value is directly tied to collateral value. If the collateral value increases, the risk value  decrease; if it falls, the risk value increases, increasing the risk of liquidation.

<table><thead><tr><th width="137.33333333333331">Range</th><th width="187">Levels of risk</th><th>Recommendations</th></tr></thead><tbody><tr><td>0-35</td><td>Low Risk</td><td>Healthy portfolio, eligible for loans.</td></tr><tr><td>35-60</td><td>Medium Risk</td><td>Healthy portfolio overall, eligible for extra loan, but with caution.</td></tr><tr><td>60-80</td><td>High Risk</td><td>Portfolio faces risk of liquidation, and you are advised to add collateral or pay off part of your loans.</td></tr><tr><td>80-100</td><td>Extremely High Risk</td><td>Collaterals are about to be liquidated, and you are advised to add collateral or pay off part of your loans.</td></tr></tbody></table>

Liquidation occurs when a borrower’s risk value exceeds 100, indicating that their collateral is insufficient to cover the borrowed amount. This can happen due to a decline in collateral value or an increase in the borrowing amount. During a liquidation, up to 50% of the borrower’s debt is repaid by a liquidator, and a liquidation fee is applied to the borrower’s collateral. As a permissionless process, any network participant can initiate the liquidation of an eligible position.



### Liquidation Tool

Liquidation will be triggered when the risk value of your positions hits 100. The liquidator will settle the debt (in the borrowed token), take away the supplied asset (in the corresponding jToken), and earn a liquidation reward equal to 8% of the repaid debt value. It should be noted that each liquidation can only cover the debt of one token.&#x20;

As a borrower, please keep a close eye on your risk value to prevent liquidation. Once liquidation occurs, you will find a record of your jTokens being transferred out of your wallet.&#x20;

{% hint style="info" %}
Before you proceed to use the liquidation tool, please be advised that you must first agree to the terms outlined in the **\<Liquidation Tool Disclaimer>**. This disclaimer is designed to inform you of the risks, responsibilities, and conditions associated with the use of liquidation tool.\
By proceeding to use the liquidation tool, you confirm that you have read, understood, and accept the terms of the disclaimer. If you do not agree with any part of the disclaimer, you are not permitted to utilize liquidation tool and discontinue use immediately.
{% endhint %}
