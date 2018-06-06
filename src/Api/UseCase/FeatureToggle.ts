import { RestClientInterface } from '../../RestClient/RestClientInterface';

export class FeatureToggle {
    constructor(private restClient: RestClientInterface) {}

    // GET: Queries
    GetFeatureGrant(featureName: string, userId: string = null): any {
        return this.restClient.get('FeatureToggle/UseCase/GetFeatureGrant', {
            featureName,
            userId
        }    );
    }

    // POST USE CASES: Commands
}
