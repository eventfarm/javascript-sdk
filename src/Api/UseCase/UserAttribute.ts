import { RestClientInterface } from '../../RestClient/RestClientInterface';

export class UserAttribute {
    constructor(private restClient: RestClientInterface) {}

    // GET: Queries
    ListInfoAttributesForUser(poolId: string, userId: string, page: number = null, itemsPerPage: number = null): any {
        return this.restClient.get('UserAttribute/UseCase/ListInfoAttributesForUser', {
            poolId,
            userId,
            page,
            itemsPerPage
        }    );
    }

    // POST USE CASES: Commands
    RemoveUserAttribute(userAttributeId: string): any {
        return this.restClient.post('UserAttribute/UseCase/RemoveUserAttribute', {
            userAttributeId
        }    );
    }

    SetInfoUserAttribute(poolId: string, userId: string, attributeKey: string, attributeValue: string): any {
        return this.restClient.post('UserAttribute/UseCase/SetInfoUserAttribute', {
            poolId,
            userId,
            attributeKey,
            attributeValue
        }    );
    }
}
