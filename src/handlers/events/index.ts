import { DataHandlerContext } from '@subsquid/evm-processor'
import { Store } from '@subsquid/typeorm-store'
import { Result } from 'ethers';

import { Event, Block, Transaction, Colony } from '../../model'
import { Log } from '../../types';

import { Contract as OneTxPaymentContract } from '../../abi/OneTxPayment';

export const handleEvent = async (
  context: DataHandlerContext<Store, {}>,
  log: Log,
  decodedLog: Result,
  eventName: string,
  associatedColonyAddress?: string,
) => {
  let colony: Colony | undefined;
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

  let args = decodedLog.toObject();

  if (associatedColonyAddress) {
    colony = await context.store.get(Colony, { where: { id: associatedColonyAddress.toLowerCase() }});
    if (!colony) {
      // try to fetch it from the event args itself
      const colonyAddress = args?.colony || args?.colonyAddress;
      colony = await context.store.get(Colony, { where: { id: colonyAddress?.toLowerCase() } });
    }
    event.associatedColony = colony;
  }

  for (const [key, value] of Object.entries(args)) {
    if (typeof value === 'bigint') {
      args[key] = value.toString();
    }
  }
  event.args = JSON.stringify(args);

  await context.store.insert(event);
};

export const handleExtensionEvent = async (
  context: DataHandlerContext<Store, {}>,
  log: Log,
  decodedLog: Result,
  eventName: string,
) => {
  // For now, can be any extension contract
  const extension = new OneTxPaymentContract(context, log.block, log.address);
  const colony = await extension.getColony();

  return handleEvent(
    context,
    log,
    decodedLog,
    eventName,
    colony.toLowerCase(),
  );
};
