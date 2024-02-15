/**
 * This file was auto generated, please do not edit it directly.
 **/
export interface MobileDTOTypeInterface {
  slug: string;
  name: string;
  description?: string;
  isInvitations: boolean;
  isEvents: boolean;
  isSessions: boolean;
}

export class Mobile {
  MobileDTOType(): MobileDTOTypeInterface[] {
    return [
      {
        slug: 'invitations',
        name: 'Invitations',
        description: null,
        isInvitations: true,
        isEvents: false,
        isSessions: false,
      },
      {
        slug: 'events',
        name: 'Events',
        description: null,
        isInvitations: false,
        isEvents: true,
        isSessions: false,
      },
      {
        slug: 'sessions',
        name: 'Sessions',
        description: null,
        isInvitations: false,
        isEvents: false,
        isSessions: true,
      },
    ];
  }
}
