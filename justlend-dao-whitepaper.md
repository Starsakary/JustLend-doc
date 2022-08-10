# JUSTLEND DAO WHITEPAPER

## **JustLend**

**Money Market Protocol**

**V1.0**

**December 2020**

### **Abstract**

This document will introduce a decentralized protocol on the TRON network that aims to establish money markets based on interest rates determined by a supply-demand-based algorithm.

****

### 1 Introduction <a href="#_b5guxy5n82n" id="_b5guxy5n82n"></a>

Distributed finance (or open finance) has evolved to be one of the key drivers of applications on the TRON network. The core principle of DeFi is to pioneer a censorship-free financial service ecosystem that is immune to centralized authority and accessible to all. Within the ecosystem, users are their own asset custodians, and are granted full asset control and ownership. They can freely access any decentralized market available.

Lending protocols and platforms offer varying incentives to market participants, for example:

* For borrowers: sell short an asset or borrow the right of use
* For lenders: earn interest on assets

Compared with traditional financial products, custodian-free decentralized protocols enjoy the following promising edges:

* Transparency & effective pricing based on market demand
* Fast and convenient lending
* Immunity to censorship & immutability

This document will introduce JustLend, a TRON-based decentralized lending protocol that provides a distributed and secure market where users can receive loans and earn interest at a low trading cost.

### 2 JustLend Protocol <a href="#_ytkw5k1mw7sv" id="_ytkw5k1mw7sv"></a>

### 2.1 Overview <a href="#_mavcc2xxvhsf" id="_mavcc2xxvhsf"></a>

JustLend is a TRON-powered money market protocol aimed at establishing fund pools whose interest rates are determined by an algorithm based on the supply and demand of TRON assets. There are two roles within the protocol, namely suppliers and borrowers. Both of them interact directly with the protocol to earn or pay a floating interest rate.

On JustLend, each money market corresponds to a unique TRON asset such as TRX, TRC20 stablecoin (e.g. USDT) or other TRC20-based tokens, and entails an open and transparent ledger that records all transactions and historical interest rates.

### 2.2 Supplying Assets <a href="#_do4vh12bw4r8" id="_do4vh12bw4r8"></a>

On peer-to-peer platforms where borrowers are matched with lenders, a user's asset is directly lent to another. By contrast, JustLend protocol pools the supply of each user, which drives up liquidity and strikes a better monetary balance. Suppliers can withdraw their assets anytime without having to wait for a specific loan to expire, allowing JustLend a much higher liquidity than their peer-to-peer counterparts.

Assets supplied to a market are denoted as jToken (a TRC-20 token balance). Token holders can acquire corresponding jToken by supplying and abide by relevant rules to earn interest.

#### 2.2.1 Primary Use Cases <a href="#_pg86bm6mykec" id="_pg86bm6mykec"></a>

* Users can supply tokens on JustLend and earn interest at a low risk.
* Assets of DApps, institutions and exchanges can appreciate on JustLend.

### 2.3 Borrowing Assets <a href="#_3bu8rwbbudbx" id="_3bu8rwbbudbx"></a>

If users (borrowers) wish to borrow an asset on JustLend, they need to first acquire jTokens as collateral through depositing tokens, and then borrow any available asset on the platform. Unlike peer-to-peer protocols, JustLend only asks borrowers to specify the borrowing asset with no other requirements such as the expiry date. Borrowing is executed real-time, and its interest rate will be automatically adjusted based on the market's supply and demand. Here's an example: the interest rates for borrowing TRX and TRC20-USDT might be 2% and 5% respectively. Different assets have varying interest rates, which are automatically calculated according to the market's supply and demand.

#### 2.3.1 Collateral Value <a href="#_wcde4smx1x1n" id="_wcde4smx1x1n"></a>

Each market features a collateral factor ranging from 0 to 1, which represents the borrowing capacity for a certain amount of jToken (the collateral a borrower obtains by supplying the underlying asset).

A lower collateral factor indicates an asset with lower liquidity, while a higher factor indicates higher liquidity. Borrowers are allowed to borrow up to, but not exceeding, their borrowing capacity so as to minimize the default risk for asset loaners.

#### 2.3.2 Risks & Liquidation <a href="#_ifr6p7b463mw" id="_ifr6p7b463mw"></a>

If the value of a borrower's borrowing outstanding exceeds the collateral factor that is deemed safe (their borrowing capacity), liquidation will be triggered automatically in JustLend smart contract to eliminate risks and ensure the over-repayment capacity for asset withdrawal and supply while safeguarding the depositors' assets.

#### 2.3.3 Primary Use Cases <a href="#_bqh90jnl2ur7" id="_bqh90jnl2ur7"></a>

JustLend protocol allows us to hold new assets seamlessly without having to sell tokens or go to various exchanges. This opens users, developers and traders to various forms of trading, such as:

* Users can pledge multiple TRC20 tokens in their possession in exchange for other TRC20 tokens.
* We can short a certain token: borrow the token we wish to short from JustLend and sell on the exchange prior to its fall. This allows us to profit from the token's loss.

### 2.4 Interest Rate Mechanics <a href="#_q3cco1xs7l8p" id="_q3cco1xs7l8p"></a>

While the interest of most traditional financial lending accrues by day, interest on JustLend is calculated based on the time of block generation on TRON (around 3 seconds). The interest rate of traditional financial lending remains fixed for the entire term of a loan. On the contrary, interest rates in the JustLend protocol change in real time according to the variation in market supply and demand, and the borrowing/supplying interest rates may vary from block to block in different markets. The JustLend protocol uses an algorithm to calculate the supplying interest rate for each asset. When borrowers' demand for an crypto asset declines, the excessive tokens available for lending in the pool will bring about higher liquidity and a lower interest rate, thus encouraging borrowing; likewise, when the demand for borrowing an asset is high, the number of tokens available for lending drops, which will result in lower liquidity and a higher interest rate, thus attracting supplies.

### 2.5 Features of JustLend Protocol <a href="#_win7pi94euwm" id="_win7pi94euwm"></a>

* Fund supply: JustLend adopts the idea of money market fund pools, with different underlying assets corresponding to their own markets.
* Matching: Orders are matched by smart contracts automatically. There is no need for suppliers and borrowers to negotiate interest rates, loan terms, etc.
* Interest accrual: Interest accrues as each block is generated on TRON (which takes around 3 seconds).
* Lending: Lending is executed in real time. Suppliers can enjoy interest without any action as long as they hold jToken.
* Repayment: Borrow and repay as you go. Borrowing can be done as long as the collateral value \* collateral factor > loan value + accumulated interest.
* Supplying/borrowing interest rate: The floating interest rate is automatically calculated by JustLend smart contracts based on market supply and demand.
* Liquidation: If the borrower's collateral value falls below the liquidation threshold, JustLend smart contracts will automatically trigger liquidation.

### 3 Architecture of JustLend Protocol <a href="#_de9xnsahsgke" id="_de9xnsahsgke"></a>

JustLend money market is essentially a distributed ledger that allows users to supply or borrow assets as interest accrues.

### 3.1 Core Architecture of JustLend <a href="#_4uu163q5h5y8" id="_4uu163q5h5y8"></a>

![](.gitbook/assets/0)

### 3.2 Core Logic of JustLend <a href="#_6zjc9ayteugx" id="_6zjc9ayteugx"></a>

* Suppliers/borrowers deposit assets to the money markets of JustLend smart contracts, and the assets supplied are the underlying assets.
* Smart contracts distribute jToken that corresponds to underlying assets to users' accounts at the exchange rate.
* Suppliers who supply assets to JustLend money markets can enjoy interest earnings on their loans.
* Borrowers who over-collateralize an asset can borrow from the corresponding market on JustLend. Unlike P2P lending, borrowers do not have to negotiate with lenders: orders will be automatically matched by JustLend smart contracts as long as the token market has sufficient liquidity.Borrowing interest rates are determined by JustLend smart contracts in real time based on market supply and demand. Within a block, borrowers of the same token share the same borrowing interest rate.
* Borrowing interest on JustLend accrues based on the number of blocks.
* Suppliers can redeem the underlying assets they have supplied at any time.
* Borrowers can repay their loans at any time.
* If the value of a borrower's collateralized assets falls below the liquidation threshold, JustLend smart contracts will trigger liquidation automatically.

### 3.3. Interest Rate Model <a href="#_s5bf4xhf3375" id="_s5bf4xhf3375"></a>

The interest rate model is the core element of JustLend. It involves concepts such as exchange rate, utilization rate, supplying interest rate, borrowing interest rate and collateral factor.

#### 3.3.1 Exchange Rate <a href="#_xbv410rudt39" id="_xbv410rudt39"></a>

In the JustLend protocol, each money market is a smart contract that implements the TRC-20 standard, and a user's balance is denoted as jToken, which can be minted by supplying assets to the market or redeemed. The exchange rate between jToken and a corresponding underlying asset will increase over time.

Where:

* represents the exchange rate at which jToken is converted to the corresponding asset.
* represents the amount of assets supplied by suppliers to smart contracts, but not yet loaned.
* represents the total reserve on the platform.
* represents the total circulation of jToken at the moment.
* represents the amount of loaned assets at the moment.

#### 3.3.2 Utilization Rate <a href="#_7qruy4ael7cj" id="_7qruy4ael7cj"></a>

Utilization rate measures the efficiency of a platform's uses of funds. The utilization rate U for a given market can be expressed as follows. The rate indicates how much money is loaned out from the entire pool. The higher the proportion of money loaned out, the higher the utilization rate.

#### 3.3.3 Reserve <a href="#_mvzcmzv7gcee" id="_mvzcmzv7gcee"></a>

In traditional finance, banks and P2P platforms set aside a risk reserve from the proceeds of each loan. JustLend sets aside a reserve from the proceeds of each loan based on the reserve factor.

#### 3.3.4 Borrowing Interest Rate <a href="#_ihenqa2m62t9" id="_ihenqa2m62t9"></a>

The borrowing interest rate is determined by the utilization rate and the corresponding money market. Now, the borrowing interest rate is calculated according to two models, namely smoothing interest rate model and staged interest rate model. Smoothing interest rate model is as follows:

Interest rate set by the staged interest rate model is as follows:

When the utilization rate <= kink:

When the utilization rate > kink:

Where = /.

#### 3.3.5 Supplying Interest Rate <a href="#_6rrah0tgzbxh" id="_6rrah0tgzbxh"></a>

Like borrowing interest rate, supplying interest rate is also determined by utilization rate, etc.The supplying interest rate for any given money market is calculated in the formula below, where is the borrowing interest rate for money market a, is the utilization rate for money market a, and is the reserve factor.

### 3.4 Liquidation <a href="#_9082x3k3a7kh" id="_9082x3k3a7kh"></a>

JustLend requires users to deposit a certain amount of assets as collateral when they are borrowing. The amount of borrowed asset is determined by the collateral factor, i.e. max loan = collateral value \* collateral factor.As crypto assets are subject to great market volatility, collateral value changes all the time. Therefore, JustLend monitors the overall health of each borrowing account in real time and automatically liquidates accounts whose health value is lower than 1. Health value = value of the total collateral (converted and denoted in TRX) / value of the total borrowed asset (converted and denoted in TRX).

### 3.5 Price Oracle <a href="#_1fagftqic2r7" id="_1fagftqic2r7"></a>

Prices of a variety of underlying assets are required for the calculation of collateral value of borrowers, the value of their borrowed assets, etc.To begin with, JustLend uses JustLink, a decentralized price oracle, to access prices from JustSwap and other sources of prices, and pick the right ones. Solutions such as the "smooth mechanism" are adopted to help avoid risks and greater volatility of prices within a short period of time. Statistics from JustLink are available for JustLend and calls by other contracts. As time goes by, JustLend will expand and improve its price feeding mechanism, where everyone can provide price data for JustLend.

### 3.6 Management & Auditing <a href="#_dum6d1rn6htv" id="_dum6d1rn6htv"></a>

Comptroller manages and audits calls of JustLend smart contracts. Comptroller manages the risks of the JustLend protocol through the collateral factor, i.e. Comptroller is the risk management layer of the JustLend protocol. Each underlying asset has an independent collateral factor, which ranges between 0\~100% according to its liquidity and market cap. The higher the liquidity and the market cap, the bigger the value is. An underlying asset cannot be used as collateral or used to pay for borrowed assets in liquidation when its collateral factor is zero. JustLend uses a collateral factor to determine the value of the collateral required and whether a user can be liquidated or not.

### 3.7 Governance <a href="#_ou6d10j7ezhj" id="_ou6d10j7ezhj"></a>

Governance of JustLend is implemented through voting for proposals. JST can be used for community governance of JustLend, and its holders may submit proposals on the JustLend protocol or vote for them.JustLend will begin with centralized control and over time transition into a fully community-led platform. The following rights in the protocol are controlled by the admin:

* The ability to open/close/enable a money market
* The ability to update the interest rate model for each market
* The ability to update the oracle address

### 4. Smart Contract of Money Market <a href="#_vdk9143ivb1m" id="_vdk9143ivb1m"></a>

Money markets in the JustLend protocol are built on the basis of smart contracts for money markets. Users can interact with the JustLend protocol via smart contracts. Here are some key functions of the smart contracts of money markets on JustLend:

### 4.1 Mint <a href="#_t7mqmijhu55n" id="_t7mqmijhu55n"></a>

This feature transfers underlying assets to the JustLend protocol, which accrues interest according to the current supplying interest rate of the asset. The amount of jToken users receive is the number of underlying tokens divided by the current exchange rate. The function is as follows:

**jTRC20:**

**function mint(uint mintAmount) returns (uint)**

**jTRX:**

**function mint() payable**

### 4.2 Withdraw <a href="#_xko6hb4xudh9" id="_xko6hb4xudh9"></a>

This feature sends users' assets from the money market back to users and reduces users' supply equilibrium in the protocol. The function is as follows:

**jTRC20/jTRX:**

_**function redeem(uint redeemTokens) returns (uint)**_

### 4.3 Borrow <a href="#_ysbvwochtgth" id="_ysbvwochtgth"></a>

This feature sends assets from the money market to borrowers, and starts to accrue interest according to the borrowing interest rate of the borrowed asset. The function is as follows:

**jTRC20/jTRX:**

_**function borrow(uint borrowAmount) returns (uint)**_

### 4.4 Repay <a href="#_g9oypijdtcus" id="_g9oypijdtcus"></a>

This feature retrieves the borrowed asset and puts them back into the market, which reduces the balance of the borrower's asset. The function is as follows:

**jTRC20/jTRX:**

_**function repayBorrow(uint repayAmount) returns (uint)**_

### 4.5 Liquidate <a href="#_hnsb1e31xwd4" id="_hnsb1e31xwd4"></a>

JustLend will automatically liquidate accounts whose health value is smaller than 1. The liquidator may payback all or part of the outstanding loan on behalf of the borrower. The function is as follows:

**jTRC20:**

_**function liquidateBorrow(address borrower, uint amount, address collateral) returns (uint)**_

**jTRX:**

_**function liquidateBorrow(address borrower, address jTokenCollateral) payable**_

### 5. Summary <a href="#_ls2obaewq4ma" id="_ls2obaewq4ma"></a>

This article provides an overview of the TRON-powered JustLend protocol, including the details of supplying, borrowing and the interest rate mechanics in the protocol. It also covers the seven features such as asset supplying and order matching, as well as the architecture of the JustLend protocol and smart contracts of money markets. Fully operated on the TRON network, JustLend provides a high-speed and lower-cost decentralized lending protocol accessible to all.
