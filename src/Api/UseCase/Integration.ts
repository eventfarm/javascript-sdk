/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../interfaces';

export class Integration {
  constructor(private restClient: RestClientInterface) {}

  // GET: Queries

  // POST USE CASES: Commands
  InitializeSalesforceIntegrationsForEvent(eventId: string): any {
    return this.restClient.post(
      'Integration/UseCase/InitializeSalesforceIntegrationsForEvent',
      {
        eventId,
      },
    );
  }
}
