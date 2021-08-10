import { AbstractApi, EventFarmAPIClientInterface } from './AbstractApi';
import { RestClientInterface } from './Interfaces';
import { EventFarmRestClient } from './Rest/Server/EventFarmRestClient';
import { AxiosRestClient } from './Rest/AxiosRestClient';

export class BackEndClient extends AbstractApi
  implements EventFarmAPIClientInterface {
  private efRestClient: EventFarmRestClient;
  constructor(
    protected readonly clientId: string,
    protected readonly clientSecret: string,
    protected readonly audience: string,
    protected readonly loginBaseUri: string = 'https://eventfarm.us.auth0.com/api/v2/oauth/token',
    apiBaseUri?: string,
  ) {
    super(apiBaseUri);
  }

  get eventFarmRestClient(): RestClientInterface {
    if (!this.efRestClient) {
      this.efRestClient = new EventFarmRestClient(
        new AxiosRestClient(this.apiBaseUri),
        new AxiosRestClient(this.loginBaseUri),
        this.clientId,
        this.clientSecret,
        this.audience,
      );
    }
    return this.efRestClient;
  }
}
