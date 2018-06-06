import { RestClientInterface } from '../../RestClient/RestClientInterface';

export class Feature {
    constructor(private restClient: RestClientInterface) {}

    // GET: Queries
    ListFeatures(): any {
        return this.restClient.get('Feature/UseCase/ListFeatures', {

        }    );
    }

    // POST USE CASES: Commands
}
