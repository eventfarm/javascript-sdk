/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class Feature {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @return Promise|Observable|any
   */
  ListFeatures(): any {
    return this.restClient.get('Feature/UseCase/ListFeatures', {});
  }

  // Commands
}
