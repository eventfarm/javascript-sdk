/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class Airship {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - settingId
   * @return Promise|Observable|any
   */
  GetAirshipEventSetting(settingId: string): any {
    return this.restClient.get('Airship/UseCase/GetAirshipEventSetting', {
      settingId,
    });
  }

  // Commands

  /**
   * @param string - eventId
   * @param string - airshipAdaptiveLink
   * @param string? - settingId
   * @return Promise|Observable|any
   */
  CreateAirshipEventSetting(
    eventId: string,
    airshipAdaptiveLink: string,
    settingId: string = null,
  ): any {
    return this.restClient.post('Airship/UseCase/CreateAirshipEventSetting', {
      eventId,
      airshipAdaptiveLink,
      settingId,
    });
  }

  /**
   * @param string - settingId
   * @return Promise|Observable|any
   */
  DeleteAirshipEventSetting(settingId: string): any {
    return this.restClient.post('Airship/UseCase/DeleteAirshipEventSetting', {
      settingId,
    });
  }

  /**
   * @param string - settingId
   * @param string? - airshipAdaptiveLink
   * @return Promise|Observable|any
   */
  UpdateAirshipEventSetting(
    settingId: string,
    airshipAdaptiveLink: string = null,
  ): any {
    return this.restClient.post('Airship/UseCase/UpdateAirshipEventSetting', {
      settingId,
      airshipAdaptiveLink,
    });
  }
}
