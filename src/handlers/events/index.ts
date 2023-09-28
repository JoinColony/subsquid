import { DataHandlerContext } from '@subsquid/evm-processor'
import { Store } from '@subsquid/typeorm-store'
import { Result } from 'ethers';

import { Event, Block, Transaction } from '../../model'
import { Log } from '../../types';

const handleEvent = async (
  context: DataHandlerContext<Store, {}>,
  log: Log,
  decodedLog: Result,
  eventName: string,
) => {
  const event = new Event({ id: `${log.transactionHash}_event_${log.logIndex}`});

  let block = await context.store.get(Block, { where: { id: `block_${log.block.height}` } });
  if (!block) {
    block = new Block({ id: `block_${log.block.height}`});
    block.timestamp = BigInt(log.block.timestamp);
    await context.store.insert(block);
  }

  let transaction = await context.store.get(Transaction, { where: { id: log.transactionHash }});
  if (!transaction) {
    transaction = new Transaction({ id: log.transactionHash });
    transaction.block = block;
    await context.store.insert(transaction);
  }

  event.transaction = transaction;
  event.address = log.address;
  // todo: event.associatedColony
  event.timestamp = BigInt(log.block.timestamp);
  event.name = eventName;

  let args = decodedLog.toObject();
  for (const [key, value] of Object.entries(args)) {
    if (typeof value === 'bigint') {
      args[key] = value.toString();
    }
  }
  event.args = JSON.stringify(args);

  await context.store.insert(event);
};

export default handleEvent;
