/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class IntegrationStatusMapping {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - salesforceEventSettingId
   * @param string? - statusMappingType salesforce-campaign-member
   * @return Promise|Observable|any
   */
  ListStatusMappingsForSalesforceEventSetting(
    salesforceEventSettingId: string,
    statusMappingType: string = null,
  ): any {
    return this.restClient.get(
      'IntegrationStatusMapping/UseCase/ListStatusMappingsForSalesforceEventSetting',
      {
        salesforceEventSettingId,
        statusMappingType,
      },
    );
  }

  // Commands

  /**
   * @param string - statusMappingType salesforce-campaign-member
   * @param string - integrationSettingType salesforce|marketo
   * @param string - integrationSettingId
   * @param string - statusId assigned|purchased|confirmed-by-rsvp|declined-by-rsvp|left-behind|not-yet-purchased|registered|unconfirmed|recycled|not-yet-registered|waitlisted|checked-in
   * @param string - integrationStatusName
   * @return Promise|Observable|any
   */
  CreateIntegrationStatusMapping(
    statusMappingType: string,
    integrationSettingType: string,
    integrationSettingId: string,
    statusId: string,
    integrationStatusName: string,
  ): any {
    return this.restClient.post(
      'IntegrationStatusMapping/UseCase/CreateIntegrationStatusMapping',
      {
        statusMappingType,
        integrationSettingType,
        integrationSettingId,
        statusId,
        integrationStatusName,
      },
    );
  }

  /**
   * @param string - integrationStatusMappingId
   * @param string - statusId assigned|purchased|confirmed-by-rsvp|declined-by-rsvp|left-behind|not-yet-purchased|registered|unconfirmed|recycled|not-yet-registered|waitlisted|checked-in
   * @return Promise|Observable|any
   */
  SetIntegrationStatusMappingStatusId(
    integrationStatusMappingId: string,
    statusId: string,
  ): any {
    return this.restClient.post(
      'IntegrationStatusMapping/UseCase/SetIntegrationStatusMappingStatusId',
      {
        integrationStatusMappingId,
        statusId,
      },
    );
  }

  /**
   * @param string - integrationStatusMappingId
   * @param string - integrationStatusValue
   * @return Promise|Observable|any
   */
  SetIntegrationStatusMappingValue(
    integrationStatusMappingId: string,
    integrationStatusValue: string,
  ): any {
    return this.restClient.post(
      'IntegrationStatusMapping/UseCase/SetIntegrationStatusMappingValue',
      {
        integrationStatusMappingId,
        integrationStatusValue,
      },
    );
  }
}
