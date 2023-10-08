import { DataHandlerContext } from '@subsquid/evm-processor'
import { Store } from '@subsquid/typeorm-store'

import { Transaction, Colony, ColonyMetadata, Event } from '../../model'
import { Log } from '../../types';
import { replaceFirst } from '../../utils';
import { createToken } from '../tokens';
import { getDomain } from '../domains';

import { abi as ColonyAbi } from '../../abi/IColony';
import { abi as ColonyNetworkAbi, Contract as ColonyNetworkContract } from '../../abi/IColonyNetwork';

export const handleColonyAdded = async (
  context: DataHandlerContext<Store, {}>,
  log: Log,
) => {
  const event = ColonyNetworkAbi.parseLog(log);

  if (!event) {
    return;
  }

  const args = event.args.toObject();

  let colony = await context.store.get(Colony, { where: { id: args.colonyAddress.toLowerCase() } })

  if (!colony) {
    colony = new Colony({ id: args.colonyAddress.toLowerCase() });

    let colonyNetwork = new ColonyNetworkContract(context, log.block, log.address);
    let ensName = null;
    try {
      ensName = await colonyNetwork.lookupRegisteredENSDomain(args.colonyAddress.toLowerCase());
      colony.ensName = replaceFirst(ensName, 'colony.joincolony.eth', 'colony.joincolony.eth');
    } catch (err) {
      console.log(err);
    }

    colony.colonyChainId = args.colonyId;

    // add token
    const token = await createToken(context, log, args.token);
    colony.token = token;

    // add domain
    const rootDomain = await getDomain(context, BigInt(1), { ...log, address: args.colonyAddress });

    colony.domains = [rootDomain];

    await context.store.insert(colony)

    // Update the new root domain entity with the link to it's colony
    // this can be done only after we've saved the colony entity itself
    rootDomain.colony = colony;
    await context.store.save(rootDomain);
  }
};

export const handleColonyMetadata = async (
  context: DataHandlerContext<Store, {}>,
  log: Log,
) => {
  const event = ColonyAbi.parseLog(log);

  if (!event) {
    return;
  }

  const args = event.args.toObject();

  const normalizedColonyAddress = log.address.toLowerCase();
  const normalizedTransactionHash = log.transactionHash.toLowerCase();

  const colony = await context.store.get(Colony, { where: { id: normalizedColonyAddress } });

  if (colony) {
    const colonyMetadataHistory = new ColonyMetadata({
      id: `${normalizedColonyAddress}_metadata_${args.metadata}_transaction_${normalizedTransactionHash}_log_${log.logIndex.toString()}`,
    });

    const transaction = await context.store.get(Transaction, { where: { id: normalizedTransactionHash } });
    if (transaction) {
      colonyMetadataHistory.transaction = transaction;
    }
    colonyMetadataHistory.colony = colony;
    colonyMetadataHistory.metadata = args.metadata;

    colony.metadata = args.metadata;

    await context.store.insert(colonyMetadataHistory);
    await context.store.save(colony);
  }
};
