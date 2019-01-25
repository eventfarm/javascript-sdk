/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../interfaces';

export class FeatureToggle {
  constructor(private restClient: RestClientInterface) {}

  // GET: Queries
  GetFeatureGrant(featureName: string, userId: string = null): any {
    return this.restClient.get('FeatureToggle/UseCase/GetFeatureGrant', {
      featureName,
      userId,
    });
  }

  // POST USE CASES: Commands
}
