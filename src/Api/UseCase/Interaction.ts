import { RestClientInterface } from '../../RestClient/RestClientInterface';

export class Interaction {
    constructor(private restClient: RestClientInterface) {}

    // GET: Queries
    ListInteractionsForInvitation(invitationId: string, withData: any = null, page: number = null, itemsPerPage: number = null): any {
        return this.restClient.get('Interaction/UseCase/ListInteractionsForInvitation', {
            invitationId,
            withData,
            page,
            itemsPerPage
        }    );
    }

    ListInteractionsForTag(tagId: string, withData: any = null, page: number = null, itemsPerPage: number = null): any {
        return this.restClient.get('Interaction/UseCase/ListInteractionsForTag', {
            tagId,
            withData,
            page,
            itemsPerPage
        }    );
    }

    // POST USE CASES: Commands
    CreateInteraction(invitationId: string, bodyContent: string, tagId: string, type: string, interactionId: string = null): any {
        return this.restClient.post('Interaction/UseCase/CreateInteraction', {
            invitationId,
            bodyContent,
            tagId,
            type,
            interactionId
        }    );
    }
}
