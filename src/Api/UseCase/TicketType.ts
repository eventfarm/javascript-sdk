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
    CreateTicketType(eventId: string, name: string, quantity: number, sortOrder: number, code: string = null, description: string = null, isDeleted: boolean = null, ticketTypeId: string = null): any {
        return this.restClient.post('TicketType/UseCase/CreateTicketType', {
            eventId,
            name,
            quantity,
            sortOrder,
            code,
            description,
            isDeleted,
            ticketTypeId
        }    );
    }

    DeleteTicketType(ticketTypeId: string): any {
        return this.restClient.post('TicketType/UseCase/DeleteTicketType', {
            ticketTypeId
        }    );
    }

    SetDescriptionForTicketType(ticketTypeId: string, description: string): any {
        return this.restClient.post('TicketType/UseCase/SetDescriptionForTicketType', {
            ticketTypeId,
            description
        }    );
    }

    SetDisplayOrderForTicketType(ticketTypeId: string, displayOrder: number): any {
        return this.restClient.post('TicketType/UseCase/SetDisplayOrderForTicketType', {
            ticketTypeId,
            displayOrder
        }    );
    }

    SetNameForTicketType(ticketTypeId: string, name: string): any {
        return this.restClient.post('TicketType/UseCase/SetNameForTicketType', {
            ticketTypeId,
            name
        }    );
    }

    SetQuantityForTicketType(ticketTypeId: string, quantity: number): any {
        return this.restClient.post('TicketType/UseCase/SetQuantityForTicketType', {
            ticketTypeId,
            quantity
        }    );
    }
}
