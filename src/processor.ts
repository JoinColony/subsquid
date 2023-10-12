import {lookupArchive} from '@subsquid/archive-registry'

import { events as colonyNetworkEvents } from './abi/IColonyNetwork';
import { events as colonyEvents } from './abi/IColony';
import { events as votingReputationEvents } from './abi/VotingReputation';
import { events as oneTxPaymentEvents } from './abi/OneTxPayment';

import { COLONY_NETWORK_ADDRESS, PRELOADED_COLONIES, PRELOAD_HEIGHT, PRELOADED_ONE_TX_PAYMENT, PRELOADED_VOTING_REPUTATION } from './utils/constants';

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
  .setFinalityConfirmation(200)
  .setBlockRange({
      from: 1,
  })
  .addLog({
    address: [ COLONY_NETWORK_ADDRESS ],
    topic0: [
      ...Object.values(colonyNetworkEvents).map(entry => entry.topic),
    ],
  })
  .addLog({
    range: {
      from: PRELOAD_HEIGHT + 1,
    },
    topic0: [
      ...Object.values(colonyEvents).map(entry => entry.topic),
    ],
  })
  .addLog({
    address: PRELOADED_COLONIES,
    topic0: [
      ...Object.values(colonyEvents).map(entry => entry.topic),
    ],
  })
  .addLog({
    range: {
      from: PRELOAD_HEIGHT + 1,
    },
    topic0: [
      ...Object.values(oneTxPaymentEvents).map(entry => entry.topic),
    ],
  })
  .addLog({
    address: PRELOADED_ONE_TX_PAYMENT,
    topic0: [
      ...Object.values(oneTxPaymentEvents).map(entry => entry.topic),
    ],
  })
  .addLog({
    range: {
      from: PRELOAD_HEIGHT + 1,
    },
    topic0: [
      ...Object.values(votingReputationEvents).map(entry => entry.topic),
    ],
  })
  .addLog({
    address: PRELOADED_VOTING_REPUTATION,
    topic0: [
      ...Object.values(votingReputationEvents).map(entry => entry.topic),
    ],
  })
  .setFields({
    log: {
      topics: true,
      data: true,
      transactionHash: true,
    }
  })
