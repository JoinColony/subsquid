import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './IColonyNetwork.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    AuctionCreated: new LogEvent<([auction: string, token: string, quantity: bigint] & {auction: string, token: string, quantity: bigint})>(
        abi, '0x261f6e6830ed857876d5aa4eca876ccf116d09b91a6675e3e1a1920d53ef585e'
    ),
    ColonyAdded: new LogEvent<([colonyId: bigint, colonyAddress: string, token: string] & {colonyId: bigint, colonyAddress: string, token: string})>(
        abi, '0x1904953a6126b2f999ad2661494642bfc63346430965de35cdcd7b5d4e6787ae'
    ),
    ColonyLabelRegistered: new LogEvent<([colony: string, label: string] & {colony: string, label: string})>(
        abi, '0x5eac6ea5170b50277715d82d48b59bc29df52d4433a20502217dfc779ccdfe73'
    ),
    ColonyNetworkInitialised: new LogEvent<([resolver: string] & {resolver: string})>(
        abi, '0xb359e28a27b6359e12b2a89378843d9900e4235acbbc05656ea06bf4c2064896'
    ),
    ColonyVersionAdded: new LogEvent<([version: bigint, resolver: string] & {version: bigint, resolver: string})>(
        abi, '0x8200c0c16a44d6f048a2199def86b6dbd55664cab6c3f01ddd2ab43a1adf1676'
    ),
    ExtensionAddedToNetwork: new LogEvent<([extensionId: string, version: bigint] & {extensionId: string, version: bigint})>(
        abi, '0x613016754b671babf288fba239886b59cf4997ac3aa3ee3f4f8b5f98158b0960'
    ),
    ExtensionDeprecated: new LogEvent<([extensionId: string, colony: string, deprecated: boolean] & {extensionId: string, colony: string, deprecated: boolean})>(
        abi, '0xd9d35b85883f360d0e1ee37027c61473175414ffded7abcbfb19221a1a20e520'
    ),
    ExtensionInstalled: new LogEvent<([extensionId: string, colony: string, version: bigint] & {extensionId: string, colony: string, version: bigint})>(
        abi, '0x378d8d9f432c0ed5e6df6c347552e51721c219f576993190c176d1dbafa8099d'
    ),
    ExtensionUninstalled: new LogEvent<([extensionId: string, colony: string] & {extensionId: string, colony: string})>(
        abi, '0xd2c2232148c2f32f7bf723d3bcdf061b47fd5ce29270ca9aebe5785a0032a655'
    ),
    ExtensionUpgraded: new LogEvent<([extensionId: string, colony: string, version: bigint] & {extensionId: string, colony: string, version: bigint})>(
        abi, '0xef0bd723d8719f69c250a3f14a17a46b9474f8b1a068ca73c21ead71665ea8bf'
    ),
    MetaColonyCreated: new LogEvent<([metaColony: string, token: string, rootSkillId: bigint] & {metaColony: string, token: string, rootSkillId: bigint})>(
        abi, '0x6b59832e92ce4e0a6a6908df30a543563ccabf542c8836e78a1c50b0cdfc5959'
    ),
    MetaTransactionExecuted: new LogEvent<([userAddress: string, relayerAddress: string, payload: string] & {userAddress: string, relayerAddress: string, payload: string})>(
        abi, '0x5845892132946850460bff5a0083f71031bc5bf9aadcd40f1de79423eac9b10b'
    ),
    MiningCycleResolverSet: new LogEvent<([miningCycleResolver: string] & {miningCycleResolver: string})>(
        abi, '0x1200d5181cf6b6a78c9b47af4a9217d46f4240add3629d168f6781e232b06e62'
    ),
    NetworkFeeInverseSet: new LogEvent<([feeInverse: bigint] & {feeInverse: bigint})>(
        abi, '0x8c240c7dd895a1b58d8d303d8d83782acf54b1329592f70db2ee5a0497220cef'
    ),
    RecoveryModeEntered: new LogEvent<([user: string] & {user: string})>(
        abi, '0x3d8ae39b7da0b62fb8b704319ee6c696c586b5dd3b1a85474bc6bb587c097f9b'
    ),
    RecoveryModeExitApproved: new LogEvent<([user: string] & {user: string})>(
        abi, '0x08b7c2d27988b46ee8df022d61629bb2d165c5e7590713b57957371c895b9d0d'
    ),
    RecoveryModeExited: new LogEvent<([user: string] & {user: string})>(
        abi, '0xba58d7c7fd818a57d199a2a73de42938b06f7ef07b91844fcb83af716572b576'
    ),
    RecoveryRoleSet: new LogEvent<([user: string, setTo: boolean] & {user: string, setTo: boolean})>(
        abi, '0x3af0c2ca023ed54860a0e58d41464c90cd7ff48f9d7ec1058275852d585cd144'
    ),
    RecoveryStorageSlotSet: new LogEvent<([user: string, slot: bigint, fromValue: string, toValue: string] & {user: string, slot: bigint, fromValue: string, toValue: string})>(
        abi, '0x37d4f7093c2360322030285dbb7772aeb3b5a5112290100da5484b462e84a8c8'
    ),
    RegistrarInitialised: new LogEvent<([ens: string, rootNode: string] & {ens: string, rootNode: string})>(
        abi, '0x16bcbef118ba139a2c33f86b7f8857cfba6f9c90fa1ebdfe3aa22e6bceaa151b'
    ),
    ReputationMinerPenalised: new LogEvent<([miner: string, tokensLost: bigint] & {miner: string, tokensLost: bigint})>(
        abi, '0x3d49fb5d5d75cd658336e3f39f04d342268a7162c9932993d4f93e1921f5d691'
    ),
    ReputationMiningCycleComplete: new LogEvent<([hash: string, nLeaves: bigint] & {hash: string, nLeaves: bigint})>(
        abi, '0x752ef39e1c821a8c89637d42bd3a0126ea4839ad4ce6f6a10bea30141c117260'
    ),
    ReputationMiningInitialised: new LogEvent<([inactiveReputationMiningCycle: string] & {inactiveReputationMiningCycle: string})>(
        abi, '0x47b5df58a92479a9589bce437805f6eec45839c2bafd67d8635c2120c9cf5bff'
    ),
    ReputationMiningRewardSet: new LogEvent<([amount: bigint] & {amount: bigint})>(
        abi, '0x60b04313138d2ba06196d7deea04e4af1a742d9c78b5110d03d6adb6bbe9bdef'
    ),
    ReputationRootHashSet: new LogEvent<([newHash: string, newNLeaves: bigint, stakers: Array<string>, reward: bigint] & {newHash: string, newNLeaves: bigint, stakers: Array<string>, reward: bigint})>(
        abi, '0xf784e6b3e559bebd532257ff6eb5e044b4b59f3f9802eaca5dd04a44805ce04f'
    ),
    SkillAdded: new LogEvent<([skillId: bigint, parentSkillId: bigint] & {skillId: bigint, parentSkillId: bigint})>(
        abi, '0xafe765b392910efb92e8447f3571f7d46c9046cf149b438ccd40b473f4fb332e'
    ),
    TokenAuthorityDeployed: new LogEvent<([tokenAuthorityAddress: string] & {tokenAuthorityAddress: string})>(
        abi, '0x2d6d0e4eac00fe350a815d6f2fd3e2af500bbcfc880a6203e312b4e1668cea7f'
    ),
    TokenDeployed: new LogEvent<([tokenAddress: string] & {tokenAddress: string})>(
        abi, '0x91d24864a084ab70b268a1f865e757ca12006cf298d763b6be697302ef86498c'
    ),
    TokenLockingAddressSet: new LogEvent<([tokenLocking: string] & {tokenLocking: string})>(
        abi, '0xae5c99e483b74f96e60231cd7e3460f8d8403205510ffdb7fe24b0d66ca7ec36'
    ),
    TokenWhitelisted: new LogEvent<([token: string, status: boolean] & {token: string, status: boolean})>(
        abi, '0xef81a9943b96c8df4ef243401c9bf5159146166211356898b52d382086168d92'
    ),
    UserLabelRegistered: new LogEvent<([user: string, label: string] & {user: string, label: string})>(
        abi, '0xb59bb806875ef5718727778ded48d6def0daadc637571c2265f9eaee20aaa024'
    ),
}

export const functions = {
    approveExitRecovery: new Func<[], {}, []>(
        abi, '0x31292ba7'
    ),
    checkNotAdditionalProtectedVariable: new Func<[_slot: bigint], {_slot: bigint}, []>(
        abi, '0x8831fa34'
    ),
    enterRecoveryMode: new Func<[], {}, []>(
        abi, '0xe77aaee2'
    ),
    executeMetaTransaction: new Func<[userAddress: string, payload: string, sigR: string, sigS: string, sigV: number], {userAddress: string, payload: string, sigR: string, sigS: string, sigV: number}, string>(
        abi, '0x0c53c51c'
    ),
    exitRecoveryMode: new Func<[], {}, []>(
        abi, '0x38e5b7ae'
    ),
    getMetatransactionNonce: new Func<[userAddress: string], {userAddress: string}, bigint>(
        abi, '0xb3eac1d8'
    ),
    isInRecoveryMode: new Func<[], {}, boolean>(
        abi, '0x80d9fad3'
    ),
    multicall: new Func<[data: Array<string>], {data: Array<string>}, Array<string>>(
        abi, '0xac9650d8'
    ),
    numRecoveryRoles: new Func<[], {}, bigint>(
        abi, '0x54584330'
    ),
    removeRecoveryRole: new Func<[_user: string], {_user: string}, []>(
        abi, '0x99cf7cc7'
    ),
    setRecoveryRole: new Func<[_user: string], {_user: string}, []>(
        abi, '0xd24536a5'
    ),
    setStorageSlotRecovery: new Func<[_slot: bigint, _value: string], {_slot: bigint, _value: string}, []>(
        abi, '0x55028923'
    ),
    supportsInterface: new Func<[_interfaceID: string], {_interfaceID: string}, boolean>(
        abi, '0x01ffc9a7'
    ),
    setReplacementReputationUpdateLogEntry: new Func<[_reputationMiningCycle: string, _id: bigint, _user: string, _amount: bigint, _skillId: bigint, _colony: string, _nUpdates: bigint, _nPreviousUpdates: bigint], {_reputationMiningCycle: string, _id: bigint, _user: string, _amount: bigint, _skillId: bigint, _colony: string, _nUpdates: bigint, _nPreviousUpdates: bigint}, []>(
        abi, '0x23100714'
    ),
    getReplacementReputationUpdateLogEntry: new Func<[_reputationMiningCycle: string, _id: bigint], {_reputationMiningCycle: string, _id: bigint}, ([user: string, amount: bigint, skillId: bigint, colony: string, nUpdates: bigint, nPreviousUpdates: bigint] & {user: string, amount: bigint, skillId: bigint, colony: string, nUpdates: bigint, nPreviousUpdates: bigint})>(
        abi, '0xe926f61c'
    ),
    getReplacementReputationUpdateLogsExist: new Func<[_reputationMiningCycle: string], {_reputationMiningCycle: string}, boolean>(
        abi, '0x1d5b14e3'
    ),
    getMetaColony: new Func<[], {}, string>(
        abi, '0x731bc22f'
    ),
    getColonyCount: new Func<[], {}, bigint>(
        abi, '0x711a39be'
    ),
    isColony: new Func<[_colony: string], {_colony: string}, boolean>(
        abi, '0xdb0dd7ff'
    ),
    addSkill: new Func<[_parentSkillId: bigint], {_parentSkillId: bigint}, bigint>(
        abi, '0x162419cc'
    ),
    getSkill: new Func<[_skillId: bigint], {_skillId: bigint}, ([nParents: bigint, nChildren: bigint, parents: Array<bigint>, children: Array<bigint>, globalSkill: boolean, deprecated: boolean] & {nParents: bigint, nChildren: bigint, parents: Array<bigint>, children: Array<bigint>, globalSkill: boolean, deprecated: boolean})>(
        abi, '0xbd880fae'
    ),
    'deprecateSkill(uint256)': new Func<[_skillId: bigint], {_skillId: bigint}, []>(
        abi, '0xbb47bf18'
    ),
    'deprecateSkill(uint256,bool)': new Func<[_skillId: bigint, _deprecated: boolean], {_skillId: bigint, _deprecated: boolean}, boolean>(
        abi, '0xd20b156b'
    ),
    initialiseRootLocalSkill: new Func<[], {}, bigint>(
        abi, '0x2501ab2c'
    ),
    appendReputationUpdateLog: new Func<[_user: string, _amount: bigint, _skillId: bigint], {_user: string, _amount: bigint, _skillId: bigint}, []>(
        abi, '0x5a8adafa'
    ),
    getSkillCount: new Func<[], {}, bigint>(
        abi, '0x05f53b29'
    ),
    getReputationMiningSkillId: new Func<[], {}, bigint>(
        abi, '0x1c46bc7f'
    ),
    setTokenLocking: new Func<[_tokenLockingAddress: string], {_tokenLockingAddress: string}, []>(
        abi, '0x8fb6839a'
    ),
    getTokenLocking: new Func<[], {}, string>(
        abi, '0xb319902a'
    ),
    createMetaColony: new Func<[_tokenAddress: string], {_tokenAddress: string}, []>(
        abi, '0xa2f99b86'
    ),
    'createColony(address)': new Func<[_tokenAddress: string], {_tokenAddress: string}, string>(
        abi, '0x08eb0d2c'
    ),
    'createColony(address,uint256,string,string)': new Func<[_tokenAddress: string, _version: bigint, _colonyName: string, _metadata: string], {_tokenAddress: string, _version: bigint, _colonyName: string, _metadata: string}, string>(
        abi, '0x0e0049a0'
    ),
    'createColony(address,uint256,string)': new Func<[_tokenAddress: string, _version: bigint, _colonyName: string], {_tokenAddress: string, _version: bigint, _colonyName: string}, string>(
        abi, '0x17a08518'
    ),
    'createColony(address,uint256,string,string,bool)': new Func<[_tokenAddress: string, _version: bigint, _colonyName: string, _orbitdb: string, _useExtensionManager: boolean], {_tokenAddress: string, _version: bigint, _colonyName: string, _orbitdb: string, _useExtensionManager: boolean}, string>(
        abi, '0x9a55bfdc'
    ),
    createColonyForFrontend: new Func<[_tokenAddress: string, _name: string, _symbol: string, _decimals: number, _version: bigint, _colonyName: string, _metadata: string], {_tokenAddress: string, _name: string, _symbol: string, _decimals: number, _version: bigint, _colonyName: string, _metadata: string}, ([token: string, colony: string] & {token: string, colony: string})>(
        abi, '0x685987df'
    ),
    addColonyVersion: new Func<[_version: bigint, _resolver: string], {_version: bigint, _resolver: string}, []>(
        abi, '0xf07eb921'
    ),
    initialise: new Func<[_resolver: string, _version: bigint], {_resolver: string, _version: bigint}, []>(
        abi, '0x3b4d206b'
    ),
    getColony: new Func<[_id: bigint], {_id: bigint}, string>(
        abi, '0x6f92650d'
    ),
    getCurrentColonyVersion: new Func<[], {}, bigint>(
        abi, '0xbca1e4df'
    ),
    getParentSkillId: new Func<[_skillId: bigint, _parentSkillIndex: bigint], {_skillId: bigint, _parentSkillIndex: bigint}, bigint>(
        abi, '0xd987fc16'
    ),
    getChildSkillId: new Func<[_skillId: bigint, _childSkillIndex: bigint], {_skillId: bigint, _childSkillIndex: bigint}, bigint>(
        abi, '0x09d10a5e'
    ),
    getReputationMiningCycle: new Func<[_active: boolean], {_active: boolean}, string>(
        abi, '0xf2c8599c'
    ),
    calculateMinerWeight: new Func<[_timeStaked: bigint, _submissonIndex: bigint], {_timeStaked: bigint, _submissonIndex: bigint}, bigint>(
        abi, '0x8e4544d7'
    ),
    getColonyVersionResolver: new Func<[_version: bigint], {_version: bigint}, string>(
        abi, '0x8f14c886'
    ),
    setReputationRootHash: new Func<[_newHash: string, _newNLeaves: bigint, _stakers: Array<string>], {_newHash: string, _newNLeaves: bigint, _stakers: Array<string>}, []>(
        abi, '0x743ed431'
    ),
    startNextCycle: new Func<[], {}, []>(
        abi, '0x450e2ed3'
    ),
    initialiseReputationMining: new Func<[], {}, []>(
        abi, '0xee65786a'
    ),
    getReputationRootHash: new Func<[], {}, string>(
        abi, '0x97824c3f'
    ),
    getReputationRootHashNLeaves: new Func<[], {}, bigint>(
        abi, '0x1262bd19'
    ),
    getReputationRootHashNNodes: new Func<[], {}, bigint>(
        abi, '0x7680150d'
    ),
    startTokenAuction: new Func<[_token: string], {_token: string}, []>(
        abi, '0x55a8495a'
    ),
    setupRegistrar: new Func<[_ens: string, _rootNode: string], {_ens: string, _rootNode: string}, []>(
        abi, '0x6060c4aa'
    ),
    registerUserLabel: new Func<[_username: string, _orbitdb: string], {_username: string, _orbitdb: string}, []>(
        abi, '0xb5e34fbf'
    ),
    registerColonyLabel: new Func<[_colonyName: string, _orbitdb: string], {_colonyName: string, _orbitdb: string}, []>(
        abi, '0xe2db777b'
    ),
    updateColonyOrbitDB: new Func<[_orbitdb: string], {_orbitdb: string}, []>(
        abi, '0x28672cea'
    ),
    updateUserOrbitDB: new Func<[_orbitdb: string], {_orbitdb: string}, []>(
        abi, '0xed26b557'
    ),
    getProfileDBAddress: new Func<[_node: string], {_node: string}, string>(
        abi, '0xcd930b63'
    ),
    lookupRegisteredENSDomain: new Func<[_addr: string], {_addr: string}, string>(
        abi, '0x60c64776'
    ),
    addr: new Func<[_node: string], {_node: string}, string>(
        abi, '0x3b3b57de'
    ),
    getENSRegistrar: new Func<[], {}, string>(
        abi, '0xa5e42536'
    ),
    setMiningResolver: new Func<[_miningResolverAddress: string], {_miningResolverAddress: string}, []>(
        abi, '0xe1636882'
    ),
    getMiningResolver: new Func<[], {}, string>(
        abi, '0x749f15cd'
    ),
    addExtensionToNetwork: new Func<[_extensionId: string, _resolver: string], {_extensionId: string, _resolver: string}, []>(
        abi, '0x886484f7'
    ),
    installExtension: new Func<[_extensionId: string, _version: bigint], {_extensionId: string, _version: bigint}, []>(
        abi, '0x9dec0910'
    ),
    upgradeExtension: new Func<[_extensionId: string, _newVersion: bigint], {_extensionId: string, _newVersion: bigint}, []>(
        abi, '0xd9bd780b'
    ),
    deprecateExtension: new Func<[_extensionId: string, _deprecated: boolean], {_extensionId: string, _deprecated: boolean}, []>(
        abi, '0x04eaa104'
    ),
    uninstallExtension: new Func<[_extensionId: string], {_extensionId: string}, []>(
        abi, '0xc2308c49'
    ),
    getExtensionResolver: new Func<[_extensionId: string, _version: bigint], {_extensionId: string, _version: bigint}, string>(
        abi, '0x71be7b25'
    ),
    getExtensionInstallation: new Func<[_extensionId: string, _colony: string], {_extensionId: string, _colony: string}, string>(
        abi, '0xdc6095ae'
    ),
    getFeeInverse: new Func<[], {}, bigint>(
        abi, '0xef63c380'
    ),
    setFeeInverse: new Func<[_feeInverse: bigint], {_feeInverse: bigint}, []>(
        abi, '0x3812b259'
    ),
    getPayoutWhitelist: new Func<[_token: string], {_token: string}, boolean>(
        abi, '0x60539ef2'
    ),
    setPayoutWhitelist: new Func<[_token: string, _status: boolean], {_token: string, _status: boolean}, []>(
        abi, '0xe7875ea8'
    ),
    punishStakers: new Func<[_stakers: Array<string>, _amount: bigint], {_stakers: Array<string>, _amount: bigint}, []>(
        abi, '0x0f96995d'
    ),
    stakeForMining: new Func<[_amount: bigint], {_amount: bigint}, []>(
        abi, '0x9dfc8e01'
    ),
    unstakeForMining: new Func<[_amount: bigint], {_amount: bigint}, []>(
        abi, '0x1879bde7'
    ),
    getMiningStake: new Func<[_user: string], {_user: string}, ([amount: bigint, timestamp: bigint] & {amount: bigint, timestamp: bigint})>(
        abi, '0x09ffb3cb'
    ),
    reward: new Func<[_recipient: string, _amount: bigint], {_recipient: string, _amount: bigint}, []>(
        abi, '0x21670f22'
    ),
    burnUnneededRewards: new Func<[_amount: bigint], {_amount: bigint}, []>(
        abi, '0xfff92e6f'
    ),
    claimMiningReward: new Func<[_recipient: string], {_recipient: string}, []>(
        abi, '0x63c2a510'
    ),
    setReputationMiningCycleReward: new Func<[_amount: bigint], {_amount: bigint}, []>(
        abi, '0x1d9a5536'
    ),
    getReputationMiningCycleReward: new Func<[], {}, bigint>(
        abi, '0x6f51d85c'
    ),
    deployTokenViaNetwork: new Func<[_name: string, _symbol: string, _decimals: number], {_name: string, _symbol: string, _decimals: number}, string>(
        abi, '0x4e51691a'
    ),
    deployTokenAuthority: new Func<[_token: string, _colony: string, _allowedToTransfer: Array<string>], {_token: string, _colony: string, _allowedToTransfer: Array<string>}, string>(
        abi, '0x5ac54408'
    ),
    setMiningDelegate: new Func<[_delegate: string, _allowed: boolean], {_delegate: string, _allowed: boolean}, []>(
        abi, '0xf584d17d'
    ),
    getMiningDelegator: new Func<[_delegate: string], {_delegate: string}, string>(
        abi, '0xacb377a2'
    ),
}

export class Contract extends ContractBase {

    getMetatransactionNonce(userAddress: string): Promise<bigint> {
        return this.eth_call(functions.getMetatransactionNonce, [userAddress])
    }

    isInRecoveryMode(): Promise<boolean> {
        return this.eth_call(functions.isInRecoveryMode, [])
    }

    numRecoveryRoles(): Promise<bigint> {
        return this.eth_call(functions.numRecoveryRoles, [])
    }

    supportsInterface(_interfaceID: string): Promise<boolean> {
        return this.eth_call(functions.supportsInterface, [_interfaceID])
    }

    getReplacementReputationUpdateLogEntry(_reputationMiningCycle: string, _id: bigint): Promise<([user: string, amount: bigint, skillId: bigint, colony: string, nUpdates: bigint, nPreviousUpdates: bigint] & {user: string, amount: bigint, skillId: bigint, colony: string, nUpdates: bigint, nPreviousUpdates: bigint})> {
        return this.eth_call(functions.getReplacementReputationUpdateLogEntry, [_reputationMiningCycle, _id])
    }

    getReplacementReputationUpdateLogsExist(_reputationMiningCycle: string): Promise<boolean> {
        return this.eth_call(functions.getReplacementReputationUpdateLogsExist, [_reputationMiningCycle])
    }

    getMetaColony(): Promise<string> {
        return this.eth_call(functions.getMetaColony, [])
    }

    getColonyCount(): Promise<bigint> {
        return this.eth_call(functions.getColonyCount, [])
    }

    isColony(_colony: string): Promise<boolean> {
        return this.eth_call(functions.isColony, [_colony])
    }

    getSkill(_skillId: bigint): Promise<([nParents: bigint, nChildren: bigint, parents: Array<bigint>, children: Array<bigint>, globalSkill: boolean, deprecated: boolean] & {nParents: bigint, nChildren: bigint, parents: Array<bigint>, children: Array<bigint>, globalSkill: boolean, deprecated: boolean})> {
        return this.eth_call(functions.getSkill, [_skillId])
    }

    getSkillCount(): Promise<bigint> {
        return this.eth_call(functions.getSkillCount, [])
    }

    getReputationMiningSkillId(): Promise<bigint> {
        return this.eth_call(functions.getReputationMiningSkillId, [])
    }

    getTokenLocking(): Promise<string> {
        return this.eth_call(functions.getTokenLocking, [])
    }

    getColony(_id: bigint): Promise<string> {
        return this.eth_call(functions.getColony, [_id])
    }

    getCurrentColonyVersion(): Promise<bigint> {
        return this.eth_call(functions.getCurrentColonyVersion, [])
    }

    getParentSkillId(_skillId: bigint, _parentSkillIndex: bigint): Promise<bigint> {
        return this.eth_call(functions.getParentSkillId, [_skillId, _parentSkillIndex])
    }

    getChildSkillId(_skillId: bigint, _childSkillIndex: bigint): Promise<bigint> {
        return this.eth_call(functions.getChildSkillId, [_skillId, _childSkillIndex])
    }

    getReputationMiningCycle(_active: boolean): Promise<string> {
        return this.eth_call(functions.getReputationMiningCycle, [_active])
    }

    calculateMinerWeight(_timeStaked: bigint, _submissonIndex: bigint): Promise<bigint> {
        return this.eth_call(functions.calculateMinerWeight, [_timeStaked, _submissonIndex])
    }

    getColonyVersionResolver(_version: bigint): Promise<string> {
        return this.eth_call(functions.getColonyVersionResolver, [_version])
    }

    getReputationRootHash(): Promise<string> {
        return this.eth_call(functions.getReputationRootHash, [])
    }

    getReputationRootHashNLeaves(): Promise<bigint> {
        return this.eth_call(functions.getReputationRootHashNLeaves, [])
    }

    getReputationRootHashNNodes(): Promise<bigint> {
        return this.eth_call(functions.getReputationRootHashNNodes, [])
    }

    getProfileDBAddress(_node: string): Promise<string> {
        return this.eth_call(functions.getProfileDBAddress, [_node])
    }

    lookupRegisteredENSDomain(_addr: string): Promise<string> {
        return this.eth_call(functions.lookupRegisteredENSDomain, [_addr])
    }

    addr(_node: string): Promise<string> {
        return this.eth_call(functions.addr, [_node])
    }

    getENSRegistrar(): Promise<string> {
        return this.eth_call(functions.getENSRegistrar, [])
    }

    getMiningResolver(): Promise<string> {
        return this.eth_call(functions.getMiningResolver, [])
    }

    getExtensionResolver(_extensionId: string, _version: bigint): Promise<string> {
        return this.eth_call(functions.getExtensionResolver, [_extensionId, _version])
    }

    getExtensionInstallation(_extensionId: string, _colony: string): Promise<string> {
        return this.eth_call(functions.getExtensionInstallation, [_extensionId, _colony])
    }

    getFeeInverse(): Promise<bigint> {
        return this.eth_call(functions.getFeeInverse, [])
    }

    getPayoutWhitelist(_token: string): Promise<boolean> {
        return this.eth_call(functions.getPayoutWhitelist, [_token])
    }

    getMiningStake(_user: string): Promise<([amount: bigint, timestamp: bigint] & {amount: bigint, timestamp: bigint})> {
        return this.eth_call(functions.getMiningStake, [_user])
    }

    getReputationMiningCycleReward(): Promise<bigint> {
        return this.eth_call(functions.getReputationMiningCycleReward, [])
    }

    getMiningDelegator(_delegate: string): Promise<string> {
        return this.eth_call(functions.getMiningDelegator, [_delegate])
    }
}
