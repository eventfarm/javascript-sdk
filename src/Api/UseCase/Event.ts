/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class Event {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - altKeyword
   * @return Promise|Observable|any
   */
  CheckAltKeywordAvailability(altKeyword: string): any {
    return this.restClient.get('Event/UseCase/CheckAltKeywordAvailability', {
      altKeyword,
    });
  }

  /**
   * @param string - eventId
   * @param array? - withData Answers|TicketType|QuestionContexts
   * @return Promise|Observable|any
   */
  GetAllQuestionsForEvent(eventId: string, withData: any = null): any {
    return this.restClient.get('Event/UseCase/GetAllQuestionsForEvent', {
      eventId,
      withData,
    });
  }

  /**
   * @param string - eventId
   * @param array? - withData Pool|Stacks|StacksWithAvailabilityCounts|Tags|EventTexts|TicketTypes|TicketBlocks|TicketBlocksWithAllotmentCounts|QuestionsAndAnswers|QuestionContext|AllQuestions|ParentEvent|PoolFeatures
   * @return Promise|Observable|any
   */
  GetEvent(eventId: string, withData: any = null): any {
    return this.restClient.get('Event/UseCase/GetEvent', {
      eventId,
      withData,
    });
  }

  /**
   * @param string - poolId
   * @param int? - earliestStartDate
   * @return Promise|Observable|any
   */
  GetEventCountsForPool(poolId: string, earliestStartDate: number = null): any {
    return this.restClient.get('Event/UseCase/GetEventCountsForPool', {
      poolId,
      earliestStartDate,
    });
  }

  /**
   * @param string - questionId
   * @param array? - withData Answers|TicketType|QuestionResponseCounts|AnswerQuestionResponseCounts|QuestionContexts
   * @return Promise|Observable|any
   */
  GetQuestion(questionId: string, withData: any = null): any {
    return this.restClient.get('Event/UseCase/GetQuestion', {
      questionId,
      withData,
    });
  }

  /**
   * @param string - parentEventId
   * @param string? - query
   * @param array? - withData Pool|Stacks|Tags|TicketTypes|TicketBlocks|EventTexts|QuestionsAndAnswers|ThumbnailUrl
   * @param int? - page >= 1
   * @param int? - itemsPerPage 1-100
   * @param string? - sortBy event-start|event-end|name|event-created
   * @param string? - sortDirection ascending|descending
   * @param string? - eventDateFilterType current-future|past-all|past-3-months|past-3-months-and-future|past-6-months
   * @param string? - poolId
   * @param array? - tags
   * @return Promise|Observable|any
   */
  ListChildrenForEvent(
    parentEventId: string,
    query: string = null,
    withData: any = null,
    page: number = null,
    itemsPerPage: number = null,
    sortBy: string = null,
    sortDirection: string = null,
    eventDateFilterType: string = null,
    poolId: string = null,
    tags: any = null,
  ): any {
    return this.restClient.get('Event/UseCase/ListChildrenForEvent', {
      parentEventId,
      query,
      withData,
      page,
      itemsPerPage,
      sortBy,
      sortDirection,
      eventDateFilterType,
      poolId,
      tags,
    });
  }

  /**
   * @param string - parentEventId
   * @param string - userId
   * @param string? - query
   * @param array? - withData Pool|Stacks|Tags|TicketTypes|TicketBlocks|QuestionsAndAnswers|ThumbnailUrl
   * @param int? - page >= 1
   * @param int? - itemsPerPage 1-100
   * @param string? - sortBy event-start|event-end|name|event-created
   * @param string? - sortDirection ascending|descending
   * @param string? - eventDateFilterType current-future|past-all|past-3-months|past-3-months-and-future|past-6-months
   * @param string? - poolId
   * @param array? - tags
   * @return Promise|Observable|any
   */
  ListChildrenForEventForUser(
    parentEventId: string,
    userId: string,
    query: string = null,
    withData: any = null,
    page: number = null,
    itemsPerPage: number = null,
    sortBy: string = null,
    sortDirection: string = null,
    eventDateFilterType: string = null,
    poolId: string = null,
    tags: any = null,
  ): any {
    return this.restClient.get('Event/UseCase/ListChildrenForEventForUser', {
      parentEventId,
      userId,
      query,
      withData,
      page,
      itemsPerPage,
      sortBy,
      sortDirection,
      eventDateFilterType,
      poolId,
      tags,
    });
  }

  /**
   * @param string - poolId
   * @param string? - query
   * @param array? - attributesFilter distribute|donate|fee|editname|reveal|allow-notes|duplicate-emails|navigation|social-media|social-media-bar|map-location|show-description|ipad-purchase|simple-layout|label-print|skip-event-allocate-display|geo-restrict|visa-checkout|archived|guest-can-change-response|efx-enabled|show-calendar
   * @param array? - attributesExcludeFilter distribute|donate|fee|editname|reveal|allow-notes|duplicate-emails|navigation|social-media|social-media-bar|map-location|show-description|ipad-purchase|simple-layout|label-print|skip-event-allocate-display|geo-restrict|visa-checkout|archived|guest-can-change-response|efx-enabled|show-calendar
   * @param array? - withData Pool|Stacks|Tags|TicketTypes|TicketBlocks|QuestionsAndAnswers|ThumbnailUrl
   * @param int? - lastModifiedTimestamp
   * @param int? - page >= 1
   * @param int? - itemsPerPage 1-500
   * @param string? - sortBy event-start|event-end|name|event-created
   * @param string? - sortDirection ascending|descending
   * @param string? - eventDateFilterType current-future|past-all|past-3-months|past-3-months-and-future|past-6-months
   * @param array? - tags
   * @param int? - earliestStartTimestamp >= 0
   * @return Promise|Observable|any
   */
  ListEventsForPool(
    poolId: string,
    query: string = null,
    attributesFilter: any = null,
    attributesExcludeFilter: any = null,
    withData: any = null,
    lastModifiedTimestamp: number = null,
    page: number = null,
    itemsPerPage: number = null,
    sortBy: string = null,
    sortDirection: string = null,
    eventDateFilterType: string = null,
    tags: any = null,
    earliestStartTimestamp: number = null,
  ): any {
    return this.restClient.get('Event/UseCase/ListEventsForPool', {
      poolId,
      query,
      attributesFilter,
      attributesExcludeFilter,
      withData,
      lastModifiedTimestamp,
      page,
      itemsPerPage,
      sortBy,
      sortDirection,
      eventDateFilterType,
      tags,
      earliestStartTimestamp,
    });
  }

  /**
   * @param string - userId
   * @param string? - query
   * @param array? - attributesFilter distribute|donate|fee|editname|reveal|allow-notes|duplicate-emails|navigation|social-media|social-media-bar|map-location|show-description|ipad-purchase|simple-layout|label-print|skip-event-allocate-display|geo-restrict|visa-checkout|archived|guest-can-change-response|efx-enabled|show-calendar
   * @param array? - attributesExcludeFilter distribute|donate|fee|editname|reveal|allow-notes|duplicate-emails|navigation|social-media|social-media-bar|map-location|show-description|ipad-purchase|simple-layout|label-print|skip-event-allocate-display|geo-restrict|visa-checkout|archived|guest-can-change-response|efx-enabled|show-calendar
   * @param array? - withData Pool|Stacks|Tags|TicketTypes|TicketBlocks|QuestionsAndAnswers|ThumbnailUrl
   * @param int? - lastModifiedTimestamp
   * @param int? - page >= 1
   * @param int? - itemsPerPage 1-500
   * @param string? - sortBy event-start|event-end|name|event-created
   * @param string? - sortDirection ascending|descending
   * @param string? - eventDateFilterType current-future|past-all|past-3-months|past-3-months-and-future|past-6-months
   * @param string? - poolId
   * @param array? - tags
   * @param int? - earliestStartTimestamp >= 0
   * @return Promise|Observable|any
   */
  ListEventsForUser(
    userId: string,
    query: string = null,
    attributesFilter: any = null,
    attributesExcludeFilter: any = null,
    withData: any = null,
    lastModifiedTimestamp: number = null,
    page: number = null,
    itemsPerPage: number = null,
    sortBy: string = null,
    sortDirection: string = null,
    eventDateFilterType: string = null,
    poolId: string = null,
    tags: any = null,
    earliestStartTimestamp: number = null,
  ): any {
    return this.restClient.get('Event/UseCase/ListEventsForUser', {
      userId,
      query,
      attributesFilter,
      attributesExcludeFilter,
      withData,
      lastModifiedTimestamp,
      page,
      itemsPerPage,
      sortBy,
      sortDirection,
      eventDateFilterType,
      poolId,
      tags,
      earliestStartTimestamp,
    });
  }

  /**
   * @param string - eventId
   * @param array? - questionContextTypes registration|lead
   * @return Promise|Observable|any
   */
  ListQuestionsByEventAndContext(
    eventId: string,
    questionContextTypes: any = null,
  ): any {
    return this.restClient.get('Event/UseCase/ListQuestionsByEventAndContext', {
      eventId,
      questionContextTypes,
    });
  }

  // Commands

  /**
   * @param string - eventId
   * @param string - childEventId
   * @return Promise|Observable|any
   */
  AddChildEvent(eventId: string, childEventId: string): any {
    return this.restClient.post('Event/UseCase/AddChildEvent', {
      eventId,
      childEventId,
    });
  }

  /**
   * @param string - eventId
   * @param string - parentEventId
   * @return Promise|Observable|any
   */
  AddParentToEvent(eventId: string, parentEventId: string): any {
    return this.restClient.post('Event/UseCase/AddParentToEvent', {
      eventId,
      parentEventId,
    });
  }

  /**
   * @param string - eventId
   * @param string - email
   * @param string - firstName
   * @param string - lastName
   * @param string - eventRole organizer|assistant|support|check-in-staff|read-only
   * @param string? - authenticatedUserId
   * @return Promise|Observable|any
   */
  AddUserRoleToEvent(
    eventId: string,
    email: string,
    firstName: string,
    lastName: string,
    eventRole: string,
    authenticatedUserId: string = null,
  ): any {
    return this.restClient.post('Event/UseCase/AddUserRoleToEvent', {
      eventId,
      email,
      firstName,
      lastName,
      eventRole,
      authenticatedUserId,
    });
  }

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  ArchiveEvent(eventId: string): any {
    return this.restClient.post('Event/UseCase/ArchiveEvent', {
      eventId,
    });
  }

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  ClearDefaultSitePageForEvent(eventId: string): any {
    return this.restClient.post('Event/UseCase/ClearDefaultSitePageForEvent', {
      eventId,
    });
  }

  /**
   * @param string - fromEventId
   * @param string - toEventId
   * @param bool? - shouldCopyUsers true|false
   * @param bool? - shouldCopyEmailDesigns true|false
   * @param bool? - shouldCopySettings true|false
   * @param bool? - shouldCopyRegQuestions true|false
   * @param bool? - shouldCopySitePages true|false
   * @param bool? - shouldCopyTicketTypes true|false
   * @param bool? - shouldCopyTicketBlocks true|false
   * @param bool? - shouldCopyStacks true|false
   * @param bool? - shouldCopyIntegrationSettings true|false
   * @return Promise|Observable|any
   */
  CopyExistingEventConfiguration(
    fromEventId: string,
    toEventId: string,
    shouldCopyUsers: boolean = null,
    shouldCopyEmailDesigns: boolean = null,
    shouldCopySettings: boolean = null,
    shouldCopyRegQuestions: boolean = null,
    shouldCopySitePages: boolean = null,
    shouldCopyTicketTypes: boolean = null,
    shouldCopyTicketBlocks: boolean = null,
    shouldCopyStacks: boolean = null,
    shouldCopyIntegrationSettings: boolean = null,
  ): any {
    return this.restClient.post(
      'Event/UseCase/CopyExistingEventConfiguration',
      {
        fromEventId,
        toEventId,
        shouldCopyUsers,
        shouldCopyEmailDesigns,
        shouldCopySettings,
        shouldCopyRegQuestions,
        shouldCopySitePages,
        shouldCopyTicketTypes,
        shouldCopyTicketBlocks,
        shouldCopyStacks,
        shouldCopyIntegrationSettings,
      },
    );
  }

  /**
   * @param string - questionId
   * @param string - text
   * @param int? - sortOrder
   * @param bool? - isDefault true|false
   * @param string? - answerId
   * @return Promise|Observable|any
   */
  CreateAnswer(
    questionId: string,
    text: string,
    sortOrder: number = null,
    isDefault: boolean = null,
    answerId: string = null,
  ): any {
    return this.restClient.post('Event/UseCase/CreateAnswer', {
      questionId,
      text,
      sortOrder,
      isDefault,
      answerId,
    });
  }

  /**
   * @param string - poolId
   * @param string - userId
   * @param string - eventName
   * @param string? - startTime
   * @param string? - endTime
   * @param string? - timezone Africa/Abidjan|Africa/Accra|Africa/Addis_Ababa|Africa/Algiers|Africa/Asmara|Africa/Bamako|Africa/Bangui|Africa/Banjul|Africa/Bissau|Africa/Blantyre|Africa/Brazzaville|Africa/Bujumbura|Africa/Cairo|Africa/Casablanca|Africa/Ceuta|Africa/Conakry|Africa/Dakar|Africa/Dar_es_Salaam|Africa/Djibouti|Africa/Douala|Africa/El_Aaiun|Africa/Freetown|Africa/Gaborone|Africa/Harare|Africa/Johannesburg|Africa/Juba|Africa/Kampala|Africa/Khartoum|Africa/Kigali|Africa/Kinshasa|Africa/Lagos|Africa/Libreville|Africa/Lome|Africa/Luanda|Africa/Lubumbashi|Africa/Lusaka|Africa/Malabo|Africa/Maputo|Africa/Maseru|Africa/Mbabane|Africa/Mogadishu|Africa/Monrovia|Africa/Nairobi|Africa/Ndjamena|Africa/Niamey|Africa/Nouakchott|Africa/Ouagadougou|Africa/Porto-Novo|Africa/Sao_Tome|Africa/Tripoli|Africa/Tunis|Africa/Windhoek|America/Adak|America/Anchorage|America/Anguilla|America/Antigua|America/Araguaina|America/Argentina/Buenos_Aires|America/Argentina/Catamarca|America/Argentina/Cordoba|America/Argentina/Jujuy|America/Argentina/La_Rioja|America/Argentina/Mendoza|America/Argentina/Rio_Gallegos|America/Argentina/Salta|America/Argentina/San_Juan|America/Argentina/San_Luis|America/Argentina/Tucuman|America/Argentina/Ushuaia|America/Aruba|America/Asuncion|America/Atikokan|America/Bahia|America/Bahia_Banderas|America/Barbados|America/Belem|America/Belize|America/Blanc-Sablon|America/Boa_Vista|America/Bogota|America/Boise|America/Cambridge_Bay|America/Campo_Grande|America/Cancun|America/Caracas|America/Cayenne|America/Cayman|America/Chicago|America/Chihuahua|America/Costa_Rica|America/Creston|America/Cuiaba|America/Curacao|America/Danmarkshavn|America/Dawson|America/Dawson_Creek|America/Denver|America/Detroit|America/Dominica|America/Edmonton|America/Eirunepe|America/El_Salvador|America/Fort_Nelson|America/Fortaleza|America/Glace_Bay|America/Godthab|America/Goose_Bay|America/Grand_Turk|America/Grenada|America/Guadeloupe|America/Guatemala|America/Guayaquil|America/Guyana|America/Halifax|America/Havana|America/Hermosillo|America/Indiana/Indianapolis|America/Indiana/Knox|America/Indiana/Marengo|America/Indiana/Petersburg|America/Indiana/Tell_City|America/Indiana/Vevay|America/Indiana/Vincennes|America/Indiana/Winamac|America/Inuvik|America/Iqaluit|America/Jamaica|America/Juneau|America/Kentucky/Louisville|America/Kentucky/Monticello|America/Kralendijk|America/La_Paz|America/Lima|America/Los_Angeles|America/Lower_Princes|America/Maceio|America/Managua|America/Manaus|America/Marigot|America/Martinique|America/Matamoros|America/Mazatlan|America/Menominee|America/Merida|America/Metlakatla|America/Mexico_City|America/Miquelon|America/Moncton|America/Monterrey|America/Montevideo|America/Montserrat|America/Nassau|America/New_York|America/Nipigon|America/Nome|America/Noronha|America/North_Dakota/Beulah|America/North_Dakota/Center|America/North_Dakota/New_Salem|America/Ojinaga|America/Panama|America/Pangnirtung|America/Paramaribo|America/Phoenix|America/Port-au-Prince|America/Port_of_Spain|America/Porto_Velho|America/Puerto_Rico|America/Punta_Arenas|America/Rainy_River|America/Rankin_Inlet|America/Recife|America/Regina|America/Resolute|America/Rio_Branco|America/Santarem|America/Santiago|America/Santo_Domingo|America/Sao_Paulo|America/Scoresbysund|America/Sitka|America/St_Barthelemy|America/St_Johns|America/St_Kitts|America/St_Lucia|America/St_Thomas|America/St_Vincent|America/Swift_Current|America/Tegucigalpa|America/Thule|America/Thunder_Bay|America/Tijuana|America/Toronto|America/Tortola|America/Vancouver|America/Whitehorse|America/Winnipeg|America/Yakutat|America/Yellowknife|Antarctica/Casey|Antarctica/Davis|Antarctica/DumontDUrville|Antarctica/Macquarie|Antarctica/Mawson|Antarctica/McMurdo|Antarctica/Palmer|Antarctica/Rothera|Antarctica/Syowa|Antarctica/Troll|Antarctica/Vostok|Arctic/Longyearbyen|Asia/Aden|Asia/Almaty|Asia/Amman|Asia/Anadyr|Asia/Aqtau|Asia/Aqtobe|Asia/Ashgabat|Asia/Atyrau|Asia/Baghdad|Asia/Bahrain|Asia/Baku|Asia/Bangkok|Asia/Barnaul|Asia/Beirut|Asia/Bishkek|Asia/Brunei|Asia/Chita|Asia/Choibalsan|Asia/Colombo|Asia/Damascus|Asia/Dhaka|Asia/Dili|Asia/Dubai|Asia/Dushanbe|Asia/Famagusta|Asia/Gaza|Asia/Hebron|Asia/Ho_Chi_Minh|Asia/Hong_Kong|Asia/Hovd|Asia/Irkutsk|Asia/Jakarta|Asia/Jayapura|Asia/Jerusalem|Asia/Kabul|Asia/Kamchatka|Asia/Karachi|Asia/Kathmandu|Asia/Khandyga|Asia/Kolkata|Asia/Krasnoyarsk|Asia/Kuala_Lumpur|Asia/Kuching|Asia/Kuwait|Asia/Macau|Asia/Magadan|Asia/Makassar|Asia/Manila|Asia/Muscat|Asia/Nicosia|Asia/Novokuznetsk|Asia/Novosibirsk|Asia/Omsk|Asia/Oral|Asia/Phnom_Penh|Asia/Pontianak|Asia/Pyongyang|Asia/Qatar|Asia/Qyzylorda|Asia/Riyadh|Asia/Sakhalin|Asia/Samarkand|Asia/Seoul|Asia/Shanghai|Asia/Singapore|Asia/Srednekolymsk|Asia/Taipei|Asia/Tashkent|Asia/Tbilisi|Asia/Tehran|Asia/Thimphu|Asia/Tokyo|Asia/Tomsk|Asia/Ulaanbaatar|Asia/Urumqi|Asia/Ust-Nera|Asia/Vientiane|Asia/Vladivostok|Asia/Yakutsk|Asia/Yangon|Asia/Yekaterinburg|Asia/Yerevan|Atlantic/Azores|Atlantic/Bermuda|Atlantic/Canary|Atlantic/Cape_Verde|Atlantic/Faroe|Atlantic/Madeira|Atlantic/Reykjavik|Atlantic/South_Georgia|Atlantic/St_Helena|Atlantic/Stanley|Australia/Adelaide|Australia/Brisbane|Australia/Broken_Hill|Australia/Currie|Australia/Darwin|Australia/Eucla|Australia/Hobart|Australia/Lindeman|Australia/Lord_Howe|Australia/Melbourne|Australia/Perth|Australia/Sydney|Europe/Amsterdam|Europe/Andorra|Europe/Astrakhan|Europe/Athens|Europe/Belgrade|Europe/Berlin|Europe/Bratislava|Europe/Brussels|Europe/Bucharest|Europe/Budapest|Europe/Busingen|Europe/Chisinau|Europe/Copenhagen|Europe/Dublin|Europe/Gibraltar|Europe/Guernsey|Europe/Helsinki|Europe/Isle_of_Man|Europe/Istanbul|Europe/Jersey|Europe/Kaliningrad|Europe/Kiev|Europe/Kirov|Europe/Lisbon|Europe/Ljubljana|Europe/London|Europe/Luxembourg|Europe/Madrid|Europe/Malta|Europe/Mariehamn|Europe/Minsk|Europe/Monaco|Europe/Moscow|Europe/Oslo|Europe/Paris|Europe/Podgorica|Europe/Prague|Europe/Riga|Europe/Rome|Europe/Samara|Europe/San_Marino|Europe/Sarajevo|Europe/Saratov|Europe/Simferopol|Europe/Skopje|Europe/Sofia|Europe/Stockholm|Europe/Tallinn|Europe/Tirane|Europe/Ulyanovsk|Europe/Uzhgorod|Europe/Vaduz|Europe/Vatican|Europe/Vienna|Europe/Vilnius|Europe/Volgograd|Europe/Warsaw|Europe/Zagreb|Europe/Zaporozhye|Europe/Zurich|Indian/Antananarivo|Indian/Chagos|Indian/Christmas|Indian/Cocos|Indian/Comoro|Indian/Kerguelen|Indian/Mahe|Indian/Maldives|Indian/Mauritius|Indian/Mayotte|Indian/Reunion|Pacific/Apia|Pacific/Auckland|Pacific/Bougainville|Pacific/Chatham|Pacific/Chuuk|Pacific/Easter|Pacific/Efate|Pacific/Enderbury|Pacific/Fakaofo|Pacific/Fiji|Pacific/Funafuti|Pacific/Galapagos|Pacific/Gambier|Pacific/Guadalcanal|Pacific/Guam|Pacific/Honolulu|Pacific/Kiritimati|Pacific/Kosrae|Pacific/Kwajalein|Pacific/Majuro|Pacific/Marquesas|Pacific/Midway|Pacific/Nauru|Pacific/Niue|Pacific/Norfolk|Pacific/Noumea|Pacific/Pago_Pago|Pacific/Palau|Pacific/Pitcairn|Pacific/Pohnpei|Pacific/Port_Moresby|Pacific/Rarotonga|Pacific/Saipan|Pacific/Tahiti|Pacific/Tarawa|Pacific/Tongatapu|Pacific/Wake|Pacific/Wallis|UTC
   * @param string? - eventId
   * @return Promise|Observable|any
   */
  CreateCIOEvent(
    poolId: string,
    userId: string,
    eventName: string,
    startTime: string = null,
    endTime: string = null,
    timezone: string = null,
    eventId: string = null,
  ): any {
    return this.restClient.post('Event/UseCase/CreateCIOEvent', {
      poolId,
      userId,
      eventName,
      startTime,
      endTime,
      timezone,
      eventId,
    });
  }

  /**
   * @param string - poolId
   * @param string - userId
   * @param string - eventName
   * @param string? - altKeyword
   * @param string? - contactEmail
   * @param string? - startTime
   * @param string? - endTime
   * @param string? - timezone Africa/Abidjan|Africa/Accra|Africa/Addis_Ababa|Africa/Algiers|Africa/Asmara|Africa/Bamako|Africa/Bangui|Africa/Banjul|Africa/Bissau|Africa/Blantyre|Africa/Brazzaville|Africa/Bujumbura|Africa/Cairo|Africa/Casablanca|Africa/Ceuta|Africa/Conakry|Africa/Dakar|Africa/Dar_es_Salaam|Africa/Djibouti|Africa/Douala|Africa/El_Aaiun|Africa/Freetown|Africa/Gaborone|Africa/Harare|Africa/Johannesburg|Africa/Juba|Africa/Kampala|Africa/Khartoum|Africa/Kigali|Africa/Kinshasa|Africa/Lagos|Africa/Libreville|Africa/Lome|Africa/Luanda|Africa/Lubumbashi|Africa/Lusaka|Africa/Malabo|Africa/Maputo|Africa/Maseru|Africa/Mbabane|Africa/Mogadishu|Africa/Monrovia|Africa/Nairobi|Africa/Ndjamena|Africa/Niamey|Africa/Nouakchott|Africa/Ouagadougou|Africa/Porto-Novo|Africa/Sao_Tome|Africa/Tripoli|Africa/Tunis|Africa/Windhoek|America/Adak|America/Anchorage|America/Anguilla|America/Antigua|America/Araguaina|America/Argentina/Buenos_Aires|America/Argentina/Catamarca|America/Argentina/Cordoba|America/Argentina/Jujuy|America/Argentina/La_Rioja|America/Argentina/Mendoza|America/Argentina/Rio_Gallegos|America/Argentina/Salta|America/Argentina/San_Juan|America/Argentina/San_Luis|America/Argentina/Tucuman|America/Argentina/Ushuaia|America/Aruba|America/Asuncion|America/Atikokan|America/Bahia|America/Bahia_Banderas|America/Barbados|America/Belem|America/Belize|America/Blanc-Sablon|America/Boa_Vista|America/Bogota|America/Boise|America/Cambridge_Bay|America/Campo_Grande|America/Cancun|America/Caracas|America/Cayenne|America/Cayman|America/Chicago|America/Chihuahua|America/Costa_Rica|America/Creston|America/Cuiaba|America/Curacao|America/Danmarkshavn|America/Dawson|America/Dawson_Creek|America/Denver|America/Detroit|America/Dominica|America/Edmonton|America/Eirunepe|America/El_Salvador|America/Fort_Nelson|America/Fortaleza|America/Glace_Bay|America/Godthab|America/Goose_Bay|America/Grand_Turk|America/Grenada|America/Guadeloupe|America/Guatemala|America/Guayaquil|America/Guyana|America/Halifax|America/Havana|America/Hermosillo|America/Indiana/Indianapolis|America/Indiana/Knox|America/Indiana/Marengo|America/Indiana/Petersburg|America/Indiana/Tell_City|America/Indiana/Vevay|America/Indiana/Vincennes|America/Indiana/Winamac|America/Inuvik|America/Iqaluit|America/Jamaica|America/Juneau|America/Kentucky/Louisville|America/Kentucky/Monticello|America/Kralendijk|America/La_Paz|America/Lima|America/Los_Angeles|America/Lower_Princes|America/Maceio|America/Managua|America/Manaus|America/Marigot|America/Martinique|America/Matamoros|America/Mazatlan|America/Menominee|America/Merida|America/Metlakatla|America/Mexico_City|America/Miquelon|America/Moncton|America/Monterrey|America/Montevideo|America/Montserrat|America/Nassau|America/New_York|America/Nipigon|America/Nome|America/Noronha|America/North_Dakota/Beulah|America/North_Dakota/Center|America/North_Dakota/New_Salem|America/Ojinaga|America/Panama|America/Pangnirtung|America/Paramaribo|America/Phoenix|America/Port-au-Prince|America/Port_of_Spain|America/Porto_Velho|America/Puerto_Rico|America/Punta_Arenas|America/Rainy_River|America/Rankin_Inlet|America/Recife|America/Regina|America/Resolute|America/Rio_Branco|America/Santarem|America/Santiago|America/Santo_Domingo|America/Sao_Paulo|America/Scoresbysund|America/Sitka|America/St_Barthelemy|America/St_Johns|America/St_Kitts|America/St_Lucia|America/St_Thomas|America/St_Vincent|America/Swift_Current|America/Tegucigalpa|America/Thule|America/Thunder_Bay|America/Tijuana|America/Toronto|America/Tortola|America/Vancouver|America/Whitehorse|America/Winnipeg|America/Yakutat|America/Yellowknife|Antarctica/Casey|Antarctica/Davis|Antarctica/DumontDUrville|Antarctica/Macquarie|Antarctica/Mawson|Antarctica/McMurdo|Antarctica/Palmer|Antarctica/Rothera|Antarctica/Syowa|Antarctica/Troll|Antarctica/Vostok|Arctic/Longyearbyen|Asia/Aden|Asia/Almaty|Asia/Amman|Asia/Anadyr|Asia/Aqtau|Asia/Aqtobe|Asia/Ashgabat|Asia/Atyrau|Asia/Baghdad|Asia/Bahrain|Asia/Baku|Asia/Bangkok|Asia/Barnaul|Asia/Beirut|Asia/Bishkek|Asia/Brunei|Asia/Chita|Asia/Choibalsan|Asia/Colombo|Asia/Damascus|Asia/Dhaka|Asia/Dili|Asia/Dubai|Asia/Dushanbe|Asia/Famagusta|Asia/Gaza|Asia/Hebron|Asia/Ho_Chi_Minh|Asia/Hong_Kong|Asia/Hovd|Asia/Irkutsk|Asia/Jakarta|Asia/Jayapura|Asia/Jerusalem|Asia/Kabul|Asia/Kamchatka|Asia/Karachi|Asia/Kathmandu|Asia/Khandyga|Asia/Kolkata|Asia/Krasnoyarsk|Asia/Kuala_Lumpur|Asia/Kuching|Asia/Kuwait|Asia/Macau|Asia/Magadan|Asia/Makassar|Asia/Manila|Asia/Muscat|Asia/Nicosia|Asia/Novokuznetsk|Asia/Novosibirsk|Asia/Omsk|Asia/Oral|Asia/Phnom_Penh|Asia/Pontianak|Asia/Pyongyang|Asia/Qatar|Asia/Qyzylorda|Asia/Riyadh|Asia/Sakhalin|Asia/Samarkand|Asia/Seoul|Asia/Shanghai|Asia/Singapore|Asia/Srednekolymsk|Asia/Taipei|Asia/Tashkent|Asia/Tbilisi|Asia/Tehran|Asia/Thimphu|Asia/Tokyo|Asia/Tomsk|Asia/Ulaanbaatar|Asia/Urumqi|Asia/Ust-Nera|Asia/Vientiane|Asia/Vladivostok|Asia/Yakutsk|Asia/Yangon|Asia/Yekaterinburg|Asia/Yerevan|Atlantic/Azores|Atlantic/Bermuda|Atlantic/Canary|Atlantic/Cape_Verde|Atlantic/Faroe|Atlantic/Madeira|Atlantic/Reykjavik|Atlantic/South_Georgia|Atlantic/St_Helena|Atlantic/Stanley|Australia/Adelaide|Australia/Brisbane|Australia/Broken_Hill|Australia/Currie|Australia/Darwin|Australia/Eucla|Australia/Hobart|Australia/Lindeman|Australia/Lord_Howe|Australia/Melbourne|Australia/Perth|Australia/Sydney|Europe/Amsterdam|Europe/Andorra|Europe/Astrakhan|Europe/Athens|Europe/Belgrade|Europe/Berlin|Europe/Bratislava|Europe/Brussels|Europe/Bucharest|Europe/Budapest|Europe/Busingen|Europe/Chisinau|Europe/Copenhagen|Europe/Dublin|Europe/Gibraltar|Europe/Guernsey|Europe/Helsinki|Europe/Isle_of_Man|Europe/Istanbul|Europe/Jersey|Europe/Kaliningrad|Europe/Kiev|Europe/Kirov|Europe/Lisbon|Europe/Ljubljana|Europe/London|Europe/Luxembourg|Europe/Madrid|Europe/Malta|Europe/Mariehamn|Europe/Minsk|Europe/Monaco|Europe/Moscow|Europe/Oslo|Europe/Paris|Europe/Podgorica|Europe/Prague|Europe/Riga|Europe/Rome|Europe/Samara|Europe/San_Marino|Europe/Sarajevo|Europe/Saratov|Europe/Simferopol|Europe/Skopje|Europe/Sofia|Europe/Stockholm|Europe/Tallinn|Europe/Tirane|Europe/Ulyanovsk|Europe/Uzhgorod|Europe/Vaduz|Europe/Vatican|Europe/Vienna|Europe/Vilnius|Europe/Volgograd|Europe/Warsaw|Europe/Zagreb|Europe/Zaporozhye|Europe/Zurich|Indian/Antananarivo|Indian/Chagos|Indian/Christmas|Indian/Cocos|Indian/Comoro|Indian/Kerguelen|Indian/Mahe|Indian/Maldives|Indian/Mauritius|Indian/Mayotte|Indian/Reunion|Pacific/Apia|Pacific/Auckland|Pacific/Bougainville|Pacific/Chatham|Pacific/Chuuk|Pacific/Easter|Pacific/Efate|Pacific/Enderbury|Pacific/Fakaofo|Pacific/Fiji|Pacific/Funafuti|Pacific/Galapagos|Pacific/Gambier|Pacific/Guadalcanal|Pacific/Guam|Pacific/Honolulu|Pacific/Kiritimati|Pacific/Kosrae|Pacific/Kwajalein|Pacific/Majuro|Pacific/Marquesas|Pacific/Midway|Pacific/Nauru|Pacific/Niue|Pacific/Norfolk|Pacific/Noumea|Pacific/Pago_Pago|Pacific/Palau|Pacific/Pitcairn|Pacific/Pohnpei|Pacific/Port_Moresby|Pacific/Rarotonga|Pacific/Saipan|Pacific/Tahiti|Pacific/Tarawa|Pacific/Tongatapu|Pacific/Wake|Pacific/Wallis|UTC
   * @param string? - eventId
   * @return Promise|Observable|any
   */
  CreateEvent(
    poolId: string,
    userId: string,
    eventName: string,
    altKeyword: string = null,
    contactEmail: string = null,
    startTime: string = null,
    endTime: string = null,
    timezone: string = null,
    eventId: string = null,
  ): any {
    return this.restClient.post('Event/UseCase/CreateEvent', {
      poolId,
      userId,
      eventName,
      altKeyword,
      contactEmail,
      startTime,
      endTime,
      timezone,
      eventId,
    });
  }

  /**
   * @param string - eventId
   * @param string - text
   * @param string - questionType checkbox|radio|multi|text|select|date|waiver
   * @param int? - sortOrder
   * @param bool? - isRequired true|false
   * @param bool? - isIndividual true|false
   * @param string? - ticketTypeId
   * @param string? - questionId
   * @param array? - questionContextTypes registration|lead
   * @return Promise|Observable|any
   */
  CreateQuestion(
    eventId: string,
    text: string,
    questionType: string,
    sortOrder: number = null,
    isRequired: boolean = null,
    isIndividual: boolean = null,
    ticketTypeId: string = null,
    questionId: string = null,
    questionContextTypes: any = null,
  ): any {
    return this.restClient.post('Event/UseCase/CreateQuestion', {
      eventId,
      text,
      questionType,
      sortOrder,
      isRequired,
      isIndividual,
      ticketTypeId,
      questionId,
      questionContextTypes,
    });
  }

  /**
   * @param string - answerId
   * @return Promise|Observable|any
   */
  DeleteAnswer(answerId: string): any {
    return this.restClient.post('Event/UseCase/DeleteAnswer', {
      answerId,
    });
  }

  /**
   * @param string - questionId
   * @return Promise|Observable|any
   */
  DeleteQuestion(questionId: string): any {
    return this.restClient.post('Event/UseCase/DeleteQuestion', {
      questionId,
    });
  }

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  DisableAmexCard(eventId: string): any {
    return this.restClient.post('Event/UseCase/DisableAmexCard', {
      eventId,
    });
  }

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  DisableCanvas(eventId: string): any {
    return this.restClient.post('Event/UseCase/DisableCanvas', {
      eventId,
    });
  }

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  DisableDiscoverCard(eventId: string): any {
    return this.restClient.post('Event/UseCase/DisableDiscoverCard', {
      eventId,
    });
  }

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  DisableDistribution(eventId: string): any {
    return this.restClient.post('Event/UseCase/DisableDistribution', {
      eventId,
    });
  }

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  DisableDonation(eventId: string): any {
    return this.restClient.post('Event/UseCase/DisableDonation', {
      eventId,
    });
  }

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  DisableDuplicateEmails(eventId: string): any {
    return this.restClient.post('Event/UseCase/DisableDuplicateEmails', {
      eventId,
    });
  }

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  DisableEditName(eventId: string): any {
    return this.restClient.post('Event/UseCase/DisableEditName', {
      eventId,
    });
  }

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  DisableEfx(eventId: string): any {
    return this.restClient.post('Event/UseCase/DisableEfx', {
      eventId,
    });
  }

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  DisableGuestCanChangeResponse(eventId: string): any {
    return this.restClient.post('Event/UseCase/DisableGuestCanChangeResponse', {
      eventId,
    });
  }

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  DisableInvitationReveal(eventId: string): any {
    return this.restClient.post('Event/UseCase/DisableInvitationReveal', {
      eventId,
    });
  }

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  DisableMastercardCard(eventId: string): any {
    return this.restClient.post('Event/UseCase/DisableMastercardCard', {
      eventId,
    });
  }

  /**
   * @param string - questionId
   * @return Promise|Observable|any
   */
  DisableQuestion(questionId: string): any {
    return this.restClient.post('Event/UseCase/DisableQuestion', {
      questionId,
    });
  }

  /**
   * @param string - eventId
   * @param string - field address|company|phone|title|country|position
   * @return Promise|Observable|any
   */
  DisableUserField(eventId: string, field: string): any {
    return this.restClient.post('Event/UseCase/DisableUserField', {
      eventId,
      field,
    });
  }

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  DisableVisaCard(eventId: string): any {
    return this.restClient.post('Event/UseCase/DisableVisaCard', {
      eventId,
    });
  }

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  EnableAmexCard(eventId: string): any {
    return this.restClient.post('Event/UseCase/EnableAmexCard', {
      eventId,
    });
  }

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  EnableCanvas(eventId: string): any {
    return this.restClient.post('Event/UseCase/EnableCanvas', {
      eventId,
    });
  }

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  EnableDiscoverCard(eventId: string): any {
    return this.restClient.post('Event/UseCase/EnableDiscoverCard', {
      eventId,
    });
  }

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  EnableDistribution(eventId: string): any {
    return this.restClient.post('Event/UseCase/EnableDistribution', {
      eventId,
    });
  }

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  EnableDonation(eventId: string): any {
    return this.restClient.post('Event/UseCase/EnableDonation', {
      eventId,
    });
  }

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  EnableDuplicateEmails(eventId: string): any {
    return this.restClient.post('Event/UseCase/EnableDuplicateEmails', {
      eventId,
    });
  }

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  EnableEditName(eventId: string): any {
    return this.restClient.post('Event/UseCase/EnableEditName', {
      eventId,
    });
  }

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  EnableEfx(eventId: string): any {
    return this.restClient.post('Event/UseCase/EnableEfx', {
      eventId,
    });
  }

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  EnableGuestCanChangeResponse(eventId: string): any {
    return this.restClient.post('Event/UseCase/EnableGuestCanChangeResponse', {
      eventId,
    });
  }

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  EnableInvitationReveal(eventId: string): any {
    return this.restClient.post('Event/UseCase/EnableInvitationReveal', {
      eventId,
    });
  }

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  EnableMastercardCard(eventId: string): any {
    return this.restClient.post('Event/UseCase/EnableMastercardCard', {
      eventId,
    });
  }

  /**
   * @param string - questionId
   * @return Promise|Observable|any
   */
  EnableQuestion(questionId: string): any {
    return this.restClient.post('Event/UseCase/EnableQuestion', {
      questionId,
    });
  }

  /**
   * @param string - eventId
   * @param string - field address|company|phone|title|country|position
   * @return Promise|Observable|any
   */
  EnableUserField(eventId: string, field: string): any {
    return this.restClient.post('Event/UseCase/EnableUserField', {
      eventId,
      field,
    });
  }

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  EnableVisaCard(eventId: string): any {
    return this.restClient.post('Event/UseCase/EnableVisaCard', {
      eventId,
    });
  }

  /**
   * @param string - poolId
   * @param string - userId
   * @param string - firstName
   * @param string - lastName
   * @param string - email
   * @param string - company
   * @param string - phoneNumber
   * @param string - howManyEvents fewer-than-5|between-5-and-30|more-than-30
   * @param string - industry consumer-goods|agency|education|finance|sports-and-entertainment|technology|other
   * @param array - typeOfEvents brand-awareness-events|trade-shows|conferences|roadshows|internal-meetings|recruiting-events|fundraising-events
   * @return Promise|Observable|any
   */
  IncrementCIOAndMessageCSM(
    poolId: string,
    userId: string,
    firstName: string,
    lastName: string,
    email: string,
    company: string,
    phoneNumber: string,
    howManyEvents: string,
    industry: string,
    typeOfEvents: any,
  ): any {
    return this.restClient.post('Event/UseCase/IncrementCIOAndMessageCSM', {
      poolId,
      userId,
      firstName,
      lastName,
      email,
      company,
      phoneNumber,
      howManyEvents,
      industry,
      typeOfEvents,
    });
  }

  /**
   * @param string - eventId
   * @param string - childEventId
   * @return Promise|Observable|any
   */
  RemoveChildEvent(eventId: string, childEventId: string): any {
    return this.restClient.post('Event/UseCase/RemoveChildEvent', {
      eventId,
      childEventId,
    });
  }

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  RemoveParentFromEvent(eventId: string): any {
    return this.restClient.post('Event/UseCase/RemoveParentFromEvent', {
      eventId,
    });
  }

  /**
   * @return Promise|Observable|any
   */
  SendMessageToGuestList(): any {
    return this.restClient.post('Event/UseCase/SendMessageToGuestList', {});
  }

  /**
   * @param string - eventId
   * @param string - altKeyword
   * @return Promise|Observable|any
   */
  SetAltKeywordForEvent(eventId: string, altKeyword: string): any {
    return this.restClient.post('Event/UseCase/SetAltKeywordForEvent', {
      eventId,
      altKeyword,
    });
  }

  /**
   * @param string - answerId
   * @param int - sortOrder
   * @return Promise|Observable|any
   */
  SetAnswerSortOrder(answerId: string, sortOrder: number): any {
    return this.restClient.post('Event/UseCase/SetAnswerSortOrder', {
      answerId,
      sortOrder,
    });
  }

  /**
   * @param string - eventId
   * @param string - sitePageId
   * @return Promise|Observable|any
   */
  SetDefaultSitePageForEvent(eventId: string, sitePageId: string): any {
    return this.restClient.post('Event/UseCase/SetDefaultSitePageForEvent', {
      eventId,
      sitePageId,
    });
  }

  /**
   * @param string - eventId
   * @param int - eventMaxInvitationCount
   * @return Promise|Observable|any
   */
  SetEventMaxInvitationCount(
    eventId: string,
    eventMaxInvitationCount: number,
  ): any {
    return this.restClient.post('Event/UseCase/SetEventMaxInvitationCount', {
      eventId,
      eventMaxInvitationCount,
    });
  }

  /**
   * @param string - eventId
   * @param int - eventMinInvitationCount
   * @return Promise|Observable|any
   */
  SetEventMinInvitationCount(
    eventId: string,
    eventMinInvitationCount: number,
  ): any {
    return this.restClient.post('Event/UseCase/SetEventMinInvitationCount', {
      eventId,
      eventMinInvitationCount,
    });
  }

  /**
   * @param string - questionId
   * @param int - sortOrder
   * @return Promise|Observable|any
   */
  SetQuestionSortOrder(questionId: string, sortOrder: number): any {
    return this.restClient.post('Event/UseCase/SetQuestionSortOrder', {
      questionId,
      sortOrder,
    });
  }

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  UnarchiveEvent(eventId: string): any {
    return this.restClient.post('Event/UseCase/UnarchiveEvent', {
      eventId,
    });
  }

  /**
   * @param string - answerId
   * @param string - text
   * @param bool? - isDefault true|false
   * @return Promise|Observable|any
   */
  UpdateAnswer(answerId: string, text: string, isDefault: boolean = null): any {
    return this.restClient.post('Event/UseCase/UpdateAnswer', {
      answerId,
      text,
      isDefault,
    });
  }

  /**
   * @param string - questionId
   * @param string - text
   * @param string - questionType checkbox|radio|multi|text|select|date|waiver
   * @param array? - questionContextTypes registration|lead
   * @param bool? - isRequired true|false
   * @param bool? - isIndividual true|false
   * @param string? - ticketTypeId
   * @return Promise|Observable|any
   */
  UpdateQuestion(
    questionId: string,
    text: string,
    questionType: string,
    questionContextTypes: any = null,
    isRequired: boolean = null,
    isIndividual: boolean = null,
    ticketTypeId: string = null,
  ): any {
    return this.restClient.post('Event/UseCase/UpdateQuestion', {
      questionId,
      text,
      questionType,
      questionContextTypes,
      isRequired,
      isIndividual,
      ticketTypeId,
    });
  }
}
