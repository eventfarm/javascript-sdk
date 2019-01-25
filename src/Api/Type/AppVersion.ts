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
}

export class AppVersion {
    AppVersionType(): AppVersionTypeInterface[] {
        return [
            {
                'slug': 'check-in-ios',
                'name': 'Check In iOS',
                'description': null,
                'isCheckInIos': true,
                'isCheckInAndroid': false,
                'isTicketBlockManagementIos': false,
                'isTicketBlockManagementAndroid': false,
            },
            {
                'slug': 'check-in-android',
                'name': 'Check In Android',
                'description': null,
                'isCheckInIos': false,
                'isCheckInAndroid': true,
                'isTicketBlockManagementIos': false,
                'isTicketBlockManagementAndroid': false,
            },
            {
                'slug': 'ticket-block-mgmt-ios',
                'name': 'Ticket Block Management iOS',
                'description': null,
                'isCheckInIos': false,
                'isCheckInAndroid': false,
                'isTicketBlockManagementIos': true,
                'isTicketBlockManagementAndroid': false,
            },
            {
                'slug': 'ticket-block-mgmt-android',
                'name': 'Ticket Block Management Android',
                'description': null,
                'isCheckInIos': false,
                'isCheckInAndroid': false,
                'isTicketBlockManagementIos': false,
                'isTicketBlockManagementAndroid': true,
            },
        ];
    }
}
