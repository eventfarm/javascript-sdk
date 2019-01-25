/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class EmailNotification {
  constructor(private restClient: RestClientInterface) {}

  // GET: Queries
  GetOpenActionsForEventOverLastMonth(eventId: string): any {
    return this.restClient.get(
      'EmailNotification/UseCase/GetOpenActionsForEventOverLastMonth',
      {
        eventId,
      },
    );
  }

  // POST USE CASES: Commands
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
