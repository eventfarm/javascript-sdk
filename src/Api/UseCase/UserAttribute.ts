/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class UserAttribute {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - poolId
   * @param string - userId
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-100
   * @return Promise|Observable|any
   */
  ListCustomAttributesForUser(
    poolId: string,
    userId: string,
    page: number = null,
    itemsPerPage: number = null,
  ): any {
    return this.restClient.get(
      'UserAttribute/UseCase/ListCustomAttributesForUser',
      {
        poolId,
        userId,
        page,
        itemsPerPage,
      },
    );
  }

  /**
   * @param string - poolId
   * @param string - userId
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-100
   * @return Promise|Observable|any
   */
  ListInfoAttributesForUser(
    poolId: string,
    userId: string,
    page: number = null,
    itemsPerPage: number = null,
  ): any {
    return this.restClient.get(
      'UserAttribute/UseCase/ListInfoAttributesForUser',
      {
        poolId,
        userId,
        page,
        itemsPerPage,
      },
    );
  }

  // Commands

  /**
   * @param string - userAttributeId
   * @return Promise|Observable|any
   */
  RemoveUserAttribute(userAttributeId: string): any {
    return this.restClient.post('UserAttribute/UseCase/RemoveUserAttribute', {
      userAttributeId,
    });
  }

  /**
   * @param string - poolId
   * @param string - userId
   * @param string - attributeKey
   * @param string - attributeValue
   * @return Promise|Observable|any
   */
  SetCustomUserAttribute(
    poolId: string,
    userId: string,
    attributeKey: string,
    attributeValue: string,
  ): any {
    return this.restClient.post(
      'UserAttribute/UseCase/SetCustomUserAttribute',
      {
        poolId,
        userId,
        attributeKey,
        attributeValue,
      },
    );
  }

  /**
   * @param string - poolId
   * @param string - userId
   * @param string - attributeKey company|position|title|telephone|user-email-unsubscribe|newCustomField
   * @param string - attributeValue
   * @return Promise|Observable|any
   */
  SetInfoUserAttribute(
    poolId: string,
    userId: string,
    attributeKey: string,
    attributeValue: string,
  ): any {
    return this.restClient.post('UserAttribute/UseCase/SetInfoUserAttribute', {
      poolId,
      userId,
      attributeKey,
      attributeValue,
    });
  }
}
