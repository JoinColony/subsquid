import { Log as BaseLog } from '@subsquid/evm-processor'

export interface Log extends BaseLog {
  transactionHash: string;
  logIndex: number;
}
