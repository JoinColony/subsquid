import { DataHandlerContext } from '@subsquid/evm-processor'
import { Store } from '@subsquid/typeorm-store'

// import handleEvent from '../events';
import { Token } from '../../model'
import { Log } from '../../types';

import { Contract as TokenContract } from '../../abi/Token';

export const createToken = async (
  context: DataHandlerContext<Store, {}>,
  log: Log,
  tokenAddress: string,
) => {
  const normalizedTokenAddress = tokenAddress.toLowerCase();

  let token = await context.store.get(Token, { where: { id: normalizedTokenAddress }});

  if (token) {
    return token;
  }

  const tokenContract = new TokenContract(context, log.block, normalizedTokenAddress);

  token = new Token({ id: normalizedTokenAddress });

  let decimals = 18;
  try {
    decimals = await tokenContract.decimals();
  } catch (error) {

  }
  token.decimals = BigInt(decimals);

  let symbol = '';
  try {
    symbol = await tokenContract.symbol();
  } catch (error) {

  }
  token.symbol = symbol;

  await context.store.insert(token);

  return token;
};
