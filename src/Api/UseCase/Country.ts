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

  // Commands
}
