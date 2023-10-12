import { TypeormDatabase } from '@subsquid/typeorm-store'

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
import {
  events as VotingReputationEvents,
  abi as VotingReputationAbi,
} from './abi/VotingReputation';

import {
  events as OneTxPaymentEvents,
  abi as OneTxPaymentAbi,
} from './abi/OneTxPayment';
import {
  abi as TokenAbi,
} from './abi/Token';

import {
  handleEvent,
  handleExtensionEvent,
  handleDomainAdded,
  handleDomainMetadata,
  handleColonyAdded,
  handleColonyMetadata,
  handleExtensionInstalled,
  handleSkillAdded,
  handlePaymentPayoutSet,
  handlePaymentAdded,
  handleOneTxPaymentMade,
  handleMotionCreated,
  handleMotionStaked,
  handleMotionEscalated,
} from './handlers';

import { checkIsColony, checkIsExtension, checkIsToken } from './utils';
import { COLONY_NETWORK_ADDRESS } from './utils/constants';

processor.run(new TypeormDatabase({ supportHotBlocks: true }), async (context) => {
  // ******
  // DO NOT USE return in here, as you will return out of the whole processor
  // ******
  for (const block of context.blocks) {
    for (const log of block.logs as Array<Log>) {
      const [topic] = log.topics;
      let event;

      // Check event is on an object we know the interface of, before we 
      // try decoding. We have to do this first, before trying to parse any logs
      if (
        log.address !== COLONY_NETWORK_ADDRESS && 
        !await checkIsColony(context, log.block.height, log.address) &&
        !await checkIsExtension(context, log.block.height, log.address) 
      ) {
        continue;
      }

      // We ignore 'metatransaction executed', which is on many of our contracts and significantly 
      // complicates things
      if (topic === ColonyEvents.MetaTransactionExecuted.topic) {
        continue;
      }

      if (topic) {
        if ((event = ColonyAbi.parseLog(log)) && event){
          await handleEvent(context, log, event.args, event.signature, log.address);
        } else if ((event = ColonyNetworkAbi.parseLog(log)) && event) {
          await handleEvent(context, log, event.args, event.signature);
        } else if ((event = VotingReputationAbi.parseLog(log)) && event) {
          await handleExtensionEvent(context, log, event.args, event.signature);
        } else if ((event = OneTxPaymentAbi.parseLog(log)) && event) {
          await handleExtensionEvent(context, log, event.args, event.signature);
        } 
        // Tokens are a problem. ERC20 vs ERC721 transfer event with last parameter
        // indexed or not means that this call might fail.
        // } else if ((event = TokenAbi.parseLog(log)) && event) {
        //   if (!await checkIsToken(context, log.block.height, log.address)){
        //     continue;
        //   }
        // }

        // handle the rest of the custom events / handlers
        switch (topic) {
          /*
           * Colony Network Contract Events
           */
          case ColonyNetworkEvents.ColonyAdded.topic: {
            await handleColonyAdded(context, log);
            break;
          }
          case ColonyNetworkEvents.ExtensionInstalled.topic: {
            await handleExtensionInstalled(context, log);
            break;
          }
          case ColonyNetworkEvents.SkillAdded.topic: {
            await handleSkillAdded(context, log);
            break;
          }
          /*
           * Colony Contract Events
           */
          case ColonyEvents['DomainAdded(address,uint256)'].topic:
          case ColonyEvents['DomainAdded(uint256)'].topic: {
            await handleDomainAdded(context, log);
            break;
          }
          case ColonyEvents.DomainMetadata.topic: {
            await handleDomainMetadata(context, log);
            break;
          }
          case ColonyEvents.ColonyMetadata.topic: {
            await handleColonyMetadata(context, log);
            break;
          }
          case ColonyEvents.PaymentPayoutSet.topic: {
            await handlePaymentPayoutSet(context, log);
            break;
          }
          case ColonyEvents.PaymentAdded.topic: {
            await handlePaymentAdded(context, log);
            break;
          }
          /*
           * OneTxPayment Contract Events
           */
          case OneTxPaymentEvents.OneTxPaymentMade.topic: {
            await handleOneTxPaymentMade(context, log);
            break;
          }
          /*
           * VotingReputation Contract Events
           */
          case VotingReputationEvents.MotionCreated.topic: {
            await handleMotionCreated(context, log);
            break;
          }
          case VotingReputationEvents.MotionStaked.topic: {
            await handleMotionStaked(context, log);
            break;
          }
          case VotingReputationEvents.MotionEscalated.topic: {
            await handleMotionEscalated(context, log);
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
