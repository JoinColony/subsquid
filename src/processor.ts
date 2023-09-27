import {lookupArchive} from '@subsquid/archive-registry'

import { events as colonyNetworkEvents } from './abi/IColonyNetwork';
import { events as colonyEvents } from './abi/IColony';

// export const NETWORK_CONTRACT = '0x78163f593D1Fa151B4B7cacD146586aD2b686294'.toLowerCase()
export const NETWORK_CONTRACT = '0x5CC4a96B08e8C88f2c6FC5772496FeD9666e4D1F'.toLowerCase();

import {
    BlockHeader,
    DataHandlerContext,
    EvmBatchProcessor,
    EvmBatchProcessorFields,
    Log as _Log,
    Transaction as _Transaction,
} from '@subsquid/evm-processor'

export type Fields = EvmBatchProcessorFields<typeof processor>
export type Block = BlockHeader<Fields>
export type Log = _Log<Fields>
export type Transaction = _Transaction<Fields>
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>


export const processor = new EvmBatchProcessor()
  .setDataSource({
      // Change the Archive endpoints for run the squid
      // against the other EVM networks
      // For a full list of supported networks and config options
      // see https://docs.subsquid.io/evm-indexing/
      // archive: lookupArchive('gnosis-mainnet'),

      // Must be set for RPC ingestion (https://docs.subsquid.io/evm-indexing/evm-processor/)
      // OR to enable contract state queries (https://docs.subsquid.io/evm-indexing/query-state/)
      // chain: 'https://xdai.colony.io/rpcarchive/',
    chain: 'http://localhost:8545/'
  })
  .setFinalityConfirmation(1)
  .setBlockRange({
      from: 1,
  })
  .addLog({
    address: [ NETWORK_CONTRACT ],
    topic0: [
      ...Object.keys(colonyNetworkEvents).map(colonyNetworkEventKey => colonyNetworkEvents[colonyNetworkEventKey as keyof typeof colonyNetworkEvents].topic),
      ...Object.keys(colonyEvents).map(colonyEventKey => colonyEvents[colonyEventKey as keyof typeof colonyEvents].topic),
    ],
  })
