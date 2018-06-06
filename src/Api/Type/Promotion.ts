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
                'slug': 'discount',
                'name': 'Discount',
                'description': null,
                'isDiscount': true,
                'isOffer': false,
                'isPercentage': false,
                'isQuantity': false,
                'isShipping': false,
            },
            {
                'slug': 'offer',
                'name': 'Offer',
                'description': null,
                'isDiscount': false,
                'isOffer': true,
                'isPercentage': false,
                'isQuantity': false,
                'isShipping': false,
            },
            {
                'slug': 'percentage',
                'name': 'Percentage',
                'description': null,
                'isDiscount': false,
                'isOffer': false,
                'isPercentage': true,
                'isQuantity': false,
                'isShipping': false,
            },
            {
                'slug': 'quantity',
                'name': 'Quantity',
                'description': null,
                'isDiscount': false,
                'isOffer': false,
                'isPercentage': false,
                'isQuantity': true,
                'isShipping': false,
            },
            {
                'slug': 'shipping',
                'name': 'Shipping',
                'description': null,
                'isDiscount': false,
                'isOffer': false,
                'isPercentage': false,
                'isQuantity': false,
                'isShipping': true,
            },
        ];
    }
}
