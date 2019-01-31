/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class AppVersion {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - appVersionId
   * @return Promise|Observable|any
   */
  GetAppVersion(appVersionId: string): any {
    return this.restClient.get('AppVersion/UseCase/GetAppVersion', {
      appVersionId,
    });
  }

  /**
   * @param string - appVersionType check-in-ios|check-in-android|ticket-block-mgmt-ios|ticket-block-mgmt-android
   * @return Promise|Observable|any
   */
  GetAppVersionByType(appVersionType: string): any {
    return this.restClient.get('AppVersion/UseCase/GetAppVersionByType', {
      appVersionType,
    });
  }

  /**
   * @return Promise|Observable|any
   */
  GetSystemStatus(): any {
    return this.restClient.get('AppVersion/UseCase/GetSystemStatus', {});
  }

  /**
   * @return Promise|Observable|any
   */
  ListAppVersions(): any {
    return this.restClient.get('AppVersion/UseCase/ListAppVersions', {});
  }

  // Commands

  /**
   * @param string - appVersionType check-in-ios|check-in-android|ticket-block-mgmt-ios|ticket-block-mgmt-android
   * @param string - softVersion
   * @param string - hardVersion
   * @return Promise|Observable|any
   */
  SetAppVersionNumberByType(
    appVersionType: string,
    softVersion: string,
    hardVersion: string,
  ): any {
    return this.restClient.post(
      'AppVersion/UseCase/SetAppVersionNumberByType',
      {
        appVersionType,
        softVersion,
        hardVersion,
      },
    );
  }
}
