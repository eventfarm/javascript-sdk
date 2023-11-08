import { RestClientInterface, StringField } from '../../Interfaces';

export class ImplicitRestClient implements RestClientInterface {
  constructor(
    private restClient: RestClientInterface,
  ) {}

  get(requestPath: string, queryParameters: any, headers?: any) {
    return this.restClient.get(
      requestPath,
      queryParameters,
    );
  }

  post(requestPath: string, formParameters: any, headers?: any) {
    return this.restClient.post(
      requestPath,
      formParameters,
    );
  }

  postMultipart(requestPath: string, formParameters: any, headers?: any) {
    return this.restClient.postMultipart(
      requestPath,
      formParameters,
    );
  }


}