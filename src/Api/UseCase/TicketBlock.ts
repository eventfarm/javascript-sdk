/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class TicketBlock {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - ticketBlockId
   * @param string[]? - withData Event|Allotments|AllotmentsAndStack|AllotmentCounts
   * @return Promise|Observable|any
   */
  GetTicketBlock(ticketBlockId: string, withData: string[] = null): any {
    return this.restClient.get('TicketBlock/UseCase/GetTicketBlock', {
      ticketBlockId,
      withData,
    });
  }

  /**
   * @param string - eventId
   * @param string? - query
   * @param string[]? - withData Event|Allotments|AllotmentsAndStack|AllotmentCounts
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-50
   * @param string? - sortBy name
   * @param string? - sortDirection ascending|descending
   * @param string? - eventDateFilterType current-future|past-all|past-3-months|past-3-months-and-future|past-6-months
   * @param boolean? - shouldHideDeleted true|false
   * @return Promise|Observable|any
   */
  ListTicketBlocksForEvent(
    eventId: string,
    query: string = null,
    withData: string[] = null,
    page: number = null,
    itemsPerPage: number = null,
    sortBy: string = null,
    sortDirection: string = null,
    eventDateFilterType: string = null,
    shouldHideDeleted: boolean = null,
  ): any {
    return this.restClient.get('TicketBlock/UseCase/ListTicketBlocksForEvent', {
      eventId,
      query,
      withData,
      page,
      itemsPerPage,
      sortBy,
      sortDirection,
      eventDateFilterType,
      shouldHideDeleted,
    });
  }

  /**
   * @param string - userId
   * @param string? - query
   * @param string[]? - withData Event
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-500
   * @param string? - sortBy event-start|event-end
   * @param string? - sortDirection ascending|descending
   * @param string? - eventDateFilterType current-future|past-all|past-3-months|past-3-months-and-future|past-6-months
   * @param string? - poolId
   * @return Promise|Observable|any
   */
  ListTicketBlocksForUser(
    userId: string,
    query: string = null,
    withData: string[] = null,
    page: number = null,
    itemsPerPage: number = null,
    sortBy: string = null,
    sortDirection: string = null,
    eventDateFilterType: string = null,
    poolId: string = null,
  ): any {
    return this.restClient.get('TicketBlock/UseCase/ListTicketBlocksForUser', {
      userId,
      query,
      withData,
      page,
      itemsPerPage,
      sortBy,
      sortDirection,
      eventDateFilterType,
      poolId,
    });
  }

  // Commands

  /**
   * @param string - ticketBlockId
   * @param string - email
   * @param string - firstName
   * @param string - lastName
   * @param string? - authenticatedUserId
   * @return Promise|Observable|any
   */
  AddUserRoleToTicketBlock(
    ticketBlockId: string,
    email: string,
    firstName: string,
    lastName: string,
    authenticatedUserId: string = null,
  ): any {
    return this.restClient.post(
      'TicketBlock/UseCase/AddUserRoleToTicketBlock',
      {
        ticketBlockId,
        email,
        firstName,
        lastName,
        authenticatedUserId,
      },
    );
  }

  /**
   * @param string - eventId
   * @param string - name
   * @param boolean? - isBlacklistEnabled true|false
   * @param string? - emailText
   * @param string? - ticketBlockId
   * @return Promise|Observable|any
   */
  CreateTicketBlock(
    eventId: string,
    name: string,
    isBlacklistEnabled: boolean = null,
    emailText: string = null,
    ticketBlockId: string = null,
  ): any {
    return this.restClient.post('TicketBlock/UseCase/CreateTicketBlock', {
      eventId,
      name,
      isBlacklistEnabled,
      emailText,
      ticketBlockId,
    });
  }

  /**
   * @param string - ticketBlockId
   * @return Promise|Observable|any
   */
  DisableTicketBlockBlacklist(ticketBlockId: string): any {
    return this.restClient.post(
      'TicketBlock/UseCase/DisableTicketBlockBlacklist',
      {
        ticketBlockId,
      },
    );
  }

  /**
   * @param string - ticketBlockId
   * @return Promise|Observable|any
   */
  EnableTicketBlockBlacklist(ticketBlockId: string): any {
    return this.restClient.post(
      'TicketBlock/UseCase/EnableTicketBlockBlacklist',
      {
        ticketBlockId,
      },
    );
  }

  /**
   * @param string - userId
   * @param string - ticketBlockId
   * @return Promise|Observable|any
   */
  RemoveAllUserRolesFromTicketBlock(
    userId: string,
    ticketBlockId: string,
  ): any {
    return this.restClient.post(
      'TicketBlock/UseCase/RemoveAllUserRolesFromTicketBlock',
      {
        userId,
        ticketBlockId,
      },
    );
  }

  /**
   * @param string - ticketBlockId
   * @return Promise|Observable|any
   */
  RemoveTicketBlock(ticketBlockId: string): any {
    return this.restClient.post('TicketBlock/UseCase/RemoveTicketBlock', {
      ticketBlockId,
    });
  }

  /**
   * @param string - ticketBlockId
   * @param string - userId
   * @param string? - authenticatedUserId
   * @return Promise|Observable|any
   */
  ResendTicketBlockUserRoleEmail(
    ticketBlockId: string,
    userId: string,
    authenticatedUserId: string = null,
  ): any {
    return this.restClient.post(
      'TicketBlock/UseCase/ResendTicketBlockUserRoleEmail',
      {
        ticketBlockId,
        userId,
        authenticatedUserId,
      },
    );
  }

  /**
   * @param string - ticketBlockId
   * @param string - emailText
   * @return Promise|Observable|any
   */
  SetTicketBlockEmailText(ticketBlockId: string, emailText: string): any {
    return this.restClient.post('TicketBlock/UseCase/SetTicketBlockEmailText', {
      ticketBlockId,
      emailText,
    });
  }

  /**
   * @param string - ticketBlockId
   * @param string - name
   * @return Promise|Observable|any
   */
  SetTicketBlockName(ticketBlockId: string, name: string): any {
    return this.restClient.post('TicketBlock/UseCase/SetTicketBlockName', {
      ticketBlockId,
      name,
    });
  }
}
