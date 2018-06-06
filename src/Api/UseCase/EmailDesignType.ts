import { RestClientInterface } from '../../RestClient/RestClientInterface';

export class EmailDesignType {
    constructor(private restClient: RestClientInterface) {}

    // GET: Queries
    GetAllEmailDesignTypes(): any {
        return this.restClient.get('EmailDesignType/UseCase/GetAllEmailDesignTypes', {

        }    );
    }

    // POST USE CASES: Commands
}
