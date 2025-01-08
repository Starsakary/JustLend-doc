# Smart Contracts

JustLend DAO Protocol contracts are divided in these repositories:

* **Supply and Borrow Market**: contains core contracts for JustLend DAO, including logic for supply and borrow market (SBM), interest rate model, governance, price oracle and comptroller.
  * **SBM**: enables supplying of crypto assets as collateral in order to borrow the _base asset_. Accounts can also earn interest by supplying the base asset to the protocol.
  * **Interest Rate Model**: users with a positive balance of the base asset earn interest, denominated in the base asset, based on a supply rate model.
  * **Price-Oracle**: contains the price oracle contracts we support, along with the logic validation for prices returned by these oracles.
  * **Governance**: contracts used for proposing, voting and executing proposals.
  * **Comptroller**: the risk management layer of the protocol. It determines how much collateral a user is required to maintain, and whether user can be liquidated.
* **Staked TRX**: the contracts utilized for staking TRX to earn high rewards.
* **Energy Rental**: contracts enable users to rent energy anytime with a low price.



### Core Contracts <a href="#core-contracts" id="core-contracts"></a>

There are 5 categories of core repository contracts:

* JTokens Contract&#x20;
* Interest Rate Model Contract
* Price Oracle Contract
* Governance Contract
* Comptroller Contract

#### **JTokens Contract** <a href="#jtokens-contract" id="jtokens-contract"></a>

`JToken:`the contract used to support all assets by JustLend DAO, such as the jTRX, jUSDT, jSUN and jBTC you receive after supplying the corresponding assets.

#### **Interest Rate Model Contract** <a href="#interest-rate-model-contract" id="interest-rate-model-contract"></a>

`WhitePaperInterestRateModel:` the contract used to set up a straightforward interest rate model, which the borrowing rate is directly proportional to the utilization.

`JumpRateModelV2:` the Contract used to set up a complex interest rate model, which the interest rate jumps to a higher tier when the utilization rate exceeds uoptimaluoptimal​.

#### Price Oracle Contract <a href="#price-oracle-contracts" id="price-oracle-contracts"></a>

`Price Oracle:`the JustLend Protocol use WinkLink's price service to fetch the token price. The PriceOracle contract is responsible for setting and display token prices.

#### Governance Contract <a href="#governance-contracts" id="governance-contracts"></a>

`GovernorBravo:`The main JustLend Governance Contract. Users interact with it to:

* Submit new proposal
* Vote on a proposal
* Cancel a proposal
* Queue a proposal for execution with a time lock executor contract

`Timelock:` the contract used to execute or cancel a queued transaction.

#### **Comptroller Contract** <a href="#comptroller-contract" id="comptroller-contract"></a>

`Comptroller:` the Comptroller contract is the central contract for each lending pool. It contains functionality central to borrowing activity in the pool like supplying and borrowing assets and liquidations.



### Staked TRX Contracts <a href="#staked-trx-contracts" id="staked-trx-contracts"></a>

`Staked TRX(sTRX):` the contract utilized for staking TRX to earn high rewards.



### Energy Rental Contracts <a href="#energy-rental-contracts" id="energy-rental-contracts"></a>

`Energy Rental:`contracts enable users to rent energy anytime with a low price.
