/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class EmailDesignType {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @return Promise|Observable|any
   */
  GetAllEmailDesignTypes(): any {
    return this.restClient.get(
      'EmailDesignType/UseCase/GetAllEmailDesignTypes',
      {},
    );
  }

  // Commands
}
