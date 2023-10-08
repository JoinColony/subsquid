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
} from './handlers';

import { checkIsColony, checkIsExtension, checkIsToken } from './utils';

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
        } else if (VotingReputationAbi.parseLog(log)) {
          if (!await checkIsExtension(context, log.block.height, log.address)){
            continue;
          }
        } else if (OneTxPaymentAbi.parseLog(log)) {
          if (!await checkIsExtension(context, log.block.height, log.address)){
            continue;
          }
        } else if (TokenAbi.parseLog(log)) {
          if (!await checkIsToken(context, log.block.height, log.address)){
            continue;
          }
        }

        // handle the event first to save the event entity,
        // transaction entity and block entity
        const event = ColonyNetworkAbi.parseLog(log) || ColonyAbi.parseLog(log);
        if (event) {
          await handleEvent(
            context,
            log,
            event.args,
            event.signature,
            log.address.toLowerCase(), // if set to colony address will add an associatedColony to the event enti
          );
        }

        // One TX Extension events
        const extensionEvent = OneTxPaymentAbi.parseLog(log) || VotingReputationAbi.parseLog(log);
        if (extensionEvent) {
          await handleExtensionEvent(
            context,
            log,
            extensionEvent.args,
            extensionEvent.signature,
          );
        }

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
          default: {
            break;
          }
        }
      }
    }
  }
})
