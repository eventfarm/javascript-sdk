/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class Group {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - groupId
   * @param string[]? - withData totalUsersInGroup|creatorUser
   * @return Promise|Observable|any
   */
  GetGroup(groupId: string, withData: string[] = null): any {
    return this.restClient.get('Group/UseCase/GetGroup', {
      groupId,
      withData,
    });
  }

  /**
   * @param string - poolId
   * @param string - userId
   * @param string? - groupOwnerUserId
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-500
   * @param string? - sortBy
   * @param string? - sortDirection ascending|descending
   * @return Promise|Observable|any
   */
  ListGroupMembershipForUser(
    poolId: string,
    userId: string,
    groupOwnerUserId: string = null,
    page: number = null,
    itemsPerPage: number = null,
    sortBy: string = null,
    sortDirection: string = null,
  ): any {
    return this.restClient.get('Group/UseCase/ListGroupMembershipForUser', {
      poolId,
      userId,
      groupOwnerUserId,
      page,
      itemsPerPage,
      sortBy,
      sortDirection,
    });
  }

  /**
   * @param string - userId
   * @param string? - query
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-500
   * @param string? - sortBy
   * @param string? - sortDirection ascending|descending
   * @return Promise|Observable|any
   */
  ListGroupsOwnedByUser(
    userId: string,
    query: string = null,
    page: number = null,
    itemsPerPage: number = null,
    sortBy: string = null,
    sortDirection: string = null,
  ): any {
    return this.restClient.get('Group/UseCase/ListGroupsOwnedByUser', {
      userId,
      query,
      page,
      itemsPerPage,
      sortBy,
      sortDirection,
    });
  }

  // Commands

  /**
   * @param string - groupId
   * @param any[] - userIds
   * @return Promise|Observable|any
   */
  AddUsersToGroup(groupId: string, userIds: any[]): any {
    return this.restClient.post('Group/UseCase/AddUsersToGroup', {
      groupId,
      userIds,
    });
  }

  /**
   * @param string - userId
   * @param string - groupName
   * @param string? - groupId
   * @return Promise|Observable|any
   */
  CreateGroupForUser(
    userId: string,
    groupName: string,
    groupId: string = null,
  ): any {
    return this.restClient.post('Group/UseCase/CreateGroupForUser', {
      userId,
      groupName,
      groupId,
    });
  }

  /**
   * @param string - groupId
   * @return Promise|Observable|any
   */
  DeleteGroup(groupId: string): any {
    return this.restClient.post('Group/UseCase/DeleteGroup', {
      groupId,
    });
  }

  /**
   * @param string - destinationGroupId
   * @param any[] - fromGroupIds
   * @return Promise|Observable|any
   */
  MergeGroups(destinationGroupId: string, fromGroupIds: any[]): any {
    return this.restClient.post('Group/UseCase/MergeGroups', {
      destinationGroupId,
      fromGroupIds,
    });
  }

  /**
   * @param string - groupId
   * @param any[] - userIds
   * @return Promise|Observable|any
   */
  RemoveUsersFromGroup(groupId: string, userIds: any[]): any {
    return this.restClient.post('Group/UseCase/RemoveUsersFromGroup', {
      groupId,
      userIds,
    });
  }

  /**
   * @param string - groupId
   * @param string - userId
   * @param string - groupName
   * @return Promise|Observable|any
   */
  SetGroupName(groupId: string, userId: string, groupName: string): any {
    return this.restClient.post('Group/UseCase/SetGroupName', {
      groupId,
      userId,
      groupName,
    });
  }
}
