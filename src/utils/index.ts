import { Contract as ColonyNetworkContract } from '../abi/IColonyNetwork';
import { Contract as IColonyExtension } from '../abi/IColonyExtension';
import { Contract as IColony } from '../abi/IColony';
import { DataHandlerContext } from '@subsquid/evm-processor'
import { Store } from '@subsquid/typeorm-store'
import { COLONY_NETWORK_ADDRESS } from './constants';
import { Token } from '../model'

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

export const checkIsExtension = async (context: DataHandlerContext<Store, {}>, blockHeight: number, address: string): Promise<boolean> => {
  const colonyExtensionContract = new IColonyExtension(context, { height: blockHeight }, address);
  try {
    const colonyAddress = await colonyExtensionContract.getColony();
    const colony = await new IColony(context, { height: blockHeight }, colonyAddress);
    const networkAddress = await colony.getColonyNetwork();
    return networkAddress.toLowerCase() === COLONY_NETWORK_ADDRESS.toLowerCase()
  } catch (err){
    return false;
  }
} 

export const checkIsToken = async (context: DataHandlerContext<Store, {}>, blockHeight: number, address: string): Promise<boolean> => {
  // No way to check on-chain, so we go to the database
  let token = await context.store.get(Token, { where: { id: address.toLowerCase() }});

  if (token) {
    return true;
  }
  return false;

}