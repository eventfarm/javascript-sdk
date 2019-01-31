/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class PoolContact {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - userId
   * @param string? - poolId
   * @param string? - poolContactType full|create
   * @return Promise|Observable|any
   */
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

  // Commands
}
