import { RestClientInterface } from '../../RestClient/RestClientInterface';

export class Group {
    constructor(private restClient: RestClientInterface) {}

    // GET: Queries
    GetGroup(groupId: string, withData: any = null): any {
        return this.restClient.get('Group/UseCase/GetGroup', {
            groupId,
            withData
        }    );
    }

    ListGroupMembershipForUser(poolId: string, userId: string, groupOwnerUserId: string = null, page: number = null, itemsPerPage: number = null, sortBy: string = null, sortDirection: string = null): any {
        return this.restClient.get('Group/UseCase/ListGroupMembershipForUser', {
            poolId,
            userId,
            groupOwnerUserId,
            page,
            itemsPerPage,
            sortBy,
            sortDirection
        }    );
    }

    ListGroupsOwnedByUser(userId: string, query: string = null, page: number = null, itemsPerPage: number = null, sortBy: string = null, sortDirection: string = null): any {
        return this.restClient.get('Group/UseCase/ListGroupsOwnedByUser', {
            userId,
            query,
            page,
            itemsPerPage,
            sortBy,
            sortDirection
        }    );
    }

    // POST USE CASES: Commands
    AddUsersToGroup(groupId: string, userIds: any): any {
        return this.restClient.post('Group/UseCase/AddUsersToGroup', {
            groupId,
            userIds
        }    );
    }

    CreateGroupForUser(userId: string, groupName: string, groupId: string = null): any {
        return this.restClient.post('Group/UseCase/CreateGroupForUser', {
            userId,
            groupName,
            groupId
        }    );
    }

    DeleteGroup(groupId: string): any {
        return this.restClient.post('Group/UseCase/DeleteGroup', {
            groupId
        }    );
    }

    MergeGroups(destinationGroupId: string, fromGroupIds: any): any {
        return this.restClient.post('Group/UseCase/MergeGroups', {
            destinationGroupId,
            fromGroupIds
        }    );
    }

    RemoveUsersFromGroup(groupId: string, userIds: any): any {
        return this.restClient.post('Group/UseCase/RemoveUsersFromGroup', {
            groupId,
            userIds
        }    );
    }

    SetGroupName(groupId: string, userId: string, groupName: string): any {
        return this.restClient.post('Group/UseCase/SetGroupName', {
            groupId,
            userId,
            groupName
        }    );
    }
}
