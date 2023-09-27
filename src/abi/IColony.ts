import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './IColony.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    Annotation: new LogEvent<([agent: string, txHash: string, metadata: string] & {agent: string, txHash: string, metadata: string})>(
        abi, '0xd9787726bb50d23a6c8d3fa40f89cefe5502a5654c9a075e518d72981edb4219'
    ),
    ArbitraryReputationUpdate: new LogEvent<([agent: string, user: string, skillId: bigint, amount: bigint] & {agent: string, user: string, skillId: bigint, amount: bigint})>(
        abi, '0xb02bdc7698c9f1e6dd331743f80633b0c0d806fe8a5c9de0be07f71846ce0f13'
    ),
    ArbitraryTransaction: new LogEvent<([target: string, data: string, success: boolean] & {target: string, data: string, success: boolean})>(
        abi, '0xba3c3529bbc4664d520b1633c44e680da434b19ea60f36f2a7b8ff627511675b'
    ),
    ColonyBootstrapped: new LogEvent<([agent: string, users: Array<string>, amounts: Array<bigint>] & {agent: string, users: Array<string>, amounts: Array<bigint>})>(
        abi, '0xc285088275f8d603e0c1aa61be09cca665b719ac2e836b49ccb1ee36f7450f4b'
    ),
    ColonyFundsClaimed: new LogEvent<([agent: string, token: string, fee: bigint, payoutRemainder: bigint] & {agent: string, token: string, fee: bigint, payoutRemainder: bigint})>(
        abi, '0x7d130a9948b6c9f7e7d7f378f9e46f7bc47276613865bf1d02664d6076adb3b6'
    ),
    ColonyFundsMovedBetweenFundingPots: new LogEvent<([agent: string, fromPot: bigint, toPot: bigint, amount: bigint, token: string] & {agent: string, fromPot: bigint, toPot: bigint, amount: bigint, token: string})>(
        abi, '0xa38fcb3f72538673ff6010adaa55f1f9a2685d29c5d6b241cad0be857a8a9ff2'
    ),
    ColonyInitialised: new LogEvent<([agent: string, colonyNetwork: string, token: string] & {agent: string, colonyNetwork: string, token: string})>(
        abi, '0x1ad1e2ab221b56adada673d46da993cdf94d0d9781c1bd156ed3e5f58d8fc4b4'
    ),
    ColonyMetadata: new LogEvent<([agent: string, metadata: string] & {agent: string, metadata: string})>(
        abi, '0x21decaa38913fadd13b06633141838b9755ab8edeb61fe049356381408795536'
    ),
    ColonyMetadataDelta: new LogEvent<([agent: string, metadata: string] & {agent: string, metadata: string})>(
        abi, '0x1d0361f68b1460fa34bb9dcabefed0d35de60e729873afe34b4450c0652f68ea'
    ),
    ColonyRewardInverseSet: new LogEvent<([agent: string, rewardInverse: bigint] & {agent: string, rewardInverse: bigint})>(
        abi, '0x4dff48028fbe0d1b3c3b2bd9c136dd4cb1f7f39b64f4be35c7fa40175a24e458'
    ),
    'ColonyRoleSet(address,address,uint256,uint8,bool)': new LogEvent<([agent: string, user: string, domainId: bigint, role: number, setTo: boolean] & {agent: string, user: string, domainId: bigint, role: number, setTo: boolean})>(
        abi, '0xa677aae4b9b8fe1575cc38f64b40139d1b40f69a25a1a6cab0dc86ddda698455'
    ),
    'ColonyUpgraded(address,uint256,uint256)': new LogEvent<([agent: string, oldVersion: bigint, newVersion: bigint] & {agent: string, oldVersion: bigint, newVersion: bigint})>(
        abi, '0xdc7ee7be223e014db30a67efc5d524db88960f0ddc91e1187a2c3498fc60dd44'
    ),
    'DomainAdded(address,uint256)': new LogEvent<([agent: string, domainId: bigint] & {agent: string, domainId: bigint})>(
        abi, '0xeebe2c2f80c40aa23a2ff207553eacab8159dc4f8a415e2abb05931c646f9698'
    ),
    DomainDeprecated: new LogEvent<([agent: string, domainId: bigint, deprecated: boolean] & {agent: string, domainId: bigint, deprecated: boolean})>(
        abi, '0xc9314245d917ee5f0704b6bc3425904c82d72436c48de2b0152f02cd0adbe528'
    ),
    DomainMetadata: new LogEvent<([agent: string, domainId: bigint, metadata: string] & {agent: string, domainId: bigint, metadata: string})>(
        abi, '0xe0df562bffdfc2cb8d8c7dc20be1e2622acefd7c2b8f5f95f78534cb2ba0a1f3'
    ),
    ExpenditureAdded: new LogEvent<([agent: string, expenditureId: bigint] & {agent: string, expenditureId: bigint})>(
        abi, '0x398f529f1ecedd0eb42d360bd09c24839327fbdc1e317cac5377f2dbc2584be2'
    ),
    ExpenditureCancelled: new LogEvent<([agent: string, expenditureId: bigint] & {agent: string, expenditureId: bigint})>(
        abi, '0xd6aab7ea190608bf3dc99a37f2034587b1bf58239020089f803884cd57a45108'
    ),
    ExpenditureClaimDelaySet: new LogEvent<([agent: string, expenditureId: bigint, slot: bigint, claimDelay: bigint] & {agent: string, expenditureId: bigint, slot: bigint, claimDelay: bigint})>(
        abi, '0x67397cf0df1f03830a51832c16bcdeb1058b811270ccbaa2809d13f93ee9ce45'
    ),
    ExpenditureFinalized: new LogEvent<([agent: string, expenditureId: bigint] & {agent: string, expenditureId: bigint})>(
        abi, '0xd5633d5ddbf4dae292d4d7adbe902b17fdcab57e953f75d20b1b177094ae88fe'
    ),
    ExpenditureGlobalClaimDelaySet: new LogEvent<([agent: string, globalClaimDelay: bigint] & {agent: string, globalClaimDelay: bigint})>(
        abi, '0xe64091bf06be1cb7cb4ec878b01a739af27f38785fc17b325e4c77b5a64b857c'
    ),
    ExpenditureLocked: new LogEvent<([agent: string, expenditureId: bigint] & {agent: string, expenditureId: bigint})>(
        abi, '0xdb8b6714f17a8dbfef08838b3c00f61b88e910ad85e9201dd396095fd9bda901'
    ),
    ExpenditureMetadataSet: new LogEvent<([agent: string, expenditureId: bigint, metadata: string] & {agent: string, expenditureId: bigint, metadata: string})>(
        abi, '0xcf105adaf53d5534b14993a4485fac29a7671fe1e6fd3123199846cfef08b75f'
    ),
    ExpenditurePayoutModifierSet: new LogEvent<([agent: string, expenditureId: bigint, slot: bigint, payoutModifier: bigint] & {agent: string, expenditureId: bigint, slot: bigint, payoutModifier: bigint})>(
        abi, '0x6886eeab1d0ff69b1a2a8dbcd1d01cfe080820c32e6aafd3c26f5fbf8f086bbc'
    ),
    ExpenditurePayoutSet: new LogEvent<([agent: string, expenditureId: bigint, slot: bigint, token: string, amount: bigint] & {agent: string, expenditureId: bigint, slot: bigint, token: string, amount: bigint})>(
        abi, '0xdfb9cbc3b4fd736624861647b71621b74fa47cce03a2c49501fcefcdbd06628a'
    ),
    ExpenditureRecipientSet: new LogEvent<([agent: string, expenditureId: bigint, slot: bigint, recipient: string] & {agent: string, expenditureId: bigint, slot: bigint, recipient: string})>(
        abi, '0xcde4ec04c1e39eae0ab0647b7467670a62eaf3577150e9aa2d3503817867a222'
    ),
    ExpenditureSkillSet: new LogEvent<([agent: string, expenditureId: bigint, slot: bigint, skillId: bigint] & {agent: string, expenditureId: bigint, slot: bigint, skillId: bigint})>(
        abi, '0x83dee69daffcc2cf2b1f944c065545728d63d26cb32ef77810575233caba2f6a'
    ),
    ExpenditureStateChanged: new LogEvent<([agent: string, expenditureId: bigint, storageSlot: bigint, mask: Array<boolean>, keys: Array<string>, value: string] & {agent: string, expenditureId: bigint, storageSlot: bigint, mask: Array<boolean>, value: string})>(
        abi, '0x341dd4ad6360a3137c883f9bfe2757a472026c590213295f3b95ed0b9c848838'
    ),
    ExpenditureTransferred: new LogEvent<([agent: string, expenditureId: bigint, owner: string] & {agent: string, expenditureId: bigint, owner: string})>(
        abi, '0xf5da07d1e23eb79d8fca81f892c2f4141f876fec752d266bf075041471932a27'
    ),
    FundingPotAdded: new LogEvent<([fundingPotId: bigint] & {fundingPotId: bigint})>(
        abi, '0x9024eafaee4bcbdf3af1f23bd5efd3ee4d269d3e5edb34589a9e406435c66ee5'
    ),
    LocalSkillAdded: new LogEvent<([agent: string, localSkillId: bigint] & {agent: string, localSkillId: bigint})>(
        abi, '0x403682e5c64d4bc579e584d19464196bf2fbce29211756d275d44b2b999e0ba2'
    ),
    LocalSkillDeprecated: new LogEvent<([agent: string, localSkillId: bigint, deprecated: boolean] & {agent: string, localSkillId: bigint, deprecated: boolean})>(
        abi, '0x61fae43c31040ae65293f0d9cbecbdcc2dfedf655205780fb6c7d46dfc3d498c'
    ),
    MetaTransactionExecuted: new LogEvent<([userAddress: string, relayerAddress: string, payload: string] & {userAddress: string, relayerAddress: string, payload: string})>(
        abi, '0x5845892132946850460bff5a0083f71031bc5bf9aadcd40f1de79423eac9b10b'
    ),
    PaymentAdded: new LogEvent<([agent: string, paymentId: bigint] & {agent: string, paymentId: bigint})>(
        abi, '0x7ceb32c988f6127615957ec467cbb5688c54a860a192790b125e54b9c3b681e0'
    ),
    PaymentFinalized: new LogEvent<([agent: string, paymentId: bigint] & {agent: string, paymentId: bigint})>(
        abi, '0x2ad6b25667fb9724935b8615e0cd3dd0739b9cc072c42777e8af9069e47b6c33'
    ),
    PaymentPayoutSet: new LogEvent<([agent: string, paymentId: bigint, token: string, amount: bigint] & {agent: string, paymentId: bigint, token: string, amount: bigint})>(
        abi, '0x8efc2e73b6b6c797354d3d76bf53d6d3201cdfd878b9c5b8ae356bdae0b1fc30'
    ),
    PaymentRecipientSet: new LogEvent<([agent: string, paymentId: bigint, recipient: string] & {agent: string, paymentId: bigint, recipient: string})>(
        abi, '0x6740d17bfcde84d3b53b13a61a5671fc569ec653a5a6cc1161db53d30ad5837d'
    ),
    PaymentSkillSet: new LogEvent<([agent: string, paymentId: bigint, skillId: bigint] & {agent: string, paymentId: bigint, skillId: bigint})>(
        abi, '0x634a8e92fa662e36830c399afb324d6b2c4bdd100aabfffb1339fd7a28b61685'
    ),
    PayoutClaimed: new LogEvent<([agent: string, fundingPotId: bigint, token: string, amount: bigint] & {agent: string, fundingPotId: bigint, token: string, amount: bigint})>(
        abi, '0x71800d8ed95227ee6ea3c7e1a9f05a2649637b201077036d47f30ed3612afab5'
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
    RewardPayoutClaimed: new LogEvent<([rewardPayoutId: bigint, user: string, fee: bigint, rewardRemainder: bigint] & {rewardPayoutId: bigint, user: string, fee: bigint, rewardRemainder: bigint})>(
        abi, '0x3bd758143863f95bfc1fbbc6882c58767c8f02979ede0b12aa6aaa26e7a44799'
    ),
    RewardPayoutCycleEnded: new LogEvent<([agent: string, rewardPayoutId: bigint] & {agent: string, rewardPayoutId: bigint})>(
        abi, '0x9b8f1504dd624c329505c4fc509a4ed7af34782ee7b93123a32fb5f760a50a5e'
    ),
    RewardPayoutCycleStarted: new LogEvent<([agent: string, rewardPayoutId: bigint] & {agent: string, rewardPayoutId: bigint})>(
        abi, '0x8f3e8dc0b0439a496ae117934dd8808ecf134e36b5e9537f74faafe0e2504d02'
    ),
    TaskAdded: new LogEvent<([agent: string, taskId: bigint] & {agent: string, taskId: bigint})>(
        abi, '0xf2ba834cb120f28cac9129d80d6990b8d99d9a0a71487cec7d88bd8a2ba45cb9'
    ),
    TaskBriefSet: new LogEvent<([taskId: bigint, specificationHash: string] & {taskId: bigint, specificationHash: string})>(
        abi, '0x019281e3423c38a1e2af4d4458d6591dcfa016042bdf05fb07a5e0337cdd4bee'
    ),
    TaskCanceled: new LogEvent<([taskId: bigint] & {taskId: bigint})>(
        abi, '0x1aa8a90c7d7a86bac690072d3f3d726bb8ebbe1989e158530440963f04c11eb2'
    ),
    TaskChangedViaSignatures: new LogEvent<([reviewerAddresses: Array<string>] & {reviewerAddresses: Array<string>})>(
        abi, '0x401143a82633f2b5aca1e38aba25cfd5f6a00f2bf59200dd6aeb06bca8886422'
    ),
    TaskCompleted: new LogEvent<([agent: string, taskId: bigint] & {agent: string, taskId: bigint})>(
        abi, '0xf684d89bb0f42287bf32838774e4b7f8a60c11804b3c6d1791fa55f306792643'
    ),
    TaskDeliverableSubmitted: new LogEvent<([agent: string, taskId: bigint, deliverableHash: string] & {agent: string, taskId: bigint, deliverableHash: string})>(
        abi, '0x2916fac92edec3519b694cf3eff1e1b5fc83d7c1da128c1250bc53a9ce1cdda6'
    ),
    TaskDueDateSet: new LogEvent<([taskId: bigint, dueDate: bigint] & {taskId: bigint, dueDate: bigint})>(
        abi, '0xa37e375143b5e44516c1f4870dcc35a3bad596ffa24db0236255509f37ba518e'
    ),
    TaskFinalized: new LogEvent<([agent: string, taskId: bigint] & {agent: string, taskId: bigint})>(
        abi, '0xc762f7b9b16fc57f9c347c3f1c88e06046c17532e87a7ab5794d60322272318d'
    ),
    TaskPayoutSet: new LogEvent<([taskId: bigint, role: number, token: string, amount: bigint] & {taskId: bigint, role: number, token: string, amount: bigint})>(
        abi, '0xcf74f09bc8480e7ae54fc6292cf673e2ac13346412c8173759d6793370c90fac'
    ),
    TaskRoleUserSet: new LogEvent<([taskId: bigint, role: number, user: string] & {taskId: bigint, role: number, user: string})>(
        abi, '0xdec5b0ff58168163a7bae93d6566869b43f0e2ce3e473ba50700c0731f47657b'
    ),
    TaskSkillSet: new LogEvent<([taskId: bigint, skillId: bigint] & {taskId: bigint, skillId: bigint})>(
        abi, '0x805061ac1bb50c97ac4649e42be645b37d3dbd0c14af49ca138a4650cd9699a5'
    ),
    TaskWorkRatingRevealed: new LogEvent<([agent: string, taskId: bigint, role: number, rating: number] & {agent: string, taskId: bigint, role: number, rating: number})>(
        abi, '0xa05e0d8e9c5b666b81dd76bf1e448ff2c47b37aef9b6beed013dd3fbc23356bb'
    ),
    'TokenUnlocked(address)': new LogEvent<([agent: string] & {agent: string})>(
        abi, '0x81ec08d3372506e176c49e626d8beb7e091712ef92908a130f4ccc6524fe2eec'
    ),
    TokensBurned: new LogEvent<([agent: string, token: string, amount: bigint] & {agent: string, token: string, amount: bigint})>(
        abi, '0x857ac1c9e97cc66ecae5f524c9c611463ae748b85af3ca454a5ec4d7d341924d'
    ),
    TokensMinted: new LogEvent<([agent: string, who: string, amount: bigint] & {agent: string, who: string, amount: bigint})>(
        abi, '0xbf67ec129007be07f346d9d2933215293a6612ce7ff17d6b479a5a5cae72890c'
    ),
    'DomainAdded(uint256)': new LogEvent<([domainId: bigint] & {domainId: bigint})>(
        abi, '0xdc725e59177226413e53f3af2d4ce462afe057a50f64a5cc1f4ba68995ee6e85'
    ),
    'ColonyUpgraded(uint256,uint256)': new LogEvent<([oldVersion: bigint, newVersion: bigint] & {oldVersion: bigint, newVersion: bigint})>(
        abi, '0xfd869f9a4402635c0c48fdd41efd32f2959a4773bdd34157f4562eff3c8e1d94'
    ),
    'ColonyRoleSet(address,uint256,uint8,bool)': new LogEvent<([user: string, domainId: bigint, role: number, setTo: boolean] & {user: string, domainId: bigint, role: number, setTo: boolean})>(
        abi, '0x6c30ee3b0904e7637998f99624912c370da3d2d78c27b93b7a75d63692964599'
    ),
    'TokenUnlocked()': new LogEvent<[]>(
        abi, '0x207acd5776f957a43a89bc1a22dc017c11da78363d4df57a450b110e31ec8f22'
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
    authority: new Func<[], {}, string>(
        abi, '0xbf7e214f'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    version: new Func<[], {}, bigint>(
        abi, '0x54fd4d50'
    ),
    upgrade: new Func<[_newVersion: bigint], {_newVersion: bigint}, []>(
        abi, '0x45977d03'
    ),
    finishUpgrade: new Func<[], {}, []>(
        abi, '0x340df28f'
    ),
    getColonyNetwork: new Func<[], {}, string>(
        abi, '0x4e5e8395'
    ),
    getToken: new Func<[], {}, string>(
        abi, '0x21df0da7'
    ),
    makeArbitraryTransaction: new Func<[_to: string, _action: string], {_to: string, _action: string}, boolean>(
        abi, '0x67c351c2'
    ),
    makeArbitraryTransactions: new Func<[_targets: Array<string>, _actions: Array<string>, _strict: boolean], {_targets: Array<string>, _actions: Array<string>, _strict: boolean}, boolean>(
        abi, '0xc6356efe'
    ),
    makeSingleArbitraryTransaction: new Func<[_target: string, _action: string], {_target: string, _action: string}, boolean>(
        abi, '0x663b482d'
    ),
    annotateTransaction: new Func<[_txHash: string, _metadata: string], {_txHash: string, _metadata: string}, []>(
        abi, '0x6c8ec8b5'
    ),
    setRootRole: new Func<[_user: string, _setTo: boolean], {_user: string, _setTo: boolean}, []>(
        abi, '0xe178f31a'
    ),
    setArbitrationRole: new Func<[_permissionDomainId: bigint, _childSkillIndex: bigint, _user: string, _domainId: bigint, _setTo: boolean], {_permissionDomainId: bigint, _childSkillIndex: bigint, _user: string, _domainId: bigint, _setTo: boolean}, []>(
        abi, '0xb7e9b3f2'
    ),
    setArchitectureRole: new Func<[_permissionDomainId: bigint, _childSkillIndex: bigint, _user: string, _domainId: bigint, _setTo: boolean], {_permissionDomainId: bigint, _childSkillIndex: bigint, _user: string, _domainId: bigint, _setTo: boolean}, []>(
        abi, '0xe9c75e47'
    ),
    setFundingRole: new Func<[_permissionDomainId: bigint, _childSkillIndex: bigint, _user: string, _domainId: bigint, _setTo: boolean], {_permissionDomainId: bigint, _childSkillIndex: bigint, _user: string, _domainId: bigint, _setTo: boolean}, []>(
        abi, '0x9552a1e5'
    ),
    setAdministrationRole: new Func<[_permissionDomainId: bigint, _childSkillIndex: bigint, _user: string, _domainId: bigint, _setTo: boolean], {_permissionDomainId: bigint, _childSkillIndex: bigint, _user: string, _domainId: bigint, _setTo: boolean}, []>(
        abi, '0x63331de3'
    ),
    setUserRoles: new Func<[_permissionDomainId: bigint, _childSkillIndex: bigint, _user: string, _domainId: bigint, _roles: string], {_permissionDomainId: bigint, _childSkillIndex: bigint, _user: string, _domainId: bigint, _roles: string}, []>(
        abi, '0xcd4a72cb'
    ),
    hasUserRole: new Func<[_user: string, _domainId: bigint, _role: number], {_user: string, _domainId: bigint, _role: number}, boolean>(
        abi, '0xab2f7ae2'
    ),
    hasInheritedUserRole: new Func<[_user: string, _domainId: bigint, _role: number, _childSkillIndex: bigint, _childDomainId: bigint], {_user: string, _domainId: bigint, _role: number, _childSkillIndex: bigint, _childDomainId: bigint}, boolean>(
        abi, '0x3354f138'
    ),
    userCanSetRoles: new Func<[_user: string, _domainId: bigint, _childSkillIndex: bigint, _childDomainId: bigint], {_user: string, _domainId: bigint, _childSkillIndex: bigint, _childDomainId: bigint}, boolean>(
        abi, '0xf4a8d851'
    ),
    getUserRoles: new Func<[_user: string, _domain: bigint], {_user: string, _domain: bigint}, string>(
        abi, '0x595b03f0'
    ),
    getCapabilityRoles: new Func<[_sig: string], {_sig: string}, string>(
        abi, '0x2dfbb083'
    ),
    emitDomainReputationReward: new Func<[_domainId: bigint, _user: string, _amount: bigint], {_domainId: bigint, _user: string, _amount: bigint}, []>(
        abi, '0x944c650f'
    ),
    emitSkillReputationReward: new Func<[_skillId: bigint, _user: string, _amount: bigint], {_skillId: bigint, _user: string, _amount: bigint}, []>(
        abi, '0x596d368e'
    ),
    emitDomainReputationPenalty: new Func<[_permissionDomainId: bigint, _childSkillIndex: bigint, _domainId: bigint, _user: string, _amount: bigint], {_permissionDomainId: bigint, _childSkillIndex: bigint, _domainId: bigint, _user: string, _amount: bigint}, []>(
        abi, '0xfce891a5'
    ),
    emitSkillReputationPenalty: new Func<[_skillId: bigint, _user: string, _amount: bigint], {_skillId: bigint, _user: string, _amount: bigint}, []>(
        abi, '0x5d860695'
    ),
    initialiseColony: new Func<[_colonyNetworkAddress: string, _token: string], {_colonyNetworkAddress: string, _token: string}, []>(
        abi, '0x79d95b92'
    ),
    editColony: new Func<[_metadata: string], {_metadata: string}, []>(
        abi, '0x102b1b35'
    ),
    editColonyByDelta: new Func<[_metadataDelta: string], {_metadataDelta: string}, []>(
        abi, '0xa72828b1'
    ),
    bootstrapColony: new Func<[_users: Array<string>, _amount: Array<bigint>], {_users: Array<string>, _amount: Array<bigint>}, []>(
        abi, '0xe723d631'
    ),
    mintTokens: new Func<[_wad: bigint], {_wad: bigint}, []>(
        abi, '0x97304ced'
    ),
    mintTokensFor: new Func<[_guy: string, _wad: bigint], {_guy: string, _wad: bigint}, []>(
        abi, '0x8f6811a3'
    ),
    lockToken: new Func<[], {}, bigint>(
        abi, '0xbca7a9e2'
    ),
    unlockTokenForUser: new Func<[user: string, lockId: bigint], {user: string, lockId: bigint}, []>(
        abi, '0x73c08dde'
    ),
    registerColonyLabel: new Func<[colonyName: string, orbitdb: string], {colonyName: string, orbitdb: string}, []>(
        abi, '0xe2db777b'
    ),
    updateColonyOrbitDB: new Func<[orbitdb: string], {orbitdb: string}, []>(
        abi, '0x28672cea'
    ),
    installExtension: new Func<[extensionId: string, version: bigint], {extensionId: string, version: bigint}, []>(
        abi, '0x9dec0910'
    ),
    upgradeExtension: new Func<[extensionId: string, newVersion: bigint], {extensionId: string, newVersion: bigint}, []>(
        abi, '0xd9bd780b'
    ),
    deprecateExtension: new Func<[extensionId: string, deprecated: boolean], {extensionId: string, deprecated: boolean}, []>(
        abi, '0x04eaa104'
    ),
    uninstallExtension: new Func<[extensionId: string], {extensionId: string}, []>(
        abi, '0xc2308c49'
    ),
    initialiseRootLocalSkill: new Func<[], {}, []>(
        abi, '0x2501ab2c'
    ),
    addLocalSkill: new Func<[], {}, []>(
        abi, '0x64055d04'
    ),
    deprecateLocalSkill: new Func<[localSkillId: bigint, deprecated: boolean], {localSkillId: bigint, deprecated: boolean}, []>(
        abi, '0xa3fb7384'
    ),
    getRootLocalSkill: new Func<[], {}, bigint>(
        abi, '0xbda67023'
    ),
    'addDomain(uint256,uint256,uint256)': new Func<[_permissionDomainId: bigint, _childSkillIndex: bigint, _parentDomainId: bigint], {_permissionDomainId: bigint, _childSkillIndex: bigint, _parentDomainId: bigint}, []>(
        abi, '0x1f7e3ebe'
    ),
    'addDomain(uint256,uint256,uint256,string)': new Func<[_permissionDomainId: bigint, _childSkillIndex: bigint, _parentDomainId: bigint, _metadata: string], {_permissionDomainId: bigint, _childSkillIndex: bigint, _parentDomainId: bigint, _metadata: string}, []>(
        abi, '0xdf91f650'
    ),
    editDomain: new Func<[_permissionDomainId: bigint, _childSkillIndex: bigint, _domainId: bigint, _metadata: string], {_permissionDomainId: bigint, _childSkillIndex: bigint, _domainId: bigint, _metadata: string}, []>(
        abi, '0x6406b868'
    ),
    deprecateDomain: new Func<[_permissionDomainId: bigint, _childSkillIndex: bigint, _domainId: bigint, _deprecated: boolean], {_permissionDomainId: bigint, _childSkillIndex: bigint, _domainId: bigint, _deprecated: boolean}, []>(
        abi, '0xe70e808d'
    ),
    getDomain: new Func<[_id: bigint], {_id: bigint}, ([skillId: bigint, fundingPotId: bigint] & {skillId: bigint, fundingPotId: bigint})>(
        abi, '0x1a7a98e2'
    ),
    getDomainCount: new Func<[], {}, bigint>(
        abi, '0x13e91f08'
    ),
    verifyReputationProof: new Func<[key: string, value: string, branchMask: bigint, siblings: Array<string>], {key: string, value: string, branchMask: bigint, siblings: Array<string>}, boolean>(
        abi, '0x96d933e0'
    ),
    setDefaultGlobalClaimDelay: new Func<[_globalClaimDelay: bigint], {_globalClaimDelay: bigint}, []>(
        abi, '0x8c2c0421'
    ),
    makeExpenditure: new Func<[_permissionDomainId: bigint, _childSkillIndex: bigint, _domainId: bigint], {_permissionDomainId: bigint, _childSkillIndex: bigint, _domainId: bigint}, bigint>(
        abi, '0xa5487a37'
    ),
    transferExpenditure: new Func<[_id: bigint, _newOwner: string], {_id: bigint, _newOwner: string}, []>(
        abi, '0xfe40fbe5'
    ),
    transferExpenditureViaArbitration: new Func<[_permissionDomainId: bigint, _childSkillIndex: bigint, _id: bigint, _newOwner: string], {_permissionDomainId: bigint, _childSkillIndex: bigint, _id: bigint, _newOwner: string}, []>(
        abi, '0x2c176360'
    ),
    cancelExpenditure: new Func<[_id: bigint], {_id: bigint}, []>(
        abi, '0x3ddd42d0'
    ),
    lockExpenditure: new Func<[_id: bigint], {_id: bigint}, []>(
        abi, '0x7883b770'
    ),
    finalizeExpenditure: new Func<[_id: bigint], {_id: bigint}, []>(
        abi, '0xb3e75ec6'
    ),
    'setExpenditureMetadata(uint256,uint256,uint256,string)': new Func<[_permissionDomainId: bigint, _childSkillIndex: bigint, _id: bigint, _metadata: string], {_permissionDomainId: bigint, _childSkillIndex: bigint, _id: bigint, _metadata: string}, []>(
        abi, '0x6b9bf027'
    ),
    'setExpenditureMetadata(uint256,string)': new Func<[_id: bigint, _metadata: string], {_id: bigint, _metadata: string}, []>(
        abi, '0xe68fc17d'
    ),
    setExpenditureRecipient: new Func<[_id: bigint, _slot: bigint, _recipient: string], {_id: bigint, _slot: bigint, _recipient: string}, []>(
        abi, '0x17b46cb7'
    ),
    setExpenditureRecipients: new Func<[_id: bigint, _slots: Array<bigint>, _recipients: Array<string>], {_id: bigint, _slots: Array<bigint>, _recipients: Array<string>}, []>(
        abi, '0xceba22fe'
    ),
    setExpenditurePayouts: new Func<[_id: bigint, _slots: Array<bigint>, _token: string, _amounts: Array<bigint>], {_id: bigint, _slots: Array<bigint>, _token: string, _amounts: Array<bigint>}, []>(
        abi, '0xfc9bdbfe'
    ),
    'setExpenditurePayout(uint256,uint256,address,uint256)': new Func<[_id: bigint, _slot: bigint, _token: string, _amount: bigint], {_id: bigint, _slot: bigint, _token: string, _amount: bigint}, []>(
        abi, '0x476d1d05'
    ),
    'setExpenditurePayout(uint256,uint256,uint256,uint256,address,uint256)': new Func<[_permissionDomainId: bigint, _childSkillIndex: bigint, _id: bigint, _slot: bigint, _token: string, _amount: bigint], {_permissionDomainId: bigint, _childSkillIndex: bigint, _id: bigint, _slot: bigint, _token: string, _amount: bigint}, []>(
        abi, '0xbae82ec9'
    ),
    setExpenditureSkill: new Func<[_id: bigint, _slot: bigint, _skillId: bigint], {_id: bigint, _slot: bigint, _skillId: bigint}, []>(
        abi, '0xfa13ed72'
    ),
    setExpenditureSkills: new Func<[_id: bigint, _slots: Array<bigint>, _skillIds: Array<bigint>], {_id: bigint, _slots: Array<bigint>, _skillIds: Array<bigint>}, []>(
        abi, '0xb58179f9'
    ),
    setExpenditureClaimDelay: new Func<[_id: bigint, _slot: bigint, _claimDelay: bigint], {_id: bigint, _slot: bigint, _claimDelay: bigint}, []>(
        abi, '0x09895c21'
    ),
    setExpenditureClaimDelays: new Func<[_id: bigint, _slots: Array<bigint>, _claimDelays: Array<bigint>], {_id: bigint, _slots: Array<bigint>, _claimDelays: Array<bigint>}, []>(
        abi, '0x5bdb365d'
    ),
    setExpenditurePayoutModifiers: new Func<[_id: bigint, _slots: Array<bigint>, _payoutModifiers: Array<bigint>], {_id: bigint, _slots: Array<bigint>, _payoutModifiers: Array<bigint>}, []>(
        abi, '0x89126bb7'
    ),
    setExpenditureState: new Func<[_permissionDomainId: bigint, _childSkillIndex: bigint, _id: bigint, _storageSlot: bigint, _mask: Array<boolean>, _keys: Array<string>, _value: string], {_permissionDomainId: bigint, _childSkillIndex: bigint, _id: bigint, _storageSlot: bigint, _mask: Array<boolean>, _keys: Array<string>, _value: string}, []>(
        abi, '0xc9a2ce7c'
    ),
    claimExpenditurePayout: new Func<[_id: bigint, _slot: bigint, _token: string], {_id: bigint, _slot: bigint, _token: string}, []>(
        abi, '0x2fe96899'
    ),
    getExpenditureCount: new Func<[], {}, bigint>(
        abi, '0x7a4e6ff1'
    ),
    getExpenditure: new Func<[_id: bigint], {_id: bigint}, ([status: number, owner: string, fundingPotId: bigint, domainId: bigint, finalizedTimestamp: bigint, globalClaimDelay: bigint] & {status: number, owner: string, fundingPotId: bigint, domainId: bigint, finalizedTimestamp: bigint, globalClaimDelay: bigint})>(
        abi, '0xe96aad86'
    ),
    getExpenditureSlot: new Func<[_id: bigint, _slot: bigint], {_id: bigint, _slot: bigint}, ([recipient: string, claimDelay: bigint, payoutModifier: bigint, skills: Array<bigint>] & {recipient: string, claimDelay: bigint, payoutModifier: bigint, skills: Array<bigint>})>(
        abi, '0x994b2281'
    ),
    getExpenditureSlotPayout: new Func<[_id: bigint, _slot: bigint, _token: string], {_id: bigint, _slot: bigint, _token: string}, bigint>(
        abi, '0x29abcdce'
    ),
    addPayment: new Func<[_permissionDomainId: bigint, _childSkillIndex: bigint, _recipient: string, _token: string, _amount: bigint, _domainId: bigint, _skillId: bigint], {_permissionDomainId: bigint, _childSkillIndex: bigint, _recipient: string, _token: string, _amount: bigint, _domainId: bigint, _skillId: bigint}, bigint>(
        abi, '0x4f8df643'
    ),
    finalizePayment: new Func<[_permissionDomainId: bigint, _childSkillIndex: bigint, _id: bigint], {_permissionDomainId: bigint, _childSkillIndex: bigint, _id: bigint}, []>(
        abi, '0xd961a420'
    ),
    setPaymentRecipient: new Func<[_permissionDomainId: bigint, _childSkillIndex: bigint, _id: bigint, _recipient: string], {_permissionDomainId: bigint, _childSkillIndex: bigint, _id: bigint, _recipient: string}, []>(
        abi, '0x8904ba90'
    ),
    setPaymentSkill: new Func<[_permissionDomainId: bigint, _childSkillIndex: bigint, _id: bigint, _skillId: bigint], {_permissionDomainId: bigint, _childSkillIndex: bigint, _id: bigint, _skillId: bigint}, []>(
        abi, '0x255fc39c'
    ),
    setPaymentPayout: new Func<[_permissionDomainId: bigint, _childSkillIndex: bigint, _id: bigint, _token: string, _amount: bigint], {_permissionDomainId: bigint, _childSkillIndex: bigint, _id: bigint, _token: string, _amount: bigint}, []>(
        abi, '0x54a9a082'
    ),
    getPayment: new Func<[_id: bigint], {_id: bigint}, ([recipient: string, finalized: boolean, fundingPotId: bigint, domainId: bigint, skills: Array<bigint>] & {recipient: string, finalized: boolean, fundingPotId: bigint, domainId: bigint, skills: Array<bigint>})>(
        abi, '0x3280a836'
    ),
    claimPayment: new Func<[_id: bigint, _token: string], {_id: bigint, _token: string}, []>(
        abi, '0x0f4c52f3'
    ),
    getPaymentCount: new Func<[], {}, bigint>(
        abi, '0xaf32a03f'
    ),
    makeTask: new Func<[_permissionDomainId: bigint, _childSkillIndex: bigint, _specificationHash: string, _domainId: bigint, _skillId: bigint, _dueDate: bigint], {_permissionDomainId: bigint, _childSkillIndex: bigint, _specificationHash: string, _domainId: bigint, _skillId: bigint, _dueDate: bigint}, []>(
        abi, '0x663cb633'
    ),
    getTaskCount: new Func<[], {}, bigint>(
        abi, '0xc17a340e'
    ),
    getTaskChangeNonce: new Func<[_id: bigint], {_id: bigint}, bigint>(
        abi, '0xce7cee49'
    ),
    executeTaskChange: new Func<[_sigV: Array<number>, _sigR: Array<string>, _sigS: Array<string>, _mode: Array<number>, _value: bigint, _data: string], {_sigV: Array<number>, _sigR: Array<string>, _sigS: Array<string>, _mode: Array<number>, _value: bigint, _data: string}, []>(
        abi, '0x74a2200e'
    ),
    executeTaskRoleAssignment: new Func<[_sigV: Array<number>, _sigR: Array<string>, _sigS: Array<string>, _mode: Array<number>, _value: bigint, _data: string], {_sigV: Array<number>, _sigR: Array<string>, _sigS: Array<string>, _mode: Array<number>, _value: bigint, _data: string}, []>(
        abi, '0x24aa4948'
    ),
    submitTaskWorkRating: new Func<[_id: bigint, _role: number, _ratingSecret: string], {_id: bigint, _role: number, _ratingSecret: string}, []>(
        abi, '0x3feb369c'
    ),
    revealTaskWorkRating: new Func<[_id: bigint, _role: number, _rating: number, _salt: string], {_id: bigint, _role: number, _rating: number, _salt: string}, []>(
        abi, '0x934a1dc7'
    ),
    generateSecret: new Func<[_salt: string, _value: bigint], {_salt: string, _value: bigint}, string>(
        abi, '0x1ae3aaa4'
    ),
    getTaskWorkRatingSecretsInfo: new Func<[_id: bigint], {_id: bigint}, ([nSecrets: bigint, lastSubmittedAt: bigint] & {nSecrets: bigint, lastSubmittedAt: bigint})>(
        abi, '0x01f8fb15'
    ),
    getTaskWorkRatingSecret: new Func<[_id: bigint, _role: number], {_id: bigint, _role: number}, string>(
        abi, '0xad4e908c'
    ),
    setTaskManagerRole: new Func<[_id: bigint, _user: string, _permissionDomainId: bigint, _childSkillIndex: bigint], {_id: bigint, _user: string, _permissionDomainId: bigint, _childSkillIndex: bigint}, []>(
        abi, '0xb35383e3'
    ),
    setTaskEvaluatorRole: new Func<[_id: bigint, _user: string], {_id: bigint, _user: string}, []>(
        abi, '0xe104695a'
    ),
    setTaskWorkerRole: new Func<[_id: bigint, _user: string], {_id: bigint, _user: string}, []>(
        abi, '0x74773439'
    ),
    removeTaskEvaluatorRole: new Func<[_id: bigint], {_id: bigint}, []>(
        abi, '0xa1c60e63'
    ),
    removeTaskWorkerRole: new Func<[_id: bigint], {_id: bigint}, []>(
        abi, '0x46889ecb'
    ),
    setTaskSkill: new Func<[_id: bigint, _skillId: bigint], {_id: bigint, _skillId: bigint}, []>(
        abi, '0xb8984c5a'
    ),
    setTaskBrief: new Func<[_id: bigint, _specificationHash: string], {_id: bigint, _specificationHash: string}, []>(
        abi, '0xda4db249'
    ),
    setTaskDueDate: new Func<[_id: bigint, _dueDate: bigint], {_id: bigint, _dueDate: bigint}, []>(
        abi, '0xcae960fe'
    ),
    submitTaskDeliverable: new Func<[_id: bigint, _deliverableHash: string], {_id: bigint, _deliverableHash: string}, []>(
        abi, '0x50030964'
    ),
    submitTaskDeliverableAndRating: new Func<[_id: bigint, _deliverableHash: string, _ratingSecret: string], {_id: bigint, _deliverableHash: string, _ratingSecret: string}, []>(
        abi, '0x194f523d'
    ),
    finalizeTask: new Func<[_id: bigint], {_id: bigint}, []>(
        abi, '0x88488c33'
    ),
    cancelTask: new Func<[_id: bigint], {_id: bigint}, []>(
        abi, '0x7eec20a8'
    ),
    completeTask: new Func<[_id: bigint], {_id: bigint}, []>(
        abi, '0xe1e29558'
    ),
    getTask: new Func<[_id: bigint], {_id: bigint}, ([specificationHash: string, deliverableHash: string, status: number, dueDate: bigint, fundingPotId: bigint, completionTimestamp: bigint, domainId: bigint, skillIds: Array<bigint>] & {specificationHash: string, deliverableHash: string, status: number, dueDate: bigint, fundingPotId: bigint, completionTimestamp: bigint, domainId: bigint, skillIds: Array<bigint>})>(
        abi, '0x1d65e77e'
    ),
    getTaskRole: new Func<[_id: bigint, _role: number], {_id: bigint, _role: number}, ([user: string, rateFail: boolean, rating: number] & {user: string, rateFail: boolean, rating: number})>(
        abi, '0x1e8954de'
    ),
    setRewardInverse: new Func<[_rewardInverse: bigint], {_rewardInverse: bigint}, []>(
        abi, '0x2b949c99'
    ),
    getRewardInverse: new Func<[], {}, bigint>(
        abi, '0x4cb164c7'
    ),
    getTaskPayout: new Func<[_id: bigint, _role: number, _token: string], {_id: bigint, _role: number, _token: string}, bigint>(
        abi, '0x057dda2c'
    ),
    setTaskManagerPayout: new Func<[_id: bigint, _token: string, _amount: bigint], {_id: bigint, _token: string, _amount: bigint}, []>(
        abi, '0x6aaf4a77'
    ),
    setTaskEvaluatorPayout: new Func<[_id: bigint, _token: string, _amount: bigint], {_id: bigint, _token: string, _amount: bigint}, []>(
        abi, '0x6fb0794f'
    ),
    setTaskWorkerPayout: new Func<[_id: bigint, _token: string, _amount: bigint], {_id: bigint, _token: string, _amount: bigint}, []>(
        abi, '0x2cf62b39'
    ),
    setAllTaskPayouts: new Func<[_id: bigint, _token: string, _managerAmount: bigint, _evaluatorAmount: bigint, _workerAmount: bigint], {_id: bigint, _token: string, _managerAmount: bigint, _evaluatorAmount: bigint, _workerAmount: bigint}, []>(
        abi, '0x5dbe69b4'
    ),
    claimTaskPayout: new Func<[_id: bigint, _role: number, _token: string], {_id: bigint, _role: number, _token: string}, []>(
        abi, '0x7c506b0b'
    ),
    startNextRewardPayout: new Func<[_token: string, key: string, value: string, branchMask: bigint, siblings: Array<string>], {_token: string, key: string, value: string, branchMask: bigint, siblings: Array<string>}, []>(
        abi, '0xe6f519ce'
    ),
    claimRewardPayout: new Func<[_payoutId: bigint, _squareRoots: Array<bigint>, key: string, value: string, branchMask: bigint, siblings: Array<string>], {_payoutId: bigint, _squareRoots: Array<bigint>, key: string, value: string, branchMask: bigint, siblings: Array<string>}, []>(
        abi, '0x6fc14a90'
    ),
    getRewardPayoutInfo: new Func<[_payoutId: bigint], {_payoutId: bigint}, ([reputationState: string, colonyWideReputation: bigint, totalTokens: bigint, amount: bigint, tokenAddress: string, blockTimestamp: bigint, amountRemaining: bigint, finalized: boolean] & {reputationState: string, colonyWideReputation: bigint, totalTokens: bigint, amount: bigint, tokenAddress: string, blockTimestamp: bigint, amountRemaining: bigint, finalized: boolean})>(
        abi, '0x3644a3fd'
    ),
    finalizeRewardPayout: new Func<[_payoutId: bigint], {_payoutId: bigint}, []>(
        abi, '0x51c38cd9'
    ),
    getFundingPot: new Func<[_id: bigint], {_id: bigint}, ([associatedType: number, associatedTypeId: bigint, payoutsWeCannotMake: bigint] & {associatedType: number, associatedTypeId: bigint, payoutsWeCannotMake: bigint})>(
        abi, '0x7c1735a8'
    ),
    getFundingPotCount: new Func<[], {}, bigint>(
        abi, '0x25f759e3'
    ),
    getFundingPotBalance: new Func<[_potId: bigint, _token: string], {_potId: bigint, _token: string}, bigint>(
        abi, '0xaae3bddd'
    ),
    getFundingPotPayout: new Func<[_potId: bigint, _token: string], {_potId: bigint, _token: string}, bigint>(
        abi, '0xc5d0886e'
    ),
    'moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address)': new Func<[_permissionDomainId: bigint, _childSkillIndex: bigint, _domainId: bigint, _fromChildSkillIndex: bigint, _toChildSkillIndex: bigint, _fromPot: bigint, _toPot: bigint, _amount: bigint, _token: string], {_permissionDomainId: bigint, _childSkillIndex: bigint, _domainId: bigint, _fromChildSkillIndex: bigint, _toChildSkillIndex: bigint, _fromPot: bigint, _toPot: bigint, _amount: bigint, _token: string}, []>(
        abi, '0x3e77c549'
    ),
    'moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,address)': new Func<[_permissionDomainId: bigint, _fromChildSkillIndex: bigint, _toChildSkillIndex: bigint, _fromPot: bigint, _toPot: bigint, _amount: bigint, _token: string], {_permissionDomainId: bigint, _fromChildSkillIndex: bigint, _toChildSkillIndex: bigint, _fromPot: bigint, _toPot: bigint, _amount: bigint, _token: string}, []>(
        abi, '0xc68d19ea'
    ),
    claimColonyFunds: new Func<[_token: string], {_token: string}, []>(
        abi, '0x89224a1e'
    ),
    getNonRewardPotsTotal: new Func<[_token: string], {_token: string}, bigint>(
        abi, '0x34fa7aa2'
    ),
    approveStake: new Func<[_approvee: string, _domainId: bigint, _amount: bigint], {_approvee: string, _domainId: bigint, _amount: bigint}, []>(
        abi, '0x354f33d8'
    ),
    obligateStake: new Func<[_user: string, _domainId: bigint, _amount: bigint], {_user: string, _domainId: bigint, _amount: bigint}, []>(
        abi, '0x096abb49'
    ),
    deobligateStake: new Func<[_user: string, _domainId: bigint, _amount: bigint], {_user: string, _domainId: bigint, _amount: bigint}, []>(
        abi, '0x37a68e67'
    ),
    transferStake: new Func<[_permissionDomainId: bigint, _childSkillIndex: bigint, _obligator: string, _user: string, _domainId: bigint, _amount: bigint, _recipient: string], {_permissionDomainId: bigint, _childSkillIndex: bigint, _obligator: string, _user: string, _domainId: bigint, _amount: bigint, _recipient: string}, []>(
        abi, '0x446c1aa2'
    ),
    getApproval: new Func<[_user: string, _obligator: string, _domainId: bigint], {_user: string, _obligator: string, _domainId: bigint}, bigint>(
        abi, '0x312d371d'
    ),
    getObligation: new Func<[_user: string, _obligator: string, _domainId: bigint], {_user: string, _obligator: string, _domainId: bigint}, bigint>(
        abi, '0x5f2b8cb2'
    ),
    getDomainFromFundingPot: new Func<[_fundingPotId: bigint], {_fundingPotId: bigint}, bigint>(
        abi, '0xb61b5317'
    ),
    burnTokens: new Func<[token: string, amount: bigint], {token: string, amount: bigint}, []>(
        abi, '0x0d1118ce'
    ),
    unlockToken: new Func<[], {}, []>(
        abi, '0x18a24b5b'
    ),
    updateApprovalAmount: new Func<[token: string, spender: string], {token: string, spender: string}, []>(
        abi, '0x811c4f9b'
    ),
    getTokenApproval: new Func<[token: string, spender: string], {token: string, spender: string}, bigint>(
        abi, '0x65dfedc4'
    ),
    getTotalTokenApproval: new Func<[token: string], {token: string}, bigint>(
        abi, '0xfe359995'
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

    authority(): Promise<string> {
        return this.eth_call(functions.authority, [])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    version(): Promise<bigint> {
        return this.eth_call(functions.version, [])
    }

    getColonyNetwork(): Promise<string> {
        return this.eth_call(functions.getColonyNetwork, [])
    }

    getToken(): Promise<string> {
        return this.eth_call(functions.getToken, [])
    }

    hasUserRole(_user: string, _domainId: bigint, _role: number): Promise<boolean> {
        return this.eth_call(functions.hasUserRole, [_user, _domainId, _role])
    }

    hasInheritedUserRole(_user: string, _domainId: bigint, _role: number, _childSkillIndex: bigint, _childDomainId: bigint): Promise<boolean> {
        return this.eth_call(functions.hasInheritedUserRole, [_user, _domainId, _role, _childSkillIndex, _childDomainId])
    }

    userCanSetRoles(_user: string, _domainId: bigint, _childSkillIndex: bigint, _childDomainId: bigint): Promise<boolean> {
        return this.eth_call(functions.userCanSetRoles, [_user, _domainId, _childSkillIndex, _childDomainId])
    }

    getUserRoles(_user: string, _domain: bigint): Promise<string> {
        return this.eth_call(functions.getUserRoles, [_user, _domain])
    }

    getCapabilityRoles(_sig: string): Promise<string> {
        return this.eth_call(functions.getCapabilityRoles, [_sig])
    }

    getRootLocalSkill(): Promise<bigint> {
        return this.eth_call(functions.getRootLocalSkill, [])
    }

    getDomain(_id: bigint): Promise<([skillId: bigint, fundingPotId: bigint] & {skillId: bigint, fundingPotId: bigint})> {
        return this.eth_call(functions.getDomain, [_id])
    }

    getDomainCount(): Promise<bigint> {
        return this.eth_call(functions.getDomainCount, [])
    }

    verifyReputationProof(key: string, value: string, branchMask: bigint, siblings: Array<string>): Promise<boolean> {
        return this.eth_call(functions.verifyReputationProof, [key, value, branchMask, siblings])
    }

    getExpenditureCount(): Promise<bigint> {
        return this.eth_call(functions.getExpenditureCount, [])
    }

    getExpenditure(_id: bigint): Promise<([status: number, owner: string, fundingPotId: bigint, domainId: bigint, finalizedTimestamp: bigint, globalClaimDelay: bigint] & {status: number, owner: string, fundingPotId: bigint, domainId: bigint, finalizedTimestamp: bigint, globalClaimDelay: bigint})> {
        return this.eth_call(functions.getExpenditure, [_id])
    }

    getExpenditureSlot(_id: bigint, _slot: bigint): Promise<([recipient: string, claimDelay: bigint, payoutModifier: bigint, skills: Array<bigint>] & {recipient: string, claimDelay: bigint, payoutModifier: bigint, skills: Array<bigint>})> {
        return this.eth_call(functions.getExpenditureSlot, [_id, _slot])
    }

    getExpenditureSlotPayout(_id: bigint, _slot: bigint, _token: string): Promise<bigint> {
        return this.eth_call(functions.getExpenditureSlotPayout, [_id, _slot, _token])
    }

    getPayment(_id: bigint): Promise<([recipient: string, finalized: boolean, fundingPotId: bigint, domainId: bigint, skills: Array<bigint>] & {recipient: string, finalized: boolean, fundingPotId: bigint, domainId: bigint, skills: Array<bigint>})> {
        return this.eth_call(functions.getPayment, [_id])
    }

    getPaymentCount(): Promise<bigint> {
        return this.eth_call(functions.getPaymentCount, [])
    }

    getTaskCount(): Promise<bigint> {
        return this.eth_call(functions.getTaskCount, [])
    }

    getTaskChangeNonce(_id: bigint): Promise<bigint> {
        return this.eth_call(functions.getTaskChangeNonce, [_id])
    }

    generateSecret(_salt: string, _value: bigint): Promise<string> {
        return this.eth_call(functions.generateSecret, [_salt, _value])
    }

    getTaskWorkRatingSecretsInfo(_id: bigint): Promise<([nSecrets: bigint, lastSubmittedAt: bigint] & {nSecrets: bigint, lastSubmittedAt: bigint})> {
        return this.eth_call(functions.getTaskWorkRatingSecretsInfo, [_id])
    }

    getTaskWorkRatingSecret(_id: bigint, _role: number): Promise<string> {
        return this.eth_call(functions.getTaskWorkRatingSecret, [_id, _role])
    }

    getTask(_id: bigint): Promise<([specificationHash: string, deliverableHash: string, status: number, dueDate: bigint, fundingPotId: bigint, completionTimestamp: bigint, domainId: bigint, skillIds: Array<bigint>] & {specificationHash: string, deliverableHash: string, status: number, dueDate: bigint, fundingPotId: bigint, completionTimestamp: bigint, domainId: bigint, skillIds: Array<bigint>})> {
        return this.eth_call(functions.getTask, [_id])
    }

    getTaskRole(_id: bigint, _role: number): Promise<([user: string, rateFail: boolean, rating: number] & {user: string, rateFail: boolean, rating: number})> {
        return this.eth_call(functions.getTaskRole, [_id, _role])
    }

    getRewardInverse(): Promise<bigint> {
        return this.eth_call(functions.getRewardInverse, [])
    }

    getTaskPayout(_id: bigint, _role: number, _token: string): Promise<bigint> {
        return this.eth_call(functions.getTaskPayout, [_id, _role, _token])
    }

    getRewardPayoutInfo(_payoutId: bigint): Promise<([reputationState: string, colonyWideReputation: bigint, totalTokens: bigint, amount: bigint, tokenAddress: string, blockTimestamp: bigint, amountRemaining: bigint, finalized: boolean] & {reputationState: string, colonyWideReputation: bigint, totalTokens: bigint, amount: bigint, tokenAddress: string, blockTimestamp: bigint, amountRemaining: bigint, finalized: boolean})> {
        return this.eth_call(functions.getRewardPayoutInfo, [_payoutId])
    }

    getFundingPot(_id: bigint): Promise<([associatedType: number, associatedTypeId: bigint, payoutsWeCannotMake: bigint] & {associatedType: number, associatedTypeId: bigint, payoutsWeCannotMake: bigint})> {
        return this.eth_call(functions.getFundingPot, [_id])
    }

    getFundingPotCount(): Promise<bigint> {
        return this.eth_call(functions.getFundingPotCount, [])
    }

    getFundingPotBalance(_potId: bigint, _token: string): Promise<bigint> {
        return this.eth_call(functions.getFundingPotBalance, [_potId, _token])
    }

    getFundingPotPayout(_potId: bigint, _token: string): Promise<bigint> {
        return this.eth_call(functions.getFundingPotPayout, [_potId, _token])
    }

    getNonRewardPotsTotal(_token: string): Promise<bigint> {
        return this.eth_call(functions.getNonRewardPotsTotal, [_token])
    }

    getApproval(_user: string, _obligator: string, _domainId: bigint): Promise<bigint> {
        return this.eth_call(functions.getApproval, [_user, _obligator, _domainId])
    }

    getObligation(_user: string, _obligator: string, _domainId: bigint): Promise<bigint> {
        return this.eth_call(functions.getObligation, [_user, _obligator, _domainId])
    }

    getDomainFromFundingPot(_fundingPotId: bigint): Promise<bigint> {
        return this.eth_call(functions.getDomainFromFundingPot, [_fundingPotId])
    }

    getTokenApproval(token: string, spender: string): Promise<bigint> {
        return this.eth_call(functions.getTokenApproval, [token, spender])
    }

    getTotalTokenApproval(token: string): Promise<bigint> {
        return this.eth_call(functions.getTotalTokenApproval, [token])
    }
}
