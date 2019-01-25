/**
 * This file was auto generated, please do not edit it directly.
**/

import { RestClientInterface } from '../../interfaces';

export class OAuth {
    constructor(private restClient: RestClientInterface) {}

    // GET: Queries
    GetOAuthAccessToken(oauthAccessTokenId: string): any {
        return this.restClient.get('OAuth/UseCase/GetOAuthAccessToken', {
            oauthAccessTokenId
        }    );
    }

    // POST USE CASES: Commands
    CreateGhostAccessToken(email: string): any {
        return this.restClient.post('OAuth/UseCase/CreateGhostAccessToken', {
            email
        }    );
    }
}
