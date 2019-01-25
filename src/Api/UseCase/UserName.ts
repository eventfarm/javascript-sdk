/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../interfaces';

export class UserName {
  constructor(private restClient: RestClientInterface) {}

  // GET: Queries
  ListNamesForUser(
    poolId: string,
    userId: string,
    page: number = null,
    itemsPerPage: number = null,
  ): any {
    return this.restClient.get('UserName/UseCase/ListNamesForUser', {
      poolId,
      userId,
      page,
      itemsPerPage,
    });
  }

  // POST USE CASES: Commands
  AddUserName(
    poolId: string,
    userId: string,
    firstName: string = null,
    lastName: string = null,
    userNameId: string = null,
  ): any {
    return this.restClient.post('UserName/UseCase/AddUserName', {
      poolId,
      userId,
      firstName,
      lastName,
      userNameId,
    });
  }

  RemoveUserName(userNameId: string): any {
    return this.restClient.post('UserName/UseCase/RemoveUserName', {
      userNameId,
    });
  }

  SetUserName(
    userNameId: string,
    firstName: string = null,
    lastName: string = null,
  ): any {
    return this.restClient.post('UserName/UseCase/SetUserName', {
      userNameId,
      firstName,
      lastName,
    });
  }
}
