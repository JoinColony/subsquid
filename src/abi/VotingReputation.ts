import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './VotingReputation.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    ExtensionInitialised: new LogEvent<[]>(
        abi, '0x690c4b6201f6a4c703f9d21c205d98a08dff8461e7a71e49c6d47cc8b8948501'
    ),
    LogSetAuthority: new LogEvent<([authority: string] & {authority: string})>(
        abi, '0x1abebea81bfa2637f28358c371278fb15ede7ea8dd28d2e03b112ff6d936ada4'
    ),
    LogSetOwner: new LogEvent<([owner: string] & {owner: string})>(
        abi, '0xce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed94'
    ),
    MetaTransactionExecuted: new LogEvent<([user: string, relayerAddress: string, functionSignature: string] & {user: string, relayerAddress: string, functionSignature: string})>(
        abi, '0x5845892132946850460bff5a0083f71031bc5bf9aadcd40f1de79423eac9b10b'
    ),
    MotionCreated: new LogEvent<([motionId: bigint, creator: string, domainId: bigint] & {motionId: bigint, creator: string, domainId: bigint})>(
        abi, '0xec8f382abfacc0416a7b1eca9ddfcb6f79f9ee369eba7478f5471bd692bb5db7'
    ),
    MotionEscalated: new LogEvent<([motionId: bigint, escalator: string, domainId: bigint, newDomainId: bigint] & {motionId: bigint, escalator: string, domainId: bigint, newDomainId: bigint})>(
        abi, '0xd11ec0a82b67846e80d77c897fa0e54e2d81a0275e18cb2d40b9f534d9b738ad'
    ),
    MotionEventSet: new LogEvent<([motionId: bigint, eventIndex: bigint] & {motionId: bigint, eventIndex: bigint})>(
        abi, '0x0ae897e29e11067b0051d7f0047638509aeaeacf4e5c4146283aa5dd6ad03fd4'
    ),
    MotionFinalized: new LogEvent<([motionId: bigint, action: string, executed: boolean] & {motionId: bigint, action: string, executed: boolean})>(
        abi, '0x30a64da5658ebdc08619e03d1f155ef960c07fa9b332002f9ad606ec64b60964'
    ),
    MotionRewardClaimed: new LogEvent<([motionId: bigint, staker: string, vote: bigint, amount: bigint] & {motionId: bigint, staker: string, vote: bigint, amount: bigint})>(
        abi, '0x388e060f12fe3bf76a4ba6d79050cbfa0484dfbfc3a2b866afbcbf4058b24bfe'
    ),
    MotionStaked: new LogEvent<([motionId: bigint, staker: string, vote: bigint, amount: bigint] & {motionId: bigint, staker: string, vote: bigint, amount: bigint})>(
        abi, '0x36de51a8af0dcecf368691aa77f69ba4d4e7974e9c709f33aeaad0e7ac5af1b8'
    ),
    MotionVoteRevealed: new LogEvent<([motionId: bigint, voter: string, vote: bigint] & {motionId: bigint, voter: string, vote: bigint})>(
        abi, '0x90285c90067ec863f95f2423d6cc031a545257d9b53dfb1974a65b46bd4a55bd'
    ),
    MotionVoteSubmitted: new LogEvent<([motionId: bigint, voter: string] & {motionId: bigint, voter: string})>(
        abi, '0x918e84941a111dde88f3d5739c3e63ffa70d869cbbfd4ecbab1dbb3b379055f9'
    ),
}

export const functions = {
    authority: new Func<[], {}, string>(
        abi, '0xbf7e214f'
    ),
    executeMetaTransaction: new Func<[_user: string, _payload: string, _sigR: string, _sigS: string, _sigV: number], {_user: string, _payload: string, _sigR: string, _sigS: string, _sigV: number}, string>(
        abi, '0x0c53c51c'
    ),
    getCapabilityRoles: new Func<[_sig: string], {_sig: string}, string>(
        abi, '0x2dfbb083'
    ),
    getChainId: new Func<[], {}, bigint>(
        abi, '0x3408e470'
    ),
    getColony: new Func<[], {}, string>(
        abi, '0xbfd68ab7'
    ),
    getDeprecated: new Func<[], {}, boolean>(
        abi, '0xfcf6ba93'
    ),
    multicall: new Func<[data: Array<string>], {data: Array<string>}, Array<string>>(
        abi, '0xac9650d8'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    setAuthority: new Func<[authority_: string], {authority_: string}, []>(
        abi, '0x7a9e5e4b'
    ),
    setOwner: new Func<[owner_: string], {owner_: string}, []>(
        abi, '0x13af4035'
    ),
    verify: new Func<[_owner: string, _nonce: bigint, _chainId: bigint, _payload: string, _sigR: string, _sigS: string, _sigV: number], {_owner: string, _nonce: bigint, _chainId: bigint, _payload: string, _sigR: string, _sigS: string, _sigV: number}, boolean>(
        abi, '0x6281133d'
    ),
    getMetatransactionNonce: new Func<[_userAddress: string], {_userAddress: string}, bigint>(
        abi, '0xb3eac1d8'
    ),
    identifier: new Func<[], {}, string>(
        abi, '0x7998a1c4'
    ),
    version: new Func<[], {}, bigint>(
        abi, '0x54fd4d50'
    ),
    install: new Func<[_colony: string], {_colony: string}, []>(
        abi, '0x2a1b8f9b'
    ),
    initialise: new Func<[_totalStakeFraction: bigint, _voterRewardFraction: bigint, _userMinStakeFraction: bigint, _maxVoteFraction: bigint, _stakePeriod: bigint, _submitPeriod: bigint, _revealPeriod: bigint, _escalationPeriod: bigint], {_totalStakeFraction: bigint, _voterRewardFraction: bigint, _userMinStakeFraction: bigint, _maxVoteFraction: bigint, _stakePeriod: bigint, _submitPeriod: bigint, _revealPeriod: bigint, _escalationPeriod: bigint}, []>(
        abi, '0x7b9afba6'
    ),
    finishUpgrade: new Func<[], {}, []>(
        abi, '0x340df28f'
    ),
    deprecate: new Func<[_deprecated: boolean], {_deprecated: boolean}, []>(
        abi, '0x9251cff4'
    ),
    uninstall: new Func<[], {}, []>(
        abi, '0x0d638f30'
    ),
    createMotion: new Func<[_domainId: bigint, _childSkillIndex: bigint, _altTarget: string, _action: string, _key: string, _value: string, _branchMask: bigint, _siblings: Array<string>], {_domainId: bigint, _childSkillIndex: bigint, _altTarget: string, _action: string, _key: string, _value: string, _branchMask: bigint, _siblings: Array<string>}, []>(
        abi, '0x5cda0135'
    ),
    stakeMotion: new Func<[_motionId: bigint, _permissionDomainId: bigint, _childSkillIndex: bigint, _vote: bigint, _amount: bigint, _key: string, _value: string, _branchMask: bigint, _siblings: Array<string>], {_motionId: bigint, _permissionDomainId: bigint, _childSkillIndex: bigint, _vote: bigint, _amount: bigint, _key: string, _value: string, _branchMask: bigint, _siblings: Array<string>}, []>(
        abi, '0xbbd2f6c5'
    ),
    submitVote: new Func<[_motionId: bigint, _voteSecret: string, _key: string, _value: string, _branchMask: bigint, _siblings: Array<string>], {_motionId: bigint, _voteSecret: string, _key: string, _value: string, _branchMask: bigint, _siblings: Array<string>}, []>(
        abi, '0xc06e47d6'
    ),
    revealVote: new Func<[_motionId: bigint, _salt: string, _vote: bigint, _key: string, _value: string, _branchMask: bigint, _siblings: Array<string>], {_motionId: bigint, _salt: string, _vote: bigint, _key: string, _value: string, _branchMask: bigint, _siblings: Array<string>}, []>(
        abi, '0xb9a8c27a'
    ),
    escalateMotion: new Func<[_motionId: bigint, _newDomainId: bigint, _childSkillIndex: bigint, _key: string, _value: string, _branchMask: bigint, _siblings: Array<string>], {_motionId: bigint, _newDomainId: bigint, _childSkillIndex: bigint, _key: string, _value: string, _branchMask: bigint, _siblings: Array<string>}, []>(
        abi, '0xb57025d4'
    ),
    finalizeMotion: new Func<[_motionId: bigint], {_motionId: bigint}, []>(
        abi, '0x6acd7fe6'
    ),
    failingExecutionAllowed: new Func<[_motionId: bigint], {_motionId: bigint}, boolean>(
        abi, '0xbd4e523c'
    ),
    claimReward: new Func<[_motionId: bigint, _permissionDomainId: bigint, _childSkillIndex: bigint, _staker: string, _vote: bigint], {_motionId: bigint, _permissionDomainId: bigint, _childSkillIndex: bigint, _staker: string, _vote: bigint}, []>(
        abi, '0xda233259'
    ),
    getTotalStakeFraction: new Func<[], {}, bigint>(
        abi, '0x2a1c708b'
    ),
    getVoterRewardFraction: new Func<[], {}, bigint>(
        abi, '0x2363df0e'
    ),
    getUserMinStakeFraction: new Func<[], {}, bigint>(
        abi, '0x5c0d9d53'
    ),
    getMaxVoteFraction: new Func<[], {}, bigint>(
        abi, '0x6e7375b0'
    ),
    getStakePeriod: new Func<[], {}, bigint>(
        abi, '0xb0048647'
    ),
    getSubmitPeriod: new Func<[], {}, bigint>(
        abi, '0x1a7dad2e'
    ),
    getRevealPeriod: new Func<[], {}, bigint>(
        abi, '0x02d15d64'
    ),
    getEscalationPeriod: new Func<[], {}, bigint>(
        abi, '0x72d8bd7b'
    ),
    getMotionCount: new Func<[], {}, bigint>(
        abi, '0x835ddcc1'
    ),
    getMotion: new Func<[_motionId: bigint], {_motionId: bigint}, ([events: Array<bigint>, rootHash: string, domainId: bigint, skillId: bigint, skillRep: bigint, repSubmitted: bigint, paidVoterComp: bigint, pastVoterComp: Array<bigint>, stakes: Array<bigint>, votes: Array<bigint>, escalated: boolean, finalized: boolean, altTarget: string, action: string] & {events: Array<bigint>, rootHash: string, domainId: bigint, skillId: bigint, skillRep: bigint, repSubmitted: bigint, paidVoterComp: bigint, pastVoterComp: Array<bigint>, stakes: Array<bigint>, votes: Array<bigint>, escalated: boolean, finalized: boolean, altTarget: string, action: string})>(
        abi, '0xad15aad2'
    ),
    getStake: new Func<[_motionId: bigint, _staker: string, _vote: bigint], {_motionId: bigint, _staker: string, _vote: bigint}, bigint>(
        abi, '0xee2cf473'
    ),
    getExpenditureMotionCount: new Func<[_structHash: string], {_structHash: string}, bigint>(
        abi, '0xde3b0aa4'
    ),
    getExpenditurePastVote: new Func<[_actionHash: string], {_actionHash: string}, bigint>(
        abi, '0x7a3dc330'
    ),
    getMotionState: new Func<[_motionId: bigint], {_motionId: bigint}, number>(
        abi, '0x420b900c'
    ),
    getVoterReward: new Func<[_motionId: bigint, _voterRep: bigint], {_motionId: bigint, _voterRep: bigint}, bigint>(
        abi, '0xd84eb9ee'
    ),
    getVoterRewardRange: new Func<[_motionId: bigint, _voterRep: bigint, _voterAddress: string], {_motionId: bigint, _voterRep: bigint, _voterAddress: string}, ([_rewardMin: bigint, _rewardMax: bigint] & {_rewardMin: bigint, _rewardMax: bigint})>(
        abi, '0xfc4af53f'
    ),
    getStakerReward: new Func<[_motionId: bigint, _staker: string, _vote: bigint], {_motionId: bigint, _staker: string, _vote: bigint}, ([_reward: bigint, _penalty: bigint] & {_reward: bigint, _penalty: bigint})>(
        abi, '0x5d0050b2'
    ),
    createClaimDelayAction: new Func<[action: string, value: bigint], {action: string, value: bigint}, string>(
        abi, '0x7de22eb4'
    ),
}

export class Contract extends ContractBase {

    authority(): Promise<string> {
        return this.eth_call(functions.authority, [])
    }

    getCapabilityRoles(_sig: string): Promise<string> {
        return this.eth_call(functions.getCapabilityRoles, [_sig])
    }

    getChainId(): Promise<bigint> {
        return this.eth_call(functions.getChainId, [])
    }

    getColony(): Promise<string> {
        return this.eth_call(functions.getColony, [])
    }

    getDeprecated(): Promise<boolean> {
        return this.eth_call(functions.getDeprecated, [])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    verify(_owner: string, _nonce: bigint, _chainId: bigint, _payload: string, _sigR: string, _sigS: string, _sigV: number): Promise<boolean> {
        return this.eth_call(functions.verify, [_owner, _nonce, _chainId, _payload, _sigR, _sigS, _sigV])
    }

    getMetatransactionNonce(_userAddress: string): Promise<bigint> {
        return this.eth_call(functions.getMetatransactionNonce, [_userAddress])
    }

    identifier(): Promise<string> {
        return this.eth_call(functions.identifier, [])
    }

    version(): Promise<bigint> {
        return this.eth_call(functions.version, [])
    }

    failingExecutionAllowed(_motionId: bigint): Promise<boolean> {
        return this.eth_call(functions.failingExecutionAllowed, [_motionId])
    }

    getTotalStakeFraction(): Promise<bigint> {
        return this.eth_call(functions.getTotalStakeFraction, [])
    }

    getVoterRewardFraction(): Promise<bigint> {
        return this.eth_call(functions.getVoterRewardFraction, [])
    }

    getUserMinStakeFraction(): Promise<bigint> {
        return this.eth_call(functions.getUserMinStakeFraction, [])
    }

    getMaxVoteFraction(): Promise<bigint> {
        return this.eth_call(functions.getMaxVoteFraction, [])
    }

    getStakePeriod(): Promise<bigint> {
        return this.eth_call(functions.getStakePeriod, [])
    }

    getSubmitPeriod(): Promise<bigint> {
        return this.eth_call(functions.getSubmitPeriod, [])
    }

    getRevealPeriod(): Promise<bigint> {
        return this.eth_call(functions.getRevealPeriod, [])
    }

    getEscalationPeriod(): Promise<bigint> {
        return this.eth_call(functions.getEscalationPeriod, [])
    }

    getMotionCount(): Promise<bigint> {
        return this.eth_call(functions.getMotionCount, [])
    }

    getMotion(_motionId: bigint): Promise<([events: Array<bigint>, rootHash: string, domainId: bigint, skillId: bigint, skillRep: bigint, repSubmitted: bigint, paidVoterComp: bigint, pastVoterComp: Array<bigint>, stakes: Array<bigint>, votes: Array<bigint>, escalated: boolean, finalized: boolean, altTarget: string, action: string] & {events: Array<bigint>, rootHash: string, domainId: bigint, skillId: bigint, skillRep: bigint, repSubmitted: bigint, paidVoterComp: bigint, pastVoterComp: Array<bigint>, stakes: Array<bigint>, votes: Array<bigint>, escalated: boolean, finalized: boolean, altTarget: string, action: string})> {
        return this.eth_call(functions.getMotion, [_motionId])
    }

    getStake(_motionId: bigint, _staker: string, _vote: bigint): Promise<bigint> {
        return this.eth_call(functions.getStake, [_motionId, _staker, _vote])
    }

    getExpenditureMotionCount(_structHash: string): Promise<bigint> {
        return this.eth_call(functions.getExpenditureMotionCount, [_structHash])
    }

    getExpenditurePastVote(_actionHash: string): Promise<bigint> {
        return this.eth_call(functions.getExpenditurePastVote, [_actionHash])
    }

    getMotionState(_motionId: bigint): Promise<number> {
        return this.eth_call(functions.getMotionState, [_motionId])
    }

    getVoterReward(_motionId: bigint, _voterRep: bigint): Promise<bigint> {
        return this.eth_call(functions.getVoterReward, [_motionId, _voterRep])
    }

    getVoterRewardRange(_motionId: bigint, _voterRep: bigint, _voterAddress: string): Promise<([_rewardMin: bigint, _rewardMax: bigint] & {_rewardMin: bigint, _rewardMax: bigint})> {
        return this.eth_call(functions.getVoterRewardRange, [_motionId, _voterRep, _voterAddress])
    }

    getStakerReward(_motionId: bigint, _staker: string, _vote: bigint): Promise<([_reward: bigint, _penalty: bigint] & {_reward: bigint, _penalty: bigint})> {
        return this.eth_call(functions.getStakerReward, [_motionId, _staker, _vote])
    }
}
