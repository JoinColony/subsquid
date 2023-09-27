import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './CoinMachine.abi'

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
    PeriodUpdated: new LogEvent<([activePeriod: bigint, currentPeriod: bigint] & {activePeriod: bigint, currentPeriod: bigint})>(
        abi, '0x5b873fc01d45058fe77f3883a91020f46d5a7385baac6ceab19748d1d0ae464a'
    ),
    PriceEvolutionSet: new LogEvent<([evolvePrice: boolean] & {evolvePrice: boolean})>(
        abi, '0x5b4e200daa1a93764a810c35f18f2fcfb14b5e95df6ae7ac1ffdc8eec425babc'
    ),
    'TokensBought(address,address,uint256,uint256)': new LogEvent<([buyer: string, token: string, numTokens: bigint, totalCost: bigint] & {buyer: string, token: string, numTokens: bigint, totalCost: bigint})>(
        abi, '0xc244d500136edffae7025aaf7fbd7a07193ac544a1d0cc3132cf2a32452d340c'
    ),
    WhitelistSet: new LogEvent<([whitelist: string] & {whitelist: string})>(
        abi, '0x29d77446d0fb0dcebabf25ce79ea69ba1382a4525d4acf615a38c89c798aef71'
    ),
    'TokensBought(address,uint256,uint256)': new LogEvent<([buyer: string, numTokens: bigint, totalCost: bigint] & {buyer: string, numTokens: bigint, totalCost: bigint})>(
        abi, '0x8442948036198f1146d3a63c3db355d7e0295c2cc5676c755990445da4fdc1c9'
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
    finishUpgrade: new Func<[], {}, []>(
        abi, '0x340df28f'
    ),
    deprecate: new Func<[_deprecated: boolean], {_deprecated: boolean}, []>(
        abi, '0x9251cff4'
    ),
    uninstall: new Func<[], {}, []>(
        abi, '0x0d638f30'
    ),
    initialise: new Func<[_token: string, _purchaseToken: string, _periodLength: bigint, _windowSize: bigint, _targetPerPeriod: bigint, _maxPerPeriod: bigint, _userLimitFraction: bigint, _startingPrice: bigint, _whitelist: string], {_token: string, _purchaseToken: string, _periodLength: bigint, _windowSize: bigint, _targetPerPeriod: bigint, _maxPerPeriod: bigint, _userLimitFraction: bigint, _startingPrice: bigint, _whitelist: string}, []>(
        abi, '0xc6ea3b0b'
    ),
    setWhitelist: new Func<[_whitelist: string], {_whitelist: string}, []>(
        abi, '0x854cff2f'
    ),
    buyTokens: new Func<[_numTokens: bigint], {_numTokens: bigint}, []>(
        abi, '0x3610724e'
    ),
    updatePeriod: new Func<[], {}, []>(
        abi, '0xa83627de'
    ),
    getPurchaseToken: new Func<[], {}, string>(
        abi, '0x0a1e0c22'
    ),
    getToken: new Func<[], {}, string>(
        abi, '0x21df0da7'
    ),
    getActivePeriod: new Func<[], {}, bigint>(
        abi, '0xa5c56a2b'
    ),
    getActiveSold: new Func<[], {}, bigint>(
        abi, '0xf51361c7'
    ),
    getActiveIntake: new Func<[], {}, bigint>(
        abi, '0x12defc73'
    ),
    getEMAIntake: new Func<[], {}, bigint>(
        abi, '0x29287b46'
    ),
    getTokenBalance: new Func<[], {}, bigint>(
        abi, '0x82b2e257'
    ),
    getPeriodLength: new Func<[], {}, bigint>(
        abi, '0x8469ddc7'
    ),
    getWindowSize: new Func<[], {}, bigint>(
        abi, '0xa0e3ad26'
    ),
    getTargetPerPeriod: new Func<[], {}, bigint>(
        abi, '0x2a85c366'
    ),
    getMaxPerPeriod: new Func<[], {}, bigint>(
        abi, '0x1f7ea81f'
    ),
    getCurrentPrice: new Func<[], {}, bigint>(
        abi, '0xeb91d37e'
    ),
    getSellableTokens: new Func<[], {}, bigint>(
        abi, '0xb5b2f1ef'
    ),
    getUserLimit: new Func<[_user: string], {_user: string}, bigint>(
        abi, '0xe9587e86'
    ),
    getMaxPurchase: new Func<[_user: string], {_user: string}, bigint>(
        abi, '0x114f6769'
    ),
    getWhitelist: new Func<[], {}, string>(
        abi, '0xd01f63f5'
    ),
    getEvolvePrice: new Func<[], {}, boolean>(
        abi, '0xf9f81e09'
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

    getPurchaseToken(): Promise<string> {
        return this.eth_call(functions.getPurchaseToken, [])
    }

    getToken(): Promise<string> {
        return this.eth_call(functions.getToken, [])
    }

    getActivePeriod(): Promise<bigint> {
        return this.eth_call(functions.getActivePeriod, [])
    }

    getActiveSold(): Promise<bigint> {
        return this.eth_call(functions.getActiveSold, [])
    }

    getActiveIntake(): Promise<bigint> {
        return this.eth_call(functions.getActiveIntake, [])
    }

    getEMAIntake(): Promise<bigint> {
        return this.eth_call(functions.getEMAIntake, [])
    }

    getTokenBalance(): Promise<bigint> {
        return this.eth_call(functions.getTokenBalance, [])
    }

    getPeriodLength(): Promise<bigint> {
        return this.eth_call(functions.getPeriodLength, [])
    }

    getWindowSize(): Promise<bigint> {
        return this.eth_call(functions.getWindowSize, [])
    }

    getTargetPerPeriod(): Promise<bigint> {
        return this.eth_call(functions.getTargetPerPeriod, [])
    }

    getMaxPerPeriod(): Promise<bigint> {
        return this.eth_call(functions.getMaxPerPeriod, [])
    }

    getCurrentPrice(): Promise<bigint> {
        return this.eth_call(functions.getCurrentPrice, [])
    }

    getSellableTokens(): Promise<bigint> {
        return this.eth_call(functions.getSellableTokens, [])
    }

    getUserLimit(_user: string): Promise<bigint> {
        return this.eth_call(functions.getUserLimit, [_user])
    }

    getMaxPurchase(_user: string): Promise<bigint> {
        return this.eth_call(functions.getMaxPurchase, [_user])
    }

    getWhitelist(): Promise<string> {
        return this.eth_call(functions.getWhitelist, [])
    }

    getEvolvePrice(): Promise<boolean> {
        return this.eth_call(functions.getEvolvePrice, [])
    }
}
