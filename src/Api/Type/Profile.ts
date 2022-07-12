/**
 * This file was auto generated, please do not edit it directly.
 **/
export interface EventProfileTypeInterface {
  slug: string;
  name: string;
  description?: string;
  isSpeaker: boolean;
  isPresenter: boolean;
  isSponsor: boolean;
}
export interface ProfileTypeInterface {
  slug: string;
  name: string;
  description?: string;
  isPerson: boolean;
  isCompany: boolean;
  isOther: boolean;
}

export class Profile {
  EventProfileType(): EventProfileTypeInterface[] {
    return [
      {
        slug: 'speaker',
        name: 'Speaker',
        description: null,
        isSpeaker: true,
        isPresenter: false,
        isSponsor: false,
      },
      {
        slug: 'presenter',
        name: 'Presenter',
        description: null,
        isSpeaker: false,
        isPresenter: true,
        isSponsor: false,
      },
      {
        slug: 'sponsor',
        name: 'Sponsor',
        description: null,
        isSpeaker: false,
        isPresenter: false,
        isSponsor: true,
      },
    ];
  }

  ProfileType(): ProfileTypeInterface[] {
    return [
      {
        slug: 'person',
        name: 'Person',
        description: null,
        isPerson: true,
        isCompany: false,
        isOther: false,
      },
      {
        slug: 'company',
        name: 'Company',
        description: null,
        isPerson: false,
        isCompany: true,
        isOther: false,
      },
      {
        slug: 'other',
        name: 'Other',
        description: null,
        isPerson: false,
        isCompany: false,
        isOther: true,
      },
    ];
  }
}
