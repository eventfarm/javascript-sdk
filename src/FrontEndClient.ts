import { AbstractApi, EventFarmAPIClientInterface } from './AbstractApi';
import { AxiosRestClient } from './Rest/AxiosRestClient';
import { RestClientInterface } from './Interfaces';
import { ImplicitRestClient } from './Rest/Client/ImplicitRestClient';
import { ClientAccessToken } from './Rest/Client/ClientAccessToken';

export class FrontEndClient extends AbstractApi
  implements EventFarmAPIClientInterface {
  constructor(protected accessToken: ClientAccessToken, apiBaseUri?: string) {
    super(apiBaseUri);
  }

  get restClient(): RestClientInterface {
    return new ImplicitRestClient(
      new AxiosRestClient(this.apiBaseUri),
      this.accessToken,
    );
  }
}
