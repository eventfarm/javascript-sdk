/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class PoolAllotment {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  // Commands

  /**
   * @param string - poolId
   * @param string - poolAllotmentType listly|cio|eventfarm
   * @param number - amount
   * @param string? - poolAllotmentId
   * @return Promise|Observable|any
   */
  CreatePoolAllotment(
    poolId: string,
    poolAllotmentType: string,
    amount: number,
    poolAllotmentId: string = null,
  ): any {
    return this.restClient.post('PoolAllotment/UseCase/CreatePoolAllotment', {
      poolId,
      poolAllotmentType,
      amount,
      poolAllotmentId,
    });
  }

  /**
   * @param string - poolAllotmentId
   * @param number - amount
   * @return Promise|Observable|any
   */
  SetPoolAllotmentAmount(poolAllotmentId: string, amount: number): any {
    return this.restClient.post(
      'PoolAllotment/UseCase/SetPoolAllotmentAmount',
      {
        poolAllotmentId,
        amount,
      },
    );
  }
}
