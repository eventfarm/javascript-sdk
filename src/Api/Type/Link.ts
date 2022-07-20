/**
 * This file was auto generated, please do not edit it directly.
 **/
export interface LinkTypeInterface {
  slug: string;
  name: string;
  description?: string;
  isInstagram: boolean;
  isLinkedIn: boolean;
  isTwitter: boolean;
  isFacebook: boolean;
  isSnapchat: boolean;
  isWeb: boolean;
}

export class Link {
  LinkType(): LinkTypeInterface[] {
    return [
      {
        slug: 'instagram',
        name: 'Instagram',
        description: null,
        isInstagram: true,
        isLinkedIn: false,
        isTwitter: false,
        isFacebook: false,
        isSnapchat: false,
        isWeb: false,
      },
      {
        slug: 'linkedin',
        name: 'LinkedIn',
        description: null,
        isInstagram: false,
        isLinkedIn: true,
        isTwitter: false,
        isFacebook: false,
        isSnapchat: false,
        isWeb: false,
      },
      {
        slug: 'twitter',
        name: 'Twitter',
        description: null,
        isInstagram: false,
        isLinkedIn: false,
        isTwitter: true,
        isFacebook: false,
        isSnapchat: false,
        isWeb: false,
      },
      {
        slug: 'facebook',
        name: 'Facebook',
        description: null,
        isInstagram: false,
        isLinkedIn: false,
        isTwitter: false,
        isFacebook: true,
        isSnapchat: false,
        isWeb: false,
      },
      {
        slug: 'snapchat',
        name: 'Snapchat',
        description: null,
        isInstagram: false,
        isLinkedIn: false,
        isTwitter: false,
        isFacebook: false,
        isSnapchat: true,
        isWeb: false,
      },
      {
        slug: 'web',
        name: 'Web',
        description: null,
        isInstagram: false,
        isLinkedIn: false,
        isTwitter: false,
        isFacebook: false,
        isSnapchat: false,
        isWeb: true,
      },
    ];
  }
}
