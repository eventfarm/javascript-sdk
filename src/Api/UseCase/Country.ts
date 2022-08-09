/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class Country {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - countryId
   * @return Promise|Observable|any
   */
  GetCountry(countryId: string): any {
    return this.restClient.get('Country/UseCase/GetCountry', {
      countryId,
    });
  }

  /**
   * @param string? - name
   * @param string? - sortBy name
   * @param string? - sortDirection ascending|descending
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-100
   * @return Promise|Observable|any
   */
  ListCountries(
    name: string = null,
    sortBy: string = null,
    sortDirection: string = null,
    page: number = null,
    itemsPerPage: number = null,
  ): any {
    return this.restClient.get('Country/UseCase/ListCountries', {
      name,
      sortBy,
      sortDirection,
      page,
      itemsPerPage,
    });
  }

  // Commands
}
