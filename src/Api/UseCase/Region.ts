/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class Region {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - query
   * @param int? - page
   * @param int? - itemsPerPage 1-200
   * @return Promise|Observable|any
   */
  ListTimezonesForRegion(
    query: string,
    page: number = null,
    itemsPerPage: number = null,
  ): any {
    return this.restClient.get('Region/UseCase/ListTimezonesForRegion', {
      query,
      page,
      itemsPerPage,
    });
  }

  // Commands
}
