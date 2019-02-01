/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class EmailNotification {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  GetOpenActionsForEventOverLastMonth(eventId: string): any {
    return this.restClient.get(
      'EmailNotification/UseCase/GetOpenActionsForEventOverLastMonth',
      {
        eventId,
      },
    );
  }

  // Commands

  /**
   * @param string - emailMessageId
   * @param string - type
   * @param number - createdAt
   * @param string? - eventId
   * @param string? - emailNotificationId
   * @return Promise|Observable|any
   */
  CreateSparkpostNotification(
    emailMessageId: string,
    type: string,
    createdAt: number,
    eventId: string = null,
    emailNotificationId: string = null,
  ): any {
    return this.restClient.post(
      'EmailNotification/UseCase/CreateSparkpostNotification',
      {
        emailMessageId,
        type,
        createdAt,
        eventId,
        emailNotificationId,
      },
    );
  }

  /**
   * @param string - eventId
   * @param number? - totalRecords
   * @return Promise|Observable|any
   */
  SimulateEmailNotificationsForEvent(
    eventId: string,
    totalRecords: number = null,
  ): any {
    return this.restClient.post(
      'EmailNotification/UseCase/SimulateEmailNotificationsForEvent',
      {
        eventId,
        totalRecords,
      },
    );
  }
}
