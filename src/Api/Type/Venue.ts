/**
 * This file was auto generated, please do not edit it directly.
 **/
export interface VenueTypeInterface {
  slug: string;
  name: string;
  description?: string;
  isInPerson: boolean;
  isVirbela: boolean;
  isVirtual: boolean;
  isOther: boolean;
}

export class Venue {
  VenueType(): VenueTypeInterface[] {
    return [
      {
        slug: 'in-person',
        name: 'In Person',
        description: null,
        isInPerson: true,
        isVirbela: false,
        isVirtual: false,
        isOther: false,
      },
      {
        slug: 'virbela',
        name: 'Virbela',
        description: null,
        isInPerson: false,
        isVirbela: true,
        isVirtual: false,
        isOther: false,
      },
      {
        slug: 'virtual',
        name: 'Virtual',
        description: null,
        isInPerson: false,
        isVirbela: false,
        isVirtual: true,
        isOther: false,
      },
      {
        slug: 'other',
        name: 'Other',
        description: null,
        isInPerson: false,
        isVirbela: false,
        isVirtual: false,
        isOther: true,
      },
    ];
  }
}
