/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class AuditLog {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  // Commands

  /**
   * @param string - email
   * @param string - eventId
   * @param string - action
   * @param string - actionApplication
   * @param string - actionObject
   * @param string - actionLocation
   * @param number - actionTime
   * @param string - actionType system|pool|event
   * @param string? - actionSubType administration|security|account-management|event-management|experiential|financial|integration|invitation|none
   * @param string? - actionDetails
   * @param string? - actorUserId
   * @return Promise|Observable|any
   */
  CreateAuditLogForEmail(
    email: string,
    eventId: string,
    action: string,
    actionApplication: string,
    actionObject: string,
    actionLocation: string,
    actionTime: number,
    actionType: string,
    actionSubType: string = null,
    actionDetails: string = null,
    actorUserId: string = null,
  ): any {
    return this.restClient.post('AuditLog/UseCase/CreateAuditLogForEmail', {
      email,
      eventId,
      action,
      actionApplication,
      actionObject,
      actionLocation,
      actionTime,
      actionType,
      actionSubType,
      actionDetails,
      actorUserId,
    });
  }

  /**
   * @param string - invitationId
   * @param string - eventId
   * @param string - action
   * @param string - actionApplication
   * @param string - actionObject
   * @param string - actionLocation
   * @param number - actionTime
   * @param string - actionType system|pool|event
   * @param string? - actionSubType administration|security|account-management|event-management|experiential|financial|integration|invitation|none
   * @param string? - actionDetails
   * @param string? - actorUserId
   * @return Promise|Observable|any
   */
  CreateAuditLogForInvitation(
    invitationId: string,
    eventId: string,
    action: string,
    actionApplication: string,
    actionObject: string,
    actionLocation: string,
    actionTime: number,
    actionType: string,
    actionSubType: string = null,
    actionDetails: string = null,
    actorUserId: string = null,
  ): any {
    return this.restClient.post(
      'AuditLog/UseCase/CreateAuditLogForInvitation',
      {
        invitationId,
        eventId,
        action,
        actionApplication,
        actionObject,
        actionLocation,
        actionTime,
        actionType,
        actionSubType,
        actionDetails,
        actorUserId,
      },
    );
  }

  /**
   * @param string - tagId
   * @param string - eventId
   * @param string - action
   * @param string - actionApplication
   * @param string - actionObject
   * @param string - actionLocation
   * @param number - actionTime
   * @param string - actionType system|pool|event
   * @param string? - actionSubType administration|security|account-management|event-management|experiential|financial|integration|invitation|none
   * @param string? - actionDetails
   * @param string? - actorUserId
   * @return Promise|Observable|any
   */
  CreateAuditLogForTagId(
    tagId: string,
    eventId: string,
    action: string,
    actionApplication: string,
    actionObject: string,
    actionLocation: string,
    actionTime: number,
    actionType: string,
    actionSubType: string = null,
    actionDetails: string = null,
    actorUserId: string = null,
  ): any {
    return this.restClient.post('AuditLog/UseCase/CreateAuditLogForTagId', {
      tagId,
      eventId,
      action,
      actionApplication,
      actionObject,
      actionLocation,
      actionTime,
      actionType,
      actionSubType,
      actionDetails,
      actorUserId,
    });
  }

  /**
   * @param string - firstName
   * @param string - lastName
   * @param string - eventId
   * @param string - action
   * @param string - actionApplication
   * @param string - actionObject
   * @param string - actionLocation
   * @param number - actionTime
   * @param string - actionType system|pool|event
   * @param string? - actionSubType administration|security|account-management|event-management|experiential|financial|integration|invitation|none
   * @param string? - actionDetails
   * @param string? - actorUserId
   * @return Promise|Observable|any
   */
  CreateAuditLogForUserName(
    firstName: string,
    lastName: string,
    eventId: string,
    action: string,
    actionApplication: string,
    actionObject: string,
    actionLocation: string,
    actionTime: number,
    actionType: string,
    actionSubType: string = null,
    actionDetails: string = null,
    actorUserId: string = null,
  ): any {
    return this.restClient.post('AuditLog/UseCase/CreateAuditLogForUserName', {
      firstName,
      lastName,
      eventId,
      action,
      actionApplication,
      actionObject,
      actionLocation,
      actionTime,
      actionType,
      actionSubType,
      actionDetails,
      actorUserId,
    });
  }
}
