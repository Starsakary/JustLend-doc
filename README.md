# JUSTLEND DAO INTRO

JustLend DAO is a TRON-based decentralized lending protocol that provides a distributed and secure market where users can receive loans and earn interest at a low trading cost.&#x20;

JustLend DAO protocol is a TRON-powered money market protocol aimed at establishing fund pools whose interest rates are determined by an algorithm based on the supply and demand of TRON assets. There are two roles within the protocol, namely suppliers and borrowers. Both of them interact directly with the protocol to earn or pay a floating interest rate.&#x20;

On JustLend DAO, each money market corresponds to a unique TRON asset such as TRX, TRC20 stablecoin (e.g. USDT) or other TRC20-based tokens, and entails an open and transparent ledger that records all transactions and historical interest rates.

1. Supplyer

On peer-to-peer platforms where borrowers are matched with lenders, a user's asset is directly lent to another. By contrast, JustLend protocol pools all users' supplys, which drives up liquidity and strikes a better monetary balance. Supplyer can withdraw their assets anytime without having to wait for the loan to expire, allowing JustLend a much higher liquidity than their peer-to-peer counterparts.

Asset supplied is denoted as jToken (a TRC-20 token). Token holders can acquire corresponding jToken on JustLend and follow relevant rules to obtain rewards (interest).

2\. Borrowing

If users (borrowers) wish to borrow an asset on JustLend, they need to first acquire jTokens as collateral with their underlying asset, and then borrow any available asset on the platform. Unlike peer-to-peer protocols, JustLend only asks borrowers to specify the borrowing asset with no other requirements such as the expiry date. Borrowing is executed real-time, and its interest rate will be automatically adjusted based on the market's supply and demand. Here's an example: the interest rates for borrowing TRX and TRC20-USDT may be 2% and 5% respectively. Different assets have varying interest rates, which are automatically calculated according to the market's supply and demand.



## Core Architecture of JustLend DAO

![](https://lh4.googleusercontent.com/E3-7mdiJ7oazmDif0dCPPpacv3O3yRBVF0i71GLhpr908Aq3e7JcJ1mN8TTFteNBqfTG7mHQGAK2CTBlL5Hqb0pksAa0F5NtHBKbLzmZGJFdcYWmC\_sani6U3BOrQYSrQrBb-bG97RgEd0Y2cOJ0Jyg)

## Core Logic of JustLend DAO&#x20;

* Suppliers/borrowers deposit assets to the money markets of JustLend DAO smart contracts, and the assets supplied are the underlying assets.&#x20;
* Smart contracts distribute jToken that corresponds to underlying assets to users' accounts at the exchange rate.&#x20;
* Suppliers who supply assets to JustLend DAO money markets can enjoy interest earnings on their loans.&#x20;
* Borrowers who over-collateralize an asset can borrow from the corresponding market on JustLend DAO. Unlike P2P lending, borrowers do not have to negotiate with lenders: orders will be automatically matched by JustLend DAO smart contracts as long as the token market has sufficient liquidity.&#x20;

Borrowing interest rates are determined by JustLend DAO smart contracts in real time based on market supply and demand. Within a block, borrowers of the same token share the same borrowing interest rate.&#x20;

* Borrowing interest on JustLend DAO accrues based on the number of blocks.&#x20;
* Suppliers can redeem the underlying assets they have supplied at any time.&#x20;
* Borrowers can repay their loans at any time.&#x20;
* If the value of a borrower's collateralized assets falls below the liquidation threshold, JustLend DAO smart contracts will trigger liquidation automatically.
