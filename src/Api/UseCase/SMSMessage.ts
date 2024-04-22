/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class SMSMessage {
  constructor(private restClient: RestClientInterface) {}

  // Queries

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
   * @param string - categoryType alert|event_message|event_message_preview
   * @param string - subCategoryType ticketblock|group|checked_in|ticket_type|preview|no_show|waitlist|none
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
