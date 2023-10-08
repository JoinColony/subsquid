import { DataHandlerContext } from '@subsquid/evm-processor'
import { Store } from '@subsquid/typeorm-store'

import { Domain, DomainMetadata, Colony, Transaction, GlobalSkill, FundingPotPayout, FundingPot } from '../../model'
import { Log } from '../../types';

import { abi as ColonyAbi, Contract as ColonyContract } from '../../abi/IColony';

import { createToken } from '../tokens';

export const handlePaymentPayoutSet = async (
  context: DataHandlerContext<Store, {}>,
  log: Log,
) => {
  const event = ColonyAbi.parseLog(log);

  if (!event) {
    return;
  }

  const args = event.args.toObject();

  const colonyContract = new ColonyContract(context, log.block, log.address);

  const payment = await colonyContract.getPayment(args.paymentId);
  const fundingPotChainId = payment.fundingPotId;

  // Funding Pot Payout
  const fundingPotPaymentSubsquidId = `${log.address.toLowerCase()}_fundingpot_${fundingPotChainId.toString()}_${args.token.toLowerCase()}`;
  let fundingPotPayout = await context.store.get(FundingPotPayout, { where: { id: fundingPotPaymentSubsquidId } });
  if (!fundingPotPayout) {
    fundingPotPayout = new FundingPotPayout({ id: fundingPotPaymentSubsquidId });
    await context.store.insert(fundingPotPayout);
  }
  fundingPotPayout.fundingPotChainId = fundingPotChainId;
  fundingPotPayout.amount = args.amount;
  fundingPotPayout.token = await createToken(context, log, args.token);
  await context.store.save(fundingPotPayout);

  console.log({ name: event.signature, args });
};
