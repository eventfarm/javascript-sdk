/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class WebConference {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - poolId
   * @param string - type
   * @return Promise|Observable|any
   */
  GetWebConferenceRedirectURIByType(poolId: string, type: string): any {
    return this.restClient.get(
      'WebConference/UseCase/GetWebConferenceRedirectURIByType',
      {
        poolId,
        type,
      },
    );
  }

  /**
   * @param string - poolId
   * @param string? - type
   * @return Promise|Observable|any
   */
  ListWebConferenceConnectionsForPool(
    poolId: string,
    type: string = null,
  ): any {
    return this.restClient.get(
      'WebConference/UseCase/ListWebConferenceConnectionsForPool',
      {
        poolId,
        type,
      },
    );
  }

  /**
   * @param string - userId
   * @param string - eventId
   * @param string - type
   * @param string - format webinar|meeting|none
   * @return Promise|Observable|any
   */
  ListWebConferencesForAuthUser(
    userId: string,
    eventId: string,
    type: string,
    format: string,
  ): any {
    return this.restClient.get(
      'WebConference/UseCase/ListWebConferencesForAuthUser',
      {
        userId,
        eventId,
        type,
        format,
      },
    );
  }

  // Commands

  /**
   * @param any[] - payload
   * @param string - type
   * @return Promise|Observable|any
   */
  CompleteWebConferenceDeAuthorizeFlow(payload: any[], type: string): any {
    return this.restClient.post(
      'WebConference/UseCase/CompleteWebConferenceDeAuthorizeFlow',
      {
        payload,
        type,
      },
    );
  }

  /**
   * @param string - code
   * @param any[] - state
   * @param string - type
   * @return Promise|Observable|any
   */
  CompleteWebConferenceOAuthFlow(
    code: string,
    state: any[],
    type: string,
  ): any {
    return this.restClient.post(
      'WebConference/UseCase/CompleteWebConferenceOAuthFlow',
      {
        code,
        state,
        type,
      },
    );
  }

  /**
   * @param string - userId
   * @param string - poolId
   * @param string - type
   * @return Promise|Observable|any
   */
  RemoveWebConferenceConnectionFromPool(
    userId: string,
    poolId: string,
    type: string,
  ): any {
    return this.restClient.post(
      'WebConference/UseCase/RemoveWebConferenceConnectionFromPool',
      {
        userId,
        poolId,
        type,
      },
    );
  }
}
