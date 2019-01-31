/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class FeatureToggle {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - featureName
   * @param string? - userId
   * @return Promise|Observable|any
   */
  GetFeatureGrant(featureName: string, userId: string = null): any {
    return this.restClient.get('FeatureToggle/UseCase/GetFeatureGrant', {
      featureName,
      userId,
    });
  }

  // Commands
}
