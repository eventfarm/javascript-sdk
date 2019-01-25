/**
 * This file was auto generated, please do not edit it directly.
 **/
export interface CampaignMemberTypeInterface {
  slug: string;
  name: string;
  description?: string;
  isContact: boolean;
  isLead: boolean;
}
export interface NewContactRuleTypeInterface {
  slug: string;
  name: string;
  description?: string;
  isDoNothing: boolean;
  isCreateContact: boolean;
  isCreateLead: boolean;
}

export class Salesforce {
  CampaignMemberType(): CampaignMemberTypeInterface[] {
    return [
      {
        slug: 'contact',
        name: 'Contact',
        description: null,
        isContact: true,
        isLead: false,
      },
      {
        slug: 'lead',
        name: 'Lead',
        description: null,
        isContact: false,
        isLead: true,
      },
    ];
  }

  NewContactRuleType(): NewContactRuleTypeInterface[] {
    return [
      {
        slug: 'do-nothing',
        name: 'Do Nothing',
        description: 'Do nothing. They will remain only in Event Farm.',
        isDoNothing: true,
        isCreateContact: false,
        isCreateLead: false,
      },
      {
        slug: 'create-contact',
        name: 'Create Contact',
        description: 'Create a new Contact in Salesforce.',
        isDoNothing: false,
        isCreateContact: true,
        isCreateLead: false,
      },
      {
        slug: 'create-lead',
        name: 'Create Lead',
        description: 'Create a new Lead in Salesforce.',
        isDoNothing: false,
        isCreateContact: false,
        isCreateLead: true,
      },
    ];
  }
}
