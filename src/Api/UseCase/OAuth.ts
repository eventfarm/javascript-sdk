import { RestClientInterface } from '../../RestClient/RestClientInterface';

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

    CreateOAuthClient(name: string, redirectUrls: any, identifier: string = null, secret: string = null): any {
        return this.restClient.post('OAuth/UseCase/CreateOAuthClient', {
            name,
            redirectUrls,
            identifier,
            secret
        }    );
    }

    RevokeAccessToken(identifier: string): any {
        return this.restClient.post('OAuth/UseCase/RevokeAccessToken', {
            identifier
        }    );
    }

    SetRedirectUrlsForOAuthClient(identifier: string, redirectUrls: any): any {
        return this.restClient.post('OAuth/UseCase/SetRedirectUrlsForOAuthClient', {
            identifier,
            redirectUrls
        }    );
    }
}
