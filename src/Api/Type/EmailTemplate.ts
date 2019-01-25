/**
 * This file was auto generated, please do not edit it directly.
**/
export interface EmailTemplateTypeInterface {
    slug: string;
    name: string;
    description?: string;
    isFullResponsive: boolean;
    isMobileResponsive: boolean;
    isDefaultInvite: boolean;
    isMobileColumns: boolean;
    isFullWidthHeader: boolean;
}

export class EmailTemplate {
    EmailTemplateType(): EmailTemplateTypeInterface[] {
        return [
            {
                'slug': 'simple-template',
                'name': 'Simple Template',
                'description': 'This is simple template',
                'isFullResponsive': true,
                'isMobileResponsive': false,
                'isDefaultInvite': false,
                'isMobileColumns': false,
                'isFullWidthHeader': false,
            },
            {
                'slug': 'simple-header',
                'name': 'Simple Header',
                'description': 'This is simple header',
                'isFullResponsive': false,
                'isMobileResponsive': false,
                'isDefaultInvite': false,
                'isMobileColumns': true,
                'isFullWidthHeader': false,
            },
            {
                'slug': 'simple-template-border',
                'name': 'Simple Template Border',
                'description': 'This is simple template border',
                'isFullResponsive': false,
                'isMobileResponsive': true,
                'isDefaultInvite': false,
                'isMobileColumns': false,
                'isFullWidthHeader': false,
            },
            {
                'slug': 'default-invite',
                'name': 'Default Invite',
                'description': 'This is default invite',
                'isFullResponsive': false,
                'isMobileResponsive': false,
                'isDefaultInvite': true,
                'isMobileColumns': false,
                'isFullWidthHeader': false,
            },
            {
                'slug': 'full-width-header',
                'name': 'Full Width Header',
                'description': 'This is full width header',
                'isFullResponsive': false,
                'isMobileResponsive': false,
                'isDefaultInvite': false,
                'isMobileColumns': false,
                'isFullWidthHeader': true,
            },
        ];
    }
}
