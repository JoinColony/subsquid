import { DataHandlerContext } from '@subsquid/evm-processor'
import { Store } from '@subsquid/typeorm-store'

import { Motion, Transaction, Domain, Colony, ColonyExtension } from '../../model'
import { Log } from '../../types';

import { abi as VotingReputationAbi, Contract as VotingReputationContract } from '../../abi/VotingReputation';
import { bigint } from '../../model/generated/marshal';

export const handleMotionCreated = async (
  context: DataHandlerContext<Store, {}>,
  log: Log,
) => {
  const event = VotingReputationAbi.parseLog(log);

  if (!event) {
    return;
  }

  const args = event.args.toObject();

  const votingReputationInstanceAddress = log.address.toLowerCase();
  const chainExtension = new VotingReputationContract(context, log.block, votingReputationInstanceAddress);
  const extension = await context.store.get(ColonyExtension, { where: { id: votingReputationInstanceAddress }, relations: {"colony": true} });
  if (!extension) {
    throw new Error("Extension not known, but should be");
  }
  const colonyAddress = extension.colony.id;
  const chainMotion = await chainExtension.getMotion(args.motionId);
  const totalStakeFraction = await chainExtension.getTotalStakeFraction();

  const motionSubsquidId = `${colonyAddress.toLowerCase()}_motion_${votingReputationInstanceAddress}_${args.motionId.toString()}`;
  const colonySubsquidId = `${colonyAddress.toLowerCase()}`;
  const domainSubsquidId = `${colonySubsquidId}_domain_${args.domainId.toString()}`;

  let motion = await context.store.get(Motion, { where: { id: motionSubsquidId } });
  if ( motion ) {
    // This was a motion created when we had the storage misalignment issue, causing
    // motion ids to be reused. We returned to using the old counting, and tracked/
    // restored all funds, so we can ignore this motion.
    return;
  }
  
  motion = new Motion({ id: motionSubsquidId });
  motion.fundamentalChainId = args.motionId;
  motion.action = chainMotion.action;
  motion.agent = args.creator.toLowerCase();
  motion.extensionAddress = votingReputationInstanceAddress;
  motion.stakes = chainMotion.stakes.map((stake) => stake.toString());
  motion.requiredStake = chainMotion.skillRep * totalStakeFraction / (BigInt(10) ** BigInt(18));
  motion.escalated = chainMotion.escalated;
  motion.timestamp = BigInt(log.block.timestamp) / BigInt(1000);

  const colony = await context.store.get(Colony, { where: { id: colonySubsquidId } });
  motion.associatedColony = colony;

  const domain = await context.store.get(Domain, { where: { id: domainSubsquidId } });
  motion.domain = domain;

  const transaction = await context.store.get(Transaction, { where: { id: log.transactionHash.toLowerCase() } });
  motion.transaction = transaction;

  await context.store.insert(motion);
};


export const handleMotionStaked = async (
  context: DataHandlerContext<Store, {}>,
  log: Log,
) => {
  const event = VotingReputationAbi.parseLog(log);

  if (!event) {
    return;
  }

  const args = event.args.toObject();

  const votingReputationInstanceAddress = log.address.toLowerCase();
  const extension = await context.store.get(ColonyExtension, { where: { id: votingReputationInstanceAddress }, relations: {"colony": true} });
  if (!extension) {
    throw new Error("Extension not known, but should be");
  }
  const colonyAddress = extension.colony.id;

  const motionSubsquidId = `${colonyAddress.toLowerCase()}_motion_${votingReputationInstanceAddress}_${args.motionId.toString()}`;

  const motion = await context.store.get(Motion, { where: { id: motionSubsquidId } });
  if (motion) {
    if (!motion.stakes) {
      throw new Error("Motion stakes not set, but should be");
    }
    motion.stakes[event.args.vote] = (BigInt(motion.stakes[event.args.vote]) + BigInt(event.args.amount)).toString();
    await context.store.save(motion);
  }
};

export const handleMotionEscalated = async (
  context: DataHandlerContext<Store, {}>,
  log: Log,
) => {
  const event = VotingReputationAbi.parseLog(log);

  if (!event) {
    return;
  }

  const args = event.args.toObject();

  const votingReputationInstanceAddress = log.address.toLowerCase();
  const extension = await context.store.get(ColonyExtension, { where: { id: votingReputationInstanceAddress }, relations: {"colony": true} });
  if (!extension) {
    throw new Error("Extension not known, but should be");
  }
  const colonyAddress = extension.colony.id;

  const motionSubsquidId = `${colonyAddress.toLowerCase()}_motion_${votingReputationInstanceAddress}_${args.motionId.toString()}`;

  const motion = await context.store.get(Motion, { where: { id: motionSubsquidId } });
  if (motion) {
    motion.escalated = true;
    await context.store.save(motion);
  }
};
