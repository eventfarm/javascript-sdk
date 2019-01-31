/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class OAuth {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - oauthAccessTokenId
   * @return Promise|Observable|any
   */
  GetOAuthAccessToken(oauthAccessTokenId: string): any {
    return this.restClient.get('OAuth/UseCase/GetOAuthAccessToken', {
      oauthAccessTokenId,
    });
  }

  // Commands

  /**
   * @param string - email
   * @return Promise|Observable|any
   */
  CreateGhostAccessToken(email: string): any {
    return this.restClient.post('OAuth/UseCase/CreateGhostAccessToken', {
      email,
    });
  }
}
