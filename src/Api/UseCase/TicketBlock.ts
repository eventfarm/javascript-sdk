/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../interfaces';

export class TicketBlock {
  constructor(private restClient: RestClientInterface) {}

  // GET: Queries
  GetTicketBlock(ticketBlockId: string, withData: any = null): any {
    return this.restClient.get('TicketBlock/UseCase/GetTicketBlock', {
      ticketBlockId,
      withData,
    });
  }

  ListTicketBlocksForEvent(
    eventId: string,
    query: string = null,
    withData: any = null,
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

  ListTicketBlocksForUser(
    userId: string,
    query: string = null,
    withData: any = null,
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

  // POST USE CASES: Commands
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

  DisableTicketBlockBlacklist(ticketBlockId: string): any {
    return this.restClient.post(
      'TicketBlock/UseCase/DisableTicketBlockBlacklist',
      {
        ticketBlockId,
      },
    );
  }

  EnableTicketBlockBlacklist(ticketBlockId: string): any {
    return this.restClient.post(
      'TicketBlock/UseCase/EnableTicketBlockBlacklist',
      {
        ticketBlockId,
      },
    );
  }

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

  RemoveTicketBlock(ticketBlockId: string): any {
    return this.restClient.post('TicketBlock/UseCase/RemoveTicketBlock', {
      ticketBlockId,
    });
  }

  SetTicketBlockEmailText(ticketBlockId: string, emailText: string): any {
    return this.restClient.post('TicketBlock/UseCase/SetTicketBlockEmailText', {
      ticketBlockId,
      emailText,
    });
  }

  SetTicketBlockName(ticketBlockId: string, name: string): any {
    return this.restClient.post('TicketBlock/UseCase/SetTicketBlockName', {
      ticketBlockId,
      name,
    });
  }
}
