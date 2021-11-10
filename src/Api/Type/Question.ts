/**
 * This file was auto generated, please do not edit it directly.
 **/
export interface AnswerBindingTypeInterface {
  slug: string;
  name: string;
  description?: string;
  isEqualTo: boolean;
  isNotEqualTo: boolean;
}

export class Question {
  AnswerBindingType(): AnswerBindingTypeInterface[] {
    return [
      {
        slug: 'equal_to',
        name: 'Equal To',
        description: null,
        isEqualTo: true,
        isNotEqualTo: false,
      },
      {
        slug: 'not_equal_to',
        name: 'Not Equal To',
        description: null,
        isEqualTo: false,
        isNotEqualTo: true,
      },
    ];
  }
}
