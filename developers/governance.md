# Governance

## Introduction

JustLend DAO protocol is governed and upgraded by JST holders. There are three components included in the governance system: [JST](https://tronscan.org/#/token20/TCFLL5dx5ZJdKnWuesXxi1VPwjLVmWZZy9)([WJST](https://tronscan.org/#/token20/TCczUFrX1u4v1mzjBVXsiVyehj1vCaNxDt/holders)) token, governance module([GovernorAlpha](https://tronscan.org/#/contract/TH1SVVVU9NF1ans3CRBCJ5kW2yvn4sHP9b/code)) and [Timelock](https://tronscan.org/#/contract/TRWNvb15NmfNKNLhQpxefFz7cNjrYjEw7x).

The governance of the JustLend DAO protocol is through proposals, whose process can be summarized as proposal posting-voting-taking effect. Several parameters are included in the process:

### Governance Parameters

| Param                 | Value                              | Description                                                                            |
| --------------------- | ---------------------------------- | -------------------------------------------------------------------------------------- |
| quorumVotes           | 600000000                          | The least for-votes for a proposal to take effect                                      |
| votingPeriod          | 86400                              | Voting duration(block counts)                                                          |
| proposalThreshold     | 200000000                          | The least votes that a proposer must possess                                           |
| votingDelay           | 1                                  | The wating duration before voting starts(block counts)                                 |
| proposalMaxOperations | 10                                 | Action maximum within a proposal                                                       |
| proposalCount         | 11                                 | Current proposal count                                                                 |
| guardian              | T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb | The guardian can cancel an executed proposal. The current guardian is the blackhole(0) |

### JST & WJST

JST can be exchanged for WJST token at a 1:1 ratio. WJST can be used to vote for proposals.

### Governance Process

An account must possess at least 200,000,000 votes to create governance proposals. When a proposal is created, the voting period starts and will last for 86,400 block times(approx. 3 days). If a majority of affirmation and at least 600,000,000 votes are cast for the proposal, the proposal will wait for 2 days(according to Timelock.delay, the current value is 172,800s) to take into effect.

## Relevant Methods

### Creating Proposals

#### propose()

Contract: GovernanceAlpha

```javascript
function propose(address[] memory targets, uint[] memory values, string[] memory signatures, bytes[] memory calldatas, string memory description) public returns (uint)
```

Calling this method creates a proposal to change & update the JustLend DAO protocol.

| Parameter   | Type       | Description                                                     |
| ----------- | ---------- | --------------------------------------------------------------- |
| targets     | address\[] | Target addresses for calls to be made during proposal execution |
| values      | uint\[]    | Values to be passed to the calls                                |
| signatures  | string\[]  | Function signatures                                             |
| calldatas   | bytes\[]   | Data for each function                                          |
| description | string     | A Readable message of what exactly the proposal changes         |

Returns: The ID of this proposal

```javascript
const result = governanceAlpha.propose(targets, values, signatures, calldatas, description).send({
  feeLimit:10_000_000_000,
  callValue:0,
  shouldPollResponse:true
});
```

#### queue()

Contract: GovernanceAlpha

```javascript
function queue(uint proposalId) public
```

Calling this method moves a **successful** proposal into the Timelock waiting period. The waiting period begins when this method is successfully called.

| Parameter  | Type | Description                   |
| ---------- | ---- | ----------------------------- |
| proposalId | uint | ID of the successful proposal |

Returns: None, reverts on error.

```javascript
const result = governanceAlpha.queue(proposalId).send({
  feeLimit:10_000_000_000,
  callValue:0,
  shouldPollResponse:true
});
```

#### execute()

Contract: GovernanceAlpha

```javascript
function execute(uint proposalId) public payable
```

Calling this method executes the proposal whose waiting period has already been ended. Actions in the proposal will be invoked during the execution.

| Parameter  | Type | Description                       |
| ---------- | ---- | --------------------------------- |
| proposalId | uint | ID of the proposal to be executed |

Returns: None, reverts on error.

```javascript
const result = governanceAlpha.execute(proposalId).send({
  feeLimit:10_000_000_000,
  callValue:0,
  shouldPollResponse:true
});
```
