import { AbstractApi, EventFarmAPIClientInterface } from './AbstractApi';
import { AxiosRestClient } from './Rest/AxiosRestClient';
import { RestClientInterface } from './Interfaces';
import { ImplicitRestClient } from './Rest/Client/ImplicitRestClient';

export class FrontEndClient extends AbstractApi implements EventFarmAPIClientInterface {
  constructor(
    protected accessToken: string,
    apiBaseUri?: string,
    protected interceptor?: any
  ) {

    super(apiBaseUri);
    console.log('Creating new frontend client')
  }

  get eventFarmRestClient(): RestClientInterface {
    return new ImplicitRestClient(
      new AxiosRestClient(
        this.apiBaseUri,
        this.interceptor
      ),
    );
  }
}