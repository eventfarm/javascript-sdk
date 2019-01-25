/**
 * This file was auto generated, please do not edit it directly.
**/

import { RestClientInterface } from '../../interfaces';

export class Allotment {
    constructor(private restClient: RestClientInterface) {}

    // GET: Queries
    ListAllotmentsForStack(stackId: string, page: number = null, itemsPerPage: number = null): any {
        return this.restClient.get('Allotment/UseCase/ListAllotmentsForStack', {
            stackId,
            page,
            itemsPerPage
        }    );
    }

    // POST USE CASES: Commands
    CreateAllotment(ticketBlockId: string, stackId: string, quantity: number, allotmentId: string = null): any {
        return this.restClient.post('Allotment/UseCase/CreateAllotment', {
            ticketBlockId,
            stackId,
            quantity,
            allotmentId
        }    );
    }

    DeleteAllotment(allotmentId: string): any {
        return this.restClient.post('Allotment/UseCase/DeleteAllotment', {
            allotmentId
        }    );
    }

    SetAllotmentQuantity(allotmentId: string, quantity: number): any {
        return this.restClient.post('Allotment/UseCase/SetAllotmentQuantity', {
            allotmentId,
            quantity
        }    );
    }
}
