/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../interfaces';

export class Feature {
  constructor(private restClient: RestClientInterface) {}

  // GET: Queries
  ListFeatures(): any {
    return this.restClient.get('Feature/UseCase/ListFeatures', {});
  }

  // POST USE CASES: Commands
}
