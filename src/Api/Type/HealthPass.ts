/**
 * This file was auto generated, please do not edit it directly.
 **/
export interface HealthPassScoreTypeInterface {
  slug: string;
  name: string;
  description?: string;
  isCleared: boolean;
  isNotCleared: boolean;
  isPending: boolean;
  isUnknown: boolean;
}

export class HealthPass {
  HealthPassScoreType(): HealthPassScoreTypeInterface[] {
    return [
      {
        slug: 'green',
        name: 'Cleared',
        description: null,
        isCleared: true,
        isNotCleared: false,
        isPending: false,
        isUnknown: false,
      },
      {
        slug: 'red',
        name: 'Not Cleared',
        description: null,
        isCleared: false,
        isNotCleared: true,
        isPending: false,
        isUnknown: false,
      },
      {
        slug: 'amber',
        name: 'Pending',
        description: null,
        isCleared: false,
        isNotCleared: false,
        isPending: true,
        isUnknown: false,
      },
      {
        slug: 'unknown',
        name: 'Unknown',
        description: null,
        isCleared: false,
        isNotCleared: false,
        isPending: false,
        isUnknown: true,
      },
    ];
  }
}
