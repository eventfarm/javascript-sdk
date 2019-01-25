/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class PoolContract {
  constructor(private restClient: RestClientInterface) {}

  // GET: Queries
  CountPoolContractUsers(poolId: string): any {
    return this.restClient.get('PoolContract/UseCase/CountPoolContractUsers', {
      poolId,
    });
  }

  GetEmailCountsForPoolContract(poolId: string): any {
    return this.restClient.get(
      'PoolContract/UseCase/GetEmailCountsForPoolContract',
      {
        poolId,
      },
    );
  }

  // POST USE CASES: Commands
}
