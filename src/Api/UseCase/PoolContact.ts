/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../interfaces';

export class PoolContact {
  constructor(private restClient: RestClientInterface) {}

  // GET: Queries
  ListPoolContactsForUser(
    userId: string,
    poolId: string = null,
    poolContactType: string = null,
  ): any {
    return this.restClient.get('PoolContact/UseCase/ListPoolContactsForUser', {
      userId,
      poolId,
      poolContactType,
    });
  }

  // POST USE CASES: Commands
}
