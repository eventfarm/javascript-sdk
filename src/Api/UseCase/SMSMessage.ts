/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class SMSMessage {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - campaignId
   * @param string[]? - withData SMSNotifications
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-100
   * @param string? - sortBy sent-at|delivered-at
   * @param string? - sortDirection ascending|descending
   * @param string? - query
   * @param any[]? - categoryFilter alert|event-message|event-message-preview|system
   * @param any[]? - subCategoryFilter ticketblock|group|checked-in|ticket-type|preview|no_show|waitlist|invitation|opt-in|none
   * @return Promise|Observable|any
   */
  ListSentSMSMessagesForCampaign(
    campaignId: string,
    withData: string[] = null,
    page: number = null,
    itemsPerPage: number = null,
    sortBy: string = null,
    sortDirection: string = null,
    query: string = null,
    categoryFilter: any[] = null,
    subCategoryFilter: any[] = null,
  ): any {
    return this.restClient.get(
      'SMSMessage/UseCase/ListSentSMSMessagesForCampaign',
      {
        campaignId,
        withData,
        page,
        itemsPerPage,
        sortBy,
        sortDirection,
        query,
        categoryFilter,
        subCategoryFilter,
      },
    );
  }

  /**
   * @param string - eventId
   * @param string[]? - withData SMSNotifications
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-100
   * @param string? - sortBy sent-at|delivered-at
   * @param string? - sortDirection ascending|descending
   * @param string? - query
   * @param any[]? - categoryFilter alert|event-message|event-message-preview|system
   * @param any[]? - subCategoryFilter ticketblock|group|checked-in|ticket-type|preview|no_show|waitlist|invitation|opt-in|none
   * @return Promise|Observable|any
   */
  ListSentSMSMessagesForEvent(
    eventId: string,
    withData: string[] = null,
    page: number = null,
    itemsPerPage: number = null,
    sortBy: string = null,
    sortDirection: string = null,
    query: string = null,
    categoryFilter: any[] = null,
    subCategoryFilter: any[] = null,
  ): any {
    return this.restClient.get(
      'SMSMessage/UseCase/ListSentSMSMessagesForEvent',
      {
        eventId,
        withData,
        page,
        itemsPerPage,
        sortBy,
        sortDirection,
        query,
        categoryFilter,
        subCategoryFilter,
      },
    );
  }

  /**
   * @param string - poolId
   * @param string[]? - withData SMSNotifications
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-100
   * @param string? - sortBy sent-at|delivered-at
   * @param string? - sortDirection ascending|descending
   * @param string? - query
   * @param any[]? - categoryFilter alert|event-message|event-message-preview|system
   * @param any[]? - subCategoryFilter ticketblock|group|checked-in|ticket-type|preview|no_show|waitlist|invitation|opt-in|none
   * @return Promise|Observable|any
   */
  ListSentSMSMessagesForPool(
    poolId: string,
    withData: string[] = null,
    page: number = null,
    itemsPerPage: number = null,
    sortBy: string = null,
    sortDirection: string = null,
    query: string = null,
    categoryFilter: any[] = null,
    subCategoryFilter: any[] = null,
  ): any {
    return this.restClient.get(
      'SMSMessage/UseCase/ListSentSMSMessagesForPool',
      {
        poolId,
        withData,
        page,
        itemsPerPage,
        sortBy,
        sortDirection,
        query,
        categoryFilter,
        subCategoryFilter,
      },
    );
  }

  /**
   * @param string - sentTo
   * @param string - eventId
   * @param string[]? - withData SMSNotifications
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-100
   * @param string? - sortBy sent-at|delivered-at
   * @param string? - sortDirection ascending|descending
   * @param string? - query
   * @param any[]? - categoryFilter alert|event-message|event-message-preview|system
   * @param any[]? - subCategoryFilter ticketblock|group|checked-in|ticket-type|preview|no_show|waitlist|invitation|opt-in|none
   * @return Promise|Observable|any
   */
  ListSentSMSMessagesForSentToForEvent(
    sentTo: string,
    eventId: string,
    withData: string[] = null,
    page: number = null,
    itemsPerPage: number = null,
    sortBy: string = null,
    sortDirection: string = null,
    query: string = null,
    categoryFilter: any[] = null,
    subCategoryFilter: any[] = null,
  ): any {
    return this.restClient.get(
      'SMSMessage/UseCase/ListSentSMSMessagesForSentToForEvent',
      {
        sentTo,
        eventId,
        withData,
        page,
        itemsPerPage,
        sortBy,
        sortDirection,
        query,
        categoryFilter,
        subCategoryFilter,
      },
    );
  }

  /**
   * @param string - sentTo
   * @param string - poolId
   * @param string[]? - withData SMSNotifications
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-100
   * @param string? - sortBy sent-at|delivered-at
   * @param string? - sortDirection ascending|descending
   * @param string? - query
   * @param any[]? - categoryFilter alert|event-message|event-message-preview|system
   * @param any[]? - subCategoryFilter ticketblock|group|checked-in|ticket-type|preview|no_show|waitlist|invitation|opt-in|none
   * @return Promise|Observable|any
   */
  ListSentSMSMessagesForSentToForPool(
    sentTo: string,
    poolId: string,
    withData: string[] = null,
    page: number = null,
    itemsPerPage: number = null,
    sortBy: string = null,
    sortDirection: string = null,
    query: string = null,
    categoryFilter: any[] = null,
    subCategoryFilter: any[] = null,
  ): any {
    return this.restClient.get(
      'SMSMessage/UseCase/ListSentSMSMessagesForSentToForPool',
      {
        sentTo,
        poolId,
        withData,
        page,
        itemsPerPage,
        sortBy,
        sortDirection,
        query,
        categoryFilter,
        subCategoryFilter,
      },
    );
  }

  /**
   * @param string - userId
   * @param string - eventId
   * @param string[]? - withData SMSNotifications
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-100
   * @param string? - sortBy sent-at|delivered-at
   * @param string? - sortDirection ascending|descending
   * @param string? - query
   * @param any[]? - categoryFilter alert|event-message|event-message-preview|system
   * @param any[]? - subCategoryFilter ticketblock|group|checked-in|ticket-type|preview|no_show|waitlist|invitation|opt-in|none
   * @return Promise|Observable|any
   */
  ListSentSMSMessagesForUserForEvent(
    userId: string,
    eventId: string,
    withData: string[] = null,
    page: number = null,
    itemsPerPage: number = null,
    sortBy: string = null,
    sortDirection: string = null,
    query: string = null,
    categoryFilter: any[] = null,
    subCategoryFilter: any[] = null,
  ): any {
    return this.restClient.get(
      'SMSMessage/UseCase/ListSentSMSMessagesForUserForEvent',
      {
        userId,
        eventId,
        withData,
        page,
        itemsPerPage,
        sortBy,
        sortDirection,
        query,
        categoryFilter,
        subCategoryFilter,
      },
    );
  }

  /**
   * @param string - userId
   * @param string - poolId
   * @param string[]? - withData SMSNotifications
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-100
   * @param string? - sortBy sent-at|delivered-at
   * @param string? - sortDirection ascending|descending
   * @param string? - query
   * @param any[]? - categoryFilter alert|event-message|event-message-preview|system
   * @param any[]? - subCategoryFilter ticketblock|group|checked-in|ticket-type|preview|no_show|waitlist|invitation|opt-in|none
   * @return Promise|Observable|any
   */
  ListSentSMSMessagesForUserForPool(
    userId: string,
    poolId: string,
    withData: string[] = null,
    page: number = null,
    itemsPerPage: number = null,
    sortBy: string = null,
    sortDirection: string = null,
    query: string = null,
    categoryFilter: any[] = null,
    subCategoryFilter: any[] = null,
  ): any {
    return this.restClient.get(
      'SMSMessage/UseCase/ListSentSMSMessagesForUserForPool',
      {
        userId,
        poolId,
        withData,
        page,
        itemsPerPage,
        sortBy,
        sortDirection,
        query,
        categoryFilter,
        subCategoryFilter,
      },
    );
  }

  // Commands

  /**
   * @param any[] - mobileNumbers
   * @param string - eventId
   * @param string - ownerUserId
   * @param string - messageContents
   * @param string? - mediaUrl
   * @param string? - campaignId
   * @param boolean? - allowWhatsApp true|false
   * @return Promise|Observable|any
   */
  SendASMSMessagePreview(
    mobileNumbers: any[],
    eventId: string,
    ownerUserId: string,
    messageContents: string,
    mediaUrl: string = null,
    campaignId: string = null,
    allowWhatsApp: boolean = null,
  ): any {
    return this.restClient.post('SMSMessage/UseCase/SendASMSMessagePreview', {
      mobileNumbers,
      eventId,
      ownerUserId,
      messageContents,
      mediaUrl,
      campaignId,
      allowWhatsApp,
    });
  }

  /**
   * @param string - eventId
   * @param string - ownerUserId
   * @param string - messageContents
   * @param string? - mediaUrl
   * @param string? - campaignId
   * @param boolean? - allowWhatsApp true|false
   * @return Promise|Observable|any
   */
  SendASMSMessageToAllCheckedInGuests(
    eventId: string,
    ownerUserId: string,
    messageContents: string,
    mediaUrl: string = null,
    campaignId: string = null,
    allowWhatsApp: boolean = null,
  ): any {
    return this.restClient.post(
      'SMSMessage/UseCase/SendASMSMessageToAllCheckedInGuests',
      {
        eventId,
        ownerUserId,
        messageContents,
        mediaUrl,
        campaignId,
        allowWhatsApp,
      },
    );
  }

  /**
   * @param string - groupId
   * @param string - eventId
   * @param string - ownerUserId
   * @param string - messageContents
   * @param string? - mediaUrl
   * @param string? - campaignId
   * @param boolean? - allowWhatsApp true|false
   * @param string? - eventGroupStatusFilterType has_invitation|does_not_have_invitation
   * @return Promise|Observable|any
   */
  SendASMSMessageToGroup(
    groupId: string,
    eventId: string,
    ownerUserId: string,
    messageContents: string,
    mediaUrl: string = null,
    campaignId: string = null,
    allowWhatsApp: boolean = null,
    eventGroupStatusFilterType: string = null,
  ): any {
    return this.restClient.post('SMSMessage/UseCase/SendASMSMessageToGroup', {
      groupId,
      eventId,
      ownerUserId,
      messageContents,
      mediaUrl,
      campaignId,
      allowWhatsApp,
      eventGroupStatusFilterType,
    });
  }

  /**
   * @param any[] - invitationIds
   * @param string - eventId
   * @param string - ownerUserId
   * @param string - messageContents
   * @param string? - mediaUrl
   * @param string? - campaignId
   * @param boolean? - allowWhatsApp true|false
   * @return Promise|Observable|any
   */
  SendASMSMessageToInvitations(
    invitationIds: any[],
    eventId: string,
    ownerUserId: string,
    messageContents: string,
    mediaUrl: string = null,
    campaignId: string = null,
    allowWhatsApp: boolean = null,
  ): any {
    return this.restClient.post(
      'SMSMessage/UseCase/SendASMSMessageToInvitations',
      {
        invitationIds,
        eventId,
        ownerUserId,
        messageContents,
        mediaUrl,
        campaignId,
        allowWhatsApp,
      },
    );
  }

  /**
   * @param string - eventId
   * @param string - ownerUserId
   * @param string - messageContents
   * @param string? - mediaUrl
   * @param string? - campaignId
   * @param boolean? - allowWhatsApp true|false
   * @return Promise|Observable|any
   */
  SendASMSMessageToNoShows(
    eventId: string,
    ownerUserId: string,
    messageContents: string,
    mediaUrl: string = null,
    campaignId: string = null,
    allowWhatsApp: boolean = null,
  ): any {
    return this.restClient.post('SMSMessage/UseCase/SendASMSMessageToNoShows', {
      eventId,
      ownerUserId,
      messageContents,
      mediaUrl,
      campaignId,
      allowWhatsApp,
    });
  }

  /**
   * @param string - ticketBlockId
   * @param string - eventId
   * @param string - ownerUserId
   * @param string - messageContents
   * @param string? - mediaUrl
   * @param string? - campaignId
   * @param boolean? - allowWhatsApp true|false
   * @return Promise|Observable|any
   */
  SendASMSMessageToTicketBlock(
    ticketBlockId: string,
    eventId: string,
    ownerUserId: string,
    messageContents: string,
    mediaUrl: string = null,
    campaignId: string = null,
    allowWhatsApp: boolean = null,
  ): any {
    return this.restClient.post(
      'SMSMessage/UseCase/SendASMSMessageToTicketBlock',
      {
        ticketBlockId,
        eventId,
        ownerUserId,
        messageContents,
        mediaUrl,
        campaignId,
        allowWhatsApp,
      },
    );
  }

  /**
   * @param any[] - ticketTypeIds
   * @param any[] - invitationStatusTypes assigned|purchased|confirmed-by-rsvp|declined-by-rsvp|left-behind|not-yet-purchased|registered|unconfirmed|recycled|not-yet-registered|waitlisted
   * @param string - eventId
   * @param string - ownerUserId
   * @param string - messageContents
   * @param string? - mediaUrl
   * @param string? - campaignId
   * @param boolean? - allowWhatsApp true|false
   * @return Promise|Observable|any
   */
  SendASMSMessageToTicketTypes(
    ticketTypeIds: any[],
    invitationStatusTypes: any[],
    eventId: string,
    ownerUserId: string,
    messageContents: string,
    mediaUrl: string = null,
    campaignId: string = null,
    allowWhatsApp: boolean = null,
  ): any {
    return this.restClient.post(
      'SMSMessage/UseCase/SendASMSMessageToTicketTypes',
      {
        ticketTypeIds,
        invitationStatusTypes,
        eventId,
        ownerUserId,
        messageContents,
        mediaUrl,
        campaignId,
        allowWhatsApp,
      },
    );
  }

  /**
   * @param string - eventId
   * @param string - ownerUserId
   * @param string - messageContents
   * @param string? - mediaUrl
   * @param string? - campaignId
   * @param boolean? - allowWhatsApp true|false
   * @return Promise|Observable|any
   */
  SendASMSMessageToWaitlist(
    eventId: string,
    ownerUserId: string,
    messageContents: string,
    mediaUrl: string = null,
    campaignId: string = null,
    allowWhatsApp: boolean = null,
  ): any {
    return this.restClient.post(
      'SMSMessage/UseCase/SendASMSMessageToWaitlist',
      {
        eventId,
        ownerUserId,
        messageContents,
        mediaUrl,
        campaignId,
        allowWhatsApp,
      },
    );
  }

  /**
   * @param string - toNumber
   * @param string - messageContent
   * @param string - categoryType alert|event-message|event-message-preview|system
   * @param string - subCategoryType ticketblock|group|checked-in|ticket-type|preview|no_show|waitlist|invitation|opt-in|none
   * @param string - poolId
   * @param string? - mediaUrl
   * @param boolean? - isWhatsApp true|false
   * @param string? - userId
   * @param string? - eventId
   * @param string? - invitationId
   * @param string? - groupId
   * @param string? - campaignId
   * @param string? - ownerUserId
   * @return Promise|Observable|any
   */
  SendSMSMessage(
    toNumber: string,
    messageContent: string,
    categoryType: string,
    subCategoryType: string,
    poolId: string,
    mediaUrl: string = null,
    isWhatsApp: boolean = null,
    userId: string = null,
    eventId: string = null,
    invitationId: string = null,
    groupId: string = null,
    campaignId: string = null,
    ownerUserId: string = null,
  ): any {
    return this.restClient.post('SMSMessage/UseCase/SendSMSMessage', {
      toNumber,
      messageContent,
      categoryType,
      subCategoryType,
      poolId,
      mediaUrl,
      isWhatsApp,
      userId,
      eventId,
      invitationId,
      groupId,
      campaignId,
      ownerUserId,
    });
  }
}
