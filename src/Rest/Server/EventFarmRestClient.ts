import * as jwt_decode from 'jwt-decode';

import { Buffer } from 'buffer';

import { ServerAccessToken } from './ServerAccessToken';
import { JWTAccessToken, JWTAccessTokenInterface } from '../JWTAccessToken';
import { RestClientInterface } from '../../Interfaces';

export class EventFarmRestClient implements RestClientInterface {
  private oAuthAccessToken: ServerAccessToken = null;

  constructor(
    private restClient: RestClientInterface,
    private accessTokenRestClient: RestClientInterface,
    private clientId: string,
    private clientSecret: string,
    private audience: string,
  ) {}

  async get(
    path: string,
    queryParameters = {},
    headers = {},
    options = {},
    timeoutSeconds = 5000,
  ) {
    const authorizeHeaders = await this.getAuthorizationHeaders(headers);
    return this.restClient.get(path, queryParameters, authorizeHeaders);
  }

  async post(
    path: string,
    formParameters = {},
    headers = {},
    options = {},
    timeoutSeconds = 5000,
  ) {
    const authorizeHeaders = await this.getAuthorizationHeaders(headers);
    return this.restClient.post(path, formParameters, authorizeHeaders);
  }

  async postMultipart(
    path: string,
    formParameters = {},
    headers = {},
    options = {},
    timeoutSeconds = 5000,
  ) {
    const authorizeHeaders = await this.getAuthorizationHeaders(headers);
    return this.restClient.postMultipart(
      path,
      formParameters,
      authorizeHeaders,
    );
  }

  private async getAuthorizationHeaders(headers: any = {}): Promise<any> {
    let oauthAccessToken = await this.getOAuthAccessToken();
    headers['Authorization'] = oauthAccessToken.authorizationHeader;
    return headers;
  }

  private async getOAuthAccessToken(): Promise<ServerAccessToken> {
    if (this.oAuthAccessToken === null) {
      const res = await this.getAccessTokenWithClientCredentialsGrant();
      this.oAuthAccessToken = res;
    }

    if (this.oAuthAccessToken && this.oAuthAccessToken.isExpired) {
      try {
        this.oAuthAccessToken = await this.getRefreshToken();
      } catch (OAuthRestClientException) {
        this.oAuthAccessToken = await this.getAccessTokenWithClientCredentialsGrant();
      }
    }

    return this.oAuthAccessToken;
  }

  private async getAccessTokenWithClientCredentialsGrant() {
    const path = `oauth2/token?grant_type=client_credentials&scope=target-entity:${
      this.audience
    }:read,write`;
    const basicAuth =
      'Basic ' +
      new Buffer(this.clientId + ':' + this.clientSecret).toString('base64');
    const response = await this.accessTokenRestClient.post(path, null, {
      Authorization: basicAuth,
    });
    return this.getOAuthAccessTokenFromResponse(response.data);
  }

  private async getRefreshToken() {
    return this.getAccessTokenWithClientCredentialsGrant();
  }

  private getOAuthAccessTokenFromResponse(data: any): ServerAccessToken {
    const accessTokenData: JWTAccessTokenInterface = jwt_decode(
      data.access_token,
    );

    return new ServerAccessToken(
      data.token_type,
      data.access_token,
      accessTokenData.exp,
      data.refresh_token,
      data.user_id,
    );
  }
}
