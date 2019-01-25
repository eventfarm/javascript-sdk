/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class IntegrationStatusMapping {
  constructor(private restClient: RestClientInterface) {}

  // GET: Queries
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

  // POST USE CASES: Commands
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
