export interface FeatureTypeInterface {
    slug: string;
    name: string;
    description?: string;
    isSalesforce: boolean;
    isApiAccess: boolean;
    isMarketo: boolean;
    isEmailMasking: boolean;
    isWhiteLabeling: boolean;
    isAgents: boolean;
    isVisaCheckout: boolean;
}
export interface PoolAllotmentTypeInterface {
    slug: string;
    name: string;
    description?: string;
    isListly: boolean;
    isCIO: boolean;
    isEventFarm: boolean;
}
export interface PoolContactTypeInterface {
    slug: string;
    name: string;
    description?: string;
    isFull: boolean;
    isCreate: boolean;
}
export interface PoolContractTypeInterface {
    slug: string;
    name: string;
    description?: string;
    isIntro: boolean;
    isPro: boolean;
    isPremier: boolean;
    isPremierPlus: boolean;
    isCustom: boolean;
}
export interface PoolWebhookTypeInterface {
    slug: string;
    name: string;
    description?: string;
    isCheckin: boolean;
}

export class Pool {
    FeatureType(): FeatureTypeInterface[] {
        return [
            {
                'slug': 'salesforce',
                'name': 'Salesforce',
                'description': null,
                'isSalesforce': true,
                'isApiAccess': false,
                'isMarketo': false,
                'isEmailMasking': false,
                'isWhiteLabeling': false,
                'isAgents': false,
                'isVisaCheckout': false,
            },
            {
                'slug': 'apiaccess',
                'name': 'API Access',
                'description': null,
                'isSalesforce': false,
                'isApiAccess': true,
                'isMarketo': false,
                'isEmailMasking': false,
                'isWhiteLabeling': false,
                'isAgents': false,
                'isVisaCheckout': false,
            },
            {
                'slug': 'marketo',
                'name': 'Marketo',
                'description': null,
                'isSalesforce': false,
                'isApiAccess': false,
                'isMarketo': true,
                'isEmailMasking': false,
                'isWhiteLabeling': false,
                'isAgents': false,
                'isVisaCheckout': false,
            },
            {
                'slug': 'emailmasking',
                'name': 'Email Masking',
                'description': null,
                'isSalesforce': false,
                'isApiAccess': false,
                'isMarketo': false,
                'isEmailMasking': true,
                'isWhiteLabeling': false,
                'isAgents': false,
                'isVisaCheckout': false,
            },
            {
                'slug': 'whitelabeling',
                'name': 'White Labeling',
                'description': null,
                'isSalesforce': false,
                'isApiAccess': false,
                'isMarketo': false,
                'isEmailMasking': false,
                'isWhiteLabeling': true,
                'isAgents': false,
                'isVisaCheckout': false,
            },
            {
                'slug': 'agents',
                'name': 'Agents',
                'description': null,
                'isSalesforce': false,
                'isApiAccess': false,
                'isMarketo': false,
                'isEmailMasking': false,
                'isWhiteLabeling': false,
                'isAgents': true,
                'isVisaCheckout': false,
            },
            {
                'slug': 'visacheckout',
                'name': 'VisaCheckout',
                'description': null,
                'isSalesforce': false,
                'isApiAccess': false,
                'isMarketo': false,
                'isEmailMasking': false,
                'isWhiteLabeling': false,
                'isAgents': false,
                'isVisaCheckout': true,
            },
        ];
    }

    PoolAllotmentType(): PoolAllotmentTypeInterface[] {
        return [
            {
                'slug': 'listly',
                'name': 'Listly',
                'description': null,
                'isListly': true,
                'isCIO': false,
                'isEventFarm': false,
            },
            {
                'slug': 'cio',
                'name': 'CIO',
                'description': null,
                'isListly': false,
                'isCIO': true,
                'isEventFarm': false,
            },
            {
                'slug': 'eventfarm',
                'name': 'EventFarm',
                'description': null,
                'isListly': false,
                'isCIO': false,
                'isEventFarm': true,
            },
        ];
    }

    PoolContactType(): PoolContactTypeInterface[] {
        return [
            {
                'slug': 'full',
                'name': 'Team Manager',
                'description': null,
                'isFull': true,
                'isCreate': false,
            },
            {
                'slug': 'create',
                'name': 'Event Create Only',
                'description': null,
                'isFull': false,
                'isCreate': true,
            },
        ];
    }

    PoolContractType(): PoolContractTypeInterface[] {
        return [
            {
                'slug': 'intro',
                'name': 'Intro',
                'description': null,
                'isIntro': true,
                'isPro': false,
                'isPremier': false,
                'isPremierPlus': false,
                'isCustom': false,
            },
            {
                'slug': 'pro',
                'name': 'Pro',
                'description': null,
                'isIntro': false,
                'isPro': true,
                'isPremier': false,
                'isPremierPlus': false,
                'isCustom': false,
            },
            {
                'slug': 'premier',
                'name': 'Premier',
                'description': null,
                'isIntro': false,
                'isPro': false,
                'isPremier': true,
                'isPremierPlus': false,
                'isCustom': false,
            },
            {
                'slug': 'premierPlus',
                'name': 'Premier Plus',
                'description': null,
                'isIntro': false,
                'isPro': false,
                'isPremier': false,
                'isPremierPlus': true,
                'isCustom': false,
            },
            {
                'slug': 'custom',
                'name': 'Custom',
                'description': null,
                'isIntro': false,
                'isPro': false,
                'isPremier': false,
                'isPremierPlus': false,
                'isCustom': true,
            },
        ];
    }

    PoolWebhookType(): PoolWebhookTypeInterface[] {
        return [
            {
                'slug': 'checkin',
                'name': 'Check-In',
                'description': null,
                'isCheckin': true,
            },
        ];
    }
}
