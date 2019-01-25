/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../interfaces';

export class EmailMessage {
  constructor(private restClient: RestClientInterface) {}

  // GET: Queries
  GetEmailMessage(emailMessageId: string): any {
    return this.restClient.get('EmailMessage/UseCase/GetEmailMessage', {
      emailMessageId,
    });
  }

  GetEmailMessageStatsForEvent(eventId: string): any {
    return this.restClient.get(
      'EmailMessage/UseCase/GetEmailMessageStatsForEvent',
      {
        eventId,
      },
    );
  }

  GetScheduledEmailMessage(mongoQueueId: string): any {
    return this.restClient.get(
      'EmailMessage/UseCase/GetScheduledEmailMessage',
      {
        mongoQueueId,
      },
    );
  }

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

  // POST USE CASES: Commands
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

  RemoveScheduledBatchEmailMessage(mongoQueueId: string): any {
    return this.restClient.post(
      'EmailMessage/UseCase/RemoveScheduledBatchEmailMessage',
      {
        mongoQueueId,
      },
    );
  }

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

  SimulateEmailMessageStatsForEvent(eventId: string): any {
    return this.restClient.post(
      'EmailMessage/UseCase/SimulateEmailMessageStatsForEvent',
      {
        eventId,
      },
    );
  }

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
