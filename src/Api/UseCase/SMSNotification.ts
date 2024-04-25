/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class SMSNotification {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  // Commands

  /**
   * @param string - messageId
   * @param string - rawStatus
   * @param string? - errorCode
   * @param string? - errorMessage
   * @param string? - smsNotificationId
   * @return Promise|Observable|any
   */
  CreateSMSNotification(
    messageId: string,
    rawStatus: string,
    errorCode: string = null,
    errorMessage: string = null,
    smsNotificationId: string = null,
  ): any {
    return this.restClient.post(
      'SMSNotification/UseCase/CreateSMSNotification',
      {
        messageId,
        rawStatus,
        errorCode,
        errorMessage,
        smsNotificationId,
      },
    );
  }
}
