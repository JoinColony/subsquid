import { Contract as ColonyNetworkContract } from '../abi/IColonyNetwork';
import { DataHandlerContext } from '@subsquid/evm-processor'
import { Store } from '@subsquid/typeorm-store'
import { COLONY_NETWORK_ADDRESS } from './constants';

export const replaceFirst = (value: string, searcher: string, replacer: string): string => {
  let indexOfSearch = value.indexOf(searcher);
  if (indexOfSearch === -1) {
    return value;
  }
  let before = value.substring(0, indexOfSearch);
  let after = value.substring(indexOfSearch + searcher.length);
  return before.concat(replacer).concat(after);
}

export const checkIsColony = async (context: DataHandlerContext<Store, {}>, blockHeight: number, address: string): Promise<boolean> => {
  const colonyNetworkContract = new ColonyNetworkContract(context, { height: blockHeight }, COLONY_NETWORK_ADDRESS);
  const isColony = await colonyNetworkContract.isColony(address.toLowerCase());
  return isColony;
}