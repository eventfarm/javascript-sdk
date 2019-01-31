/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class EmailMessage {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - emailMessageId
   * @return Promise|Observable|any
   */
  GetEmailMessage(emailMessageId: string): any {
    return this.restClient.get('EmailMessage/UseCase/GetEmailMessage', {
      emailMessageId,
    });
  }

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  GetEmailMessageStatsForEvent(eventId: string): any {
    return this.restClient.get(
      'EmailMessage/UseCase/GetEmailMessageStatsForEvent',
      {
        eventId,
      },
    );
  }

  /**
   * @param string - mongoQueueId
   * @return Promise|Observable|any
   */
  GetScheduledEmailMessage(mongoQueueId: string): any {
    return this.restClient.get(
      'EmailMessage/UseCase/GetScheduledEmailMessage',
      {
        mongoQueueId,
      },
    );
  }

  /**
   * @param string - eventId
   * @param int? - page
   * @param int? - itemsPerPage
   * @return Promise|Observable|any
   */
  ListOutboxEmailMessagesByEvent(
    eventId: string,
    page: number = null,
    itemsPerPage: number = null,
  ): any {
    return this.restClient.get(
      'EmailMessage/UseCase/ListOutboxEmailMessagesByEvent',
      {
        eventId,
        page,
        itemsPerPage,
      },
    );
  }

  /**
   * @param string - eventId
   * @param int? - page >= 1
   * @param int? - itemsPerPage 1-100
   * @return Promise|Observable|any
   */
  ListScheduledBatchEmailMessagesByEvent(
    eventId: string,
    page: number = null,
    itemsPerPage: number = null,
  ): any {
    return this.restClient.get(
      'EmailMessage/UseCase/ListScheduledBatchEmailMessagesByEvent',
      {
        eventId,
        page,
        itemsPerPage,
      },
    );
  }

  /**
   * @param string - eventId
   * @param int? - page
   * @param int? - itemsPerPage
   * @return Promise|Observable|any
   */
  ListScheduledEmailMessagesByEvent(
    eventId: string,
    page: number = null,
    itemsPerPage: number = null,
  ): any {
    return this.restClient.get(
      'EmailMessage/UseCase/ListScheduledEmailMessagesByEvent',
      {
        eventId,
        page,
        itemsPerPage,
      },
    );
  }

  /**
   * @param string - eventId
   * @param int? - page
   * @param int? - itemsPerPage
   * @return Promise|Observable|any
   */
  ListSentEmailMessagesByEvent(
    eventId: string,
    page: number = null,
    itemsPerPage: number = null,
  ): any {
    return this.restClient.get(
      'EmailMessage/UseCase/ListSentEmailMessagesByEvent',
      {
        eventId,
        page,
        itemsPerPage,
      },
    );
  }

  // Commands

  /**
   * @param string - eventId
   * @param string - ownerUserId
   * @param string - messageContent
   * @param array - toEmails
   * @param string - fromName
   * @param string - subject
   * @param string - layoutType blank|alt-email-layout
   * @param string - messageType confirmation|donation|invitation|sendamessage|sendgroupmessage
   * @param string - backgroundColor
   * @param string? - fromEmail
   * @param string? - replyEmail
   * @param string? - domainMaskEmail
   * @return Promise|Observable|any
   */
  CreatePreviewEmailMessage(
    eventId: string,
    ownerUserId: string,
    messageContent: string,
    toEmails: any,
    fromName: string,
    subject: string,
    layoutType: string,
    messageType: string,
    backgroundColor: string,
    fromEmail: string = null,
    replyEmail: string = null,
    domainMaskEmail: string = null,
  ): any {
    return this.restClient.post(
      'EmailMessage/UseCase/CreatePreviewEmailMessage',
      {
        eventId,
        ownerUserId,
        messageContent,
        toEmails,
        fromName,
        subject,
        layoutType,
        messageType,
        backgroundColor,
        fromEmail,
        replyEmail,
        domainMaskEmail,
      },
    );
  }

  /**
   * @param string - eventId
   * @param string - ownerUserId
   * @param string - emailDesignId
   * @param string - type status
   * @param array - targets confirmed|purchased|assigned|unconfirmed|attended
   * @param string - messageSendTime
   * @param string - timezone Africa/Abidjan|Africa/Accra|Africa/Addis_Ababa|Africa/Algiers|Africa/Asmara|Africa/Bamako|Africa/Bangui|Africa/Banjul|Africa/Bissau|Africa/Blantyre|Africa/Brazzaville|Africa/Bujumbura|Africa/Cairo|Africa/Casablanca|Africa/Ceuta|Africa/Conakry|Africa/Dakar|Africa/Dar_es_Salaam|Africa/Djibouti|Africa/Douala|Africa/El_Aaiun|Africa/Freetown|Africa/Gaborone|Africa/Harare|Africa/Johannesburg|Africa/Juba|Africa/Kampala|Africa/Khartoum|Africa/Kigali|Africa/Kinshasa|Africa/Lagos|Africa/Libreville|Africa/Lome|Africa/Luanda|Africa/Lubumbashi|Africa/Lusaka|Africa/Malabo|Africa/Maputo|Africa/Maseru|Africa/Mbabane|Africa/Mogadishu|Africa/Monrovia|Africa/Nairobi|Africa/Ndjamena|Africa/Niamey|Africa/Nouakchott|Africa/Ouagadougou|Africa/Porto-Novo|Africa/Sao_Tome|Africa/Tripoli|Africa/Tunis|Africa/Windhoek|America/Adak|America/Anchorage|America/Anguilla|America/Antigua|America/Araguaina|America/Argentina/Buenos_Aires|America/Argentina/Catamarca|America/Argentina/Cordoba|America/Argentina/Jujuy|America/Argentina/La_Rioja|America/Argentina/Mendoza|America/Argentina/Rio_Gallegos|America/Argentina/Salta|America/Argentina/San_Juan|America/Argentina/San_Luis|America/Argentina/Tucuman|America/Argentina/Ushuaia|America/Aruba|America/Asuncion|America/Atikokan|America/Bahia|America/Bahia_Banderas|America/Barbados|America/Belem|America/Belize|America/Blanc-Sablon|America/Boa_Vista|America/Bogota|America/Boise|America/Cambridge_Bay|America/Campo_Grande|America/Cancun|America/Caracas|America/Cayenne|America/Cayman|America/Chicago|America/Chihuahua|America/Costa_Rica|America/Creston|America/Cuiaba|America/Curacao|America/Danmarkshavn|America/Dawson|America/Dawson_Creek|America/Denver|America/Detroit|America/Dominica|America/Edmonton|America/Eirunepe|America/El_Salvador|America/Fort_Nelson|America/Fortaleza|America/Glace_Bay|America/Godthab|America/Goose_Bay|America/Grand_Turk|America/Grenada|America/Guadeloupe|America/Guatemala|America/Guayaquil|America/Guyana|America/Halifax|America/Havana|America/Hermosillo|America/Indiana/Indianapolis|America/Indiana/Knox|America/Indiana/Marengo|America/Indiana/Petersburg|America/Indiana/Tell_City|America/Indiana/Vevay|America/Indiana/Vincennes|America/Indiana/Winamac|America/Inuvik|America/Iqaluit|America/Jamaica|America/Juneau|America/Kentucky/Louisville|America/Kentucky/Monticello|America/Kralendijk|America/La_Paz|America/Lima|America/Los_Angeles|America/Lower_Princes|America/Maceio|America/Managua|America/Manaus|America/Marigot|America/Martinique|America/Matamoros|America/Mazatlan|America/Menominee|America/Merida|America/Metlakatla|America/Mexico_City|America/Miquelon|America/Moncton|America/Monterrey|America/Montevideo|America/Montserrat|America/Nassau|America/New_York|America/Nipigon|America/Nome|America/Noronha|America/North_Dakota/Beulah|America/North_Dakota/Center|America/North_Dakota/New_Salem|America/Ojinaga|America/Panama|America/Pangnirtung|America/Paramaribo|America/Phoenix|America/Port-au-Prince|America/Port_of_Spain|America/Porto_Velho|America/Puerto_Rico|America/Punta_Arenas|America/Rainy_River|America/Rankin_Inlet|America/Recife|America/Regina|America/Resolute|America/Rio_Branco|America/Santarem|America/Santiago|America/Santo_Domingo|America/Sao_Paulo|America/Scoresbysund|America/Sitka|America/St_Barthelemy|America/St_Johns|America/St_Kitts|America/St_Lucia|America/St_Thomas|America/St_Vincent|America/Swift_Current|America/Tegucigalpa|America/Thule|America/Thunder_Bay|America/Tijuana|America/Toronto|America/Tortola|America/Vancouver|America/Whitehorse|America/Winnipeg|America/Yakutat|America/Yellowknife|Antarctica/Casey|Antarctica/Davis|Antarctica/DumontDUrville|Antarctica/Macquarie|Antarctica/Mawson|Antarctica/McMurdo|Antarctica/Palmer|Antarctica/Rothera|Antarctica/Syowa|Antarctica/Troll|Antarctica/Vostok|Arctic/Longyearbyen|Asia/Aden|Asia/Almaty|Asia/Amman|Asia/Anadyr|Asia/Aqtau|Asia/Aqtobe|Asia/Ashgabat|Asia/Atyrau|Asia/Baghdad|Asia/Bahrain|Asia/Baku|Asia/Bangkok|Asia/Barnaul|Asia/Beirut|Asia/Bishkek|Asia/Brunei|Asia/Chita|Asia/Choibalsan|Asia/Colombo|Asia/Damascus|Asia/Dhaka|Asia/Dili|Asia/Dubai|Asia/Dushanbe|Asia/Famagusta|Asia/Gaza|Asia/Hebron|Asia/Ho_Chi_Minh|Asia/Hong_Kong|Asia/Hovd|Asia/Irkutsk|Asia/Jakarta|Asia/Jayapura|Asia/Jerusalem|Asia/Kabul|Asia/Kamchatka|Asia/Karachi|Asia/Kathmandu|Asia/Khandyga|Asia/Kolkata|Asia/Krasnoyarsk|Asia/Kuala_Lumpur|Asia/Kuching|Asia/Kuwait|Asia/Macau|Asia/Magadan|Asia/Makassar|Asia/Manila|Asia/Muscat|Asia/Nicosia|Asia/Novokuznetsk|Asia/Novosibirsk|Asia/Omsk|Asia/Oral|Asia/Phnom_Penh|Asia/Pontianak|Asia/Pyongyang|Asia/Qatar|Asia/Qyzylorda|Asia/Riyadh|Asia/Sakhalin|Asia/Samarkand|Asia/Seoul|Asia/Shanghai|Asia/Singapore|Asia/Srednekolymsk|Asia/Taipei|Asia/Tashkent|Asia/Tbilisi|Asia/Tehran|Asia/Thimphu|Asia/Tokyo|Asia/Tomsk|Asia/Ulaanbaatar|Asia/Urumqi|Asia/Ust-Nera|Asia/Vientiane|Asia/Vladivostok|Asia/Yakutsk|Asia/Yangon|Asia/Yekaterinburg|Asia/Yerevan|Atlantic/Azores|Atlantic/Bermuda|Atlantic/Canary|Atlantic/Cape_Verde|Atlantic/Faroe|Atlantic/Madeira|Atlantic/Reykjavik|Atlantic/South_Georgia|Atlantic/St_Helena|Atlantic/Stanley|Australia/Adelaide|Australia/Brisbane|Australia/Broken_Hill|Australia/Currie|Australia/Darwin|Australia/Eucla|Australia/Hobart|Australia/Lindeman|Australia/Lord_Howe|Australia/Melbourne|Australia/Perth|Australia/Sydney|Europe/Amsterdam|Europe/Andorra|Europe/Astrakhan|Europe/Athens|Europe/Belgrade|Europe/Berlin|Europe/Bratislava|Europe/Brussels|Europe/Bucharest|Europe/Budapest|Europe/Busingen|Europe/Chisinau|Europe/Copenhagen|Europe/Dublin|Europe/Gibraltar|Europe/Guernsey|Europe/Helsinki|Europe/Isle_of_Man|Europe/Istanbul|Europe/Jersey|Europe/Kaliningrad|Europe/Kiev|Europe/Kirov|Europe/Lisbon|Europe/Ljubljana|Europe/London|Europe/Luxembourg|Europe/Madrid|Europe/Malta|Europe/Mariehamn|Europe/Minsk|Europe/Monaco|Europe/Moscow|Europe/Oslo|Europe/Paris|Europe/Podgorica|Europe/Prague|Europe/Riga|Europe/Rome|Europe/Samara|Europe/San_Marino|Europe/Sarajevo|Europe/Saratov|Europe/Simferopol|Europe/Skopje|Europe/Sofia|Europe/Stockholm|Europe/Tallinn|Europe/Tirane|Europe/Ulyanovsk|Europe/Uzhgorod|Europe/Vaduz|Europe/Vatican|Europe/Vienna|Europe/Vilnius|Europe/Volgograd|Europe/Warsaw|Europe/Zagreb|Europe/Zaporozhye|Europe/Zurich|Indian/Antananarivo|Indian/Chagos|Indian/Christmas|Indian/Cocos|Indian/Comoro|Indian/Kerguelen|Indian/Mahe|Indian/Maldives|Indian/Mauritius|Indian/Mayotte|Indian/Reunion|Pacific/Apia|Pacific/Auckland|Pacific/Bougainville|Pacific/Chatham|Pacific/Chuuk|Pacific/Easter|Pacific/Efate|Pacific/Enderbury|Pacific/Fakaofo|Pacific/Fiji|Pacific/Funafuti|Pacific/Galapagos|Pacific/Gambier|Pacific/Guadalcanal|Pacific/Guam|Pacific/Honolulu|Pacific/Kiritimati|Pacific/Kosrae|Pacific/Kwajalein|Pacific/Majuro|Pacific/Marquesas|Pacific/Midway|Pacific/Nauru|Pacific/Niue|Pacific/Norfolk|Pacific/Noumea|Pacific/Pago_Pago|Pacific/Palau|Pacific/Pitcairn|Pacific/Pohnpei|Pacific/Port_Moresby|Pacific/Rarotonga|Pacific/Saipan|Pacific/Tahiti|Pacific/Tarawa|Pacific/Tongatapu|Pacific/Wake|Pacific/Wallis|UTC
   * @return Promise|Observable|any
   */
  CreateScheduledBatchEmailMessage(
    eventId: string,
    ownerUserId: string,
    emailDesignId: string,
    type: string,
    targets: any,
    messageSendTime: string,
    timezone: string,
  ): any {
    return this.restClient.post(
      'EmailMessage/UseCase/CreateScheduledBatchEmailMessage',
      {
        eventId,
        ownerUserId,
        emailDesignId,
        type,
        targets,
        messageSendTime,
        timezone,
      },
    );
  }

  /**
   * @param string - mongoQueueId
   * @return Promise|Observable|any
   */
  RemoveScheduledBatchEmailMessage(mongoQueueId: string): any {
    return this.restClient.post(
      'EmailMessage/UseCase/RemoveScheduledBatchEmailMessage',
      {
        mongoQueueId,
      },
    );
  }

  /**
   * @param string - eventId
   * @param string - ownerUserId
   * @param string - messageContents
   * @param string - subject
   * @param string - fromName
   * @param string? - replyEmail
   * @param bool? - useEventSpecificLayout true|false
   * @param string? - backgroundColor
   * @param string? - domainMaskEmail
   * @return Promise|Observable|any
   */
  SendAMessagePreview(
    eventId: string,
    ownerUserId: string,
    messageContents: string,
    subject: string,
    fromName: string,
    replyEmail: string = null,
    useEventSpecificLayout: boolean = null,
    backgroundColor: string = null,
    domainMaskEmail: string = null,
  ): any {
    return this.restClient.post('EmailMessage/UseCase/SendAMessagePreview', {
      eventId,
      ownerUserId,
      messageContents,
      subject,
      fromName,
      replyEmail,
      useEventSpecificLayout,
      backgroundColor,
      domainMaskEmail,
    });
  }

  /**
   * @param string - eventId
   * @param string - ownerUserId
   * @param string - messageContents
   * @param string - subject
   * @param string - fromName
   * @param string? - replyEmail
   * @param array? - ccEmails
   * @param array? - bccEmails
   * @param bool? - useEventSpecificLayout true|false
   * @param string? - backgroundColor
   * @param string? - domainMaskEmail
   * @return Promise|Observable|any
   */
  SendAMessageToAllCheckedInGuests(
    eventId: string,
    ownerUserId: string,
    messageContents: string,
    subject: string,
    fromName: string,
    replyEmail: string = null,
    ccEmails: any = null,
    bccEmails: any = null,
    useEventSpecificLayout: boolean = null,
    backgroundColor: string = null,
    domainMaskEmail: string = null,
  ): any {
    return this.restClient.post(
      'EmailMessage/UseCase/SendAMessageToAllCheckedInGuests',
      {
        eventId,
        ownerUserId,
        messageContents,
        subject,
        fromName,
        replyEmail,
        ccEmails,
        bccEmails,
        useEventSpecificLayout,
        backgroundColor,
        domainMaskEmail,
      },
    );
  }

  /**
   * @param string - eventId
   * @param string - ownerUserId
   * @param string - messageContents
   * @param string - subject
   * @param string - fromName
   * @param string? - replyEmail
   * @param array? - ccEmails
   * @param array? - bccEmails
   * @param bool? - useEventSpecificLayout true|false
   * @param string? - backgroundColor
   * @param string? - domainMaskEmail
   * @return Promise|Observable|any
   */
  SendAMessageToEventWaitList(
    eventId: string,
    ownerUserId: string,
    messageContents: string,
    subject: string,
    fromName: string,
    replyEmail: string = null,
    ccEmails: any = null,
    bccEmails: any = null,
    useEventSpecificLayout: boolean = null,
    backgroundColor: string = null,
    domainMaskEmail: string = null,
  ): any {
    return this.restClient.post(
      'EmailMessage/UseCase/SendAMessageToEventWaitList',
      {
        eventId,
        ownerUserId,
        messageContents,
        subject,
        fromName,
        replyEmail,
        ccEmails,
        bccEmails,
        useEventSpecificLayout,
        backgroundColor,
        domainMaskEmail,
      },
    );
  }

  /**
   * @param string - groupId
   * @param string - eventId
   * @param string - ownerUserId
   * @param string - messageContents
   * @param string - subject
   * @param string - fromName
   * @param string? - replyEmail
   * @param array? - ccEmails
   * @param array? - bccEmails
   * @param bool? - useEventSpecificLayout true|false
   * @param string? - backgroundColor
   * @param string? - domainMaskEmail
   * @return Promise|Observable|any
   */
  SendAMessageToGroup(
    groupId: string,
    eventId: string,
    ownerUserId: string,
    messageContents: string,
    subject: string,
    fromName: string,
    replyEmail: string = null,
    ccEmails: any = null,
    bccEmails: any = null,
    useEventSpecificLayout: boolean = null,
    backgroundColor: string = null,
    domainMaskEmail: string = null,
  ): any {
    return this.restClient.post('EmailMessage/UseCase/SendAMessageToGroup', {
      groupId,
      eventId,
      ownerUserId,
      messageContents,
      subject,
      fromName,
      replyEmail,
      ccEmails,
      bccEmails,
      useEventSpecificLayout,
      backgroundColor,
      domainMaskEmail,
    });
  }

  /**
   * @param string - eventId
   * @param string - ownerUserId
   * @param string - messageContents
   * @param string - subject
   * @param string - fromName
   * @param string? - replyEmail
   * @param array? - ccEmails
   * @param array? - bccEmails
   * @param bool? - useEventSpecificLayout true|false
   * @param string? - backgroundColor
   * @param string? - domainMaskEmail
   * @return Promise|Observable|any
   */
  SendAMessageToNoShows(
    eventId: string,
    ownerUserId: string,
    messageContents: string,
    subject: string,
    fromName: string,
    replyEmail: string = null,
    ccEmails: any = null,
    bccEmails: any = null,
    useEventSpecificLayout: boolean = null,
    backgroundColor: string = null,
    domainMaskEmail: string = null,
  ): any {
    return this.restClient.post('EmailMessage/UseCase/SendAMessageToNoShows', {
      eventId,
      ownerUserId,
      messageContents,
      subject,
      fromName,
      replyEmail,
      ccEmails,
      bccEmails,
      useEventSpecificLayout,
      backgroundColor,
      domainMaskEmail,
    });
  }

  /**
   * @param string - eventId
   * @param array - ticketTypeIds
   * @param array - invitationStatusTypes assigned|purchased|confirmed-by-rsvp|declined-by-rsvp|left-behind|not-yet-purchased|registered|unconfirmed|recycled|not-yet-registered|waitlisted
   * @param string - ownerUserId
   * @param string - messageContents
   * @param string - subject
   * @param string - fromName
   * @param string? - replyEmail
   * @param array? - ccEmails
   * @param array? - bccEmails
   * @param bool? - useEventSpecificLayout true|false
   * @param string? - backgroundColor
   * @param string? - domainMaskEmail
   * @return Promise|Observable|any
   */
  SendAMessageToTicketTypes(
    eventId: string,
    ticketTypeIds: any,
    invitationStatusTypes: any,
    ownerUserId: string,
    messageContents: string,
    subject: string,
    fromName: string,
    replyEmail: string = null,
    ccEmails: any = null,
    bccEmails: any = null,
    useEventSpecificLayout: boolean = null,
    backgroundColor: string = null,
    domainMaskEmail: string = null,
  ): any {
    return this.restClient.post(
      'EmailMessage/UseCase/SendAMessageToTicketTypes',
      {
        eventId,
        ticketTypeIds,
        invitationStatusTypes,
        ownerUserId,
        messageContents,
        subject,
        fromName,
        replyEmail,
        ccEmails,
        bccEmails,
        useEventSpecificLayout,
        backgroundColor,
        domainMaskEmail,
      },
    );
  }

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  SimulateEmailMessageStatsForEvent(eventId: string): any {
    return this.restClient.post(
      'EmailMessage/UseCase/SimulateEmailMessageStatsForEvent',
      {
        eventId,
      },
    );
  }

  /**
   * @param string - mongoQueueId
   * @param string - emailDesignId
   * @param array - targets confirmed|purchased|assigned|unconfirmed|attended
   * @param string - messageSendTime
   * @param string - timezone Africa/Abidjan|Africa/Accra|Africa/Addis_Ababa|Africa/Algiers|Africa/Asmara|Africa/Bamako|Africa/Bangui|Africa/Banjul|Africa/Bissau|Africa/Blantyre|Africa/Brazzaville|Africa/Bujumbura|Africa/Cairo|Africa/Casablanca|Africa/Ceuta|Africa/Conakry|Africa/Dakar|Africa/Dar_es_Salaam|Africa/Djibouti|Africa/Douala|Africa/El_Aaiun|Africa/Freetown|Africa/Gaborone|Africa/Harare|Africa/Johannesburg|Africa/Juba|Africa/Kampala|Africa/Khartoum|Africa/Kigali|Africa/Kinshasa|Africa/Lagos|Africa/Libreville|Africa/Lome|Africa/Luanda|Africa/Lubumbashi|Africa/Lusaka|Africa/Malabo|Africa/Maputo|Africa/Maseru|Africa/Mbabane|Africa/Mogadishu|Africa/Monrovia|Africa/Nairobi|Africa/Ndjamena|Africa/Niamey|Africa/Nouakchott|Africa/Ouagadougou|Africa/Porto-Novo|Africa/Sao_Tome|Africa/Tripoli|Africa/Tunis|Africa/Windhoek|America/Adak|America/Anchorage|America/Anguilla|America/Antigua|America/Araguaina|America/Argentina/Buenos_Aires|America/Argentina/Catamarca|America/Argentina/Cordoba|America/Argentina/Jujuy|America/Argentina/La_Rioja|America/Argentina/Mendoza|America/Argentina/Rio_Gallegos|America/Argentina/Salta|America/Argentina/San_Juan|America/Argentina/San_Luis|America/Argentina/Tucuman|America/Argentina/Ushuaia|America/Aruba|America/Asuncion|America/Atikokan|America/Bahia|America/Bahia_Banderas|America/Barbados|America/Belem|America/Belize|America/Blanc-Sablon|America/Boa_Vista|America/Bogota|America/Boise|America/Cambridge_Bay|America/Campo_Grande|America/Cancun|America/Caracas|America/Cayenne|America/Cayman|America/Chicago|America/Chihuahua|America/Costa_Rica|America/Creston|America/Cuiaba|America/Curacao|America/Danmarkshavn|America/Dawson|America/Dawson_Creek|America/Denver|America/Detroit|America/Dominica|America/Edmonton|America/Eirunepe|America/El_Salvador|America/Fort_Nelson|America/Fortaleza|America/Glace_Bay|America/Godthab|America/Goose_Bay|America/Grand_Turk|America/Grenada|America/Guadeloupe|America/Guatemala|America/Guayaquil|America/Guyana|America/Halifax|America/Havana|America/Hermosillo|America/Indiana/Indianapolis|America/Indiana/Knox|America/Indiana/Marengo|America/Indiana/Petersburg|America/Indiana/Tell_City|America/Indiana/Vevay|America/Indiana/Vincennes|America/Indiana/Winamac|America/Inuvik|America/Iqaluit|America/Jamaica|America/Juneau|America/Kentucky/Louisville|America/Kentucky/Monticello|America/Kralendijk|America/La_Paz|America/Lima|America/Los_Angeles|America/Lower_Princes|America/Maceio|America/Managua|America/Manaus|America/Marigot|America/Martinique|America/Matamoros|America/Mazatlan|America/Menominee|America/Merida|America/Metlakatla|America/Mexico_City|America/Miquelon|America/Moncton|America/Monterrey|America/Montevideo|America/Montserrat|America/Nassau|America/New_York|America/Nipigon|America/Nome|America/Noronha|America/North_Dakota/Beulah|America/North_Dakota/Center|America/North_Dakota/New_Salem|America/Ojinaga|America/Panama|America/Pangnirtung|America/Paramaribo|America/Phoenix|America/Port-au-Prince|America/Port_of_Spain|America/Porto_Velho|America/Puerto_Rico|America/Punta_Arenas|America/Rainy_River|America/Rankin_Inlet|America/Recife|America/Regina|America/Resolute|America/Rio_Branco|America/Santarem|America/Santiago|America/Santo_Domingo|America/Sao_Paulo|America/Scoresbysund|America/Sitka|America/St_Barthelemy|America/St_Johns|America/St_Kitts|America/St_Lucia|America/St_Thomas|America/St_Vincent|America/Swift_Current|America/Tegucigalpa|America/Thule|America/Thunder_Bay|America/Tijuana|America/Toronto|America/Tortola|America/Vancouver|America/Whitehorse|America/Winnipeg|America/Yakutat|America/Yellowknife|Antarctica/Casey|Antarctica/Davis|Antarctica/DumontDUrville|Antarctica/Macquarie|Antarctica/Mawson|Antarctica/McMurdo|Antarctica/Palmer|Antarctica/Rothera|Antarctica/Syowa|Antarctica/Troll|Antarctica/Vostok|Arctic/Longyearbyen|Asia/Aden|Asia/Almaty|Asia/Amman|Asia/Anadyr|Asia/Aqtau|Asia/Aqtobe|Asia/Ashgabat|Asia/Atyrau|Asia/Baghdad|Asia/Bahrain|Asia/Baku|Asia/Bangkok|Asia/Barnaul|Asia/Beirut|Asia/Bishkek|Asia/Brunei|Asia/Chita|Asia/Choibalsan|Asia/Colombo|Asia/Damascus|Asia/Dhaka|Asia/Dili|Asia/Dubai|Asia/Dushanbe|Asia/Famagusta|Asia/Gaza|Asia/Hebron|Asia/Ho_Chi_Minh|Asia/Hong_Kong|Asia/Hovd|Asia/Irkutsk|Asia/Jakarta|Asia/Jayapura|Asia/Jerusalem|Asia/Kabul|Asia/Kamchatka|Asia/Karachi|Asia/Kathmandu|Asia/Khandyga|Asia/Kolkata|Asia/Krasnoyarsk|Asia/Kuala_Lumpur|Asia/Kuching|Asia/Kuwait|Asia/Macau|Asia/Magadan|Asia/Makassar|Asia/Manila|Asia/Muscat|Asia/Nicosia|Asia/Novokuznetsk|Asia/Novosibirsk|Asia/Omsk|Asia/Oral|Asia/Phnom_Penh|Asia/Pontianak|Asia/Pyongyang|Asia/Qatar|Asia/Qyzylorda|Asia/Riyadh|Asia/Sakhalin|Asia/Samarkand|Asia/Seoul|Asia/Shanghai|Asia/Singapore|Asia/Srednekolymsk|Asia/Taipei|Asia/Tashkent|Asia/Tbilisi|Asia/Tehran|Asia/Thimphu|Asia/Tokyo|Asia/Tomsk|Asia/Ulaanbaatar|Asia/Urumqi|Asia/Ust-Nera|Asia/Vientiane|Asia/Vladivostok|Asia/Yakutsk|Asia/Yangon|Asia/Yekaterinburg|Asia/Yerevan|Atlantic/Azores|Atlantic/Bermuda|Atlantic/Canary|Atlantic/Cape_Verde|Atlantic/Faroe|Atlantic/Madeira|Atlantic/Reykjavik|Atlantic/South_Georgia|Atlantic/St_Helena|Atlantic/Stanley|Australia/Adelaide|Australia/Brisbane|Australia/Broken_Hill|Australia/Currie|Australia/Darwin|Australia/Eucla|Australia/Hobart|Australia/Lindeman|Australia/Lord_Howe|Australia/Melbourne|Australia/Perth|Australia/Sydney|Europe/Amsterdam|Europe/Andorra|Europe/Astrakhan|Europe/Athens|Europe/Belgrade|Europe/Berlin|Europe/Bratislava|Europe/Brussels|Europe/Bucharest|Europe/Budapest|Europe/Busingen|Europe/Chisinau|Europe/Copenhagen|Europe/Dublin|Europe/Gibraltar|Europe/Guernsey|Europe/Helsinki|Europe/Isle_of_Man|Europe/Istanbul|Europe/Jersey|Europe/Kaliningrad|Europe/Kiev|Europe/Kirov|Europe/Lisbon|Europe/Ljubljana|Europe/London|Europe/Luxembourg|Europe/Madrid|Europe/Malta|Europe/Mariehamn|Europe/Minsk|Europe/Monaco|Europe/Moscow|Europe/Oslo|Europe/Paris|Europe/Podgorica|Europe/Prague|Europe/Riga|Europe/Rome|Europe/Samara|Europe/San_Marino|Europe/Sarajevo|Europe/Saratov|Europe/Simferopol|Europe/Skopje|Europe/Sofia|Europe/Stockholm|Europe/Tallinn|Europe/Tirane|Europe/Ulyanovsk|Europe/Uzhgorod|Europe/Vaduz|Europe/Vatican|Europe/Vienna|Europe/Vilnius|Europe/Volgograd|Europe/Warsaw|Europe/Zagreb|Europe/Zaporozhye|Europe/Zurich|Indian/Antananarivo|Indian/Chagos|Indian/Christmas|Indian/Cocos|Indian/Comoro|Indian/Kerguelen|Indian/Mahe|Indian/Maldives|Indian/Mauritius|Indian/Mayotte|Indian/Reunion|Pacific/Apia|Pacific/Auckland|Pacific/Bougainville|Pacific/Chatham|Pacific/Chuuk|Pacific/Easter|Pacific/Efate|Pacific/Enderbury|Pacific/Fakaofo|Pacific/Fiji|Pacific/Funafuti|Pacific/Galapagos|Pacific/Gambier|Pacific/Guadalcanal|Pacific/Guam|Pacific/Honolulu|Pacific/Kiritimati|Pacific/Kosrae|Pacific/Kwajalein|Pacific/Majuro|Pacific/Marquesas|Pacific/Midway|Pacific/Nauru|Pacific/Niue|Pacific/Norfolk|Pacific/Noumea|Pacific/Pago_Pago|Pacific/Palau|Pacific/Pitcairn|Pacific/Pohnpei|Pacific/Port_Moresby|Pacific/Rarotonga|Pacific/Saipan|Pacific/Tahiti|Pacific/Tarawa|Pacific/Tongatapu|Pacific/Wake|Pacific/Wallis|UTC
   * @return Promise|Observable|any
   */
  UpdateScheduledBatchEmailMessage(
    mongoQueueId: string,
    emailDesignId: string,
    targets: any,
    messageSendTime: string,
    timezone: string,
  ): any {
    return this.restClient.post(
      'EmailMessage/UseCase/UpdateScheduledBatchEmailMessage',
      {
        mongoQueueId,
        emailDesignId,
        targets,
        messageSendTime,
        timezone,
      },
    );
  }
}
