/**
 * This file was auto generated, please do not edit it directly.
 **/
export interface WebConferenceFormatTypeInterface {
  slug: string;
  name: string;
  description?: string;
  isMeeting: boolean;
  isWebinar: boolean;
  isNone: boolean;
}
export interface WebConferenceSourceTypeInterface {
  slug: string;
  name: string;
  description?: string;
  isZoom: boolean;
  isNone: boolean;
}

export class WebConference {
  WebConferenceFormatType(): WebConferenceFormatTypeInterface[] {
    return [
      {
        slug: 'webinar',
        name: 'Webinar',
        description: null,
        isMeeting: false,
        isWebinar: true,
        isNone: false,
      },
      {
        slug: 'meeting',
        name: 'Meeting',
        description: null,
        isMeeting: true,
        isWebinar: false,
        isNone: false,
      },
      {
        slug: 'none',
        name: 'None',
        description: null,
        isMeeting: false,
        isWebinar: false,
        isNone: true,
      },
    ];
  }

  WebConferenceSourceType(): WebConferenceSourceTypeInterface[] {
    return [
      {
        slug: 'zoom',
        name: 'Zoom',
        description: null,
        isZoom: true,
        isNone: false,
      },
      {
        slug: 'none',
        name: 'None',
        description: null,
        isZoom: false,
        isNone: true,
      },
    ];
  }
}
