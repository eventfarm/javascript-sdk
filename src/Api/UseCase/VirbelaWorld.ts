/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class VirbelaWorld {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @return Promise|Observable|any
   */
  ListVirbelaWorlds(): any {
    return this.restClient.get('VirbelaWorld/UseCase/ListVirbelaWorlds', {});
  }

  // Commands

  /**
   * @return Promise|Observable|any
   */
  PopulateVirbelaWorldsFromVirbela(): any {
    return this.restClient.post(
      'VirbelaWorld/UseCase/PopulateVirbelaWorldsFromVirbela',
      {},
    );
  }
}
