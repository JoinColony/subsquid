import { DataHandlerContext } from '@subsquid/evm-processor'
import { Store } from '@subsquid/typeorm-store'

import {
  Domain,
  DomainMetadata,
  Colony,
  Transaction,
  GlobalSkill,
  Event,
} from '../../model'
import { Log } from '../../types';

import {
  abi as ColonyAbi,
  Contract as ColonyContract,
  events as ColonyEvents,
} from '../../abi/IColony';

export const getDomain = async (
  context: DataHandlerContext<Store, {}>,
  domainId: bigint,
  log: Log,
) => {
  const domainSubsquidId = `${log.address.toLowerCase()}_domain_${domainId.toString()}`;
  const eventSubsquidId = `${log.transactionHash.toLowerCase()}_event_${log.logIndex}`;

  let domain = await context.store.get(Domain, { where: { id: domainSubsquidId } });

  if (domain) {
    return domain;
  }

  const colonyContract = new ColonyContract(context, log.block, log.address);

  domain = new Domain({ id: domainSubsquidId });
  domain.domainChainId = domainId;

  domain.name = `Team #${domainId.toString()}`;
  domain.parent = null; // todo
  if (domainId.toString() === '1') {
    domain.name = `Root`;
    domain.parent = null;
  }
  domain.colonyAddress = log.address.toLowerCase();

  // set the skill
  const chainDomain = await colonyContract.getDomain(domainId);
  const globalSkillSubsquidId = `global_skill_${chainDomain.skillId.toString()}`;
  let skill = await context.store.get(GlobalSkill, { where: { id: globalSkillSubsquidId } });
  if (!skill) {
    skill = new GlobalSkill({ id: globalSkillSubsquidId });
    skill.skillChainId = chainDomain.skillId;
    await context.store.insert(skill);
  }
  skill.domainId = domainSubsquidId;
  await context.store.save(skill);

  domain.skill = skill;

  const colony = await context.store.get(Colony, { where: { id: log.address.toLowerCase() } });
  if (colony) {
    domain.colony = colony;
  }

  //  save domain to db
  await context.store.insert(domain);

  // since the even was already created, and it won't have the current domain set to it
  // (it won't find it when it will try to fetch it from the db)
  // we need to add it manually
  const event = await context.store.get(Event, { where: { id: eventSubsquidId } });
  if (event) {
    event.domain = domain;
    await context.store.save(event);
  }

  return domain;
};

export const getArbitraryReputationUpdateDomain = async (
  context: DataHandlerContext<Store, {}>,
  log: Log,
) => {
  const event = ColonyAbi.parseLog(log);

  if (!event || event.topic !== ColonyEvents.ArbitraryReputationUpdate.topic) {
    return null;
  }

  const args = event.args.toObject();

  if (args.amount < 0) {
    const skill = await context.store.get(GlobalSkill, { where: { id: `global_skill_${args.skillId.toString()}` } });
    return context.store.get(Domain, { where: { id: skill?.domainId || '' } });
  }
};

export const handleDomainAdded = async (
  context: DataHandlerContext<Store, {}>,
  log: Log,
) => {
  const event = ColonyAbi.parseLog(log);

  if (!event) {
    return;
  }

  const args = event.args.toObject();

  const colonyContract = new ColonyContract(context, log.block, log.address);

  /*
   * @TODO Properly fetch the domain count
   * As-is this won't work if multiple domains (within the same colony) are created
   * in one transaction
   * This is only true for the "old" event signature: `DomainAdded(address)`
   */
  let domainChainId = args.domainId;
  if (!domainChainId) {
    domainChainId = await colonyContract.getDomainCount();
  }

  await getDomain(context, domainChainId, log);
};

export const handleDomainMetadata = async (
  context: DataHandlerContext<Store, {}>,
  log: Log,
) => {
  const event = ColonyAbi.parseLog(log);

  if (!event) {
    return;
  }

  const args = event.args.toObject();

  const domain = await getDomain(context, args.domainId, log);

  const domainMetadataHistory = new DomainMetadata({
    id: `${log.address.toLowerCase()}_domain_${args.domainId.toString()}_metadata_${args.metadata}_transaction_${log.transactionHash.toLowerCase()}_log_${log.logIndex.toString()}`,
  });

  const transaction = await context.store.get(Transaction, { where: { id: log.transactionHash.toLowerCase() } });
  if (transaction) {
    domainMetadataHistory.transaction = transaction;
  }
  domainMetadataHistory.domain = domain;
  domainMetadataHistory.metadata = args.metadata;

  domain.metadata = args.metadata;

  await context.store.insert(domainMetadataHistory);
  await context.store.save(domain);

};
