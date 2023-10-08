import { DataHandlerContext } from '@subsquid/evm-processor'
import { Store } from '@subsquid/typeorm-store'

import {
  FundingPotPayout,
  FundingPot,
  Payment,
  Colony,
  Domain,
} from '../../model'
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

  const paymentSubsquidId = `${log.address.toLowerCase()}_payment_${args.paymentId.toString()}`;
  const chainPayment = await colonyContract.getPayment(args.paymentId);
  const fundingPotChainId = chainPayment.fundingPotId;

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

  // Funding Pot
  const fundingPotSubsquidId = `${log.address.toLowerCase()}_fundingpot_${fundingPotChainId.toString()}`;
  let fundingPot = await context.store.get(FundingPot, { where: { id: fundingPotSubsquidId } });
  if (!fundingPot) {
    fundingPot = new FundingPot({ id: fundingPotSubsquidId });
    fundingPot.fundingPotPayouts = [];
    await context.store.insert(fundingPot);
  }
  fundingPot.fundingPotPayouts = [...fundingPot.fundingPotPayouts, fundingPotPayout];
  await context.store.save(fundingPot);

  fundingPotPayout.fundingPot = fundingPot;
  await context.store.save(fundingPotPayout);

  const payment = await context.store.get(Payment, { where: { id: paymentSubsquidId } });
  if (payment) {
    payment.fundingPot = fundingPot;
    await context.store.save(payment);
  }
};

export const handlePaymentAdded = async (
  context: DataHandlerContext<Store, {}>,
  log: Log,
) => {
  const event = ColonyAbi.parseLog(log);

  if (!event) {
    return;
  }

  const args = event.args.toObject();

  const colonyContract = new ColonyContract(context, log.block, log.address);

  const paymentChainId = args.paymentId;
  const chainPayment = await colonyContract.getPayment(paymentChainId);

  const paymentSubsquidId = `${log.address.toLowerCase()}_payment_${paymentChainId.toString()}`;
  const colonySubsquidId = `${log.address.toLowerCase()}`;
  const domainSubsquidId = `${log.address.toLowerCase()}_domain_${chainPayment.domainId.toString()}`;
  const fundingPotDomainSubsquidId = `${log.address.toLowerCase()}_fundingpot_${chainPayment.fundingPotId.toString()}`;

  let payment = await context.store.get(Payment, { where: { id: paymentSubsquidId } });
  if (!payment) {
    payment = new Payment({ id: paymentSubsquidId });
    await context.store.insert(payment);
  }
  payment.paymentChainId = paymentChainId;
  payment.to = chainPayment.recipient.toLowerCase();

  const colony = await context.store.get(Colony, { where: { id: colonySubsquidId } });
  payment.colony = colony || null;

  const domain = await context.store.get(Domain, { where: { id: domainSubsquidId } });
  payment.domain = domain || null;

  const fundingPot = await context.store.get(FundingPot, { where: { id: fundingPotDomainSubsquidId } });
  payment.fundingPot = fundingPot || null;

  await context.store.save(payment);
};

