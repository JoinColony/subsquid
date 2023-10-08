import { DataHandlerContext } from '@subsquid/evm-processor'
import { Store } from '@subsquid/typeorm-store'
import { Result } from 'ethers';

import { Event, Block, Transaction, Colony } from '../../model'
import { Log } from '../../types';

const handleEvent = async (
  context: DataHandlerContext<Store, {}>,
  log: Log,
  decodedLog: Result,
  eventName: string,
  associatedColonyAddress?: string,
) => {
  const event = new Event({ id: `${log.transactionHash.toLowerCase()}_event_${log.logIndex}`});

  let block = await context.store.get(Block, { where: { id: `block_${log.block.height}` } });
  if (!block) {
    block = new Block({ id: `block_${log.block.height}`});
    block.timestamp = BigInt(log.block.timestamp) / BigInt(1000);
    await context.store.insert(block);
  }

  let transaction = await context.store.get(Transaction, { where: { id: log.transactionHash.toLowerCase() }});
  if (!transaction) {
    transaction = new Transaction({ id: log.transactionHash.toLowerCase() });
    transaction.block = block;
    await context.store.insert(transaction);
  }

  event.transaction = transaction;
  event.address = log.address;
  event.timestamp = BigInt(log.block.timestamp) / BigInt(1000);
  event.name = eventName;

  if (associatedColonyAddress) {
    let colony = await context.store.get(Colony, { where: { id: associatedColonyAddress.toLowerCase() }});
    if (colony) {
      event.associatedColony = colony;
    }
  }

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
