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
   * @param string? - worldName
   * @param string? - worldId
   * @return Promise|Observable|any
   */
  ListVirbelaWorldsForEventFarm(
    worldName: string = null,
    worldId: string = null,
  ): any {
    return this.restClient.get(
      'Virbela/UseCase/ListVirbelaWorldsForEventFarm',
      {
        worldName,
        worldId,
      },
    );
  }

  // Commands

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  SuspendAllUsersForVirbela(eventId: string): any {
    return this.restClient.post('Virbela/UseCase/SuspendAllUsersForVirbela', {
      eventId,
    });
  }

  /**
   * @param string - invitationId
   * @return Promise|Observable|any
   */
  SuspendUserForVirbela(invitationId: string): any {
    return this.restClient.post('Virbela/UseCase/SuspendUserForVirbela', {
      invitationId,
    });
  }

  /**
   * @param string - invitationId
   * @param string - role admin|member|moderator
   * @return Promise|Observable|any
   */
  UpdateUserRoleForVirbela(invitationId: string, role: string): any {
    return this.restClient.post('Virbela/UseCase/UpdateUserRoleForVirbela', {
      invitationId,
      role,
    });
  }

  /**
   * @param string - invitationId
   * @param string - teamId 0-51
   * @return Promise|Observable|any
   */
  UpdateUserTeamIdForVirbela(invitationId: string, teamId: string): any {
    return this.restClient.post('Virbela/UseCase/UpdateUserTeamIdForVirbela', {
      invitationId,
      teamId,
    });
  }

  /**
   * @param string - invitationId
   * @param string - title
   * @return Promise|Observable|any
   */
  UpdateUserTitleForVirbela(invitationId: string, title: string): any {
    return this.restClient.post('Virbela/UseCase/UpdateUserTitleForVirbela', {
      invitationId,
      title,
    });
  }
}
