/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class Virbela {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - invitationId
   * @param string - password
   * @return Promise|Observable|any
   */
  CreateUserForVirbela(invitationId: string, password: string): any {
    return this.restClient.get('Virbela/UseCase/CreateUserForVirbela', {
      invitationId,
      password,
    });
  }

  /**
   * @param string - invitationId
   * @return Promise|Observable|any
   */
  GetUserStatusForVirbela(invitationId: string): any {
    return this.restClient.get('Virbela/UseCase/GetUserStatusForVirbela', {
      invitationId,
    });
  }

  /**
   * @param string - poolId
   * @param string? - worldName
   * @param string? - worldId
   * @return Promise|Observable|any
   */
  ListVirbelaWorldsForEventFarm(
    poolId: string,
    worldName: string = null,
    worldId: string = null,
  ): any {
    return this.restClient.get(
      'Virbela/UseCase/ListVirbelaWorldsForEventFarm',
      {
        poolId,
        worldName,
        worldId,
      },
    );
  }

  // Commands
}
