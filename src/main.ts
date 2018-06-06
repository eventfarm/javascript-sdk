import { Countries } from './Api/DateTime/Countries';
import { DateTimeZone } from './Api/DateTime/DateTimeZone';
import { TypeFactory } from './Api/Type/TypeFactory';
import { USAState } from './Api/DateTime/USAStates';
import { UseCaseFactory } from './Api/UseCase/UseCaseFactory';
import { AxiosRestClient, OAuthRestClient, RestClientInterface } from './RestClient';

export class ApiClient {
  constructor(
    private clientId: string,
    private clientSecret: string,
    private email: string,
    private password: string,
    private apiBaseUri: string = 'https://eventfarm.com/api/v2',
    private loginBaseUri: string = 'https://eventfarm.com/api/v2/oauth/token',
  ) {}
  
  get dateTimeFactory(): DateTimeZone {
    return new DateTimeZone();
  }
  
  get usaStateList(): USAState {
    return new USAState();
  }
  
  get countryList(): Countries {
    return new Countries();
  }
  
  get typeFactory(): TypeFactory {
    return new TypeFactory();
  }
  
  get useCaseFactory() {
    return new UseCaseFactory(this.restClient);
  }
  
  private get restClient(): RestClientInterface {
    return new OAuthRestClient(
      new AxiosRestClient(this.apiBaseUri),
      new AxiosRestClient(this.loginBaseUri),
      this.clientId,
      this.clientSecret,
      this.email,
      this.password
    );
  }
}

export * from './RestClient';
