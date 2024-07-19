/**
 * This file was auto generated, please do not edit it directly.
 **/
export interface ActionSubTypeInterface {
  slug: string;
  name: string;
  description?: string;
  isAdministration: boolean;
  isSecurity: boolean;
  isAccountManagement: boolean;
  isEventManagement: boolean;
  isExperiential: boolean;
  isFinancial: boolean;
  isIntegration: boolean;
  isInvitation: boolean;
  isNone: boolean;
}
export interface ActionTypeInterface {
  slug: string;
  name: string;
  description?: string;
  isSystem: boolean;
  isPool: boolean;
  isEvent: boolean;
}

export class AuditLog {
  ActionSubType(): ActionSubTypeInterface[] {
    return [
      {
        slug: 'administration',
        name: 'Administration',
        description: null,
        isAdministration: true,
        isSecurity: false,
        isAccountManagement: false,
        isEventManagement: false,
        isExperiential: false,
        isFinancial: false,
        isIntegration: false,
        isInvitation: false,
        isNone: false,
      },
      {
        slug: 'security',
        name: 'Security',
        description: null,
        isAdministration: false,
        isSecurity: true,
        isAccountManagement: false,
        isEventManagement: false,
        isExperiential: false,
        isFinancial: false,
        isIntegration: false,
        isInvitation: false,
        isNone: false,
      },
      {
        slug: 'account-management',
        name: 'Account Management',
        description: null,
        isAdministration: false,
        isSecurity: false,
        isAccountManagement: true,
        isEventManagement: false,
        isExperiential: false,
        isFinancial: false,
        isIntegration: false,
        isInvitation: false,
        isNone: false,
      },
      {
        slug: 'event-management',
        name: 'Event Management',
        description: null,
        isAdministration: false,
        isSecurity: false,
        isAccountManagement: false,
        isEventManagement: true,
        isExperiential: false,
        isFinancial: false,
        isIntegration: false,
        isInvitation: false,
        isNone: false,
      },
      {
        slug: 'experiential',
        name: 'Experiential',
        description: null,
        isAdministration: false,
        isSecurity: false,
        isAccountManagement: false,
        isEventManagement: false,
        isExperiential: true,
        isFinancial: false,
        isIntegration: false,
        isInvitation: false,
        isNone: false,
      },
      {
        slug: 'financial',
        name: 'Financial',
        description: null,
        isAdministration: false,
        isSecurity: false,
        isAccountManagement: false,
        isEventManagement: false,
        isExperiential: false,
        isFinancial: true,
        isIntegration: false,
        isInvitation: false,
        isNone: false,
      },
      {
        slug: 'integration',
        name: 'Integration',
        description: null,
        isAdministration: false,
        isSecurity: false,
        isAccountManagement: false,
        isEventManagement: false,
        isExperiential: false,
        isFinancial: false,
        isIntegration: true,
        isInvitation: false,
        isNone: false,
      },
      {
        slug: 'invitation',
        name: 'Invitation',
        description: null,
        isAdministration: false,
        isSecurity: false,
        isAccountManagement: false,
        isEventManagement: false,
        isExperiential: false,
        isFinancial: false,
        isIntegration: false,
        isInvitation: true,
        isNone: false,
      },
      {
        slug: 'none',
        name: 'none',
        description: null,
        isAdministration: false,
        isSecurity: false,
        isAccountManagement: false,
        isEventManagement: false,
        isExperiential: false,
        isFinancial: false,
        isIntegration: false,
        isInvitation: false,
        isNone: true,
      },
    ];
  }

  ActionType(): ActionTypeInterface[] {
    return [
      {
        slug: 'system',
        name: 'System',
        description: null,
        isSystem: true,
        isPool: false,
        isEvent: false,
      },
      {
        slug: 'pool',
        name: 'Pool',
        description: null,
        isSystem: false,
        isPool: true,
        isEvent: false,
      },
      {
        slug: 'event',
        name: 'Event',
        description: null,
        isSystem: false,
        isPool: false,
        isEvent: true,
      },
    ];
  }
}
