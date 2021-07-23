import { AbstractApi, EventFarmAPIClientInterface } from './AbstractApi';
import { AxiosRestClient } from './Rest/AxiosRestClient';
import { RestClientInterface } from './Interfaces';
import { ImplicitRestClient } from './Rest/Client/ImplicitRestClient';

export class FrontEndClient extends AbstractApi
  implements EventFarmAPIClientInterface {
  constructor(protected accessToken: string, apiBaseUri?: string) {
    super(apiBaseUri);
  }

  get restClient(): RestClientInterface {
    return new ImplicitRestClient(
      new AxiosRestClient(this.apiBaseUri),
      this.accessToken,
    );
  }
}
