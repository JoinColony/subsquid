import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './Whitelist.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    AgreementSigned: new LogEvent<([_user: string] & {_user: string})>(
        abi, '0x5cca47fc45be2c2c68100afd7cd2431116c0c535c159e4f6c7e63934cf9f7aad'
    ),
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
    UserApproved: new LogEvent<([_user: string, _status: boolean] & {_user: string, _status: boolean})>(
        abi, '0x60dc44a8ff6f8c563265a9654c756ef7d51cb49658531b2c735ef754c74e8a34'
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
    getMetatransactionNonce: new Func<[userAddress: string], {userAddress: string}, bigint>(
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
    finishUpgrade: new Func<[], {}, []>(
        abi, '0x340df28f'
    ),
    deprecate: new Func<[_deprecated: boolean], {_deprecated: boolean}, []>(
        abi, '0x9251cff4'
    ),
    uninstall: new Func<[], {}, []>(
        abi, '0x0d638f30'
    ),
    initialise: new Func<[_useApprovals: boolean, _agreementHash: string], {_useApprovals: boolean, _agreementHash: string}, []>(
        abi, '0xa3087860'
    ),
    approveUsers: new Func<[_users: Array<string>, _status: boolean], {_users: Array<string>, _status: boolean}, []>(
        abi, '0x1bbfb009'
    ),
    signAgreement: new Func<[_agreementHash: string], {_agreementHash: string}, []>(
        abi, '0xa11c1d51'
    ),
    isApproved: new Func<[_user: string], {_user: string}, boolean>(
        abi, '0x673448dd'
    ),
    getUseApprovals: new Func<[], {}, boolean>(
        abi, '0xfcd91104'
    ),
    getAgreementHash: new Func<[], {}, string>(
        abi, '0x696da921'
    ),
    getApproval: new Func<[_user: string], {_user: string}, boolean>(
        abi, '0xda076a87'
    ),
    getSignature: new Func<[_user: string], {_user: string}, boolean>(
        abi, '0x277fc0e9'
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

    getMetatransactionNonce(userAddress: string): Promise<bigint> {
        return this.eth_call(functions.getMetatransactionNonce, [userAddress])
    }

    identifier(): Promise<string> {
        return this.eth_call(functions.identifier, [])
    }

    version(): Promise<bigint> {
        return this.eth_call(functions.version, [])
    }

    isApproved(_user: string): Promise<boolean> {
        return this.eth_call(functions.isApproved, [_user])
    }

    getUseApprovals(): Promise<boolean> {
        return this.eth_call(functions.getUseApprovals, [])
    }

    getAgreementHash(): Promise<string> {
        return this.eth_call(functions.getAgreementHash, [])
    }

    getApproval(_user: string): Promise<boolean> {
        return this.eth_call(functions.getApproval, [_user])
    }

    getSignature(_user: string): Promise<boolean> {
        return this.eth_call(functions.getSignature, [_user])
    }
}
