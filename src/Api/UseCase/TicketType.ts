/**
 * This file was auto generated, please do not edit it directly.
**/

import { RestClientInterface } from '../../interfaces';

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
    CreateTicketType(eventId: string, name: string, code: string, quantity: number, sortOrder: number, isDeleted: boolean = null, description: string = null, ticketTypeId: string = null): any {
        return this.restClient.post('TicketType/UseCase/CreateTicketType', {
            eventId,
            name,
            code,
            quantity,
            sortOrder,
            isDeleted,
            description,
            ticketTypeId
        }    );
    }

    DeleteTicketType(ticketTypeId: string): any {
        return this.restClient.post('TicketType/UseCase/DeleteTicketType', {
            ticketTypeId
        }    );
    }

    SetDescriptionForTicketType(ticketTypeId: string, description: string = null): any {
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
