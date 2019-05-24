/**
 * This file was auto generated, please do not edit it directly.
 **/
export interface PromotionTypeInterface {
  slug: string;
  name: string;
  description?: string;
  isDiscount: boolean;
  isOffer: boolean;
  isPercentage: boolean;
  isQuantity: boolean;
  isShipping: boolean;
}

export class Promotion {
  PromotionType(): PromotionTypeInterface[] {
    return [
      {
        slug: 'discount',
        name: 'Discount',
        description: '$ Off',
        isDiscount: true,
        isOffer: false,
        isPercentage: false,
        isQuantity: false,
        isShipping: false,
      },
      {
        slug: 'offer',
        name: 'Offer',
        description: 'Reveal Access Types',
        isDiscount: false,
        isOffer: true,
        isPercentage: false,
        isQuantity: false,
        isShipping: false,
      },
      {
        slug: 'percentage',
        name: 'Percentage',
        description: '% Off',
        isDiscount: false,
        isOffer: false,
        isPercentage: true,
        isQuantity: false,
        isShipping: false,
      },
      {
        slug: 'quantity',
        name: 'Quantity',
        description: 'Free Tickets',
        isDiscount: false,
        isOffer: false,
        isPercentage: false,
        isQuantity: true,
        isShipping: false,
      },
      {
        slug: 'shipping',
        name: 'Shipping',
        description: null,
        isDiscount: false,
        isOffer: false,
        isPercentage: false,
        isQuantity: false,
        isShipping: true,
      },
    ];
  }
}
