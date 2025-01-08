# Interest Rate Model

## Introduction

JustLend DAO's interest rate model aims to maximize the utilization of assets while effectively managing liquidity risks. Therefore, the parameter utilization rate  $$U$$ of each market is particularly important, as it reflects the true situation of the available assets in each market. As the utilization rate approaches 100%, assets become scarce, making borrowing impossible.  Meanwhile, suppliers may be unable to withdraw their liquidity due to the lack of available assets. The formula of the utilization $$U$$ is defined as:

$$
U \ = Total\ Borrows \ /\ Total\  Supply
$$

To calibrate the interest rate model around an optimal utilization rate which reflects the real conditions, JustLend DAO provides variable interest rates for markets through two distinct interest models:&#x20;

* `WhitePaperInterestRateModel:`a simple interest rate model where the borrowing rate is directly tied to the utilization rate.
* `JumpRateModelV2:`operates differently, as the interest rate jumps to a higher tier when the utilization rate surpasses a certain threshold.



### Whitepaper Rate Model

The Whitepaper Rate Model is straightforward, as the borrowing rate is directly proportional to the utilization. The interest rate is defined as below.

#### **Borrow Rate:**

$$
borrow\_rate (u) \ = \ a * u  \ + \ b
$$

where the borrow utilization rate `u` is defined as:

$$
u \ = borrows \ /\ (cash +borrows - reserves)
$$

* `borrows:` the total amount borrowed in the market, denominated in the underlying asset, excluding bad debts.
* `cash:` the total amount of the underlying asset held by the market at a specific time.
* `reserves:` the amount of the underlying asset held by the market that is not accessible to borrowers or suppliers, as it is reserved for purposes outlined in the protocol's tokenomics.

#### **Supply Rate:**

$$
supply\_rate (u) \ = \ borrow\_rate (u)\ *\ u  \ * \ (1\  - \ reserve\_factor  )
$$

#### **Model Parameters**

* `a:` variable interest rate slope.
* `b:` base rate per block (`baseRatePerYear / blocksPerYear`).
* `reserve_factor:` portion of interest income extracted from the protocol.

### Jump Rate Model

The Jump Rate Model is quite different with the Whitepaper Rate Model, where the interest rate jumps to a higher tier when the utilization rate exceeds $$u_{optimal}$$. The interest rate is defined as below.

#### **Borrow Rate**

&#x20;$$if \  \ u < knik:$$

$$
borrow\_rate (u) \ = \ a_{ 1} \ *  \ u  \ + \ b
$$

&#x20;$$if \  \ u >= knik:$$

$$
borrow\_rate (u) \ = \ a_{ 1} \ * \ kink  \ + \ a_{2} \ * \ (u\  - \ kink) \ + \ b
$$

where the borrow utilization rate `u` is defined as:

$$
u \ = \ (borrows )\ /\ (cash +borrows -reserves)
$$

* `borrows:` the total amount borrowed in the market, denominated in the underlying asset, excluding bad debts.
* `cash:` the total amount of the underlying asset held by the market at a specific time.
* `reserves:` the amount of the underlying asset held by the market that is not accessible to borrowers or suppliers, as it is reserved for purposes outlined in the protocol's tokenomics.

#### **Supply Rate**

$$
supply\_rate (u) \ = \ borrow\_rate (u)\ *\ u  \ * \ (1\  - \ reserve\_factor  )
$$

#### **Model Parameters**

* `a1:` variable interest rate slope1.
* `a2:` variable interest rate slope2.
* `b:` base rate per block (`baseRatePerYear / blocksPerYear`).
* `kink:` the utilization point at which the jump multiplier is applied, and the variable interest rate slope shifts from slope1 to slope2.&#x20;
* `reserve_factor:` portion of interest income extracted from the protocol.
