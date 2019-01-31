/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class Integration {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  // Commands

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  InitializeSalesforceIntegrationsForEvent(eventId: string): any {
    return this.restClient.post(
      'Integration/UseCase/InitializeSalesforceIntegrationsForEvent',
      {
        eventId,
      },
    );
  }
}
