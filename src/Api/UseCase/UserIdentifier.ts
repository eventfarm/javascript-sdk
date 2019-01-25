/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../interfaces';

export class UserIdentifier {
  constructor(private restClient: RestClientInterface) {}

  // GET: Queries

  // POST USE CASES: Commands
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
