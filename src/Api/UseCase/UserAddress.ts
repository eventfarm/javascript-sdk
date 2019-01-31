/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class UserAddress {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - poolId
   * @param string - userId
   * @param int? - page >= 1
   * @param int? - itemsPerPage 1-100
   * @return Promise|Observable|any
   */
  ListAddressesForUser(
    poolId: string,
    userId: string,
    page: number = null,
    itemsPerPage: number = null,
  ): any {
    return this.restClient.get('UserAddress/UseCase/ListAddressesForUser', {
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
   * @param string? - address1
   * @param string? - city
   * @param string? - state
   * @param string? - postalCode
   * @param string? - country
   * @param string? - address2
   * @param string? - userAddressId
   * @return Promise|Observable|any
   */
  AddUserAddress(
    poolId: string,
    userId: string,
    address1: string = null,
    city: string = null,
    state: string = null,
    postalCode: string = null,
    country: string = null,
    address2: string = null,
    userAddressId: string = null,
  ): any {
    return this.restClient.post('UserAddress/UseCase/AddUserAddress', {
      poolId,
      userId,
      address1,
      city,
      state,
      postalCode,
      country,
      address2,
      userAddressId,
    });
  }

  /**
   * @param string - userAddressId
   * @return Promise|Observable|any
   */
  RemoveUserAddress(userAddressId: string): any {
    return this.restClient.post('UserAddress/UseCase/RemoveUserAddress', {
      userAddressId,
    });
  }

  /**
   * @param string - userAddressId
   * @param string? - address1
   * @param string? - city
   * @param string? - state
   * @param string? - postalCode
   * @param string? - country
   * @param string? - address2
   * @return Promise|Observable|any
   */
  SetUserAddress(
    userAddressId: string,
    address1: string = null,
    city: string = null,
    state: string = null,
    postalCode: string = null,
    country: string = null,
    address2: string = null,
  ): any {
    return this.restClient.post('UserAddress/UseCase/SetUserAddress', {
      userAddressId,
      address1,
      city,
      state,
      postalCode,
      country,
      address2,
    });
  }
}
