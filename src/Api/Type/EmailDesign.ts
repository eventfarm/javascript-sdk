/**
 * This file was auto generated, please do not edit it directly.
 **/
export interface EmailDesignLayoutTypeInterface {
  slug: string;
  name: string;
  description?: string;
  isBlank: boolean;
  isAltEmailLayout: boolean;
}

export class EmailDesign {
  EmailDesignLayoutType(): EmailDesignLayoutTypeInterface[] {
    return [
      {
        slug: 'blank',
        name: 'Blank',
        description: null,
        isBlank: true,
        isAltEmailLayout: false,
      },
      {
        slug: 'alt-email-layout',
        name: 'Alt Email Layout',
        description: null,
        isBlank: false,
        isAltEmailLayout: true,
      },
    ];
  }
}
