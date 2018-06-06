import { RestClientInterface } from '../../RestClient/RestClientInterface';

export class TicketType {
    constructor(private restClient: RestClientInterface) {}

    // GET: Queries
    ListTicketTypesForEvent(eventId: string, shouldHideDeleted: boolean = null): any {
        return this.restClient.get('TicketType/UseCase/ListTicketTypesForEvent', {
            eventId,
            shouldHideDeleted
        }    );
    }

    // POST USE CASES: Commands
}
