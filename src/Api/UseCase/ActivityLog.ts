/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../interfaces';

export class ActivityLog {
  constructor(private restClient: RestClientInterface) {}

  // GET: Queries
  ListEntriesForEvent(
    eventId: string,
    page: number = null,
    itemsPerPage: number = null,
  ): any {
    return this.restClient.get('ActivityLog/UseCase/ListEntriesForEvent', {
      eventId,
      page,
      itemsPerPage,
    });
  }

  ListEntriesForInvitation(
    invitationId: string,
    page: number = null,
    itemsPerPage: number = null,
  ): any {
    return this.restClient.get('ActivityLog/UseCase/ListEntriesForInvitation', {
      invitationId,
      page,
      itemsPerPage,
    });
  }

  // POST USE CASES: Commands
  CreateActivityLog(
    eventId: string,
    action: string,
    actionValue: string,
    actionTime: number,
    invitationId: string = null,
    userId: string = null,
    actionUserId: string = null,
    activityLogId: string = null,
  ): any {
    return this.restClient.post('ActivityLog/UseCase/CreateActivityLog', {
      eventId,
      action,
      actionValue,
      actionTime,
      invitationId,
      userId,
      actionUserId,
      activityLogId,
    });
  }

  CreateActivityLogAndDetail(
    eventId: string,
    action: string,
    actionValue: string,
    actionTime: number,
    content: string,
    invitationId: string = null,
    userId: string = null,
    actionUserId: string = null,
    activityLogId: string = null,
    activityDetailId: string = null,
  ): any {
    return this.restClient.post(
      'ActivityLog/UseCase/CreateActivityLogAndDetail',
      {
        eventId,
        action,
        actionValue,
        actionTime,
        content,
        invitationId,
        userId,
        actionUserId,
        activityLogId,
        activityDetailId,
      },
    );
  }
}
