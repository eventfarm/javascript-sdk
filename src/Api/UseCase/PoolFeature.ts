/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class PoolFeature {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - poolId
   * @return Promise|Observable|any
   */
  ListFeaturesForPool(poolId: string): any {
    return this.restClient.get('PoolFeature/UseCase/ListFeaturesForPool', {
      poolId,
    });
  }

  // Commands

  /**
   * @param string - poolId
   * @param string - featureId
   * @param boolean? - enabled true|false
   * @return Promise|Observable|any
   */
  AddFeatureForPool(
    poolId: string,
    featureId: string,
    enabled: boolean = null,
  ): any {
    return this.restClient.post('PoolFeature/UseCase/AddFeatureForPool', {
      poolId,
      featureId,
      enabled,
    });
  }

  /**
   * @param string - poolId
   * @param string - featureId
   * @return Promise|Observable|any
   */
  DisableFeatureForPool(poolId: string, featureId: string): any {
    return this.restClient.post('PoolFeature/UseCase/DisableFeatureForPool', {
      poolId,
      featureId,
    });
  }

  /**
   * @param string - poolId
   * @param string - featureId
   * @return Promise|Observable|any
   */
  EnableFeatureForPool(poolId: string, featureId: string): any {
    return this.restClient.post('PoolFeature/UseCase/EnableFeatureForPool', {
      poolId,
      featureId,
    });
  }

  /**
   * @param string - poolId
   * @param string - featureId
   * @return Promise|Observable|any
   */
  RemoveFeatureForPool(poolId: string, featureId: string): any {
    return this.restClient.post('PoolFeature/UseCase/RemoveFeatureForPool', {
      poolId,
      featureId,
    });
  }
}
