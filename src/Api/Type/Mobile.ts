/**
 * This file was auto generated, please do not edit it directly.
 **/
export interface MobileDTOTypeInterface {
  slug: string;
  name: string;
  description?: string;
  isInvitations: boolean;
  isEvents: boolean;
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
      },
      {
        slug: 'events',
        name: 'Events',
        description: null,
        isInvitations: false,
        isEvents: true,
      },
    ];
  }
}
