/**
 * This file was auto generated, please do not edit it directly.
**/
export interface IntegrationInvitationCreationTypeInterface {
    slug: string;
    name: string;
    description?: string;
    isConfirmedNoEmail: boolean;
    isUnconfirmedNoEmail: boolean;
}
export interface IntegrationSettingTypeInterface {
    slug: string;
    name: string;
    description?: string;
    isSalesforce: boolean;
    isMarketo: boolean;
}
export interface UserAttributeInfoFieldTypeInterface {
    slug: string;
    name: string;
    description?: string;
}

export class Integration {
    IntegrationInvitationCreationType(): IntegrationInvitationCreationTypeInterface[] {
        return [
            {
                'slug': 'unconfirmed-no-email',
                'name': 'Unconfirmed No Email',
                'description': 'Add as Unconfirmed, email will not be sent.',
                'isConfirmedNoEmail': false,
                'isUnconfirmedNoEmail': true,
            },
            {
                'slug': 'confirmed-no-email',
                'name': 'Confirmed No Email',
                'description': 'Add as Confirmed, email will not be sent.',
                'isConfirmedNoEmail': true,
                'isUnconfirmedNoEmail': false,
            },
        ];
    }

    IntegrationSettingType(): IntegrationSettingTypeInterface[] {
        return [
            {
                'slug': 'salesforce',
                'name': 'Salesforce',
                'description': null,
                'isSalesforce': true,
                'isMarketo': false,
            },
            {
                'slug': 'marketo',
                'name': 'Marketo',
                'description': null,
                'isSalesforce': false,
                'isMarketo': true,
            },
        ];
    }

    UserAttributeInfoFieldType(): UserAttributeInfoFieldTypeInterface[] {
        return [
            {
                'slug': 'company',
                'name': 'Company',
                'description': null,
            },
            {
                'slug': 'position',
                'name': 'Position',
                'description': null,
            },
            {
                'slug': 'title',
                'name': 'Title',
                'description': null,
            },
            {
                'slug': 'telephone',
                'name': 'Telephone',
                'description': null,
            },
        ];
    }
}
