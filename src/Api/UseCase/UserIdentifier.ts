/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class UserIdentifier {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  // Commands

  /**
   * @param string - userIdentifierId
   * @param string - identifier
   * @param string? - poolId
   * @return Promise|Observable|any
   */
  SetUserIdentifier(
    userIdentifierId: string,
    identifier: string,
    poolId: string = null,
  ): any {
    return this.restClient.post('UserIdentifier/UseCase/SetUserIdentifier', {
      userIdentifierId,
      identifier,
      poolId,
    });
  }
}
