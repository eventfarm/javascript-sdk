/**
 * This file was auto generated, please do not edit it directly.
 **/
export interface AppVersionTypeInterface {
  slug: string;
  name: string;
  description?: string;
  isCheckInIos: boolean;
  isCheckInAndroid: boolean;
  isTicketBlockManagementIos: boolean;
  isTicketBlockManagementAndroid: boolean;
  isEFxIos: boolean;
  isEFxAndroid: boolean;
  isEventsIos: boolean;
  isEventsAndroid: boolean;
  isLeadsFlutter: boolean;
}

export class AppVersion {
  AppVersionType(): AppVersionTypeInterface[] {
    return [
      {
        slug: 'check-in-ios',
        name: 'Check In iOS',
        description: null,
        isCheckInIos: true,
        isCheckInAndroid: false,
        isTicketBlockManagementIos: false,
        isTicketBlockManagementAndroid: false,
        isEFxIos: false,
        isEFxAndroid: false,
        isEventsIos: false,
        isEventsAndroid: false,
        isLeadsFlutter: false,
      },
      {
        slug: 'check-in-android',
        name: 'Check In Android',
        description: null,
        isCheckInIos: false,
        isCheckInAndroid: true,
        isTicketBlockManagementIos: false,
        isTicketBlockManagementAndroid: false,
        isEFxIos: false,
        isEFxAndroid: false,
        isEventsIos: false,
        isEventsAndroid: false,
        isLeadsFlutter: false,
      },
      {
        slug: 'ticket-block-mgmt-ios',
        name: 'Ticket Block Management iOS',
        description: null,
        isCheckInIos: false,
        isCheckInAndroid: false,
        isTicketBlockManagementIos: true,
        isTicketBlockManagementAndroid: false,
        isEFxIos: false,
        isEFxAndroid: false,
        isEventsIos: false,
        isEventsAndroid: false,
        isLeadsFlutter: false,
      },
      {
        slug: 'ticket-block-mgmt-android',
        name: 'Ticket Block Management Android',
        description: null,
        isCheckInIos: false,
        isCheckInAndroid: false,
        isTicketBlockManagementIos: false,
        isTicketBlockManagementAndroid: true,
        isEFxIos: false,
        isEFxAndroid: false,
        isEventsIos: false,
        isEventsAndroid: false,
        isLeadsFlutter: false,
      },
      {
        slug: 'efx-ios',
        name: 'EFx iOS',
        description: null,
        isCheckInIos: false,
        isCheckInAndroid: false,
        isTicketBlockManagementIos: false,
        isTicketBlockManagementAndroid: false,
        isEFxIos: true,
        isEFxAndroid: false,
        isEventsIos: false,
        isEventsAndroid: false,
        isLeadsFlutter: false,
      },
      {
        slug: 'efx-android',
        name: 'EFx Android',
        description: null,
        isCheckInIos: false,
        isCheckInAndroid: false,
        isTicketBlockManagementIos: false,
        isTicketBlockManagementAndroid: false,
        isEFxIos: false,
        isEFxAndroid: true,
        isEventsIos: false,
        isEventsAndroid: false,
        isLeadsFlutter: false,
      },
      {
        slug: 'events-ios',
        name: 'Events iOS',
        description: null,
        isCheckInIos: false,
        isCheckInAndroid: false,
        isTicketBlockManagementIos: false,
        isTicketBlockManagementAndroid: false,
        isEFxIos: false,
        isEFxAndroid: false,
        isEventsIos: true,
        isEventsAndroid: false,
        isLeadsFlutter: false,
      },
      {
        slug: 'events-android',
        name: 'Events Android',
        description: null,
        isCheckInIos: false,
        isCheckInAndroid: false,
        isTicketBlockManagementIos: false,
        isTicketBlockManagementAndroid: false,
        isEFxIos: false,
        isEFxAndroid: false,
        isEventsIos: false,
        isEventsAndroid: true,
        isLeadsFlutter: false,
      },
      {
        slug: 'leads-flutter',
        name: 'Leads Flutter',
        description: null,
        isCheckInIos: false,
        isCheckInAndroid: false,
        isTicketBlockManagementIos: false,
        isTicketBlockManagementAndroid: false,
        isEFxIos: false,
        isEFxAndroid: false,
        isEventsIos: false,
        isEventsAndroid: false,
        isLeadsFlutter: true,
      },
    ];
  }
}
