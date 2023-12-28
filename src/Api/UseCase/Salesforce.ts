/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class Salesforce {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - poolId
   * @return Promise|Observable|any
   */
  GetSalesforceLimitsForPool(poolId: string): any {
    return this.restClient.get(
      'Salesforce/UseCase/GetSalesforceLimitsForPool',
      {
        poolId,
      },
    );
  }

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  GetSalesforceStatusForEvent(eventId: string): any {
    return this.restClient.get(
      'Salesforce/UseCase/GetSalesforceStatusForEvent',
      {
        eventId,
      },
    );
  }

  /**
   * @param string - poolId
   * @return Promise|Observable|any
   */
  GetSalesforceSyncUserInfoForPool(poolId: string): any {
    return this.restClient.get(
      'Salesforce/UseCase/GetSalesforceSyncUserInfoForPool',
      {
        poolId,
      },
    );
  }

  /**
   * @param string - poolId
   * @return Promise|Observable|any
   */
  ListSalesforceCampaignsForPool(poolId: string): any {
    return this.restClient.get(
      'Salesforce/UseCase/ListSalesforceCampaignsForPool',
      {
        poolId,
      },
    );
  }

  /**
   * @param string - poolId
   * @return Promise|Observable|any
   */
  ListSalesforceContactFieldsForPool(poolId: string): any {
    return this.restClient.get(
      'Salesforce/UseCase/ListSalesforceContactFieldsForPool',
      {
        poolId,
      },
    );
  }

  /**
   * @param string - poolId
   * @return Promise|Observable|any
   */
  ListSalesforceLeadFieldsForPool(poolId: string): any {
    return this.restClient.get(
      'Salesforce/UseCase/ListSalesforceLeadFieldsForPool',
      {
        poolId,
      },
    );
  }

  /**
   * @param string - eventId
   * @param string - campaignId
   * @return Promise|Observable|any
   */
  ListSalesforceStatusNamesForEvent(eventId: string, campaignId: string): any {
    return this.restClient.get(
      'Salesforce/UseCase/ListSalesforceStatusNamesForEvent',
      {
        eventId,
        campaignId,
      },
    );
  }

  // Commands

  /**
   * @param string - eventId
   * @param string - userId
   * @return Promise|Observable|any
   */
  ExportEventToSalesforce(eventId: string, userId: string): any {
    return this.restClient.post('Salesforce/UseCase/ExportEventToSalesforce', {
      eventId,
      userId,
    });
  }

  /**
   * @param string - invitationId
   * @return Promise|Observable|any
   */
  ExportInvitationToSalesforce(invitationId: string): any {
    return this.restClient.post(
      'Salesforce/UseCase/ExportInvitationToSalesforce',
      {
        invitationId,
      },
    );
  }

  /**
   * @param string - eventId
   * @param string? - userId
   * @return Promise|Observable|any
   */
  ImportCampaignMembersForEvent(eventId: string, userId: string = null): any {
    return this.restClient.post(
      'Salesforce/UseCase/ImportCampaignMembersForEvent',
      {
        eventId,
        userId,
      },
    );
  }

  /**
   * @param string - salesforceEventSettingId
   * @param string? - userId
   * @return Promise|Observable|any
   */
  ImportCampaignMembersForSalesforceEventSetting(
    salesforceEventSettingId: string,
    userId: string = null,
  ): any {
    return this.restClient.post(
      'Salesforce/UseCase/ImportCampaignMembersForSalesforceEventSetting',
      {
        salesforceEventSettingId,
        userId,
      },
    );
  }
}
