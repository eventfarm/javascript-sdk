/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class UserAddress {
  constructor(private restClient: RestClientInterface) {}

  // GET: Queries
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

  // POST USE CASES: Commands
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

  RemoveUserAddress(userAddressId: string): any {
    return this.restClient.post('UserAddress/UseCase/RemoveUserAddress', {
      userAddressId,
    });
  }

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
