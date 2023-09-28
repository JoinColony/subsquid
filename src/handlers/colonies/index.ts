import { DataHandlerContext } from '@subsquid/evm-processor'
import { Store } from '@subsquid/typeorm-store'

import { Domain, Colony } from '../../model'
import { Log } from '../../types';
import { replaceFirst } from '../../utils';
import { createToken } from '../tokens';

import { abi as ColonyAbi, Contract as ColonyContract } from '../../abi/IColony';
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

    // colony.metadata = null;

    // let tokenAddress = event.token;
    // createToken(tokenAddress)

    colony.colonyChainId = args.colonyId;

    // add token
    const token = await createToken(context, log, args.token);
    colony.token = token;

    // add domain
    const rootDomainSubsquidId = `${args.colonyAddress.toLowerCase()}_domain_1`;
    let rootDomain = await context.store.get(Domain, { where: { id: rootDomainSubsquidId } });

    if (!rootDomain) {
      rootDomain = new Domain({ id: rootDomainSubsquidId })
      rootDomain.domainChainId = BigInt(1);

      rootDomain.name = `Root`;
      rootDomain.parent = null;
      rootDomain.colonyAddress = args.colonyAddress.toLowerCase();

      //  save domain to db
      await context.store.insert(rootDomain);
    }

    // colony.token = tokenAddress
    colony.domains = [rootDomain];

    await context.store.insert(colony)

    // Update the new root domain entity with the link to it's colony
    // this can be done only after we've saved the colony entity itself
    rootDomain.colony = colony;
    await context.store.save(rootDomain);
  }
};




// const colonyContract = new ColonyContract(context, log.block, log.address);

// /*
//  * @TODO Properly fetch the domain count
//  * As-is this won't work if multiple domains (within the same colony) are created
//  * in one transaction
//  * This is only true for the "old" event signature: `DomainAdded(address)`
//  */
// let domainChainId = args.domainId;
// if (!domainChainId) {
//   domainChainId = await colonyContract.getDomainCount();
// }

// const domainSubsquidId = `${log.address.toLowerCase()}_domain_${domainChainId.toString()}`;
// let domain = await context.store.get(Domain, { where: { id: domainSubsquidId } });

// if (!domain) {
//   domain = new Domain({ id: domainSubsquidId })
//   domain.domainChainId = domainChainId;

//   domain.name = `Team #${domainChainId.toString()}`;
//   domain.parent = null; // todo
//   if (domainChainId.toString() === '1') {
//     domain.name = `Root`;
//     domain.parent = null;
//   }
//   domain.colonyAddress = log.address.toLowerCase();

//   //  save domain to db
//   await context.store.insert(domain);
// }
