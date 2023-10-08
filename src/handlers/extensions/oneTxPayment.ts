import { DataHandlerContext } from '@subsquid/evm-processor'
import { Store } from '@subsquid/typeorm-store'

import { Payment, OneTxPayment, Domain, Transaction } from '../../model'
import { Log } from '../../types';

import { abi as OneTxPaymentAbi, Contract as OneTxPaymentContract } from '../../abi/OneTxPayment';

export const handleOneTxPaymentMade = async (
  context: DataHandlerContext<Store, {}>,
  log: Log,
) => {
  const event = OneTxPaymentAbi.parseLog(log);

  if (!event) {
    return;
  }

  const args = event.args.toObject();

  const chainExtension = new OneTxPaymentContract(context, log.block, log.address);
  const colonyAddress = await chainExtension.getColony();

  const colonySubsquidId = `${colonyAddress.toLowerCase()}`;
  const rootDomainSubsquidId = `${colonySubsquidId}_domain_1`;
  const oneTxPaymentSubsquidId = `${colonySubsquidId}_oneTxPayment_${args.nPayouts.toString()}_${args.fundamentalId.toString()}`;
  const paymentSubsquidId = `${colonySubsquidId}_payment_${args.fundamentalId.toString()}`;

  const oneTxPayment = new OneTxPayment({ id: oneTxPaymentSubsquidId });
  oneTxPayment.fundamentalChainId = args.fundamentalId;
  oneTxPayment.agent = args.agent;
  oneTxPayment.nPayouts = args.nPayouts;
  oneTxPayment.timestamp = BigInt(log.block.timestamp) / BigInt(1000);

  const transaction = await context.store.get(Transaction, { where: { id: log.transactionHash.toLowerCase() } });
  oneTxPayment.transaction = transaction;

  const rootDomain = await context.store.get(Domain, { where: { id: rootDomainSubsquidId } });
  const payment = await context.store.get(Payment, { where: { id: paymentSubsquidId } });
  const paymentDomain = await context.store.get(Domain, { where: { id: payment?.domain?.id } });

  oneTxPayment.payment = payment;
  oneTxPayment.domain = paymentDomain || rootDomain;

  await context.store.insert(oneTxPayment);
};
