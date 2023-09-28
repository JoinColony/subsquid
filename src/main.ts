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

import { handleDomainAdded } from './handlers/domains';
import { handleColonyAdded } from './handlers/colonies';

import handleEvent from './handlers/events';

processor.run(new TypeormDatabase({ supportHotBlocks: true }), async (context) => {
  for (const block of context.blocks) {
    for (const log of block.logs as Array<Log>) {
      console.log(log.address)
      const [topic] = log.topics;
      // console.log(typeof topic, typeof ColonyNetworkEvents.ColonyAdded.topic, topic === ColonyNetworkEvents.ColonyAdded.topic)
      // if (topic === ColonyNetworkEvents.ColonyAdded.topic) {
      //   console.log('yayyyy!')
      // }
      if (topic) {
        switch (topic) {
          // case ColonyEvents['DomainAdded(address,uint256)'].topic:
          // case ColonyEvents['DomainAdded(uint256)'].topic: {
          //   return handleDomainAdded(context, log);
          // }
          // case ColonyNetworkEvents.ColonyAdded.topic:
          //   console.log('colonyadded');
          //   break;
            // return handleColonyAdded(context, log);
          default: {
            console.log(ColonyNetworkEvents.ColonyAdded.topic, topic, ColonyNetworkEvents.ColonyAdded.topic === topic)
            const event = ColonyNetworkAbi.parseLog(log) || ColonyAbi.parseLog(log);
            if (event) {
              return handleEvent(context, log, event.args, event.signature);
            }
            return;
          }
        }
      }
    }
  }
})
