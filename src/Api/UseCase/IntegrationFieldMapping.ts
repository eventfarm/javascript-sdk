/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class IntegrationFieldMapping {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - integrationFieldMappingId
   * @return Promise|Observable|any
   */
  GetIntegrationFieldMapping(integrationFieldMappingId: string): any {
    return this.restClient.get(
      'IntegrationFieldMapping/UseCase/GetIntegrationFieldMapping',
      {
        integrationFieldMappingId,
      },
    );
  }

  /**
   * @param string - salesforceEventSettingId
   * @param string? - fieldMappingType
   * @return Promise|Observable|any
   */
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

  // Commands

  /**
   * @param string - fieldMappingType salesforce-import-lead|salesforce-import-contact|salesforce-export-lead|salesforce-export-contact|marketo-field-mapping
   * @param string - integrationSettingType
   * @param string - integrationSettingId
   * @param string - fieldType question|user-attribute|user-name|user-identifier
   * @param string - fieldId
   * @param string - integrationFieldValue
   * @param bool - canUpdateEventFarmField true|false
   * @param bool - canUpdateIntegrationField true|false
   * @param bool - canDeleteMapping true|false
   * @param string? - updateRule never|different|blank
   * @param string? - fieldName
   * @return Promise|Observable|any
   */
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

  /**
   * @param string - integrationFieldMappingId
   * @return Promise|Observable|any
   */
  DeleteIntegrationFieldMapping(integrationFieldMappingId: string): any {
    return this.restClient.post(
      'IntegrationFieldMapping/UseCase/DeleteIntegrationFieldMapping',
      {
        integrationFieldMappingId,
      },
    );
  }

  /**
   * @param string - integrationFieldMappingId
   * @param string - fieldType question|user-attribute|user-name|user-identifier
   * @param string - fieldId
   * @param string? - fieldName
   * @return Promise|Observable|any
   */
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

  /**
   * @param string - integrationFieldMappingId
   * @param string - integrationFieldName
   * @return Promise|Observable|any
   */
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

  /**
   * @param string - integrationFieldMappingId
   * @param string - updateRule never|different|blank
   * @return Promise|Observable|any
   */
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
