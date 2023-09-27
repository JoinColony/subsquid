import {Store, TypeormDatabase} from '@subsquid/typeorm-store'
// import {events as ColonyNetworkEvents, Contract as ColonyNetworkContract } from './abi/IColonyNetwork'
// import { Domain, Colony } from './model'
// import { DataHandlerContext, Log } from '@subsquid/evm-processor'

import { Log } from './types';
import { processor } from './processor'

import { events as ColonyEvents } from './abi/IColony';

import {
  handleDomainAdded,
  handleDomainAddedLegacy,
} from './handlers/domains';

processor.run(new TypeormDatabase({ supportHotBlocks: true }), async (context) => {
  for (const block of context.blocks) {
    for (const log of block.logs as Array<Log>) {
      const [topic] = log.topics;
      if (topic) {
        switch (topic) {
          case ColonyEvents['DomainAdded(address,uint256)'].topic: {
            return handleDomainAdded(context, log);
          }
          case ColonyEvents['DomainAdded(uint256)'].topic: {
            return handleDomainAddedLegacy(context, log);
          }
          default:
            break;
          }
      }
    }
  }
})

// function decodeColonyAdded(evmLog: any): { colonyId: bigint, colonyAddress: string, token: string } {
//     if (evmLog.topics[0] === ColonyNetworkEvents.ColonyAdded.topic) {
//       return ColonyNetworkEvents.ColonyAdded.decode(evmLog)
//     }
//     throw new Error('Unsupported topic')
//   }

//   function replaceFirst(value: string, searcher: string, replacer: string): string {
//     let indexOfSearch = value.indexOf(searcher);
//     if (indexOfSearch === -1) {
//       return value;
//     }
//     let before = value.substr(0, indexOfSearch);
//     let after = value.substr(indexOfSearch + searcher.length);
//     return before.concat(replacer).concat(after);
//   }

// async function handleColonyAdded(ctx: DataHandlerContext<Store, {}>, log: Log) {
//     // let rootDomain = new Domain(e. params.colonyAddress.toHex() + '_domain_1')
//     // rootDomain.domainChainId = new BigInt(1)
//     // rootDomain.metadata = ""
//     // rootDomain.save()

//     const event = decodeColonyAdded(log);
//     let metadata;


//     const c = await ctx.store.get(Colony, {where: {id: event.colonyAddress}})
//     if (c !== undefined) {
//         console.log('early bath')
//         return
//     }

//     const colony = new Colony({id: event.colonyAddress.toString()});

//     let colonyNetwork = new ColonyNetworkContract(ctx, log.block, log.address);
//     let ensName = null;
//     try {
//         ensName = await colonyNetwork.lookupRegisteredENSDomain(event.colonyAddress);
//         colony.ensName = replaceFirst(ensName, 'colony.joincolony.eth', 'colony.joincolony.eth');
//     } catch (err){
//         console.log(err);
//     }

//     colony.metadata = ""

//     let tokenAddress = event.token;
//     // createToken(tokenAddress)

//     colony.colonyChainId = event.colonyId
//     // colony.token = tokenAddress
//     // colony.domains = [rootDomain.id]
//     await ctx.store.insert(colony)
//     // ColonyTemplate.create(event.params.colonyAddress)}
// }
