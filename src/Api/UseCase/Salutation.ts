/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class Salutation {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param array? - locales english|german|french|hebrew|polish|portuguese|spanish|spanish-south-america|thai|italian|chinese-traditional|chinese-mandarin|japanese|korean
   * @return Promise|Observable|any
   */
  GetAllSalutations(locales: any = null): any {
    return this.restClient.get('Salutation/UseCase/GetAllSalutations', {
      locales,
    });
  }

  // Commands
}
