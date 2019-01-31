/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class UserName {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - poolId
   * @param string - userId
   * @param int? - page >= 1
   * @param int? - itemsPerPage 1-100
   * @return Promise|Observable|any
   */
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

  // Commands

  /**
   * @param string - poolId
   * @param string - userId
   * @param string? - firstName
   * @param string? - lastName
   * @param string? - userNameId
   * @return Promise|Observable|any
   */
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

  /**
   * @param string - userNameId
   * @return Promise|Observable|any
   */
  RemoveUserName(userNameId: string): any {
    return this.restClient.post('UserName/UseCase/RemoveUserName', {
      userNameId,
    });
  }

  /**
   * @param string - userNameId
   * @param string? - firstName
   * @param string? - lastName
   * @return Promise|Observable|any
   */
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
