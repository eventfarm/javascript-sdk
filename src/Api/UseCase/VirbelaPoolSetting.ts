/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class VirbelaPoolSetting {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - poolId
   * @return Promise|Observable|any
   */
  GetVirbelaPoolSettingByPool(poolId: string): any {
    return this.restClient.get(
      'VirbelaPoolSetting/UseCase/GetVirbelaPoolSettingByPool',
      {
        poolId,
      },
    );
  }

  // Commands

  /**
   * @param string - poolId
   * @param string - worldId
   * @param string - worldStringId
   * @param string - displayName
   * @param string - titleMapping
   * @param number - teamId 1-51
   * @return Promise|Observable|any
   */
  CreateVirbelaPoolSetting(
    poolId: string,
    worldId: string,
    worldStringId: string,
    displayName: string,
    titleMapping: string,
    teamId: number,
  ): any {
    return this.restClient.post(
      'VirbelaPoolSetting/UseCase/CreateVirbelaPoolSetting',
      {
        poolId,
        worldId,
        worldStringId,
        displayName,
        titleMapping,
        teamId,
      },
    );
  }

  /**
   * @param string - virbelaPoolSettingId
   * @return Promise|Observable|any
   */
  RemoveVirbelaPoolSetting(virbelaPoolSettingId: string): any {
    return this.restClient.post(
      'VirbelaPoolSetting/UseCase/RemoveVirbelaPoolSetting',
      {
        virbelaPoolSettingId,
      },
    );
  }

  /**
   * @param string - virbelaPoolSettingId
   * @param string - worldId
   * @param string - worldStringId
   * @param string? - displayName
   * @param string? - titleMapping
   * @param number? - teamId 1-51
   * @return Promise|Observable|any
   */
  UpdateVirbelaPoolSetting(
    virbelaPoolSettingId: string,
    worldId: string,
    worldStringId: string,
    displayName: string = null,
    titleMapping: string = null,
    teamId: number = null,
  ): any {
    return this.restClient.post(
      'VirbelaPoolSetting/UseCase/UpdateVirbelaPoolSetting',
      {
        virbelaPoolSettingId,
        worldId,
        worldStringId,
        displayName,
        titleMapping,
        teamId,
      },
    );
  }
}
