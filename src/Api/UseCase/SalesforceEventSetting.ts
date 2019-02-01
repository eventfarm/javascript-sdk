/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class SalesforceEventSetting {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - salesforceEventSettingId
   * @return Promise|Observable|any
   */
  GetSalesforceEventSetting(salesforceEventSettingId: string): any {
    return this.restClient.get(
      'SalesforceEventSetting/UseCase/GetSalesforceEventSetting',
      {
        salesforceEventSettingId,
      },
    );
  }

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  ListSalesforceEventSettingsForEvent(eventId: string): any {
    return this.restClient.get(
      'SalesforceEventSetting/UseCase/ListSalesforceEventSettingsForEvent',
      {
        eventId,
      },
    );
  }

  // Commands

  /**
   * @param string - salesforceEventSettingId
   * @return Promise|Observable|any
   */
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

  /**
   * @param string - salesforceEventSettingId
   * @return Promise|Observable|any
   */
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

  /**
   * @param string - salesforceEventSettingId
   * @return Promise|Observable|any
   */
  EnableExportForSalesforceEventSetting(salesforceEventSettingId: string): any {
    return this.restClient.post(
      'SalesforceEventSetting/UseCase/EnableExportForSalesforceEventSetting',
      {
        salesforceEventSettingId,
      },
    );
  }

  /**
   * @param string - salesforceEventSettingId
   * @return Promise|Observable|any
   */
  EnableImportForSalesforceEventSetting(salesforceEventSettingId: string): any {
    return this.restClient.post(
      'SalesforceEventSetting/UseCase/EnableImportForSalesforceEventSetting',
      {
        salesforceEventSettingId,
      },
    );
  }

  /**
   * @param string - salesforceEventSettingId
   * @param string - campaignId
   * @param string - campaignName
   * @return Promise|Observable|any
   */
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

  /**
   * @param string - salesforceEventSettingId
   * @param number - invitationCount 1-100
   * @return Promise|Observable|any
   */
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

  /**
   * @param string - salesforceEventSettingId
   * @param string - invitationCreationType unconfirmed-no-email|confirmed-no-email
   * @return Promise|Observable|any
   */
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

  /**
   * @param string - salesforceEventSettingId
   * @param string - newContactRule do-nothing|create-contact|create-lead
   * @return Promise|Observable|any
   */
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

  /**
   * @param string - salesforceEventSettingId
   * @param string - stackId
   * @return Promise|Observable|any
   */
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
