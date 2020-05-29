/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class User {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - removeUserId
   * @param string - requestUserId
   * @param string - poolId
   * @return Promise|Observable|any
   */
  CheckIfUserCanBeRemovedFromPool(
    removeUserId: string,
    requestUserId: string,
    poolId: string,
  ): any {
    return this.restClient.get('User/UseCase/CheckIfUserCanBeRemovedFromPool', {
      removeUserId,
      requestUserId,
      poolId,
    });
  }

  /**
   * @param string - userId
   * @param string[]? - withData UserName|UserAddress|UserToken|UserIdentifier|isEFAdmin|internalUserName
   * @param any[]? - withUserAttributes internal|info|hover|facebook|linked-in|salesforce|twitter|convio|google|custom|virbela
   * @param string? - poolId
   * @return Promise|Observable|any
   */
  GetUser(
    userId: string,
    withData: string[] = null,
    withUserAttributes: any[] = null,
    poolId: string = null,
  ): any {
    return this.restClient.get('User/UseCase/GetUser', {
      userId,
      withData,
      withUserAttributes,
      poolId,
    });
  }

  /**
   * @param string - email
   * @param string[]? - withData UserName|UserAddress|UserToken|isEFAdmin|internalUserName
   * @param any[]? - withUserAttributes internal|info|hover|facebook|linked-in|salesforce|twitter|convio|google|custom|virbela
   * @param string? - poolId
   * @return Promise|Observable|any
   */
  GetUserByEmail(
    email: string,
    withData: string[] = null,
    withUserAttributes: any[] = null,
    poolId: string = null,
  ): any {
    return this.restClient.get('User/UseCase/GetUserByEmail', {
      email,
      withData,
      withUserAttributes,
      poolId,
    });
  }

  /**
   * @param string - poolId
   * @param string - userId
   * @param string[]? - withData UserName|UserAddress|UserToken|UserIdentifier|isEFAdmin|internalUserName
   * @param any[]? - withUserAttributes internal|info|hover|facebook|linked-in|salesforce|twitter|convio|google|custom|virbela
   * @return Promise|Observable|any
   */
  GetUserInPool(
    poolId: string,
    userId: string,
    withData: string[] = null,
    withUserAttributes: any[] = null,
  ): any {
    return this.restClient.get('User/UseCase/GetUserInPool', {
      poolId,
      userId,
      withData,
      withUserAttributes,
    });
  }

  /**
   * @param string - userId
   * @param string - eventId
   * @return Promise|Observable|any
   */
  GetUserRolesForEvent(userId: string, eventId: string): any {
    return this.restClient.get('User/UseCase/GetUserRolesForEvent', {
      userId,
      eventId,
    });
  }

  /**
   * @param string - userId
   * @param string - ticketBlockId
   * @return Promise|Observable|any
   */
  GetUserRolesForTicketBlock(userId: string, ticketBlockId: string): any {
    return this.restClient.get('User/UseCase/GetUserRolesForTicketBlock', {
      userId,
      ticketBlockId,
    });
  }

  /**
   * @param any[] - poolIds
   * @param string[]? - withData UserIdentifiers|UserNames|UserAttributes
   * @param string? - query
   * @param string? - sortBy name
   * @param string? - sortDirection ascending|descending
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-100
   * @return Promise|Observable|any
   */
  ListUsersForPools(
    poolIds: any[],
    withData: string[] = null,
    query: string = null,
    sortBy: string = null,
    sortDirection: string = null,
    page: number = null,
    itemsPerPage: number = null,
  ): any {
    return this.restClient.get('User/UseCase/ListUsersForPools', {
      poolIds,
      withData,
      query,
      sortBy,
      sortDirection,
      page,
      itemsPerPage,
    });
  }

  /**
   * @param string - ticketBlockId
   * @param string[]? - withData UserIdentifiers|UserNames|UserAttributes
   * @param string? - query
   * @param string? - sortBy name
   * @param string? - sortDirection ascending|descending
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-100
   * @return Promise|Observable|any
   */
  ListUsersForTicketBlock(
    ticketBlockId: string,
    withData: string[] = null,
    query: string = null,
    sortBy: string = null,
    sortDirection: string = null,
    page: number = null,
    itemsPerPage: number = null,
  ): any {
    return this.restClient.get('User/UseCase/ListUsersForTicketBlock', {
      ticketBlockId,
      withData,
      query,
      sortBy,
      sortDirection,
      page,
      itemsPerPage,
    });
  }

  /**
   * @param string - groupId
   * @param string - poolId
   * @param string[]? - withData UserIdentifiers|UserNames|UserAttributes
   * @param string? - query
   * @param string? - sortBy name
   * @param string? - sortDirection ascending|descending
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-100
   * @return Promise|Observable|any
   */
  ListUsersInGroup(
    groupId: string,
    poolId: string,
    withData: string[] = null,
    query: string = null,
    sortBy: string = null,
    sortDirection: string = null,
    page: number = null,
    itemsPerPage: number = null,
  ): any {
    return this.restClient.get('User/UseCase/ListUsersInGroup', {
      groupId,
      poolId,
      withData,
      query,
      sortBy,
      sortDirection,
      page,
      itemsPerPage,
    });
  }

  /**
   * @param string - eventId
   * @param string[]? - withData eventRoles|PoolContacts|UserIdentifiers|UserNames|UserAttributes
   * @param string? - query
   * @param string? - sortBy name
   * @param string? - sortDirection ascending|descending
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-100
   * @return Promise|Observable|any
   */
  ListUsersWithRolesForEvent(
    eventId: string,
    withData: string[] = null,
    query: string = null,
    sortBy: string = null,
    sortDirection: string = null,
    page: number = null,
    itemsPerPage: number = null,
  ): any {
    return this.restClient.get('User/UseCase/ListUsersWithRolesForEvent', {
      eventId,
      withData,
      query,
      sortBy,
      sortDirection,
      page,
      itemsPerPage,
    });
  }

  // Commands

  /**
   * @param string - userId
   * @param string - token
   * @return Promise|Observable|any
   */
  AccessUserForgotPasswordToken(userId: string, token: string): any {
    return this.restClient.post('User/UseCase/AccessUserForgotPasswordToken', {
      userId,
      token,
    });
  }

  /**
   * @param string - userId
   * @param string - groupId
   * @return Promise|Observable|any
   */
  AddUserAccessToGroup(userId: string, groupId: string): any {
    return this.restClient.post('User/UseCase/AddUserAccessToGroup', {
      userId,
      groupId,
    });
  }

  /**
   * @param string? - email
   * @param string? - firstName
   * @param string? - lastName
   * @param string? - company
   * @param string? - position
   * @param string? - phone
   * @param string? - poolId
   * @param string? - title
   * @param string? - other
   * @return Promise|Observable|any
   */
  CreateAuthUser(
    email: string = null,
    firstName: string = null,
    lastName: string = null,
    company: string = null,
    position: string = null,
    phone: string = null,
    poolId: string = null,
    title: string = null,
    other: string = null,
  ): any {
    return this.restClient.post('User/UseCase/CreateAuthUser', {
      email,
      firstName,
      lastName,
      company,
      position,
      phone,
      poolId,
      title,
      other,
    });
  }

  /**
   * @param string? - email
   * @param string? - firstName
   * @param string? - lastName
   * @param string? - company
   * @param string? - position
   * @param string? - phone
   * @param string? - title
   * @param string? - other
   * @param string? - userId
   * @param string? - poolId
   * @return Promise|Observable|any
   */
  CreateCIOAccount(
    email: string = null,
    firstName: string = null,
    lastName: string = null,
    company: string = null,
    position: string = null,
    phone: string = null,
    title: string = null,
    other: string = null,
    userId: string = null,
    poolId: string = null,
  ): any {
    return this.restClient.post('User/UseCase/CreateCIOAccount', {
      email,
      firstName,
      lastName,
      company,
      position,
      phone,
      title,
      other,
      userId,
      poolId,
    });
  }

  /**
   * @param string - userId
   * @return Promise|Observable|any
   */
  CreateForgotPasswordToken(userId: string): any {
    return this.restClient.post('User/UseCase/CreateForgotPasswordToken', {
      userId,
    });
  }

  /**
   * @param string? - email
   * @param string? - firstName
   * @param string? - lastName
   * @param string? - company
   * @param string? - position
   * @param string? - phone
   * @param string? - poolId
   * @param string? - title
   * @param string? - other
   * @return Promise|Observable|any
   */
  CreateUser(
    email: string = null,
    firstName: string = null,
    lastName: string = null,
    company: string = null,
    position: string = null,
    phone: string = null,
    poolId: string = null,
    title: string = null,
    other: string = null,
  ): any {
    return this.restClient.post('User/UseCase/CreateUser', {
      email,
      firstName,
      lastName,
      company,
      position,
      phone,
      poolId,
      title,
      other,
    });
  }

  /**
   * @param string - userId
   * @param string - poolId
   * @param string - email
   * @param string? - userContactAgentId
   * @return Promise|Observable|any
   */
  CreateUserContactAgent(
    userId: string,
    poolId: string,
    email: string,
    userContactAgentId: string = null,
  ): any {
    return this.restClient.post('User/UseCase/CreateUserContactAgent', {
      userId,
      poolId,
      email,
      userContactAgentId,
    });
  }

  /**
   * @param string - userId
   * @param string - eventId
   * @return Promise|Observable|any
   */
  RemoveEventRoleForUser(userId: string, eventId: string): any {
    return this.restClient.post('User/UseCase/RemoveEventRoleForUser', {
      userId,
      eventId,
    });
  }

  /**
   * @param string - userId
   * @param string - groupId
   * @return Promise|Observable|any
   */
  RemoveUserAccessToGroup(userId: string, groupId: string): any {
    return this.restClient.post('User/UseCase/RemoveUserAccessToGroup', {
      userId,
      groupId,
    });
  }

  /**
   * @param string - userContactAgentId
   * @return Promise|Observable|any
   */
  RemoveUserContactAgent(userContactAgentId: string): any {
    return this.restClient.post('User/UseCase/RemoveUserContactAgent', {
      userContactAgentId,
    });
  }

  /**
   * @param any[] - removeUserIds
   * @param string - requestUserId
   * @param string - poolId
   * @return Promise|Observable|any
   */
  RemoveUsersFromPool(
    removeUserIds: any[],
    requestUserId: string,
    poolId: string,
  ): any {
    return this.restClient.post('User/UseCase/RemoveUsersFromPool', {
      removeUserIds,
      requestUserId,
      poolId,
    });
  }

  /**
   * @param string - email
   * @param string? - appName
   * @return Promise|Observable|any
   */
  SendForgotPasswordEmail(email: string, appName: string = null): any {
    return this.restClient.post('User/UseCase/SendForgotPasswordEmail', {
      email,
      appName,
    });
  }

  /**
   * @param string - email
   * @param string? - appName
   * @return Promise|Observable|any
   */
  SendVerificationEmail(email: string, appName: string = null): any {
    return this.restClient.post('User/UseCase/SendVerificationEmail', {
      email,
      appName,
    });
  }

  /**
   * @param string - invitationId
   * @param string - authUserId
   * @param string - changeUserId
   * @param string - email
   * @return Promise|Observable|any
   */
  SetEmailForInvitation(
    invitationId: string,
    authUserId: string,
    changeUserId: string,
    email: string,
  ): any {
    return this.restClient.post('User/UseCase/SetEmailForInvitation', {
      invitationId,
      authUserId,
      changeUserId,
      email,
    });
  }

  /**
   * @param string - userId
   * @param string - eventId
   * @param string - eventRole organizer|assistant|support|check-in-staff|read-only
   * @param string - authenticatedUserId
   * @return Promise|Observable|any
   */
  SetEventRoleForUser(
    userId: string,
    eventId: string,
    eventRole: string,
    authenticatedUserId: string,
  ): any {
    return this.restClient.post('User/UseCase/SetEventRoleForUser', {
      userId,
      eventId,
      eventRole,
      authenticatedUserId,
    });
  }

  /**
   * @param string - userContactAgentId
   * @param string - email
   * @return Promise|Observable|any
   */
  UpdateUserContactAgent(userContactAgentId: string, email: string): any {
    return this.restClient.post('User/UseCase/UpdateUserContactAgent', {
      userContactAgentId,
      email,
    });
  }
}
