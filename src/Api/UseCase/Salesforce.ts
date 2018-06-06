import { RestClientInterface } from '../../RestClient/RestClientInterface';

export class Salesforce {
    constructor(private restClient: RestClientInterface) {}

    // GET: Queries
    GetSalesforceLimitsForPool(poolId: string): any {
        return this.restClient.get('Salesforce/UseCase/GetSalesforceLimitsForPool', {
            poolId
        }    );
    }

    GetSalesforceStatusForEvent(eventId: string): any {
        return this.restClient.get('Salesforce/UseCase/GetSalesforceStatusForEvent', {
            eventId
        }    );
    }

    GetSalesforceSyncUserInfoForPool(poolId: string): any {
        return this.restClient.get('Salesforce/UseCase/GetSalesforceSyncUserInfoForPool', {
            poolId
        }    );
    }

    ListSalesforceCampaignsForPool(poolId: string): any {
        return this.restClient.get('Salesforce/UseCase/ListSalesforceCampaignsForPool', {
            poolId
        }    );
    }

    ListSalesforceContactFieldsForPool(poolId: string): any {
        return this.restClient.get('Salesforce/UseCase/ListSalesforceContactFieldsForPool', {
            poolId
        }    );
    }

    ListSalesforceLeadFieldsForPool(poolId: string): any {
        return this.restClient.get('Salesforce/UseCase/ListSalesforceLeadFieldsForPool', {
            poolId
        }    );
    }

    ListSalesforceStatusNamesForEvent(eventId: string, campaignId: string): any {
        return this.restClient.get('Salesforce/UseCase/ListSalesforceStatusNamesForEvent', {
            eventId,
            campaignId
        }    );
    }

    // POST USE CASES: Commands
    ExportEventToSalesforce(eventId: string): any {
        return this.restClient.post('Salesforce/UseCase/ExportEventToSalesforce', {
            eventId
        }    );
    }

    ExportInvitationToSalesforce(invitationId: string): any {
        return this.restClient.post('Salesforce/UseCase/ExportInvitationToSalesforce', {
            invitationId
        }    );
    }

    ImportCampaignMembersForEvent(eventId: string, userId: string = null): any {
        return this.restClient.post('Salesforce/UseCase/ImportCampaignMembersForEvent', {
            eventId,
            userId
        }    );
    }

    ImportCampaignMembersForSalesforceEventSetting(salesforceEventSettingId: string, userId: string = null): any {
        return this.restClient.post('Salesforce/UseCase/ImportCampaignMembersForSalesforceEventSetting', {
            salesforceEventSettingId,
            userId
        }    );
    }
}
