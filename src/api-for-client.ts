import { AbstractApi } from './abstract-api';
import { AxiosRestClient } from './Rest/AxiosRestClient';
import { RestClientInterface } from './interfaces';
import { ImplicitRestClient } from './Rest/Client/ImplicitRestClient';
import { ClientAccessToken } from './Rest/Client/ClientAccessToken';

export class FrontEndClient extends AbstractApi {
  constructor(
    protected readonly accessToken: ClientAccessToken,
    apiBaseUri?: string,
  ) {
    super(apiBaseUri);
  }

  get restClient(): RestClientInterface {
    return new ImplicitRestClient(
      new AxiosRestClient(this.apiBaseUri),
      this.accessToken,
    );
  }
}
