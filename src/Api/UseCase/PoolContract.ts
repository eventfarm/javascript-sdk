/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class PoolContract {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - poolId
   * @return Promise|Observable|any
   */
  CountPoolContractUsers(poolId: string): any {
    return this.restClient.get('PoolContract/UseCase/CountPoolContractUsers', {
      poolId,
    });
  }

  /**
   * @param string - poolId
   * @return Promise|Observable|any
   */
  GetEmailCountsForPoolContract(poolId: string): any {
    return this.restClient.get(
      'PoolContract/UseCase/GetEmailCountsForPoolContract',
      {
        poolId,
      },
    );
  }

  // Commands
}
