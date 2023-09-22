/**
 * This file was auto generated, please do not edit it directly.
 **/
export interface PurchaseErrorTypeInterface {
  slug: string;
  name: string;
  description?: string;
  isCardDeclined: boolean;
  isCreditCardInvalid: boolean;
}

export class Payment {
  PurchaseErrorType(): PurchaseErrorTypeInterface[] {
    return [
      {
        slug: 'card_declined',
        name:
          'Your card was declined. Your request was in live mode, but used a known test card.',
        description: null,
        isCardDeclined: true,
        isCreditCardInvalid: false,
      },
      {
        slug: '2',
        name: 'Credit Card Invalid',
        description: 'The credit card number is invalid',
        isCardDeclined: false,
        isCreditCardInvalid: true,
      },
    ];
  }
}
