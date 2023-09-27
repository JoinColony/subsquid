import { DataHandlerContext, Log } from '@subsquid/evm-processor'
import { Store, TypeormDatabase } from '@subsquid/typeorm-store'

import handleEvent from '../events';

import { Domain } from '../../model'
import { events as ColonyEvents, Contract as ColonyContract } from '../../abi/IColony';

export const handleDomainAdded = async (
  context: DataHandlerContext<Store, {}>,
  log: Log,
) => {
  const event = ColonyEvents['DomainAdded(address,uint256)'].decode(log);

  if (!event) {
    return;
  }

  // const colonyContract = new ColonyContract(ctx, log.block, log.address);

  const domain = new Domain({ id: `${log.address.toLowerCase()}_domain_${event.domainId.toString()}` })
  domain.domainChainId = event.domainId;

  domain.name = `Team #${event.domainId.toString()}`;
  domain.parent = null; // todo
  if (event.domainId.toString() === '1') {
    domain.name = `Root`;
    domain.parent = null;
  }
  domain.colonyAddress = log.address.toLowerCase();

  //  save domain to db
  await context.store.insert(domain)
  // todo: handle event

  await handleEvent(context, log as Log & { transactionHash: string; logIndex: number; }, event, 'DomainAdded(address,uint256)');
};

export const handleDomainAddedLegacy = async (
  context: DataHandlerContext<Store, {}>,
  log: Log,
) => {
  // do stuff for Domain Added
};
