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

import handleEvent from './handlers/events';

processor.run(new TypeormDatabase({ supportHotBlocks: true }), async (context) => {
  for (const block of context.blocks) {
    for (const log of block.logs as Array<Log>) {
      const [topic] = log.topics;
      if (topic) {
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
