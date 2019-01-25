import { AbstractApi } from './AbstractApi';
import { RestClientInterface } from './Interfaces';
import { PasswordGrantRestClient } from './Rest/Server/PasswordGrantRestClient';
import { AxiosRestClient } from './Rest/AxiosRestClient';

export class BackEndClient extends AbstractApi {
  constructor(
    protected readonly clientId: string,
    protected readonly clientSecret: string,
    protected readonly email: string,
    protected readonly password: string,
    protected readonly loginBaseUri: string = 'https://eventfarm.com/app/oauth/token',
    apiBaseUri?: string,
  ) {
    super(apiBaseUri);
  }

  get restClient(): RestClientInterface {
    return new PasswordGrantRestClient(
      new AxiosRestClient(this.apiBaseUri),
      new AxiosRestClient(this.loginBaseUri),
      this.clientId,
      this.clientSecret,
      this.email,
      this.password,
    );
  }
}
