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
export interface QuestionContextTypeInterface {
  slug: string;
  name: string;
  description?: string;
  isRegistration: boolean;
  isLeadCapture: boolean;
}
export interface QuestionTypeInterface {
  slug: string;
  name: string;
  description?: string;
  isCheckbox: boolean;
  isRadio: boolean;
  isMulti: boolean;
  isText: boolean;
  isSelect: boolean;
  isDate: boolean;
  isWaiver: boolean;
  isAddress: boolean;
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

  QuestionContextType(): QuestionContextTypeInterface[] {
    return [
      {
        slug: 'registration',
        name: 'Registration',
        description: null,
        isRegistration: true,
        isLeadCapture: false,
      },
      {
        slug: 'lead',
        name: 'Lead Capture',
        description: null,
        isRegistration: false,
        isLeadCapture: true,
      },
    ];
  }

  QuestionType(): QuestionTypeInterface[] {
    return [
      {
        slug: 'checkbox',
        name: 'Checkboxes',
        description: null,
        isCheckbox: true,
        isRadio: false,
        isMulti: false,
        isText: false,
        isSelect: false,
        isDate: false,
        isWaiver: false,
        isAddress: false,
      },
      {
        slug: 'radio',
        name: 'Radio Buttons',
        description: null,
        isCheckbox: false,
        isRadio: true,
        isMulti: false,
        isText: false,
        isSelect: false,
        isDate: false,
        isWaiver: false,
        isAddress: false,
      },
      {
        slug: 'multi',
        name: 'Paragraph',
        description: null,
        isCheckbox: false,
        isRadio: false,
        isMulti: true,
        isText: false,
        isSelect: false,
        isDate: false,
        isWaiver: false,
        isAddress: false,
      },
      {
        slug: 'text',
        name: 'Short Answer',
        description: null,
        isCheckbox: false,
        isRadio: false,
        isMulti: false,
        isText: true,
        isSelect: false,
        isDate: false,
        isWaiver: false,
        isAddress: false,
      },
      {
        slug: 'select',
        name: 'Dropdown Select',
        description: null,
        isCheckbox: false,
        isRadio: false,
        isMulti: false,
        isText: false,
        isSelect: true,
        isDate: false,
        isWaiver: false,
        isAddress: false,
      },
      {
        slug: 'date',
        name: 'Select Date',
        description: null,
        isCheckbox: false,
        isRadio: false,
        isMulti: false,
        isText: false,
        isSelect: false,
        isDate: true,
        isWaiver: false,
        isAddress: false,
      },
      {
        slug: 'waiver',
        name: 'Sign Waiver',
        description: null,
        isCheckbox: false,
        isRadio: false,
        isMulti: false,
        isText: false,
        isSelect: false,
        isDate: false,
        isWaiver: true,
        isAddress: false,
      },
      {
        slug: 'address',
        name: 'Address',
        description: null,
        isCheckbox: false,
        isRadio: false,
        isMulti: false,
        isText: false,
        isSelect: false,
        isDate: false,
        isWaiver: false,
        isAddress: true,
      },
    ];
  }
}
