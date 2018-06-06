export interface FieldMappingTypeInterface {
    slug: string;
    name: string;
    description?: string;
    isSalesforceImportLead: boolean;
    isSalesforceImportContact: boolean;
    isSalesforceExportLead: boolean;
    isSalesforceExportContact: boolean;
    isMarketoFieldMapping: boolean;
}
export interface FieldTypeInterface {
    slug: string;
    name: string;
    description?: string;
    isQuestion: boolean;
    isUserAttribute: boolean;
    isUserIdentifier: boolean;
    isUserName: boolean;
}
export interface UpdateRuleTypeInterface {
    slug: string;
    name: string;
    description?: string;
    isNever: boolean;
    isDifferent: boolean;
    isBlank: boolean;
}

export class IntegrationFieldMapping {
    FieldMappingType(): FieldMappingTypeInterface[] {
        return [
            {
                'slug': 'salesforce-import-lead',
                'name': 'Salesforce Import Lead',
                'description': null,
                'isSalesforceImportLead': true,
                'isSalesforceImportContact': false,
                'isSalesforceExportLead': false,
                'isSalesforceExportContact': false,
                'isMarketoFieldMapping': false,
            },
            {
                'slug': 'salesforce-import-contact',
                'name': 'Salesforce Import Contact',
                'description': null,
                'isSalesforceImportLead': false,
                'isSalesforceImportContact': false,
                'isSalesforceExportLead': false,
                'isSalesforceExportContact': false,
                'isMarketoFieldMapping': false,
            },
            {
                'slug': 'salesforce-export-lead',
                'name': 'Salesforce Export Lead',
                'description': null,
                'isSalesforceImportLead': false,
                'isSalesforceImportContact': false,
                'isSalesforceExportLead': true,
                'isSalesforceExportContact': false,
                'isMarketoFieldMapping': false,
            },
            {
                'slug': 'salesforce-export-contact',
                'name': 'Salesforce Export Contact',
                'description': null,
                'isSalesforceImportLead': false,
                'isSalesforceImportContact': true,
                'isSalesforceExportLead': false,
                'isSalesforceExportContact': true,
                'isMarketoFieldMapping': false,
            },
            {
                'slug': 'marketo-field-mapping',
                'name': 'Marketo Field Mapping',
                'description': null,
                'isSalesforceImportLead': false,
                'isSalesforceImportContact': false,
                'isSalesforceExportLead': false,
                'isSalesforceExportContact': false,
                'isMarketoFieldMapping': true,
            },
        ];
    }

    FieldType(): FieldTypeInterface[] {
        return [
            {
                'slug': 'question',
                'name': 'Question',
                'description': null,
                'isQuestion': true,
                'isUserAttribute': false,
                'isUserIdentifier': false,
                'isUserName': false,
            },
            {
                'slug': 'user-attribute',
                'name': 'User Attribute',
                'description': null,
                'isQuestion': false,
                'isUserAttribute': true,
                'isUserIdentifier': false,
                'isUserName': false,
            },
            {
                'slug': 'user-name',
                'name': 'User Name',
                'description': null,
                'isQuestion': false,
                'isUserAttribute': false,
                'isUserIdentifier': false,
                'isUserName': true,
            },
            {
                'slug': 'user-identifier',
                'name': 'User Identifier',
                'description': null,
                'isQuestion': false,
                'isUserAttribute': false,
                'isUserIdentifier': true,
                'isUserName': false,
            },
        ];
    }

    UpdateRuleType(): UpdateRuleTypeInterface[] {
        return [
            {
                'slug': 'never',
                'name': 'Never',
                'description': null,
                'isNever': true,
                'isDifferent': false,
                'isBlank': false,
            },
            {
                'slug': 'different',
                'name': 'Only If Different',
                'description': null,
                'isNever': false,
                'isDifferent': true,
                'isBlank': false,
            },
            {
                'slug': 'blank',
                'name': 'Only If Blank',
                'description': null,
                'isNever': false,
                'isDifferent': false,
                'isBlank': true,
            },
        ];
    }
}
