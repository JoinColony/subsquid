import { DataHandlerContext } from '@subsquid/evm-processor'
import { Store } from '@subsquid/typeorm-store'

import { Domain, Colony } from '../../model'
import { Log } from '../../types';

import { abi as ColonyAbi, Contract as ColonyContract } from '../../abi/IColony';

export const handleDomainAdded = async (
  context: DataHandlerContext<Store, {}>,
  log: Log,
) => {
  const event = ColonyAbi.parseLog(log);

  if (!event) {
    return;
  }

  const args = event.args.toObject();

  const colonyContract = new ColonyContract(context, log.block, log.address);

  /*
   * @TODO Properly fetch the domain count
   * As-is this won't work if multiple domains (within the same colony) are created
   * in one transaction
   * This is only true for the "old" event signature: `DomainAdded(address)`
   */
  let domainChainId = args.domainId;
  if (!domainChainId) {
    domainChainId = await colonyContract.getDomainCount();
  }

  const domainSubsquidId = `${log.address.toLowerCase()}_domain_${domainChainId.toString()}`;
  let domain = await context.store.get(Domain, { where: { id: domainSubsquidId } });

  if (!domain) {
    domain = new Domain({ id: domainSubsquidId })
    domain.domainChainId = domainChainId;

    domain.name = `Team #${domainChainId.toString()}`;
    domain.parent = null; // todo
    if (domainChainId.toString() === '1') {
      domain.name = `Root`;
      domain.parent = null;
    }
    domain.colonyAddress = log.address.toLowerCase();

    const colony = await context.store.get(Colony, { where: { id: log.address.toLowerCase() } });
    if (colony) {
      domain.colony = colony;
    }

    //  save domain to db
    await context.store.insert(domain);
  }
};
