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
  isPanelist: boolean;
  isModerator: boolean;
  isHost: boolean;
  isParticipant: boolean;
  isOther: boolean;
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
        isPanelist: false,
        isModerator: false,
        isHost: false,
        isParticipant: false,
        isOther: false,
      },
      {
        slug: 'presenter',
        name: 'Presenter',
        description: null,
        isSpeaker: false,
        isPresenter: true,
        isSponsor: false,
        isPanelist: false,
        isModerator: false,
        isHost: false,
        isParticipant: false,
        isOther: false,
      },
      {
        slug: 'sponsor',
        name: 'Sponsor',
        description: null,
        isSpeaker: false,
        isPresenter: false,
        isSponsor: true,
        isPanelist: false,
        isModerator: false,
        isHost: false,
        isParticipant: false,
        isOther: false,
      },
      {
        slug: 'panelist',
        name: 'Panelist',
        description: null,
        isSpeaker: false,
        isPresenter: false,
        isSponsor: false,
        isPanelist: true,
        isModerator: false,
        isHost: false,
        isParticipant: false,
        isOther: false,
      },
      {
        slug: 'moderator',
        name: 'Moderator',
        description: null,
        isSpeaker: false,
        isPresenter: false,
        isSponsor: false,
        isPanelist: false,
        isModerator: true,
        isHost: false,
        isParticipant: false,
        isOther: false,
      },
      {
        slug: 'host',
        name: 'Host',
        description: null,
        isSpeaker: false,
        isPresenter: false,
        isSponsor: false,
        isPanelist: false,
        isModerator: false,
        isHost: true,
        isParticipant: false,
        isOther: false,
      },
      {
        slug: 'participant',
        name: 'Participant',
        description: null,
        isSpeaker: false,
        isPresenter: false,
        isSponsor: false,
        isPanelist: false,
        isModerator: false,
        isHost: false,
        isParticipant: true,
        isOther: false,
      },
      {
        slug: 'other',
        name: 'Other',
        description: null,
        isSpeaker: false,
        isPresenter: false,
        isSponsor: false,
        isPanelist: false,
        isModerator: false,
        isHost: false,
        isParticipant: false,
        isOther: true,
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
