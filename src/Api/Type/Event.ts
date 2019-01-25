/**
 * This file was auto generated, please do not edit it directly.
 **/
export interface CIOMarketingEventCountTypeInterface {
  slug: string;
  name: string;
  description?: string;
  isFewerThanFive: boolean;
  isMoreThanThirty: boolean;
  isBetweenFiveAndThirty: boolean;
}
export interface CIOMarketingEventTypeInterface {
  slug: string;
  name: string;
  description?: string;
  isBrandAwarenessEvents: boolean;
  isTradeShows: boolean;
  isConferences: boolean;
  isRoadshows: boolean;
  isInternalMeetings: boolean;
  isRecruitingEvents: boolean;
  isFundraisingEvents: boolean;
}
export interface CIOMarketingIndustryTypeInterface {
  slug: string;
  name: string;
  description?: string;
  isAgency: boolean;
  isEducation: boolean;
  isFinance: boolean;
  isSportsAndEntertainment: boolean;
  isTechnology: boolean;
  isOther: boolean;
}
export interface EventDateFilterTypeInterface {
  slug: string;
  name: string;
  description?: string;
  isCurrentFuture: boolean;
  isPastAll: boolean;
  isPast3Months: boolean;
  isPast3MonthsAndFuture: boolean;
  isPast6Months: boolean;
}
export interface EventTypeInterface {
  slug: string;
  name: string;
  description?: string;
  isEventFarm: boolean;
  isCio: boolean;
  isListly: boolean;
  isDnc: boolean;
  isRnc: boolean;
  isRslc: boolean;
  isSundance: boolean;
}
export interface MapSourceTypeInterface {
  slug: string;
  name: string;
  description?: string;
  isGoogle: boolean;
  isYahoo: boolean;
  isBing: boolean;
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
}

export class Event {
  CIOMarketingEventCountType(): CIOMarketingEventCountTypeInterface[] {
    return [
      {
        slug: 'fewer-than-5',
        name: 'Fewer than 5',
        description: null,
        isFewerThanFive: true,
        isMoreThanThirty: false,
        isBetweenFiveAndThirty: false,
      },
      {
        slug: 'between-5-and-30',
        name: 'Between 5 and 30',
        description: null,
        isFewerThanFive: false,
        isMoreThanThirty: false,
        isBetweenFiveAndThirty: true,
      },
      {
        slug: 'more-than-30',
        name: 'More than 30',
        description: null,
        isFewerThanFive: false,
        isMoreThanThirty: true,
        isBetweenFiveAndThirty: false,
      },
    ];
  }

  CIOMarketingEventType(): CIOMarketingEventTypeInterface[] {
    return [
      {
        slug: 'brand-awareness-events',
        name: 'Brand Awareness Events',
        description: null,
        isBrandAwarenessEvents: true,
        isTradeShows: false,
        isConferences: false,
        isRoadshows: false,
        isInternalMeetings: false,
        isRecruitingEvents: false,
        isFundraisingEvents: false,
      },
      {
        slug: 'trade-shows',
        name: 'Trade Shows',
        description: null,
        isBrandAwarenessEvents: false,
        isTradeShows: true,
        isConferences: false,
        isRoadshows: false,
        isInternalMeetings: false,
        isRecruitingEvents: false,
        isFundraisingEvents: false,
      },
      {
        slug: 'conferences',
        name: 'Conferences',
        description: null,
        isBrandAwarenessEvents: false,
        isTradeShows: false,
        isConferences: true,
        isRoadshows: false,
        isInternalMeetings: false,
        isRecruitingEvents: false,
        isFundraisingEvents: false,
      },
      {
        slug: 'roadshows',
        name: 'Roadshows',
        description: null,
        isBrandAwarenessEvents: false,
        isTradeShows: false,
        isConferences: false,
        isRoadshows: true,
        isInternalMeetings: false,
        isRecruitingEvents: false,
        isFundraisingEvents: false,
      },
      {
        slug: 'internal-meetings',
        name: 'Internal Meetings',
        description: null,
        isBrandAwarenessEvents: false,
        isTradeShows: false,
        isConferences: false,
        isRoadshows: false,
        isInternalMeetings: true,
        isRecruitingEvents: false,
        isFundraisingEvents: false,
      },
      {
        slug: 'recruiting-events',
        name: 'Recruiting Events',
        description: null,
        isBrandAwarenessEvents: false,
        isTradeShows: false,
        isConferences: false,
        isRoadshows: false,
        isInternalMeetings: false,
        isRecruitingEvents: true,
        isFundraisingEvents: false,
      },
      {
        slug: 'fundraising-events',
        name: 'Fundraising Events',
        description: null,
        isBrandAwarenessEvents: false,
        isTradeShows: false,
        isConferences: false,
        isRoadshows: false,
        isInternalMeetings: false,
        isRecruitingEvents: false,
        isFundraisingEvents: true,
      },
    ];
  }

  CIOMarketingIndustryType(): CIOMarketingIndustryTypeInterface[] {
    return [
      {
        slug: 'consumer-goods',
        name: 'Consumer Goods',
        description: null,
        isAgency: false,
        isEducation: false,
        isFinance: false,
        isSportsAndEntertainment: false,
        isTechnology: false,
        isOther: false,
      },
      {
        slug: 'agency',
        name: 'Agency',
        description: null,
        isAgency: true,
        isEducation: false,
        isFinance: false,
        isSportsAndEntertainment: false,
        isTechnology: false,
        isOther: false,
      },
      {
        slug: 'education',
        name: 'Education',
        description: null,
        isAgency: false,
        isEducation: true,
        isFinance: false,
        isSportsAndEntertainment: false,
        isTechnology: false,
        isOther: false,
      },
      {
        slug: 'finance',
        name: 'Finance',
        description: null,
        isAgency: false,
        isEducation: false,
        isFinance: true,
        isSportsAndEntertainment: false,
        isTechnology: false,
        isOther: false,
      },
      {
        slug: 'sports-and-entertainment',
        name: 'Sports and Entertainment',
        description: null,
        isAgency: false,
        isEducation: false,
        isFinance: false,
        isSportsAndEntertainment: true,
        isTechnology: false,
        isOther: false,
      },
      {
        slug: 'technology',
        name: 'Technology',
        description: null,
        isAgency: false,
        isEducation: false,
        isFinance: false,
        isSportsAndEntertainment: false,
        isTechnology: true,
        isOther: false,
      },
      {
        slug: 'other',
        name: 'Other',
        description: null,
        isAgency: false,
        isEducation: false,
        isFinance: false,
        isSportsAndEntertainment: false,
        isTechnology: false,
        isOther: true,
      },
    ];
  }

  EventDateFilterType(): EventDateFilterTypeInterface[] {
    return [
      {
        slug: 'current-future',
        name: 'Current &amp; Future Events',
        description: 'This will show you all your future and current events.',
        isCurrentFuture: true,
        isPastAll: false,
        isPast3Months: false,
        isPast3MonthsAndFuture: false,
        isPast6Months: false,
      },
      {
        slug: 'past-all',
        name: 'All Past Events',
        description: null,
        isCurrentFuture: false,
        isPastAll: true,
        isPast3Months: false,
        isPast3MonthsAndFuture: false,
        isPast6Months: false,
      },
      {
        slug: 'past-3-months',
        name: 'Past 3 Months',
        description: null,
        isCurrentFuture: false,
        isPastAll: false,
        isPast3Months: true,
        isPast3MonthsAndFuture: false,
        isPast6Months: false,
      },
      {
        slug: 'past-3-months-and-future',
        name: 'Past 3 Months and Future Events',
        description:
          'This will show you past 3 months events and all future events',
        isCurrentFuture: false,
        isPastAll: false,
        isPast3Months: false,
        isPast3MonthsAndFuture: true,
        isPast6Months: false,
      },
      {
        slug: 'past-6-months',
        name: 'Past 6 Months',
        description: null,
        isCurrentFuture: false,
        isPastAll: false,
        isPast3Months: false,
        isPast3MonthsAndFuture: false,
        isPast6Months: true,
      },
    ];
  }

  EventType(): EventTypeInterface[] {
    return [
      {
        slug: 'eventfarm',
        name: 'Event Farm',
        description: null,
        isEventFarm: true,
        isCio: false,
        isListly: false,
        isDnc: false,
        isRnc: false,
        isRslc: false,
        isSundance: false,
      },
      {
        slug: 'cio',
        name: 'Check-in-Only',
        description: null,
        isEventFarm: false,
        isCio: true,
        isListly: false,
        isDnc: false,
        isRnc: false,
        isRslc: false,
        isSundance: false,
      },
      {
        slug: 'listly',
        name: 'Listly',
        description: null,
        isEventFarm: false,
        isCio: false,
        isListly: true,
        isDnc: false,
        isRnc: false,
        isRslc: false,
        isSundance: false,
      },
      {
        slug: 'dnc',
        name: 'DNC',
        description: null,
        isEventFarm: false,
        isCio: false,
        isListly: false,
        isDnc: true,
        isRnc: false,
        isRslc: false,
        isSundance: false,
      },
      {
        slug: 'rnc',
        name: 'RNC',
        description: null,
        isEventFarm: false,
        isCio: false,
        isListly: false,
        isDnc: false,
        isRnc: true,
        isRslc: false,
        isSundance: false,
      },
      {
        slug: 'rslc',
        name: 'RSLC',
        description: null,
        isEventFarm: false,
        isCio: false,
        isListly: false,
        isDnc: false,
        isRnc: false,
        isRslc: true,
        isSundance: false,
      },
      {
        slug: 'sundance',
        name: 'Sundance',
        description: null,
        isEventFarm: false,
        isCio: false,
        isListly: false,
        isDnc: false,
        isRnc: false,
        isRslc: false,
        isSundance: true,
      },
    ];
  }

  MapSourceType(): MapSourceTypeInterface[] {
    return [
      {
        slug: 'google',
        name: 'Google',
        description: 'Google Maps',
        isGoogle: true,
        isYahoo: false,
        isBing: false,
      },
      {
        slug: 'yahoo',
        name: 'Yahoo',
        description: 'Yahoo Maps',
        isGoogle: false,
        isYahoo: true,
        isBing: false,
      },
      {
        slug: 'bing',
        name: 'Bing',
        description: 'Bing Maps',
        isGoogle: false,
        isYahoo: false,
        isBing: true,
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
        name: 'Checkbox',
        description: null,
        isCheckbox: true,
        isRadio: false,
        isMulti: false,
        isText: false,
        isSelect: false,
        isDate: false,
        isWaiver: false,
      },
      {
        slug: 'radio',
        name: 'Radio',
        description: null,
        isCheckbox: false,
        isRadio: true,
        isMulti: false,
        isText: false,
        isSelect: false,
        isDate: false,
        isWaiver: false,
      },
      {
        slug: 'multi',
        name: 'Multi',
        description: null,
        isCheckbox: false,
        isRadio: false,
        isMulti: true,
        isText: false,
        isSelect: false,
        isDate: false,
        isWaiver: false,
      },
      {
        slug: 'text',
        name: 'Text',
        description: null,
        isCheckbox: false,
        isRadio: false,
        isMulti: false,
        isText: true,
        isSelect: false,
        isDate: false,
        isWaiver: false,
      },
      {
        slug: 'select',
        name: 'Select',
        description: null,
        isCheckbox: false,
        isRadio: false,
        isMulti: false,
        isText: false,
        isSelect: true,
        isDate: false,
        isWaiver: false,
      },
      {
        slug: 'date',
        name: 'Date',
        description: null,
        isCheckbox: false,
        isRadio: false,
        isMulti: false,
        isText: false,
        isSelect: false,
        isDate: true,
        isWaiver: false,
      },
      {
        slug: 'waiver',
        name: 'Waiver',
        description: null,
        isCheckbox: false,
        isRadio: false,
        isMulti: false,
        isText: false,
        isSelect: false,
        isDate: false,
        isWaiver: true,
      },
    ];
  }
}
