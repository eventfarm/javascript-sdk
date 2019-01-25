import * as jwtDecode from 'jwt-decode';

import { ServerAccessToken } from './ServerAccessToken';
import { JWTAccessToken, JWTAccessTokenInterface } from '../JWTAccessToken';
import { RestClientInterface } from '../../interfaces';

export class PasswordGrantRestClient implements RestClientInterface {

    private oAuthAccessToken: ServerAccessToken = null;

    constructor(
        private restClient: RestClientInterface,
        private accessTokenRestClient: RestClientInterface,
        private clientId: string,
        private clientSecret: string,
        private email: string,
        private password: string
    ) { }

    async get(path: string, queryParameters = {}, headers = {}, options = {}, timeoutSeconds = 5000) {
        const authorizeHeaders = await this.getAuthorizationHeaders(headers);
        return this.restClient.get(path, queryParameters, authorizeHeaders)
    }

    async post(path: string, formParameters = {}, headers = {}, options = {}, timeoutSeconds = 5000) {
        const authorizeHeaders = await this.getAuthorizationHeaders(headers);
        return this.restClient.post(path, formParameters, authorizeHeaders)
    }

    async postMultipart(path: string, formParameters = {}, headers = {}, options = {}, timeoutSeconds = 5000) {
        const authorizeHeaders = await this.getAuthorizationHeaders(headers);
        return this.restClient.postMultipart(path, formParameters, authorizeHeaders)
    }

    private async getAuthorizationHeaders(headers: any = {}): Promise<any> {
        let oauthAccessToken = await this.getOAuthAccessToken();
        headers['Authorization'] = oauthAccessToken.authorizationHeader;
        return headers;
    }

    private async getOAuthAccessToken(): Promise<ServerAccessToken> {
        if (this.oAuthAccessToken === null) {
            this.oAuthAccessToken = await this.getPasswordCredentialsAccessToken();
        }

        if (this.oAuthAccessToken.isExpired) {
            const refreshToken = this.oAuthAccessToken.refreshToken;

            if (refreshToken !== null) {
                try {
                    this.oAuthAccessToken = await this.getRefreshToken(refreshToken);
                } catch (OAuthRestClientException) {
                    this.oAuthAccessToken = await this.getPasswordCredentialsAccessToken();
                }
            } else {
                this.oAuthAccessToken = await this.getPasswordCredentialsAccessToken();
            }
        }

        return this.oAuthAccessToken;
    }

    private async getPasswordCredentialsAccessToken() {
        const response = await this.accessTokenRestClient.post('oauth2/token', {
            'grant_type': 'password',
            'client_id': this.clientId,
            'client_secret': this.clientSecret,
            'username': this.email,
            'password': this.password,
        });
        return this.getOAuthAccessTokenFromResponse(response.data);
    }

    private async getRefreshToken(refreshToken: string) {
        const response = await this.accessTokenRestClient.post('oauth2/token', {
            'grant_type': 'refresh_token',
            'refresh_token': refreshToken,
            'client_id': this.clientId,
            'client_secret': this.clientSecret,
        });
        return this.getOAuthAccessTokenFromResponse(response.data);
    }

    private getOAuthAccessTokenFromResponse(data: any): ServerAccessToken {
        const accessTokenData: JWTAccessTokenInterface = jwtDecode(data.access_token);
        const accessToken = new JWTAccessToken(
            accessTokenData.aud,
            accessTokenData.jti,
            accessTokenData.exp,
            accessTokenData.sub
        );
        return new ServerAccessToken(
            data.token_type,
            accessToken.tokenString,
            data.expires_at,
            data.refresh_token,
            data.user_id
        );
    }
}
