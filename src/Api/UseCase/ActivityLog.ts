/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class ActivityLog {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - eventId
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-100
   * @return Promise|Observable|any
   */
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

  /**
   * @param string - invitationId
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-100
   * @return Promise|Observable|any
   */
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

  // Commands

  /**
   * @param string - eventId
   * @param string - action
   * @param string - actionValue
   * @param number - actionTime
   * @param string? - invitationId
   * @param string? - userId
   * @param string? - actionUserId
   * @param string? - activityLogId
   * @return Promise|Observable|any
   */
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

  /**
   * @param string - eventId
   * @param string - action
   * @param string - actionValue
   * @param number - actionTime
   * @param string - content
   * @param string? - invitationId
   * @param string? - userId
   * @param string? - actionUserId
   * @param string? - activityLogId
   * @param string? - activityDetailId
   * @return Promise|Observable|any
   */
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
