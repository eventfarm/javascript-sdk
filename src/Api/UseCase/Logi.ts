/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class Logi {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - eventId
   * @param string - userId
   * @return Promise|Observable|any
   */
  GetLogiURLForEvent(eventId: string, userId: string): any {
    return this.restClient.get('Logi/UseCase/GetLogiURLForEvent', {
      eventId,
      userId,
    });
  }

  // Commands
}
