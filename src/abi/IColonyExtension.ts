import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './IColonyExtension.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    MetaTransactionExecuted: new LogEvent<([userAddress: string, relayerAddress: string, payload: string] & {userAddress: string, relayerAddress: string, payload: string})>(
        abi, '0x5845892132946850460bff5a0083f71031bc5bf9aadcd40f1de79423eac9b10b'
    ),
}

export const functions = {
    executeMetaTransaction: new Func<[userAddress: string, payload: string, sigR: string, sigS: string, sigV: number], {userAddress: string, payload: string, sigR: string, sigS: string, sigV: number}, string>(
        abi, '0x0c53c51c'
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
    getCapabilityRoles: new Func<[_sig: string], {_sig: string}, string>(
        abi, '0x2dfbb083'
    ),
    getDeprecated: new Func<[], {}, boolean>(
        abi, '0xfcf6ba93'
    ),
    getColony: new Func<[], {}, string>(
        abi, '0xbfd68ab7'
    ),
    multicall: new Func<[_: Array<string>], {}, Array<string>>(
        abi, '0xac9650d8'
    ),
}

export class Contract extends ContractBase {

    getMetatransactionNonce(userAddress: string): Promise<bigint> {
        return this.eth_call(functions.getMetatransactionNonce, [userAddress])
    }

    identifier(): Promise<string> {
        return this.eth_call(functions.identifier, [])
    }

    version(): Promise<bigint> {
        return this.eth_call(functions.version, [])
    }

    getCapabilityRoles(_sig: string): Promise<string> {
        return this.eth_call(functions.getCapabilityRoles, [_sig])
    }

    getDeprecated(): Promise<boolean> {
        return this.eth_call(functions.getDeprecated, [])
    }

    getColony(): Promise<string> {
        return this.eth_call(functions.getColony, [])
    }
}
