/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../interfaces';

export class SalesforceEventSetting {
  constructor(private restClient: RestClientInterface) {}

  // GET: Queries
  GetSalesforceEventSetting(salesforceEventSettingId: string): any {
    return this.restClient.get(
      'SalesforceEventSetting/UseCase/GetSalesforceEventSetting',
      {
        salesforceEventSettingId,
      },
    );
  }

  ListSalesforceEventSettingsForEvent(eventId: string): any {
    return this.restClient.get(
      'SalesforceEventSetting/UseCase/ListSalesforceEventSettingsForEvent',
      {
        eventId,
      },
    );
  }

  // POST USE CASES: Commands
  DisableExportForSalesforceEventSetting(
    salesforceEventSettingId: string,
  ): any {
    return this.restClient.post(
      'SalesforceEventSetting/UseCase/DisableExportForSalesforceEventSetting',
      {
        salesforceEventSettingId,
      },
    );
  }

  DisableImportForSalesforceEventSetting(
    salesforceEventSettingId: string,
  ): any {
    return this.restClient.post(
      'SalesforceEventSetting/UseCase/DisableImportForSalesforceEventSetting',
      {
        salesforceEventSettingId,
      },
    );
  }

  EnableExportForSalesforceEventSetting(salesforceEventSettingId: string): any {
    return this.restClient.post(
      'SalesforceEventSetting/UseCase/EnableExportForSalesforceEventSetting',
      {
        salesforceEventSettingId,
      },
    );
  }

  EnableImportForSalesforceEventSetting(salesforceEventSettingId: string): any {
    return this.restClient.post(
      'SalesforceEventSetting/UseCase/EnableImportForSalesforceEventSetting',
      {
        salesforceEventSettingId,
      },
    );
  }

  SetCampaignForSalesforceEventSetting(
    salesforceEventSettingId: string,
    campaignId: string,
    campaignName: string,
  ): any {
    return this.restClient.post(
      'SalesforceEventSetting/UseCase/SetCampaignForSalesforceEventSetting',
      {
        salesforceEventSettingId,
        campaignId,
        campaignName,
      },
    );
  }

  SetInvitationCountForSalesforceEventSetting(
    salesforceEventSettingId: string,
    invitationCount: number,
  ): any {
    return this.restClient.post(
      'SalesforceEventSetting/UseCase/SetInvitationCountForSalesforceEventSetting',
      {
        salesforceEventSettingId,
        invitationCount,
      },
    );
  }

  SetInvitationCreationTypeForSalesforceEventSetting(
    salesforceEventSettingId: string,
    invitationCreationType: string,
  ): any {
    return this.restClient.post(
      'SalesforceEventSetting/UseCase/SetInvitationCreationTypeForSalesforceEventSetting',
      {
        salesforceEventSettingId,
        invitationCreationType,
      },
    );
  }

  SetNewContactRuleForSalesforceEventSetting(
    salesforceEventSettingId: string,
    newContactRule: string,
  ): any {
    return this.restClient.post(
      'SalesforceEventSetting/UseCase/SetNewContactRuleForSalesforceEventSetting',
      {
        salesforceEventSettingId,
        newContactRule,
      },
    );
  }

  SetStackForSalesforceEventSetting(
    salesforceEventSettingId: string,
    stackId: string,
  ): any {
    return this.restClient.post(
      'SalesforceEventSetting/UseCase/SetStackForSalesforceEventSetting',
      {
        salesforceEventSettingId,
        stackId,
      },
    );
  }
}
