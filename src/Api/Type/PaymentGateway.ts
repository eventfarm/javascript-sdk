/**
 * This file was auto generated, please do not edit it directly.
 **/
export interface PaymentGatewayTypeInterface {
  slug: string;
  name: string;
  description?: string;
  isStripe: boolean;
  isPaypal: boolean;
  isAuthorizeNet: boolean;
}

export class PaymentGateway {
  PaymentGatewayType(): PaymentGatewayTypeInterface[] {
    return [
      {
        slug: 'STRIPE',
        name: 'STRIPE',
        description: 'STRIPE',
        isStripe: true,
        isPaypal: false,
        isAuthorizeNet: false,
      },
      {
        slug: 'PAYPAL',
        name: 'PAYPAL',
        description: 'PAYPAL',
        isStripe: false,
        isPaypal: true,
        isAuthorizeNet: false,
      },
      {
        slug: 'AUTHORIZENET',
        name: 'AUTHORIZENET',
        description: 'AUTHORIZENET',
        isStripe: false,
        isPaypal: false,
        isAuthorizeNet: true,
      },
    ];
  }
}
