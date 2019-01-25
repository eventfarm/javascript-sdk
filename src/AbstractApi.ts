import { Countries } from './Api/DateTime/Countries';
import { DateTimeZone } from './Api/DateTime/DateTimeZone';
import { TypeFactory } from './Api/Type/TypeFactory';
import { USAState } from './Api/DateTime/USAStates';
import { UseCaseFactory } from './Api/UseCase/UseCaseFactory';
import { RestClientInterface } from './Interfaces';

export abstract class AbstractApi {
  readonly dateTimeFactory = new DateTimeZone();
  readonly usaStateList = new USAState();
  readonly countryList = new Countries();
  readonly typeFactory = new TypeFactory();

  constructor(
    protected readonly apiBaseUri: string = 'https://eventfarm.com/api/v2',
  ) {}

  get useCaseFactory() {
    return new UseCaseFactory(this.restClient);
  }

  abstract get restClient(): RestClientInterface;
}
