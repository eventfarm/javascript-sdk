/**
 * This file was auto generated, please do not edit it directly.
**/

import { RestClientInterface } from '../../interfaces';

export class UserAttribute {
    constructor(private restClient: RestClientInterface) {}

    // GET: Queries
    ListCustomAttributesForUser(poolId: string, userId: string, page: number = null, itemsPerPage: number = null): any {
        return this.restClient.get('UserAttribute/UseCase/ListCustomAttributesForUser', {
            poolId,
            userId,
            page,
            itemsPerPage
        }    );
    }

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

    SetCustomUserAttribute(poolId: string, userId: string, attributeKey: string, attributeValue: string): any {
        return this.restClient.post('UserAttribute/UseCase/SetCustomUserAttribute', {
            poolId,
            userId,
            attributeKey,
            attributeValue
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
