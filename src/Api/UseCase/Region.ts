import { RestClientInterface } from '../../RestClient/RestClientInterface';

export class Region {
    constructor(private restClient: RestClientInterface) {}

    // GET: Queries
    ListTimezonesForRegion(query: string, page: number = null, itemsPerPage: number = null): any {
        return this.restClient.get('Region/UseCase/ListTimezonesForRegion', {
            query,
            page,
            itemsPerPage
        }    );
    }

    // POST USE CASES: Commands
}
