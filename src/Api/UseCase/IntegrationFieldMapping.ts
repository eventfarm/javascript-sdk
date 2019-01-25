/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../interfaces';

export class IntegrationFieldMapping {
  constructor(private restClient: RestClientInterface) {}

  // GET: Queries
  GetIntegrationFieldMapping(integrationFieldMappingId: string): any {
    return this.restClient.get(
      'IntegrationFieldMapping/UseCase/GetIntegrationFieldMapping',
      {
        integrationFieldMappingId,
      },
    );
  }

  ListFieldMappingsForSalesforceEventSetting(
    salesforceEventSettingId: string,
    fieldMappingType: string = null,
  ): any {
    return this.restClient.get(
      'IntegrationFieldMapping/UseCase/ListFieldMappingsForSalesforceEventSetting',
      {
        salesforceEventSettingId,
        fieldMappingType,
      },
    );
  }

  // POST USE CASES: Commands
  CreateIntegrationFieldMapping(
    fieldMappingType: string,
    integrationSettingType: string,
    integrationSettingId: string,
    fieldType: string,
    fieldId: string,
    integrationFieldValue: string,
    canUpdateEventFarmField: boolean,
    canUpdateIntegrationField: boolean,
    canDeleteMapping: boolean,
    updateRule: string = null,
    fieldName: string = null,
  ): any {
    return this.restClient.post(
      'IntegrationFieldMapping/UseCase/CreateIntegrationFieldMapping',
      {
        fieldMappingType,
        integrationSettingType,
        integrationSettingId,
        fieldType,
        fieldId,
        integrationFieldValue,
        canUpdateEventFarmField,
        canUpdateIntegrationField,
        canDeleteMapping,
        updateRule,
        fieldName,
      },
    );
  }

  DeleteIntegrationFieldMapping(integrationFieldMappingId: string): any {
    return this.restClient.post(
      'IntegrationFieldMapping/UseCase/DeleteIntegrationFieldMapping',
      {
        integrationFieldMappingId,
      },
    );
  }

  SetIntegrationFieldMappingFields(
    integrationFieldMappingId: string,
    fieldType: string,
    fieldId: string,
    fieldName: string = null,
  ): any {
    return this.restClient.post(
      'IntegrationFieldMapping/UseCase/SetIntegrationFieldMappingFields',
      {
        integrationFieldMappingId,
        fieldType,
        fieldId,
        fieldName,
      },
    );
  }

  SetIntegrationFieldMappingName(
    integrationFieldMappingId: string,
    integrationFieldName: string,
  ): any {
    return this.restClient.post(
      'IntegrationFieldMapping/UseCase/SetIntegrationFieldMappingName',
      {
        integrationFieldMappingId,
        integrationFieldName,
      },
    );
  }

  SetIntegrationFieldMappingUpdateRule(
    integrationFieldMappingId: string,
    updateRule: string,
  ): any {
    return this.restClient.post(
      'IntegrationFieldMapping/UseCase/SetIntegrationFieldMappingUpdateRule',
      {
        integrationFieldMappingId,
        updateRule,
      },
    );
  }
}
