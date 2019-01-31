/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class OAuth2 {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  // Commands

  /**
   * @param string - name
   * @param array - redirectUrls
   * @param string? - identifier
   * @param string? - secret
   * @return Promise|Observable|any
   */
  CreateOAuthClient(
    name: string,
    redirectUrls: any,
    identifier: string = null,
    secret: string = null,
  ): any {
    return this.restClient.post('OAuth2/UseCase/CreateOAuthClient', {
      name,
      redirectUrls,
      identifier,
      secret,
    });
  }

  /**
   * @param string - identifier
   * @return Promise|Observable|any
   */
  RevokeAccessToken(identifier: string): any {
    return this.restClient.post('OAuth2/UseCase/RevokeAccessToken', {
      identifier,
    });
  }

  /**
   * @param string - identifier
   * @param array - redirectUrls
   * @return Promise|Observable|any
   */
  SetRedirectUrlsForOAuthClient(identifier: string, redirectUrls: any): any {
    return this.restClient.post(
      'OAuth2/UseCase/SetRedirectUrlsForOAuthClient',
      {
        identifier,
        redirectUrls,
      },
    );
  }
}
