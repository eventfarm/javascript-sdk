import { RestClientInterface } from '../../RestClient/RestClientInterface';

export class Salutation {
    constructor(private restClient: RestClientInterface) {}

    // GET: Queries
    GetAllSalutations(locales: any = null): any {
        return this.restClient.get('Salutation/UseCase/GetAllSalutations', {
            locales
        }    );
    }

    // POST USE CASES: Commands
}
