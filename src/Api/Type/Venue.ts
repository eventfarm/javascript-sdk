/**
 * This file was auto generated, please do not edit it directly.
 **/
export interface VenueTypeInterface {
  slug: string;
  name: string;
  description?: string;
  isPhysical: boolean;
  isVirbela: boolean;
  isVirtual: boolean;
  isOther: boolean;
}

export class Venue {
  VenueType(): VenueTypeInterface[] {
    return [
      {
        slug: 'physical',
        name: 'Physical',
        description: null,
        isPhysical: true,
        isVirbela: false,
        isVirtual: false,
        isOther: false,
      },
      {
        slug: 'virbela',
        name: 'Virbela',
        description: null,
        isPhysical: false,
        isVirbela: true,
        isVirtual: false,
        isOther: false,
      },
      {
        slug: 'virtual',
        name: 'Virtual',
        description: null,
        isPhysical: false,
        isVirbela: false,
        isVirtual: true,
        isOther: false,
      },
      {
        slug: 'other',
        name: 'Other',
        description: null,
        isPhysical: false,
        isVirbela: false,
        isVirtual: false,
        isOther: true,
      },
    ];
  }
}
