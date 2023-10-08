import { DataHandlerContext } from '@subsquid/evm-processor'
import { Store } from '@subsquid/typeorm-store'

import { Motion, Transaction, Domain, Colony } from '../../model'
import { Log } from '../../types';

import { abi as VotingReputationAbi, Contract as VotingReputationContract } from '../../abi/VotingReputation';

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
  const colonyAddress = await chainExtension.getColony();
  const chainMotion = await chainExtension.getMotion(args.motionId);
  const totalStakeFraction = await chainExtension.getTotalStakeFraction();

  const motionSubsquidId = `${colonyAddress.toLowerCase()}_motion_${votingReputationInstanceAddress}_${args.motionId.toString()}`;
  const colonySubsquidId = `${colonyAddress.toLowerCase()}`;
  const domainSubsquidId = `${colonySubsquidId}_domain_${args.domainId.toString()}`;

  const motion = new Motion({ id: motionSubsquidId });
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
  const chainExtension = new VotingReputationContract(context, log.block, votingReputationInstanceAddress);
  const colonyAddress = await chainExtension.getColony();
  const chainMotion = await chainExtension.getMotion(args.motionId);

  const motionSubsquidId = `${colonyAddress.toLowerCase()}_motion_${votingReputationInstanceAddress}_${args.motionId.toString()}`;

  const motion = await context.store.get(Motion, { where: { id: motionSubsquidId } });
  if (motion) {
    motion.stakes = chainMotion.stakes.map((stake) => stake.toString());
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
  const chainExtension = new VotingReputationContract(context, log.block, votingReputationInstanceAddress);
  const colonyAddress = await chainExtension.getColony();
  const chainMotion = await chainExtension.getMotion(args.motionId);

  const motionSubsquidId = `${colonyAddress.toLowerCase()}_motion_${votingReputationInstanceAddress}_${args.motionId.toString()}`;

  const motion = await context.store.get(Motion, { where: { id: motionSubsquidId } });
  if (motion) {
    motion.escalated = chainMotion.escalated;
    await context.store.save(motion);
  }
};
