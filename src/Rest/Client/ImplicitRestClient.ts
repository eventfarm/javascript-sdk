import { RestClientInterface, StringField } from '../../Interfaces';

export class ImplicitRestClient implements RestClientInterface {
  constructor(
    private restClient: RestClientInterface,
    private accessToken: string,
  ) {}

  get(requestPath: string, queryParameters: any, headers?: any) {
    return this.restClient.get(
      requestPath,
      queryParameters,
      this.getAuthorizationHeaders(),
    );
  }

  post(requestPath: string, formParameters: any, headers?: any) {
    return this.restClient.post(
      requestPath,
      formParameters,
      this.getAuthorizationHeaders(),
    );
  }

  postMultipart(requestPath: string, formParameters: any, headers?: any) {
    return this.restClient.postMultipart(
      requestPath,
      formParameters,
      this.getAuthorizationHeaders(),
    );
  }

  private getAuthorizationHeaders(): StringField {
    const headers = {};
    headers['Authorization'] = this.accessToken;
    return headers;
  }
}
