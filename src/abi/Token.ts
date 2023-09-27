import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './Token.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    Approval: new LogEvent<([src: string, guy: string, wad: bigint] & {src: string, guy: string, wad: bigint})>(
        abi, '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925'
    ),
    Burn: new LogEvent<([guy: string, wad: bigint] & {guy: string, wad: bigint})>(
        abi, '0xcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca5'
    ),
    LogSetAuthority: new LogEvent<([authority: string] & {authority: string})>(
        abi, '0x1abebea81bfa2637f28358c371278fb15ede7ea8dd28d2e03b112ff6d936ada4'
    ),
    LogSetOwner: new LogEvent<([owner: string] & {owner: string})>(
        abi, '0xce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed94'
    ),
    Mint: new LogEvent<([guy: string, wad: bigint] & {guy: string, wad: bigint})>(
        abi, '0x0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885'
    ),
    Transfer: new LogEvent<([src: string, dst: string, wad: bigint] & {src: string, dst: string, wad: bigint})>(
        abi, '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
    ),
}

export const functions = {
    allowance: new Func<[src: string, guy: string], {src: string, guy: string}, bigint>(
        abi, '0xdd62ed3e'
    ),
    approve: new Func<[guy: string, wad: bigint], {guy: string, wad: bigint}, boolean>(
        abi, '0x095ea7b3'
    ),
    authority: new Func<[], {}, string>(
        abi, '0xbf7e214f'
    ),
    balanceOf: new Func<[src: string], {src: string}, bigint>(
        abi, '0x70a08231'
    ),
    decimals: new Func<[], {}, number>(
        abi, '0x313ce567'
    ),
    locked: new Func<[], {}, boolean>(
        abi, '0xcf309012'
    ),
    name: new Func<[], {}, string>(
        abi, '0x06fdde03'
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
    symbol: new Func<[], {}, string>(
        abi, '0x95d89b41'
    ),
    totalSupply: new Func<[], {}, bigint>(
        abi, '0x18160ddd'
    ),
    transfer: new Func<[dst: string, wad: bigint], {dst: string, wad: bigint}, boolean>(
        abi, '0xa9059cbb'
    ),
    transferFrom: new Func<[src: string, dst: string, wad: bigint], {src: string, dst: string, wad: bigint}, boolean>(
        abi, '0x23b872dd'
    ),
    'mint(address,uint256)': new Func<[guy: string, wad: bigint], {guy: string, wad: bigint}, []>(
        abi, '0x40c10f19'
    ),
    'mint(uint256)': new Func<[wad: bigint], {wad: bigint}, []>(
        abi, '0xa0712d68'
    ),
    'burn(uint256)': new Func<[wad: bigint], {wad: bigint}, []>(
        abi, '0x42966c68'
    ),
    'burn(address,uint256)': new Func<[guy: string, wad: bigint], {guy: string, wad: bigint}, []>(
        abi, '0x9dc29fac'
    ),
    unlock: new Func<[], {}, []>(
        abi, '0xa69df4b5'
    ),
}

export class Contract extends ContractBase {

    allowance(src: string, guy: string): Promise<bigint> {
        return this.eth_call(functions.allowance, [src, guy])
    }

    authority(): Promise<string> {
        return this.eth_call(functions.authority, [])
    }

    balanceOf(src: string): Promise<bigint> {
        return this.eth_call(functions.balanceOf, [src])
    }

    decimals(): Promise<number> {
        return this.eth_call(functions.decimals, [])
    }

    locked(): Promise<boolean> {
        return this.eth_call(functions.locked, [])
    }

    name(): Promise<string> {
        return this.eth_call(functions.name, [])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    symbol(): Promise<string> {
        return this.eth_call(functions.symbol, [])
    }

    totalSupply(): Promise<bigint> {
        return this.eth_call(functions.totalSupply, [])
    }
}
