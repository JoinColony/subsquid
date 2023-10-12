import { DataHandlerContext } from '@subsquid/evm-processor'
import { Store } from '@subsquid/typeorm-store'

import { Payment, OneTxPayment, Domain, Transaction, ColonyExtension } from '../../model'
import { Log } from '../../types';

import { abi as OneTxPaymentAbi, Contract as OneTxPaymentContract } from '../../abi/OneTxPayment';
import { Contract as ColonyContract } from '../../abi/IColony';

export const handleOneTxPaymentMade = async (
  context: DataHandlerContext<Store, {}>,
  log: Log,
) => {
  const event = OneTxPaymentAbi.parseLog(log);

  if (!event) {
    return;
  }

  const args = event.args.toObject();

  const extension = await context.store.get(ColonyExtension, { where: { id: log.address }, relations: {"colony": true} });
  if (!extension) {
    throw new Error("Extension not known, but should be");
  }
  const colonyAddress = extension.colony.id;

  const colonySubsquidId = `${colonyAddress.toLowerCase()}`;
  const oneTxPaymentSubsquidId = `${colonySubsquidId}_oneTxPayment_${args.nPayouts.toString()}_${args.fundamentalId.toString()}`;
  const paymentSubsquidId = `${colonySubsquidId}_payment_${args.fundamentalId.toString()}`;

  const oneTxPayment = new OneTxPayment({ id: oneTxPaymentSubsquidId });
  oneTxPayment.fundamentalChainId = args.fundamentalId;
  oneTxPayment.agent = args.agent;
  oneTxPayment.nPayouts = args.nPayouts;
  oneTxPayment.timestamp = BigInt(log.block.timestamp) / BigInt(1000);

  const transaction = await context.store.get(Transaction, { where: { id: log.transactionHash.toLowerCase() } });
  oneTxPayment.transaction = transaction;

  const payment = await context.store.get(Payment, { where: { id: paymentSubsquidId }, relations: { "domain": true }});

  if (!payment && args.nPayouts.toString() === '1') {
    throw new Error("Payment not known, but should be");
  } 
  
  if (!payment) {
    // Then this used an expenditure. We go to the chain to get the corresponding domain
    const colonyContract = new ColonyContract(context, log.block, colonyAddress);
    const expenditure = await colonyContract.getExpenditure(args.fundamentalId);
    const domain = await context.store.get(Domain, { where: { id: `${colonySubsquidId}_domain_${expenditure.domainId.toString()}` } });
    oneTxPayment.domain = domain;
  } else {
    oneTxPayment.payment = payment;
    oneTxPayment.domain = payment.domain;
  }

  await context.store.insert(oneTxPayment);
};
