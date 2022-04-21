/**
 * This file was auto generated, please do not edit it directly.
 **/
export interface LeadTemperatureTypeInterface {
  slug: string;
  name: string;
  description?: string;
  isCold: boolean;
  isWarm: boolean;
  isHot: boolean;
  isNotSet: boolean;
}

export class Lead {
  LeadTemperatureType(): LeadTemperatureTypeInterface[] {
    return [
      {
        slug: 'not-set',
        name: 'Not Set',
        description: null,
        isCold: false,
        isWarm: false,
        isHot: false,
        isNotSet: true,
      },
      {
        slug: 'cold',
        name: 'Cold',
        description: null,
        isCold: true,
        isWarm: false,
        isHot: false,
        isNotSet: false,
      },
      {
        slug: 'warm',
        name: 'Warm',
        description: null,
        isCold: false,
        isWarm: true,
        isHot: false,
        isNotSet: false,
      },
      {
        slug: 'hot',
        name: 'Hot',
        description: null,
        isCold: false,
        isWarm: false,
        isHot: true,
        isNotSet: false,
      },
    ];
  }
}
