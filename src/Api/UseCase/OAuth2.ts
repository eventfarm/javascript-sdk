/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class OAuth2 {
  constructor(private restClient: RestClientInterface) {}

  // GET: Queries

  // POST USE CASES: Commands
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

  RevokeAccessToken(identifier: string): any {
    return this.restClient.post('OAuth2/UseCase/RevokeAccessToken', {
      identifier,
    });
  }

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
