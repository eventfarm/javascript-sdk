import { RestClientInterface } from '../../RestClient/RestClientInterface';

export class Integration {
    constructor(private restClient: RestClientInterface) {}

    // GET: Queries

    // POST USE CASES: Commands
    InitializeSalesforceIntegrationsForEvent(eventId: string): any {
        return this.restClient.post('Integration/UseCase/InitializeSalesforceIntegrationsForEvent', {
            eventId
        }    );
    }
}
