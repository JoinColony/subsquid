import { DataHandlerContext } from '@subsquid/evm-processor'
import { Store } from '@subsquid/typeorm-store'

import { Colony, ColonyExtension } from '../../model'
import { Log } from '../../types';

import { abi as ColonyNetworkAbi, Contract as ColonyNetworkContract } from '../../abi/IColonyNetwork';

export * from './oneTxPayment';

export const handleExtensionInstalled = async (
  context: DataHandlerContext<Store, {}>,
  log: Log,
) => {
  const event = ColonyNetworkAbi.parseLog(log);

  if (!event) {
    return;
  }

  const args = event.args.toObject();

  let colonyNetwork = new ColonyNetworkContract(context, log.block, log.address);
  const extensionAddress = await colonyNetwork.getExtensionInstallation(args.extensionId, args.colony);

  const colony = await context.store.get(Colony, { where: { id: args.colony.toLowerCase() } });

  if (colony) {
    const extension = new ColonyExtension({ id: extensionAddress.toLowerCase() });
    extension.hash = args.extensionId;
    extension.colony = colony;

    await context.store.insert(extension);
  }
};
