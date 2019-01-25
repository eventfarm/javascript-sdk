/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../interfaces';

export class EmailDesignType {
  constructor(private restClient: RestClientInterface) {}

  // GET: Queries
  GetAllEmailDesignTypes(): any {
    return this.restClient.get(
      'EmailDesignType/UseCase/GetAllEmailDesignTypes',
      {},
    );
  }

  // POST USE CASES: Commands
}
