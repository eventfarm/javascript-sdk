/**
 * This file was auto generated, please do not edit it directly.
 **/
export interface EFxModuleTypeInterface {
  id: any;
  slug: string;
  name: string;
  description?: string;
  isAccessControl: boolean;
  isActivation: boolean;
  isConcierge: boolean;
  isAthleteBag: boolean;
  isDigitalMemoryBank: boolean;
  isGuestInfo: boolean;
  isMessaging: boolean;
  isProductPickup: boolean;
  isRaffle: boolean;
  isReservation: boolean;
  isRoamingPhotographer: boolean;
  isSmartBar: boolean;
  isSmsQuiz: boolean;
  isTeams: boolean;
  isAdminOnly: boolean;
  iconURL: any;
  dependencyNFC: any;
  dependencySMS: any;
  compatibilityNFC: any;
  compatibilitySMS: any;
}

export class EFx {
  EFxModuleType(): EFxModuleTypeInterface[] {
    return [
      {
        id: 'AccessControl',
        slug: 'access-control',
        name: 'Access Control',
        description:
          'Scan credentials to grant access to exclusive event experiences',
        isAccessControl: true,
        isActivation: false,
        isConcierge: false,
        isAthleteBag: false,
        isDigitalMemoryBank: false,
        isGuestInfo: false,
        isMessaging: false,
        isProductPickup: false,
        isRaffle: false,
        isReservation: false,
        isRoamingPhotographer: false,
        isSmartBar: false,
        isSmsQuiz: false,
        isTeams: false,
        isAdminOnly: false,
        iconURL:
          'https://firebasestorage.googleapis.com/v0/b/efx-production.appspot.com/o/Module%20Icons%2FAccess%20Control%20Icon.png?alt=media&amp;token=4d23a3f0-212a-4f23-8110-9e7a6fe791d8',
        dependencyNFC: true,
        dependencySMS: false,
        compatibilityNFC: true,
        compatibilitySMS: true,
      },
      {
        id: 'Concierge',
        slug: 'concierge',
        name: 'Concierge',
        description:
          'Deliver key information to attendees when they scan credentials at kiosks',
        isAccessControl: false,
        isActivation: false,
        isConcierge: true,
        isAthleteBag: false,
        isDigitalMemoryBank: false,
        isGuestInfo: false,
        isMessaging: false,
        isProductPickup: false,
        isRaffle: false,
        isReservation: false,
        isRoamingPhotographer: false,
        isSmartBar: false,
        isSmsQuiz: false,
        isTeams: false,
        isAdminOnly: false,
        iconURL:
          'https://firebasestorage.googleapis.com/v0/b/efx-production.appspot.com/o/Module%20Icons%2FAccess%20Control%20Icon.png?alt=media&amp;token=4d23a3f0-212a-4f23-8110-9e7a6fe791d8',
        dependencyNFC: true,
        dependencySMS: false,
        compatibilityNFC: true,
        compatibilitySMS: false,
      },
      {
        id: 'DigitalMemoryBank',
        slug: 'digital-memory-bank',
        name: 'Digital Memory Bank',
        description:
          'Deliver key information to attendees&#039; when they scan credentials at kiosks',
        isAccessControl: false,
        isActivation: false,
        isConcierge: false,
        isAthleteBag: false,
        isDigitalMemoryBank: true,
        isGuestInfo: false,
        isMessaging: false,
        isProductPickup: false,
        isRaffle: false,
        isReservation: false,
        isRoamingPhotographer: false,
        isSmartBar: false,
        isSmsQuiz: false,
        isTeams: false,
        isAdminOnly: false,
        iconURL:
          'https://firebasestorage.googleapis.com/v0/b/efx-production.appspot.com/o/Module%20Icons%2FAccess%20Control%20Icon.png?alt=media&amp;token=4d23a3f0-212a-4f23-8110-9e7a6fe791d8',
        dependencyNFC: false,
        dependencySMS: false,
        compatibilityNFC: true,
        compatibilitySMS: true,
      },
      {
        id: 'Messaging',
        slug: 'messaging',
        name: 'Messaging',
        description: 'Engage attendees through messages delivered over SMS',
        isAccessControl: false,
        isActivation: false,
        isConcierge: false,
        isAthleteBag: false,
        isDigitalMemoryBank: false,
        isGuestInfo: false,
        isMessaging: true,
        isProductPickup: false,
        isRaffle: false,
        isReservation: false,
        isRoamingPhotographer: false,
        isSmartBar: false,
        isSmsQuiz: false,
        isTeams: false,
        isAdminOnly: false,
        iconURL:
          'https://firebasestorage.googleapis.com/v0/b/efx-production.appspot.com/o/Module%20Icons%2FAccess%20Control%20Icon.png?alt=media&amp;token=4d23a3f0-212a-4f23-8110-9e7a6fe791d8',
        dependencyNFC: false,
        dependencySMS: true,
        compatibilityNFC: false,
        compatibilitySMS: true,
      },
      {
        id: 'SMSQuiz',
        slug: 'smsquiz',
        name: 'Poll',
        description:
          'Poll guests over SMS. View responses in-app or display on visualizers',
        isAccessControl: false,
        isActivation: false,
        isConcierge: false,
        isAthleteBag: false,
        isDigitalMemoryBank: false,
        isGuestInfo: false,
        isMessaging: false,
        isProductPickup: false,
        isRaffle: false,
        isReservation: false,
        isRoamingPhotographer: false,
        isSmartBar: false,
        isSmsQuiz: true,
        isTeams: false,
        isAdminOnly: false,
        iconURL:
          'https://firebasestorage.googleapis.com/v0/b/efx-production.appspot.com/o/Module%20Icons%2FAccess%20Control%20Icon.png?alt=media&amp;token=4d23a3f0-212a-4f23-8110-9e7a6fe791d8',
        dependencyNFC: false,
        dependencySMS: true,
        compatibilityNFC: false,
        compatibilitySMS: true,
      },
      {
        id: 'ProductPickup',
        slug: 'product-pickup',
        name: 'Product Pickup',
        description:
          'Scan tag to confirm attendees eligibility to receive or purchase products',
        isAccessControl: false,
        isActivation: false,
        isConcierge: false,
        isAthleteBag: false,
        isDigitalMemoryBank: false,
        isGuestInfo: false,
        isMessaging: false,
        isProductPickup: true,
        isRaffle: false,
        isReservation: false,
        isRoamingPhotographer: false,
        isSmartBar: false,
        isSmsQuiz: false,
        isTeams: false,
        isAdminOnly: false,
        iconURL:
          'https://firebasestorage.googleapis.com/v0/b/efx-production.appspot.com/o/Module%20Icons%2FAccess%20Control%20Icon.png?alt=media&amp;token=4d23a3f0-212a-4f23-8110-9e7a6fe791d8',
        dependencyNFC: true,
        dependencySMS: false,
        compatibilityNFC: true,
        compatibilitySMS: true,
      },
      {
        id: 'Raffle',
        slug: 'raffle',
        name: 'Raffle',
        description:
          'Select prize winners by random drawing and notify attendees via SMS',
        isAccessControl: false,
        isActivation: false,
        isConcierge: false,
        isAthleteBag: false,
        isDigitalMemoryBank: false,
        isGuestInfo: false,
        isMessaging: false,
        isProductPickup: false,
        isRaffle: true,
        isReservation: false,
        isRoamingPhotographer: false,
        isSmartBar: false,
        isSmsQuiz: false,
        isTeams: false,
        isAdminOnly: false,
        iconURL:
          'https://firebasestorage.googleapis.com/v0/b/efx-production.appspot.com/o/Module%20Icons%2FAccess%20Control%20Icon.png?alt=media&amp;token=4d23a3f0-212a-4f23-8110-9e7a6fe791d8',
        dependencyNFC: true,
        dependencySMS: true,
        compatibilityNFC: true,
        compatibilitySMS: true,
      },
      {
        id: 'Reservation',
        slug: 'reservation',
        name: 'Reservation',
        description:
          'Manage high-interest access points by queueing attendees in a virtual line',
        isAccessControl: false,
        isActivation: false,
        isConcierge: false,
        isAthleteBag: false,
        isDigitalMemoryBank: false,
        isGuestInfo: false,
        isMessaging: false,
        isProductPickup: false,
        isRaffle: false,
        isReservation: true,
        isRoamingPhotographer: false,
        isSmartBar: false,
        isSmsQuiz: false,
        isTeams: false,
        isAdminOnly: false,
        iconURL:
          'https://firebasestorage.googleapis.com/v0/b/efx-production.appspot.com/o/Module%20Icons%2FAccess%20Control%20Icon.png?alt=media&amp;token=4d23a3f0-212a-4f23-8110-9e7a6fe791d8',
        dependencyNFC: true,
        dependencySMS: false,
        compatibilityNFC: true,
        compatibilitySMS: true,
      },
      {
        id: 'RoamingPhotographer',
        slug: 'roaming-photographer',
        name: 'Roaming Photographer',
        description:
          'Take photos using custom event filters. Deliver images to attendees over SMS',
        isAccessControl: false,
        isActivation: false,
        isConcierge: false,
        isAthleteBag: false,
        isDigitalMemoryBank: false,
        isGuestInfo: false,
        isMessaging: false,
        isProductPickup: false,
        isRaffle: false,
        isReservation: false,
        isRoamingPhotographer: true,
        isSmartBar: false,
        isSmsQuiz: false,
        isTeams: false,
        isAdminOnly: false,
        iconURL:
          'https://firebasestorage.googleapis.com/v0/b/efx-production.appspot.com/o/Module%20Icons%2FAccess%20Control%20Icon.png?alt=media&amp;token=4d23a3f0-212a-4f23-8110-9e7a6fe791d8',
        dependencyNFC: false,
        dependencySMS: false,
        compatibilityNFC: true,
        compatibilitySMS: true,
      },
      {
        id: 'Smart Bar',
        slug: 'smart-bar',
        name: 'Smart Bar',
        description:
          'Receive and fill attendee orders placed by scanning credentials at bar kiosks',
        isAccessControl: false,
        isActivation: false,
        isConcierge: false,
        isAthleteBag: false,
        isDigitalMemoryBank: false,
        isGuestInfo: false,
        isMessaging: false,
        isProductPickup: false,
        isRaffle: false,
        isReservation: false,
        isRoamingPhotographer: false,
        isSmartBar: true,
        isSmsQuiz: false,
        isTeams: false,
        isAdminOnly: false,
        iconURL:
          'https://firebasestorage.googleapis.com/v0/b/efx-production.appspot.com/o/Module%20Icons%2FAccess%20Control%20Icon.png?alt=media&amp;token=4d23a3f0-212a-4f23-8110-9e7a6fe791d8',
        dependencyNFC: true,
        dependencySMS: false,
        compatibilityNFC: true,
        compatibilitySMS: false,
      },
      {
        id: 'Teams',
        slug: 'teams',
        name: 'Teams ',
        description:
          'Build attendee teams for competition; track scores on the leaderboard',
        isAccessControl: false,
        isActivation: false,
        isConcierge: false,
        isAthleteBag: false,
        isDigitalMemoryBank: false,
        isGuestInfo: false,
        isMessaging: false,
        isProductPickup: false,
        isRaffle: false,
        isReservation: false,
        isRoamingPhotographer: false,
        isSmartBar: false,
        isSmsQuiz: false,
        isTeams: true,
        isAdminOnly: false,
        iconURL:
          'https://firebasestorage.googleapis.com/v0/b/efx-production.appspot.com/o/Module%20Icons%2FAccess%20Control%20Icon.png?alt=media&amp;token=4d23a3f0-212a-4f23-8110-9e7a6fe791d8',
        dependencyNFC: false,
        dependencySMS: false,
        compatibilityNFC: false,
        compatibilitySMS: true,
      },
    ];
  }
}
