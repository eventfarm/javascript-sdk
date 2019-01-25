/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../interfaces';

export class Salutation {
  constructor(private restClient: RestClientInterface) {}

  // GET: Queries
  GetAllSalutations(locales: any = null): any {
    return this.restClient.get('Salutation/UseCase/GetAllSalutations', {
      locales,
    });
  }

  // POST USE CASES: Commands
}
