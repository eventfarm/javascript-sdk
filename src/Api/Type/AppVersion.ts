/**
 * This file was auto generated, please do not edit it directly.
 **/
export interface AppCategoryTypeInterface {
  slug: string;
  name: string;
  description?: string;
  isCheckIn: boolean;
  isEFx: boolean;
  isEvents: boolean;
  isListed: boolean;
  isExhibitor: boolean;
}
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
  isWakanda: boolean;
}

export class AppVersion {
  AppCategoryType(): AppCategoryTypeInterface[] {
    return [
      {
        slug: 'check-in',
        name: 'Check-In by Event Farm',
        description: null,
        isCheckIn: true,
        isEFx: false,
        isEvents: false,
        isListed: false,
        isExhibitor: false,
      },
      {
        slug: 'efx',
        name: 'EFx by Event Farm',
        description: null,
        isCheckIn: false,
        isEFx: true,
        isEvents: false,
        isListed: false,
        isExhibitor: false,
      },
      {
        slug: 'events',
        name: 'Events by Event Farm',
        description: null,
        isCheckIn: false,
        isEFx: false,
        isEvents: true,
        isListed: false,
        isExhibitor: false,
      },
      {
        slug: 'listed',
        name: 'Listed by Event Farm',
        description: null,
        isCheckIn: false,
        isEFx: false,
        isEvents: false,
        isListed: true,
        isExhibitor: false,
      },
      {
        slug: 'exhibitor',
        name: 'Exhibitor by Event Farm',
        description: null,
        isCheckIn: false,
        isEFx: false,
        isEvents: false,
        isListed: false,
        isExhibitor: true,
      },
    ];
  }

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
        isWakanda: false,
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
        isWakanda: false,
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
        isWakanda: false,
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
        isWakanda: false,
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
        isWakanda: false,
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
        isWakanda: false,
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
        isWakanda: false,
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
        isWakanda: false,
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
        isWakanda: false,
      },
      {
        slug: 'wakanda',
        name: 'Wakanda',
        description: null,
        isCheckInIos: false,
        isCheckInAndroid: false,
        isTicketBlockManagementIos: false,
        isTicketBlockManagementAndroid: false,
        isEFxIos: false,
        isEFxAndroid: false,
        isEventsIos: false,
        isEventsAndroid: false,
        isLeadsFlutter: false,
        isWakanda: true,
      },
    ];
  }
}
