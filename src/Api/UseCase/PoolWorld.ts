/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class PoolWorld {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  GetPoolWorldByEvent(eventId: string): any {
    return this.restClient.get('PoolWorld/UseCase/GetPoolWorldByEvent', {
      eventId,
    });
  }

  /**
   * @param string - poolId
   * @return Promise|Observable|any
   */
  ListPoolWorldsForPool(poolId: string): any {
    return this.restClient.get('PoolWorld/UseCase/ListPoolWorldsForPool', {
      poolId,
    });
  }

  // Commands

  /**
   * @param string - poolId
   * @param string - virbelaWorldId
   * @return Promise|Observable|any
   */
  CreatePoolWorld(poolId: string, virbelaWorldId: string): any {
    return this.restClient.post('PoolWorld/UseCase/CreatePoolWorld', {
      poolId,
      virbelaWorldId,
    });
  }

  /**
   * @param string - poolWorldId
   * @return Promise|Observable|any
   */
  RemovePoolWorld(poolWorldId: string): any {
    return this.restClient.post('PoolWorld/UseCase/RemovePoolWorld', {
      poolWorldId,
    });
  }

  /**
   * @param string - poolWorldId
   * @param string - titleMapping
   * @param number - teamId 0-51
   * @return Promise|Observable|any
   */
  UpdatePoolWorld(
    poolWorldId: string,
    titleMapping: string,
    teamId: number,
  ): any {
    return this.restClient.post('PoolWorld/UseCase/UpdatePoolWorld', {
      poolWorldId,
      titleMapping,
      teamId,
    });
  }
}
