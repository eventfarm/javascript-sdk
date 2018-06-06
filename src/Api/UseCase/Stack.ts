import { RestClientInterface } from '../../RestClient/RestClientInterface';

export class Stack {
    constructor(private restClient: RestClientInterface) {}

    // GET: Queries
    GetStack(stackId: string, withData: any = null): any {
        return this.restClient.get('Stack/UseCase/GetStack', {
            stackId,
            withData
        }    );
    }

    ListStacksForEvent(eventId: string, withData: any = null, excludeStackMethodFilter: any = null, shouldHideDeleted: boolean = null, query: string = null, sortBy: string = null, sortDirection: string = null, page: number = null, itemsPerPage: number = null): any {
        return this.restClient.get('Stack/UseCase/ListStacksForEvent', {
            eventId,
            withData,
            excludeStackMethodFilter,
            shouldHideDeleted,
            query,
            sortBy,
            sortDirection,
            page,
            itemsPerPage
        }    );
    }

    ListStacksForPromotion(promotionId: string, withData: any = null, excludeStackMethodFilter: any = null, shouldHideDeleted: boolean = null, query: string = null, sortBy: string = null, sortDirection: string = null, page: number = null, itemsPerPage: number = null): any {
        return this.restClient.get('Stack/UseCase/ListStacksForPromotion', {
            promotionId,
            withData,
            excludeStackMethodFilter,
            shouldHideDeleted,
            query,
            sortBy,
            sortDirection,
            page,
            itemsPerPage
        }    );
    }

    ListStacksForTicketType(ticketTypeId: string, page: number = null, itemsPerPage: number = null): any {
        return this.restClient.get('Stack/UseCase/ListStacksForTicketType', {
            ticketTypeId,
            page,
            itemsPerPage
        }    );
    }

    // POST USE CASES: Commands
    AddPromotionToStacks(promotionId: string, stackIds: any): any {
        return this.restClient.post('Stack/UseCase/AddPromotionToStacks', {
            promotionId,
            stackIds
        }    );
    }

    RemovePromotionFromStacks(promotionId: string, stackIds: any): any {
        return this.restClient.post('Stack/UseCase/RemovePromotionFromStacks', {
            promotionId,
            stackIds
        }    );
    }
}
