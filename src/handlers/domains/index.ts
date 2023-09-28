import { DataHandlerContext } from '@subsquid/evm-processor'
import { Store } from '@subsquid/typeorm-store'

import handleEvent from '../events';
import { Domain } from '../../model'
import { Log } from '../../types';

import { events as ColonyEvents, Contract as ColonyContract } from '../../abi/IColony';

export const handleDomainAdded = async (
  context: DataHandlerContext<Store, {}>,
  log: Log,
) => {
  const eventSignature = 'DomainAdded(address,uint256)';
  const event = ColonyEvents[eventSignature].decode(log);

  if (!event) {
    return;
  }

  // const colonyContract = new ColonyContract(ctx, log.block, log.address);

  const domainSubsquidId = `${log.address.toLowerCase()}_domain_${event.domainId.toString()}`;
  let domain = await context.store.get(Domain, { where: { id: domainSubsquidId } });

  if (!domain) {
    domain = new Domain({ id: domainSubsquidId })
    domain.domainChainId = event.domainId;

    domain.name = `Team #${event.domainId.toString()}`;
    domain.parent = null; // todo
    if (event.domainId.toString() === '1') {
      domain.name = `Root`;
      domain.parent = null;
    }
    domain.colonyAddress = log.address.toLowerCase();

    //  save domain to db
    await context.store.insert(domain);
  }

  // handle the event
  await handleEvent(context, log, event, eventSignature);
};

export const handleDomainAddedLegacy = async (
  context: DataHandlerContext<Store, {}>,
  log: Log,
) => {
  // do stuff for Domain Added
};
