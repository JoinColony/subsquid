import {Store, TypeormDatabase} from '@subsquid/typeorm-store'
// import {events as ColonyNetworkEvents, Contract as ColonyNetworkContract } from './abi/IColonyNetwork'
// import { Domain, Colony } from './model'
// import { DataHandlerContext, Log } from '@subsquid/evm-processor'

import { Log } from './types';
import { processor } from './processor'

import {
  events as ColonyEvents,
  abi as ColonyAbi,
} from './abi/IColony';
import {
  events as ColonyNetworkEvents,
  abi as ColonyNetworkAbi,
} from './abi/IColonyNetwork';

import { handleDomainAdded, handleDomainMetadata } from './handlers/domains';
import { handleColonyAdded, handleColonyMetadata } from './handlers/colonies';
import { checkIsColony } from './utils';
import handleEvent from './handlers/events';

processor.run(new TypeormDatabase({ supportHotBlocks: true }), async (context) => {
  // ******
  // DO NOT USE return in here, as you will return out of the whole processor
  // ******
  for (const block of context.blocks) {
    for (const log of block.logs as Array<Log>) {
      const [topic] = log.topics;
      if (topic) {
        // If events are on 'untrusted' entities i.e. anything without a canonical single deployment,
        // we check if it is actually something we want to pay attention to (e.g. that 'DomainAdded' was
        // emitted by a Colony that was deployed with ColonyNetwork)
        if (ColonyAbi.parseLog(log)){
          if (!await checkIsColony(context, log.block.height, log.address)){
            continue;
          }
        } // else if (TokenAbi.parseLog(log)) { // Example continuation that will be required for many types
          // if (!await checkIsToken(context, log.block.height, log.address)){
          //   continue;
          // }
        // } 

        // handle the event first to save the event entity,
        // transaction entity and block entity
        const event = ColonyNetworkAbi.parseLog(log) || ColonyAbi.parseLog(log);
        if (event) {
          await handleEvent(context, log, event.args, event.signature);
        }
        // handle the rest of the custom events / handlers
        switch (topic) {
          case ColonyEvents['DomainAdded(address,uint256)'].topic:
          case ColonyEvents['DomainAdded(uint256)'].topic: {
            await handleDomainAdded(context, log);
            break;
          }
          case ColonyEvents.DomainMetadata.topic: {
            await handleDomainMetadata(context, log);
            break;
          }
          case ColonyNetworkEvents.ColonyAdded.topic: {
            await handleColonyAdded(context, log);
            break;
          }
          case ColonyEvents.ColonyMetadata.topic: {
            await handleColonyMetadata(context, log);
            break;
          }
          default: {
            break;
          }
        }
      }
    }
  }
})
