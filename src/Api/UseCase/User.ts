/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class User {
  constructor(private restClient: RestClientInterface) {}

  // GET: Queries
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

  GetUser(
    userId: string,
    withData: any = null,
    withUserAttributes: any = null,
    poolId: string = null,
  ): any {
    return this.restClient.get('User/UseCase/GetUser', {
      userId,
      withData,
      withUserAttributes,
      poolId,
    });
  }

  GetUserByEmail(
    email: string,
    withData: any = null,
    withUserAttributes: any = null,
    poolId: string = null,
  ): any {
    return this.restClient.get('User/UseCase/GetUserByEmail', {
      email,
      withData,
      withUserAttributes,
      poolId,
    });
  }

  GetUserInPool(
    poolId: string,
    userId: string,
    withData: any = null,
    withUserAttributes: any = null,
  ): any {
    return this.restClient.get('User/UseCase/GetUserInPool', {
      poolId,
      userId,
      withData,
      withUserAttributes,
    });
  }

  GetUserRolesForEvent(userId: string, eventId: string): any {
    return this.restClient.get('User/UseCase/GetUserRolesForEvent', {
      userId,
      eventId,
    });
  }

  GetUserRolesForTicketBlock(userId: string, ticketBlockId: string): any {
    return this.restClient.get('User/UseCase/GetUserRolesForTicketBlock', {
      userId,
      ticketBlockId,
    });
  }

  ListUsersForPools(
    poolIds: any,
    withData: any = null,
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

  ListUsersForTicketBlock(
    ticketBlockId: string,
    withData: any = null,
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

  ListUsersInGroup(
    groupId: string,
    poolId: string,
    withData: any = null,
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

  ListUsersWithRolesForEvent(
    eventId: string,
    withData: any = null,
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

  // POST USE CASES: Commands
  AccessUserForgotPasswordToken(userId: string, token: string): any {
    return this.restClient.post('User/UseCase/AccessUserForgotPasswordToken', {
      userId,
      token,
    });
  }

  AddUserAccessToGroup(userId: string, groupId: string): any {
    return this.restClient.post('User/UseCase/AddUserAccessToGroup', {
      userId,
      groupId,
    });
  }

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

  CreateForgotPasswordToken(userId: string): any {
    return this.restClient.post('User/UseCase/CreateForgotPasswordToken', {
      userId,
    });
  }

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

  RemoveEventRoleForUser(userId: string, eventId: string): any {
    return this.restClient.post('User/UseCase/RemoveEventRoleForUser', {
      userId,
      eventId,
    });
  }

  RemoveUserAccessToGroup(userId: string, groupId: string): any {
    return this.restClient.post('User/UseCase/RemoveUserAccessToGroup', {
      userId,
      groupId,
    });
  }

  RemoveUserContactAgent(userContactAgentId: string): any {
    return this.restClient.post('User/UseCase/RemoveUserContactAgent', {
      userContactAgentId,
    });
  }

  RemoveUsersFromPool(
    removeUserIds: any,
    requestUserId: string,
    poolId: string,
  ): any {
    return this.restClient.post('User/UseCase/RemoveUsersFromPool', {
      removeUserIds,
      requestUserId,
      poolId,
    });
  }

  SendForgotPasswordEmail(email: string, appName: string = null): any {
    return this.restClient.post('User/UseCase/SendForgotPasswordEmail', {
      email,
      appName,
    });
  }

  SendVerificationEmail(email: string, appName: string = null): any {
    return this.restClient.post('User/UseCase/SendVerificationEmail', {
      email,
      appName,
    });
  }

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

  UpdateUserContactAgent(userContactAgentId: string, email: string): any {
    return this.restClient.post('User/UseCase/UpdateUserContactAgent', {
      userContactAgentId,
      email,
    });
  }
}
