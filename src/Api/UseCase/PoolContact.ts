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

  /**
   * @param string - poolId
   * @param string - email
   * @param string - poolContactType full|create
   * @return Promise|Observable|any
   */
  CreatePoolContact(
    poolId: string,
    email: string,
    poolContactType: string,
  ): any {
    return this.restClient.post('PoolContact/UseCase/CreatePoolContact', {
      poolId,
      email,
      poolContactType,
    });
  }

  /**
   * @param string - poolId
   * @param string - poolContactId
   * @param string - userId
   * @return Promise|Observable|any
   */
  RemovePoolContact(
    poolId: string,
    poolContactId: string,
    userId: string,
  ): any {
    return this.restClient.post('PoolContact/UseCase/RemovePoolContact', {
      poolId,
      poolContactId,
      userId,
    });
  }

  /**
   * @param string - poolContactId
   * @param string - poolContactType full|create
   * @return Promise|Observable|any
   */
  UpdateTypeForPoolContact(
    poolContactId: string,
    poolContactType: string,
  ): any {
    return this.restClient.post(
      'PoolContact/UseCase/UpdateTypeForPoolContact',
      {
        poolContactId,
        poolContactType,
      },
    );
  }
}
