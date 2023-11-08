import * as jwt_decode from "jwt-decode";


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
  ) {
  }

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
    console.log("authorizeHeaders", authorizeHeaders)
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
      const res = await this.getPasswordCredentialsAccessToken()
      this.oAuthAccessToken = res;
    }

    if (this.oAuthAccessToken && this.oAuthAccessToken.isExpired) {
      try {
        this.oAuthAccessToken = await this.getRefreshToken();
      } catch (OAuthRestClientException) {
        this.oAuthAccessToken = await this.getPasswordCredentialsAccessToken();
      }
    }

    return this.oAuthAccessToken;
  }

  private async getPasswordCredentialsAccessToken() {
    const response = await this.accessTokenRestClient.post('oauth/token', {
      grant_type: 'client_credentials',
      client_id: this.clientId,
      client_secret: this.clientSecret,
      audience: this.audience
    });
    return this.getOAuthAccessTokenFromResponse(response.data);
  }

  private async getRefreshToken() {
    const response = await this.accessTokenRestClient.post('oauth/token', {
      grant_type: 'client_credentials',
      client_id: this.clientId,
      client_secret: this.clientSecret,
      audience: this.audience
    });
    return this.getOAuthAccessTokenFromResponse(response.data);
  }

  private getOAuthAccessTokenFromResponse(data: any): ServerAccessToken {
    const accessTokenData: JWTAccessTokenInterface = jwt_decode(
      data.access_token,
    );
    const accessToken = new JWTAccessToken(
      accessTokenData.aud,
      accessTokenData.jti,
      accessTokenData.exp,
      accessTokenData.sub,
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