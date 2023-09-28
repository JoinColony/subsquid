import { DataHandlerContext } from '@subsquid/evm-processor'
import { Store } from '@subsquid/typeorm-store'

import handleEvent from '../events';
import { Domain, Colony } from '../../model'
import { Log } from '../../types';
import { replaceFirst } from '../../utils';

import { abi as ColonyAbi, Contract as ColonyContract } from '../../abi/IColony';
import { Contract as ColonyNetworkContract } from '../../abi/IColonyNetwork';

export const handleColonyAdded = async (
  context: DataHandlerContext<Store, {}>,
  log: Log,
) => {
  const event = ColonyAbi.parseLog(log);

  if (!event) {
    return;
  }

  const args = event.args.toObject();

  // let rootDomain = new Domain(e. params.colonyAddress.toHex() + '_domain_1')
  // rootDomain.domainChainId = new BigInt(1)
  // rootDomain.metadata = ""
  // rootDomain.save()

  let colony = await context.store.get(Colony, { where: { id: args.colonyAddress.toLowerCase() } })

  console.log(colony);

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

    const rootDomainSubsquidId = `${log.address.toLowerCase()}_domain_1`;
    const rootDomain = await context.store.get(Domain, { where: { id: rootDomainSubsquidId } });



    // colony.token = tokenAddress
    colony.domains = [rootDomain as Domain];

    await context.store.insert(colony)
    // ColonyTemplate.create(event.params.colonyAddress)}
  }



  // handle the event
  await handleEvent(context, log, event.args, event.signature);
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
