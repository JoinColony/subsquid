import {lookupArchive} from '@subsquid/archive-registry'

import { events } from './abi/IColonyNetwork'

export const NETWORK_CONTRACT = '0x78163f593D1Fa151B4B7cacD146586aD2b686294'.toLowerCase()
import {
    BlockHeader,
    DataHandlerContext,
    EvmBatchProcessor,
    EvmBatchProcessorFields,
    Log as _Log,
    Transaction as _Transaction,
} from '@subsquid/evm-processor'
import { lookup } from 'dns'

export const processor = new EvmBatchProcessor()
    .setDataSource({
        // Change the Archive endpoints for run the squid
        // against the other EVM networks
        // For a full list of supported networks and config options
        // see https://docs.subsquid.io/evm-indexing/
        // archive: lookupArchive('gnosis-mainnet'),

        // Must be set for RPC ingestion (https://docs.subsquid.io/evm-indexing/evm-processor/)
        // OR to enable contract state queries (https://docs.subsquid.io/evm-indexing/query-state/)
        chain: 'https://xdai.colony.io/rpcarchive/',
    })
    .setFinalityConfirmation(5)
    .setBlockRange({
        from: 11_879_715,
    })
    .setFinalityConfirmation(75)
    .addLog({
      address: [ NETWORK_CONTRACT ],
      topic0: [
        events.ColonyAdded.topic,
      ],
    })

export type Fields = EvmBatchProcessorFields<typeof processor>
export type Block = BlockHeader<Fields>
export type Log = _Log<Fields>
export type Transaction = _Transaction<Fields>
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>
