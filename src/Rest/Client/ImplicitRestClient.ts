import { ClientAccessToken } from './ClientAccessToken';
import { RestClientInterface, StringField } from '../../interfaces';

export class ImplicitRestClient implements RestClientInterface {
  constructor(private restClient: RestClientInterface, private accessToken: ClientAccessToken) {}

  get(requestPath: string, queryParameters: any, headers?: any) {
    return this.restClient.get(
      requestPath,
      queryParameters,
      this.getAuthorizationHeaders()
    );
  }

  post(requestPath: string, formParameters: any, headers?: any) {
    return this.restClient.post(
      requestPath,
      formParameters,
      this.getAuthorizationHeaders()
    );
  }

  postMultipart(requestPath: string, formParameters: any, headers?: any) {
    return this.restClient.postMultipart(
      requestPath,
      formParameters,
      this.getAuthorizationHeaders()
    );
  }

  private getAuthorizationHeaders(): StringField {
    const headers = {};
    headers['Authorization'] = this.accessToken.tokenString;
    return headers;
  }
}
