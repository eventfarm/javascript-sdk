/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class Invitation {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - eventId
   * @param string - clearId
   * @return Promise|Observable|any
   */
  CheckIfInvitationExistsForEventFromClearQRCode(
    eventId: string,
    clearId: string,
  ): any {
    return this.restClient.get(
      'Invitation/UseCase/CheckIfInvitationExistsForEventFromClearQRCode',
      {
        eventId,
        clearId,
      },
    );
  }

  /**
   * @param string - stackMethodType public-registration|public-purchase|invite-to-register|invite-to-purchase|invite-to-rsvp|invite-to-register-fcfs|invite-to-purchase-fcfs|invite-to-rsvp-fcfs
   * @return Promise|Observable|any
   */
  GetAllInvitationStatusTypesForStackMethodType(stackMethodType: string): any {
    return this.restClient.get(
      'Invitation/UseCase/GetAllInvitationStatusTypesForStackMethodType',
      {
        stackMethodType,
      },
    );
  }

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  GetCheckInCountsForEvent(eventId: string): any {
    return this.restClient.get('Invitation/UseCase/GetCheckInCountsForEvent', {
      eventId,
    });
  }

  /**
   * @param string - ticketBlockId
   * @return Promise|Observable|any
   */
  GetCheckInCountsForTicketBlock(ticketBlockId: string): any {
    return this.restClient.get(
      'Invitation/UseCase/GetCheckInCountsForTicketBlock',
      {
        ticketBlockId,
      },
    );
  }

  /**
   * @param string - invitationId
   * @param string[]? - withData Event|UserName|User|UserIdentifier|Stack|TicketType|QuestionResponse|Answer|Purchase
   * @param any[]? - withUserAttributes
   * @return Promise|Observable|any
   */
  GetInvitation(
    invitationId: string,
    withData: string[] = null,
    withUserAttributes: any[] = null,
  ): any {
    return this.restClient.get('Invitation/UseCase/GetInvitation', {
      invitationId,
      withData,
      withUserAttributes,
    });
  }

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  GetInvitationCountsForEvent(eventId: string): any {
    return this.restClient.get(
      'Invitation/UseCase/GetInvitationCountsForEvent',
      {
        eventId,
      },
    );
  }

  /**
   * @param string - ticketBlockId
   * @return Promise|Observable|any
   */
  GetInvitationCountsForTicketBlock(ticketBlockId: string): any {
    return this.restClient.get(
      'Invitation/UseCase/GetInvitationCountsForTicketBlock',
      {
        ticketBlockId,
      },
    );
  }

  /**
   * @param string - userId
   * @param string? - poolId
   * @return Promise|Observable|any
   */
  GetInvitationCountsForUser(userId: string, poolId: string = null): any {
    return this.restClient.get(
      'Invitation/UseCase/GetInvitationCountsForUser',
      {
        userId,
        poolId,
      },
    );
  }

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  GetInvitationCountsForUserAttributeHealthPassScoreForEvent(
    eventId: string,
  ): any {
    return this.restClient.get(
      'Invitation/UseCase/GetInvitationCountsForUserAttributeHealthPassScoreForEvent',
      {
        eventId,
      },
    );
  }

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  GetInvitationLastActionCountsForEvent(eventId: string): any {
    return this.restClient.get(
      'Invitation/UseCase/GetInvitationLastActionCountsForEvent',
      {
        eventId,
      },
    );
  }

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  GetInvitationStatusTypeCountsForEvent(eventId: string): any {
    return this.restClient.get(
      'Invitation/UseCase/GetInvitationStatusTypeCountsForEvent',
      {
        eventId,
      },
    );
  }

  /**
   * @param string - ticketBlockId
   * @return Promise|Observable|any
   */
  GetInvitationStatusTypeCountsForTicketBlock(ticketBlockId: string): any {
    return this.restClient.get(
      'Invitation/UseCase/GetInvitationStatusTypeCountsForTicketBlock',
      {
        ticketBlockId,
      },
    );
  }

  /**
   * @param string - eventId
   * @param string[]? - withData UserIdentifiers|StackAndTicketType|QuestionResponses|maxLastModifiedAt
   * @param any[]? - withUserAttributes internal|info|hover|facebook|linked-in|salesforce|twitter|convio|google|custom|virbela|healthpass
   * @param string? - query
   * @param any[]? - statusFilter assigned|purchased|confirmed-by-rsvp|declined-by-rsvp|left-behind|not-yet-purchased|registered|unconfirmed|recycled|not-yet-registered|waitlisted
   * @param number? - lastModifiedTimestamp
   * @param boolean? - isCheckedIn true|false
   * @param string? - sortBy name|first-name|last-name|last-action|last-action-name|last-notified|created-at|modified-at|checked-in-at
   * @param string? - sortDirection ascending|descending
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-250
   * @param any[]? - healthPassScoreFilter green|red|amber|unknown
   * @param any[]? - excludeHealthPassScoreFilter green|red|amber|unknown
   * @return Promise|Observable|any
   */
  ListInvitationsForEvent(
    eventId: string,
    withData: string[] = null,
    withUserAttributes: any[] = null,
    query: string = null,
    statusFilter: any[] = null,
    lastModifiedTimestamp: number = null,
    isCheckedIn: boolean = null,
    sortBy: string = null,
    sortDirection: string = null,
    page: number = null,
    itemsPerPage: number = null,
    healthPassScoreFilter: any[] = null,
    excludeHealthPassScoreFilter: any[] = null,
  ): any {
    return this.restClient.get('Invitation/UseCase/ListInvitationsForEvent', {
      eventId,
      withData,
      withUserAttributes,
      query,
      statusFilter,
      lastModifiedTimestamp,
      isCheckedIn,
      sortBy,
      sortDirection,
      page,
      itemsPerPage,
      healthPassScoreFilter,
      excludeHealthPassScoreFilter,
    });
  }

  /**
   * @param string - eventId
   * @param string - stackId
   * @param string[]? - withData UserIdentifiers|StackAndTicketType|QuestionResponses|maxLastModifiedAt
   * @param any[]? - withUserAttributes internal|info|hover|facebook|linked-in|salesforce|twitter|convio|google|custom|virbela|healthpass
   * @param string? - query
   * @param any[]? - statusFilter assigned|purchased|confirmed-by-rsvp|declined-by-rsvp|left-behind|not-yet-purchased|registered|unconfirmed|recycled|not-yet-registered|waitlisted
   * @param number? - lastModifiedTimestamp
   * @param boolean? - isCheckedIn true|false
   * @param string? - sortBy name|first-name|last-name|last-action|last-action-name|last-notified|created-at|modified-at|checked-in-at
   * @param string? - sortDirection ascending|descending
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-250
   * @return Promise|Observable|any
   */
  ListInvitationsForStack(
    eventId: string,
    stackId: string,
    withData: string[] = null,
    withUserAttributes: any[] = null,
    query: string = null,
    statusFilter: any[] = null,
    lastModifiedTimestamp: number = null,
    isCheckedIn: boolean = null,
    sortBy: string = null,
    sortDirection: string = null,
    page: number = null,
    itemsPerPage: number = null,
  ): any {
    return this.restClient.get('Invitation/UseCase/ListInvitationsForStack', {
      eventId,
      stackId,
      withData,
      withUserAttributes,
      query,
      statusFilter,
      lastModifiedTimestamp,
      isCheckedIn,
      sortBy,
      sortDirection,
      page,
      itemsPerPage,
    });
  }

  /**
   * @param string - ticketBlockId
   * @param string[]? - withData UserIdentifiers|StackAndTicketType|QuestionResponses|maxLastModifiedAt
   * @param any[]? - withUserAttributes internal|info|hover|facebook|linked-in|salesforce|twitter|convio|google|custom|virbela|healthpass
   * @param string? - query
   * @param any[]? - statusFilter assigned|purchased|confirmed-by-rsvp|declined-by-rsvp|left-behind|not-yet-purchased|registered|unconfirmed|recycled|not-yet-registered|waitlisted
   * @param number? - lastModifiedTimestamp
   * @param boolean? - isCheckedIn true|false
   * @param string? - sortBy name|first-name|last-name|last-action|last-action-name|last-notified|created-at|modified-at|checked-in-at
   * @param string? - sortDirection ascending|descending
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-250
   * @return Promise|Observable|any
   */
  ListInvitationsForTicketBlock(
    ticketBlockId: string,
    withData: string[] = null,
    withUserAttributes: any[] = null,
    query: string = null,
    statusFilter: any[] = null,
    lastModifiedTimestamp: number = null,
    isCheckedIn: boolean = null,
    sortBy: string = null,
    sortDirection: string = null,
    page: number = null,
    itemsPerPage: number = null,
  ): any {
    return this.restClient.get(
      'Invitation/UseCase/ListInvitationsForTicketBlock',
      {
        ticketBlockId,
        withData,
        withUserAttributes,
        query,
        statusFilter,
        lastModifiedTimestamp,
        isCheckedIn,
        sortBy,
        sortDirection,
        page,
        itemsPerPage,
      },
    );
  }

  /**
   * @param string - transactionId
   * @param string[]? - withData UserIdentifiers|StackAndTicketType|QuestionResponses|maxLastModifiedAt
   * @param any[]? - withUserAttributes internal|info|hover|facebook|linked-in|salesforce|twitter|convio|google|custom|virbela|healthpass
   * @param string? - query
   * @param any[]? - statusFilter assigned|purchased|confirmed-by-rsvp|declined-by-rsvp|left-behind|not-yet-purchased|registered|unconfirmed|recycled|not-yet-registered|waitlisted
   * @param number? - lastModifiedTimestamp
   * @param boolean? - isCheckedIn true|false
   * @param string? - sortBy name|first-name|last-name|last-action|last-action-name|last-notified|created-at|modified-at|checked-in-at
   * @param string? - sortDirection ascending|descending
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-250
   * @return Promise|Observable|any
   */
  ListInvitationsForTransaction(
    transactionId: string,
    withData: string[] = null,
    withUserAttributes: any[] = null,
    query: string = null,
    statusFilter: any[] = null,
    lastModifiedTimestamp: number = null,
    isCheckedIn: boolean = null,
    sortBy: string = null,
    sortDirection: string = null,
    page: number = null,
    itemsPerPage: number = null,
  ): any {
    return this.restClient.get(
      'Invitation/UseCase/ListInvitationsForTransaction',
      {
        transactionId,
        withData,
        withUserAttributes,
        query,
        statusFilter,
        lastModifiedTimestamp,
        isCheckedIn,
        sortBy,
        sortDirection,
        page,
        itemsPerPage,
      },
    );
  }

  /**
   * @param string - userId
   * @param string? - poolId
   * @param string? - eventId
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-250
   * @param string? - eventDateFilterType current-future|past-all|past-3-months|past-3-months-and-future|past-6-months
   * @param string? - sortDirection
   * @param string[]? - withData Event|EventWithTags|Stack|StackAndTicketType
   * @param any[]? - statusFilter
   * @return Promise|Observable|any
   */
  ListInvitationsForUser(
    userId: string,
    poolId: string = null,
    eventId: string = null,
    page: number = null,
    itemsPerPage: number = null,
    eventDateFilterType: string = null,
    sortDirection: string = null,
    withData: string[] = null,
    statusFilter: any[] = null,
  ): any {
    return this.restClient.get('Invitation/UseCase/ListInvitationsForUser', {
      userId,
      poolId,
      eventId,
      page,
      itemsPerPage,
      eventDateFilterType,
      sortDirection,
      withData,
      statusFilter,
    });
  }

  /**
   * @param string - email
   * @param string? - poolId
   * @param string? - eventId
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-250
   * @param string? - eventDateFilterType current-future|past-all|past-3-months|past-3-months-and-future|past-6-months
   * @param string? - sortDirection
   * @param string[]? - withData Event|Stack|StackAndTicketType
   * @param any[]? - statusFilter
   * @return Promise|Observable|any
   */
  ListInvitationsForUserByEmail(
    email: string,
    poolId: string = null,
    eventId: string = null,
    page: number = null,
    itemsPerPage: number = null,
    eventDateFilterType: string = null,
    sortDirection: string = null,
    withData: string[] = null,
    statusFilter: any[] = null,
  ): any {
    return this.restClient.get(
      'Invitation/UseCase/ListInvitationsForUserByEmail',
      {
        email,
        poolId,
        eventId,
        page,
        itemsPerPage,
        eventDateFilterType,
        sortDirection,
        withData,
        statusFilter,
      },
    );
  }

  /**
   * @param string - email
   * @param any[] - eventIds
   * @param string - poolId
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-250
   * @param string? - eventDateFilterType current-future|past-all|past-3-months|past-3-months-and-future|past-6-months
   * @param string? - sortDirection
   * @param string[]? - withData Event|Stack|StackAndTicketType
   * @param any[]? - statusFilter
   * @return Promise|Observable|any
   */
  ListInvitationsForUserByEmailForEvents(
    email: string,
    eventIds: any[],
    poolId: string,
    page: number = null,
    itemsPerPage: number = null,
    eventDateFilterType: string = null,
    sortDirection: string = null,
    withData: string[] = null,
    statusFilter: any[] = null,
  ): any {
    return this.restClient.get(
      'Invitation/UseCase/ListInvitationsForUserByEmailForEvents',
      {
        email,
        eventIds,
        poolId,
        page,
        itemsPerPage,
        eventDateFilterType,
        sortDirection,
        withData,
        statusFilter,
      },
    );
  }

  /**
   * @param string - userId
   * @param string - parentEventId
   * @param string? - poolId
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-100
   * @param string? - eventDateFilterType current-future|past-all|past-3-months|past-3-months-and-future|past-6-months
   * @param string? - sortDirection
   * @param string[]? - withData Event|Stack
   * @param any[]? - statusFilter
   * @return Promise|Observable|any
   */
  ListInvitationsForUserForParent(
    userId: string,
    parentEventId: string,
    poolId: string = null,
    page: number = null,
    itemsPerPage: number = null,
    eventDateFilterType: string = null,
    sortDirection: string = null,
    withData: string[] = null,
    statusFilter: any[] = null,
  ): any {
    return this.restClient.get(
      'Invitation/UseCase/ListInvitationsForUserForParent',
      {
        userId,
        parentEventId,
        poolId,
        page,
        itemsPerPage,
        eventDateFilterType,
        sortDirection,
        withData,
        statusFilter,
      },
    );
  }

  /**
   * @param string - eventId
   * @param string[]? - withData UserIdentifiers|StackAndTicketType|QuestionResponses|maxLastModifiedAt
   * @param any[]? - withUserAttributes internal|info|hover|facebook|linked-in|salesforce|twitter|convio|google|custom|virbela|healthpass
   * @param string? - query
   * @param number? - lastModifiedTimestamp
   * @param boolean? - isCheckedIn true|false
   * @param string? - sortBy name|first-name|last-name|last-action|last-action-name|last-notified|created-at|modified-at|checked-in-at
   * @param string? - sortDirection ascending|descending
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-100
   * @return Promise|Observable|any
   */
  ListWaitlistForEvent(
    eventId: string,
    withData: string[] = null,
    withUserAttributes: any[] = null,
    query: string = null,
    lastModifiedTimestamp: number = null,
    isCheckedIn: boolean = null,
    sortBy: string = null,
    sortDirection: string = null,
    page: number = null,
    itemsPerPage: number = null,
  ): any {
    return this.restClient.get('Invitation/UseCase/ListWaitlistForEvent', {
      eventId,
      withData,
      withUserAttributes,
      query,
      lastModifiedTimestamp,
      isCheckedIn,
      sortBy,
      sortDirection,
      page,
      itemsPerPage,
    });
  }

  /**
   * @param string - eventId
   * @param string - stackId
   * @param string[]? - withData UserIdentifiers|StackAndTicketType|QuestionResponses|maxLastModifiedAt
   * @param any[]? - withUserAttributes internal|info|hover|facebook|linked-in|salesforce|twitter|convio|google|custom|virbela|healthpass
   * @param string? - query
   * @param any[]? - statusFilter assigned|purchased|confirmed-by-rsvp|declined-by-rsvp|left-behind|not-yet-purchased|registered|unconfirmed|recycled|not-yet-registered|waitlisted
   * @param number? - lastModifiedTimestamp
   * @param boolean? - isCheckedIn true|false
   * @param string? - sortBy name|first-name|last-name|last-action|last-action-name|last-notified|created-at|modified-at|checked-in-at
   * @param string? - sortDirection ascending|descending
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-100
   * @return Promise|Observable|any
   */
  ListWaitlistForStack(
    eventId: string,
    stackId: string,
    withData: string[] = null,
    withUserAttributes: any[] = null,
    query: string = null,
    statusFilter: any[] = null,
    lastModifiedTimestamp: number = null,
    isCheckedIn: boolean = null,
    sortBy: string = null,
    sortDirection: string = null,
    page: number = null,
    itemsPerPage: number = null,
  ): any {
    return this.restClient.get('Invitation/UseCase/ListWaitlistForStack', {
      eventId,
      stackId,
      withData,
      withUserAttributes,
      query,
      statusFilter,
      lastModifiedTimestamp,
      isCheckedIn,
      sortBy,
      sortDirection,
      page,
      itemsPerPage,
    });
  }

  // Commands

  /**
   * @param string - invitationId
   * @return Promise|Observable|any
   */
  AddInvitationToWaitlist(invitationId: string): any {
    return this.restClient.post('Invitation/UseCase/AddInvitationToWaitlist', {
      invitationId,
    });
  }

  /**
   * @param string - invitationId
   * @param string - invitationStatus assigned|purchased|confirmed-by-rsvp|declined-by-rsvp|left-behind|not-yet-purchased|registered|unconfirmed|recycled|not-yet-registered|waitlisted
   * @return Promise|Observable|any
   */
  ChangeInvitationStatus(invitationId: string, invitationStatus: string): any {
    return this.restClient.post('Invitation/UseCase/ChangeInvitationStatus', {
      invitationId,
      invitationStatus,
    });
  }

  /**
   * @param string - invitationId
   * @param number? - inviteCount
   * @return Promise|Observable|any
   */
  ChangeInviteCount(invitationId: string, inviteCount: number = null): any {
    return this.restClient.post('Invitation/UseCase/ChangeInviteCount', {
      invitationId,
      inviteCount,
    });
  }

  /**
   * @param string - invitationId
   * @param number? - checkInAt
   * @param boolean? - isWebCheckIn true|false
   * @return Promise|Observable|any
   */
  CheckIn(
    invitationId: string,
    checkInAt: number = null,
    isWebCheckIn: boolean = null,
  ): any {
    return this.restClient.post('Invitation/UseCase/CheckIn', {
      invitationId,
      checkInAt,
      isWebCheckIn,
    });
  }

  /**
   * @param string - registrantId
   * @return Promise|Observable|any
   */
  CheckInWebConferenceRegistrant(registrantId: string): any {
    return this.restClient.post(
      'Invitation/UseCase/CheckInWebConferenceRegistrant',
      {
        registrantId,
      },
    );
  }

  /**
   * @param string - eventId
   * @param string - stackId
   * @param string - invitationStatus assigned|purchased|confirmed-by-rsvp|declined-by-rsvp|left-behind|not-yet-purchased|registered|unconfirmed|recycled|not-yet-registered|waitlisted
   * @param string - inviteSource direct-invite|api-addition|distribution|event-invite|group-invite|import|ios-leave-behind|leave-behind|mobile-leave-behind|mobile-purchase|outside-purchase|public-interface|transferred|import-salesforce|import-marketo
   * @param boolean - isCheckedIn true|false
   * @param number - inviteCount >= 1
   * @param string? - email
   * @param string? - firstName
   * @param string? - lastName
   * @param string? - company
   * @param string? - position
   * @param string? - checkInNotes
   * @param string? - invitationId
   * @param boolean? - shouldSendInvitation true|false
   * @param string? - invitationNotes
   * @param string? - title
   * @param string? - telephone
   * @param string? - other
   * @param number? - createdTime
   * @param boolean? - forceDuplicateInvitations true|false
   * @return Promise|Observable|any
   */
  CreateInvitation(
    eventId: string,
    stackId: string,
    invitationStatus: string,
    inviteSource: string,
    isCheckedIn: boolean,
    inviteCount: number,
    email: string = null,
    firstName: string = null,
    lastName: string = null,
    company: string = null,
    position: string = null,
    checkInNotes: string = null,
    invitationId: string = null,
    shouldSendInvitation: boolean = null,
    invitationNotes: string = null,
    title: string = null,
    telephone: string = null,
    other: string = null,
    createdTime: number = null,
    forceDuplicateInvitations: boolean = null,
  ): any {
    return this.restClient.post('Invitation/UseCase/CreateInvitation', {
      eventId,
      stackId,
      invitationStatus,
      inviteSource,
      isCheckedIn,
      inviteCount,
      email,
      firstName,
      lastName,
      company,
      position,
      checkInNotes,
      invitationId,
      shouldSendInvitation,
      invitationNotes,
      title,
      telephone,
      other,
      createdTime,
      forceDuplicateInvitations,
    });
  }

  /**
   * @param string - eventId
   * @param string - stackId
   * @param string - ticketBlockId
   * @param string - invitationStatus assigned|purchased|confirmed-by-rsvp|declined-by-rsvp|left-behind|not-yet-purchased|registered|unconfirmed|recycled|not-yet-registered|waitlisted
   * @param string - inviteSource direct-invite|api-addition|distribution|event-invite|group-invite|import|ios-leave-behind|leave-behind|mobile-leave-behind|mobile-purchase|outside-purchase|public-interface|transferred|import-salesforce|import-marketo
   * @param boolean - isCheckedIn true|false
   * @param number - inviteCount >= 1
   * @param string? - email
   * @param string? - firstName
   * @param string? - lastName
   * @param string? - company
   * @param string? - position
   * @param string? - checkInNotes
   * @param string? - invitationId
   * @param boolean? - shouldSendInvitation true|false
   * @param string? - invitationNotes
   * @param string? - title
   * @param string? - telephone
   * @param string? - other
   * @return Promise|Observable|any
   */
  CreateInvitationForTicketBlock(
    eventId: string,
    stackId: string,
    ticketBlockId: string,
    invitationStatus: string,
    inviteSource: string,
    isCheckedIn: boolean,
    inviteCount: number,
    email: string = null,
    firstName: string = null,
    lastName: string = null,
    company: string = null,
    position: string = null,
    checkInNotes: string = null,
    invitationId: string = null,
    shouldSendInvitation: boolean = null,
    invitationNotes: string = null,
    title: string = null,
    telephone: string = null,
    other: string = null,
  ): any {
    return this.restClient.post(
      'Invitation/UseCase/CreateInvitationForTicketBlock',
      {
        eventId,
        stackId,
        ticketBlockId,
        invitationStatus,
        inviteSource,
        isCheckedIn,
        inviteCount,
        email,
        firstName,
        lastName,
        company,
        position,
        checkInNotes,
        invitationId,
        shouldSendInvitation,
        invitationNotes,
        title,
        telephone,
        other,
      },
    );
  }

  /**
   * @param string - userId
   * @param number - guestsPerInvitation >= 1
   * @param string - stackId
   * @param string - invitationStatusType assigned|purchased|confirmed-by-rsvp|declined-by-rsvp|left-behind|not-yet-purchased|registered|unconfirmed|recycled|not-yet-registered|waitlisted
   * @param boolean? - shouldSendEmail true|false
   * @param string? - ticketBlockId
   * @return Promise|Observable|any
   */
  CreateInvitationForUser(
    userId: string,
    guestsPerInvitation: number,
    stackId: string,
    invitationStatusType: string,
    shouldSendEmail: boolean = null,
    ticketBlockId: string = null,
  ): any {
    return this.restClient.post('Invitation/UseCase/CreateInvitationForUser', {
      userId,
      guestsPerInvitation,
      stackId,
      invitationStatusType,
      shouldSendEmail,
      ticketBlockId,
    });
  }

  /**
   * @param string - groupId
   * @param string - stackId
   * @param number - guestsPerInvitation >= 1
   * @param string - invitationCreationType unconfirmed-no-email|confirmed-no-email|send-email
   * @return Promise|Observable|any
   */
  CreateInvitationsFromGroup(
    groupId: string,
    stackId: string,
    guestsPerInvitation: number,
    invitationCreationType: string,
  ): any {
    return this.restClient.post(
      'Invitation/UseCase/CreateInvitationsFromGroup',
      {
        groupId,
        stackId,
        guestsPerInvitation,
        invitationCreationType,
      },
    );
  }

  /**
   * @param string - eventId
   * @param string - groupId
   * @param number - guestsPerInvitation >= 1
   * @param string? - stackId
   * @return Promise|Observable|any
   */
  CreateInvitationsFromGroupForCIOEvent(
    eventId: string,
    groupId: string,
    guestsPerInvitation: number,
    stackId: string = null,
  ): any {
    return this.restClient.post(
      'Invitation/UseCase/CreateInvitationsFromGroupForCIOEvent',
      {
        eventId,
        groupId,
        guestsPerInvitation,
        stackId,
      },
    );
  }

  /**
   * @param string - groupId
   * @param string - ticketBlockId
   * @param string - stackId
   * @param number - guestsPerInvitation >= 1
   * @param string - invitationCreationType unconfirmed-no-email|confirmed-no-email|send-email
   * @return Promise|Observable|any
   */
  CreateInvitationsFromGroupForTicketBlock(
    groupId: string,
    ticketBlockId: string,
    stackId: string,
    guestsPerInvitation: number,
    invitationCreationType: string,
  ): any {
    return this.restClient.post(
      'Invitation/UseCase/CreateInvitationsFromGroupForTicketBlock',
      {
        groupId,
        ticketBlockId,
        stackId,
        guestsPerInvitation,
        invitationCreationType,
      },
    );
  }

  /**
   * @param string - eventId
   * @param string - webhookType
   * @param string - webhookMethod
   * @param string - url
   * @return Promise|Observable|any
   */
  CreateWebhook(
    eventId: string,
    webhookType: string,
    webhookMethod: string,
    url: string,
  ): any {
    return this.restClient.post('Invitation/UseCase/CreateWebhook', {
      eventId,
      webhookType,
      webhookMethod,
      url,
    });
  }

  /**
   * @param string - webhookId
   * @return Promise|Observable|any
   */
  DeleteWebhook(webhookId: string): any {
    return this.restClient.post('Invitation/UseCase/DeleteWebhook', {
      webhookId,
    });
  }

  /**
   * @param string - invitationId
   * @return Promise|Observable|any
   */
  DisableArrivalAlert(invitationId: string): any {
    return this.restClient.post('Invitation/UseCase/DisableArrivalAlert', {
      invitationId,
    });
  }

  /**
   * @param any[] - invitationIds
   * @param boolean - isConfirmed true|false
   * @param boolean? - shouldSendEmail true|false
   * @return Promise|Observable|any
   */
  PromoteInvitationsFromWaitlist(
    invitationIds: any[],
    isConfirmed: boolean,
    shouldSendEmail: boolean = null,
  ): any {
    return this.restClient.post(
      'Invitation/UseCase/PromoteInvitationsFromWaitlist',
      {
        invitationIds,
        isConfirmed,
        shouldSendEmail,
      },
    );
  }

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  RescindAllInvitations(eventId: string): any {
    return this.restClient.post('Invitation/UseCase/RescindAllInvitations', {
      eventId,
    });
  }

  /**
   * @param string - invitationId
   * @return Promise|Observable|any
   */
  RescindInvitation(invitationId: string): any {
    return this.restClient.post('Invitation/UseCase/RescindInvitation', {
      invitationId,
    });
  }

  /**
   * @param string - eventId
   * @param number - dayCount 0-90
   * @return Promise|Observable|any
   */
  ResendAllInvitationEmails(eventId: string, dayCount: number): any {
    return this.restClient.post(
      'Invitation/UseCase/ResendAllInvitationEmails',
      {
        eventId,
        dayCount,
      },
    );
  }

  /**
   * @param string - invitationId
   * @return Promise|Observable|any
   */
  ResendConfirmationEmail(invitationId: string): any {
    return this.restClient.post('Invitation/UseCase/ResendConfirmationEmail', {
      invitationId,
    });
  }

  /**
   * @param string - invitationId
   * @return Promise|Observable|any
   */
  ResendInvitationEmail(invitationId: string): any {
    return this.restClient.post('Invitation/UseCase/ResendInvitationEmail', {
      invitationId,
    });
  }

  /**
   * @param string - invitationId
   * @param string - questionId
   * @param string - questionResponseIdsWithAnswersJson
   * @return Promise|Observable|any
   */
  SetAllQuestionResponses(
    invitationId: string,
    questionId: string,
    questionResponseIdsWithAnswersJson: string,
  ): any {
    return this.restClient.post('Invitation/UseCase/SetAllQuestionResponses', {
      invitationId,
      questionId,
      questionResponseIdsWithAnswersJson,
    });
  }

  /**
   * @param string - invitationId
   * @param string - toEmail
   * @param any[]? - ccEmails
   * @param boolean? - shouldSendArrivalAlert true|false
   * @return Promise|Observable|any
   */
  SetArrivalAlertEmail(
    invitationId: string,
    toEmail: string,
    ccEmails: any[] = null,
    shouldSendArrivalAlert: boolean = null,
  ): any {
    return this.restClient.post('Invitation/UseCase/SetArrivalAlertEmail', {
      invitationId,
      toEmail,
      ccEmails,
      shouldSendArrivalAlert,
    });
  }

  /**
   * @param string - invitationId
   * @param string? - checkInNotes
   * @return Promise|Observable|any
   */
  SetCheckInNotes(invitationId: string, checkInNotes: string = null): any {
    return this.restClient.post('Invitation/UseCase/SetCheckInNotes', {
      invitationId,
      checkInNotes,
    });
  }

  /**
   * @param string - invitationId
   * @param string? - invitationNotes
   * @return Promise|Observable|any
   */
  SetInvitationNotes(
    invitationId: string,
    invitationNotes: string = null,
  ): any {
    return this.restClient.post('Invitation/UseCase/SetInvitationNotes', {
      invitationId,
      invitationNotes,
    });
  }

  /**
   * @param string - invitationId
   * @param string - questionId
   * @param any[]? - answerIds
   * @param string? - text
   * @return Promise|Observable|any
   */
  SetQuestionResponse(
    invitationId: string,
    questionId: string,
    answerIds: any[] = null,
    text: string = null,
  ): any {
    return this.restClient.post('Invitation/UseCase/SetQuestionResponse', {
      invitationId,
      questionId,
      answerIds,
      text,
    });
  }

  /**
   * @param string - invitationId
   * @return Promise|Observable|any
   */
  UndoCheckIn(invitationId: string): any {
    return this.restClient.post('Invitation/UseCase/UndoCheckIn', {
      invitationId,
    });
  }

  /**
   * @param string - invitationId
   * @param string - stackId
   * @param string - invitationStatus assigned|purchased|confirmed-by-rsvp|declined-by-rsvp|left-behind|not-yet-purchased|registered|unconfirmed|recycled|not-yet-registered|waitlisted
   * @param string? - company
   * @param string? - position
   * @param string? - email
   * @param string? - firstName
   * @param string? - lastName
   * @param string? - other
   * @param string? - telephone
   * @param number? - updatedTime
   * @param boolean? - forceDuplicateInvitations true|false
   * @param number? - inviteCount
   * @return Promise|Observable|any
   */
  UpdateInvitation(
    invitationId: string,
    stackId: string,
    invitationStatus: string,
    company: string = null,
    position: string = null,
    email: string = null,
    firstName: string = null,
    lastName: string = null,
    other: string = null,
    telephone: string = null,
    updatedTime: number = null,
    forceDuplicateInvitations: boolean = null,
    inviteCount: number = null,
  ): any {
    return this.restClient.post('Invitation/UseCase/UpdateInvitation', {
      invitationId,
      stackId,
      invitationStatus,
      company,
      position,
      email,
      firstName,
      lastName,
      other,
      telephone,
      updatedTime,
      forceDuplicateInvitations,
      inviteCount,
    });
  }
}
