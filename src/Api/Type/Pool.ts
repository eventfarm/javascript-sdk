/**
 * This file was auto generated, please do not edit it directly.
 **/
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
  isCanvas: boolean;
  isHarvesterPPP: boolean;
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
  isCIO: boolean;
  isIntro: boolean;
  isTrial: boolean;
  isPro: boolean;
  isPremier: boolean;
  isPremierPlus: boolean;
  isCustom: boolean;
  isInternal: boolean;
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
        slug: 'salesforce',
        name: 'Salesforce',
        description: null,
        isSalesforce: true,
        isApiAccess: false,
        isMarketo: false,
        isEmailMasking: false,
        isWhiteLabeling: false,
        isAgents: false,
        isVisaCheckout: false,
        isCanvas: false,
        isHarvesterPPP: false,
      },
      {
        slug: 'apiaccess',
        name: 'API Access',
        description: null,
        isSalesforce: false,
        isApiAccess: true,
        isMarketo: false,
        isEmailMasking: false,
        isWhiteLabeling: false,
        isAgents: false,
        isVisaCheckout: false,
        isCanvas: false,
        isHarvesterPPP: false,
      },
      {
        slug: 'marketo',
        name: 'Marketo',
        description: null,
        isSalesforce: false,
        isApiAccess: false,
        isMarketo: true,
        isEmailMasking: false,
        isWhiteLabeling: false,
        isAgents: false,
        isVisaCheckout: false,
        isCanvas: false,
        isHarvesterPPP: false,
      },
      {
        slug: 'emailmasking',
        name: 'Email Masking',
        description: null,
        isSalesforce: false,
        isApiAccess: false,
        isMarketo: false,
        isEmailMasking: true,
        isWhiteLabeling: false,
        isAgents: false,
        isVisaCheckout: false,
        isCanvas: false,
        isHarvesterPPP: false,
      },
      {
        slug: 'whitelabeling',
        name: 'White Labeling',
        description: null,
        isSalesforce: false,
        isApiAccess: false,
        isMarketo: false,
        isEmailMasking: false,
        isWhiteLabeling: true,
        isAgents: false,
        isVisaCheckout: false,
        isCanvas: false,
        isHarvesterPPP: false,
      },
      {
        slug: 'agents',
        name: 'Agents',
        description: null,
        isSalesforce: false,
        isApiAccess: false,
        isMarketo: false,
        isEmailMasking: false,
        isWhiteLabeling: false,
        isAgents: true,
        isVisaCheckout: false,
        isCanvas: false,
        isHarvesterPPP: false,
      },
      {
        slug: 'visacheckout',
        name: 'VisaCheckout',
        description: null,
        isSalesforce: false,
        isApiAccess: false,
        isMarketo: false,
        isEmailMasking: false,
        isWhiteLabeling: false,
        isAgents: false,
        isVisaCheckout: true,
        isCanvas: false,
        isHarvesterPPP: false,
      },
      {
        slug: 'canvas',
        name: 'Canvas',
        description: null,
        isSalesforce: false,
        isApiAccess: false,
        isMarketo: false,
        isEmailMasking: false,
        isWhiteLabeling: false,
        isAgents: false,
        isVisaCheckout: false,
        isCanvas: true,
        isHarvesterPPP: false,
      },
      {
        slug: 'harvester',
        name: 'Harvester (PPP)',
        description: null,
        isSalesforce: false,
        isApiAccess: false,
        isMarketo: false,
        isEmailMasking: false,
        isWhiteLabeling: false,
        isAgents: false,
        isVisaCheckout: false,
        isCanvas: false,
        isHarvesterPPP: true,
      },
    ];
  }

  PoolAllotmentType(): PoolAllotmentTypeInterface[] {
    return [
      {
        slug: 'listly',
        name: 'Listly',
        description: null,
        isListly: true,
        isCIO: false,
        isEventFarm: false,
      },
      {
        slug: 'cio',
        name: 'CIO',
        description: null,
        isListly: false,
        isCIO: true,
        isEventFarm: false,
      },
      {
        slug: 'eventfarm',
        name: 'EventFarm',
        description: null,
        isListly: false,
        isCIO: false,
        isEventFarm: true,
      },
    ];
  }

  PoolContactType(): PoolContactTypeInterface[] {
    return [
      {
        slug: 'full',
        name: 'Team Manager',
        description: null,
        isFull: true,
        isCreate: false,
      },
      {
        slug: 'create',
        name: 'Event Create Only',
        description: null,
        isFull: false,
        isCreate: true,
      },
    ];
  }

  PoolContractType(): PoolContractTypeInterface[] {
    return [
      {
        slug: 'cio',
        name: 'CIO',
        description: null,
        isCIO: true,
        isIntro: false,
        isTrial: false,
        isPro: false,
        isPremier: false,
        isPremierPlus: false,
        isCustom: false,
        isInternal: false,
      },
      {
        slug: 'intro',
        name: 'Intro',
        description: null,
        isCIO: false,
        isIntro: true,
        isTrial: false,
        isPro: false,
        isPremier: false,
        isPremierPlus: false,
        isCustom: false,
        isInternal: false,
      },
      {
        slug: 'trial',
        name: 'Trial',
        description: null,
        isCIO: false,
        isIntro: false,
        isTrial: true,
        isPro: false,
        isPremier: false,
        isPremierPlus: false,
        isCustom: false,
        isInternal: false,
      },
      {
        slug: 'pro',
        name: 'Pro',
        description: null,
        isCIO: false,
        isIntro: false,
        isTrial: false,
        isPro: true,
        isPremier: false,
        isPremierPlus: false,
        isCustom: false,
        isInternal: false,
      },
      {
        slug: 'premier',
        name: 'Premier',
        description: null,
        isCIO: false,
        isIntro: false,
        isTrial: false,
        isPro: false,
        isPremier: true,
        isPremierPlus: false,
        isCustom: false,
        isInternal: false,
      },
      {
        slug: 'premierPlus',
        name: 'Premier Plus',
        description: null,
        isCIO: false,
        isIntro: false,
        isTrial: false,
        isPro: false,
        isPremier: false,
        isPremierPlus: true,
        isCustom: false,
        isInternal: false,
      },
      {
        slug: 'custom',
        name: 'Custom',
        description: null,
        isCIO: false,
        isIntro: false,
        isTrial: false,
        isPro: false,
        isPremier: false,
        isPremierPlus: false,
        isCustom: true,
        isInternal: false,
      },
      {
        slug: 'internal',
        name: 'Internal',
        description: null,
        isCIO: false,
        isIntro: false,
        isTrial: false,
        isPro: false,
        isPremier: false,
        isPremierPlus: false,
        isCustom: false,
        isInternal: true,
      },
    ];
  }

  PoolWebhookType(): PoolWebhookTypeInterface[] {
    return [
      {
        slug: 'checkin',
        name: 'Check-In',
        description: null,
        isCheckin: true,
      },
    ];
  }
}
