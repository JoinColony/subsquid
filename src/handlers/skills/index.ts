import { DataHandlerContext } from '@subsquid/evm-processor'
import { Store } from '@subsquid/typeorm-store'

import { GlobalSkill } from '../../model'
import { Log } from '../../types';

import { abi as ColonyNetworkAbi } from '../../abi/IColonyNetwork';

export const handleSkillAdded = async (
  context: DataHandlerContext<Store, {}>,
  log: Log,
) => {
  const event = ColonyNetworkAbi.parseLog(log);

  if (!event) {
    return;
  }

  const args = event.args.toObject();

  let parentSkillId = 'global_skill_' + args.parentSkillId.toString();
  let skillId = 'global_skill_' + args.skillId.toString();

  let parentSkill = await context.store.get(GlobalSkill, { where: { id: parentSkillId } });
  if (!parentSkill) {
    parentSkill = new GlobalSkill({ id: parentSkillId });
    parentSkill.skillChainId = args.parentSkillId;
    await context.store.insert(parentSkill);
  }

  let skill = await context.store.get(GlobalSkill, { where: { id: skillId } });
  if (!skill) {
    skill = new GlobalSkill({ id: skillId });
    skill.skillChainId = args.skillId;
    await context.store.insert(skill);
  }
  skill.parent = parentSkill;
  await context.store.save(skill);
};

