/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../interfaces';

export class PoolFeature {
  constructor(private restClient: RestClientInterface) {}

  // GET: Queries
  ListFeaturesForPool(poolId: string): any {
    return this.restClient.get('PoolFeature/UseCase/ListFeaturesForPool', {
      poolId,
    });
  }

  // POST USE CASES: Commands
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

  DisableFeatureForPool(poolId: string, featureId: string): any {
    return this.restClient.post('PoolFeature/UseCase/DisableFeatureForPool', {
      poolId,
      featureId,
    });
  }

  EnableFeatureForPool(poolId: string, featureId: string): any {
    return this.restClient.post('PoolFeature/UseCase/EnableFeatureForPool', {
      poolId,
      featureId,
    });
  }

  RemoveFeatureForPool(poolId: string, featureId: string): any {
    return this.restClient.post('PoolFeature/UseCase/RemoveFeatureForPool', {
      poolId,
      featureId,
    });
  }
}
