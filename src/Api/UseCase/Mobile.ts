/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class Mobile {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - eventId
   * @param string - userId
   * @return Promise|Observable|any
   */
  GetEventDetailsForUser(eventId: string, userId: string): any {
    return this.restClient.get('Mobile/UseCase/GetEventDetailsForUser', {
      eventId,
      userId,
    });
  }

  /**
   * @param string - invitationId
   * @return Promise|Observable|any
   */
  GetInvitationDetails(invitationId: string): any {
    return this.restClient.get('Mobile/UseCase/GetInvitationDetails', {
      invitationId,
    });
  }

  /**
   * @param string - userId
   * @param string? - query
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-500
   * @param string? - sortBy event-start|event-end|name|event-created
   * @param string? - sortDirection ascending|descending
   * @return Promise|Observable|any
   */
  ListEvents(
    userId: string,
    query: string = null,
    page: number = null,
    itemsPerPage: number = null,
    sortBy: string = null,
    sortDirection: string = null,
  ): any {
    return this.restClient.get('Mobile/UseCase/ListEvents', {
      userId,
      query,
      page,
      itemsPerPage,
      sortBy,
      sortDirection,
    });
  }

  /**
   * @param string - eventId
   * @param string? - query
   * @param number? - lastModifiedTimestamp
   * @param string? - sortBy name|first-name|last-name|last-action|last-action-name|last-notified|created-at|modified-at|checked-in-at
   * @param string? - sortDirection ascending|descending
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-1000
   * @return Promise|Observable|any
   */
  ListInvitations(
    eventId: string,
    query: string = null,
    lastModifiedTimestamp: number = null,
    sortBy: string = null,
    sortDirection: string = null,
    page: number = null,
    itemsPerPage: number = null,
  ): any {
    return this.restClient.get('Mobile/UseCase/ListInvitations', {
      eventId,
      query,
      lastModifiedTimestamp,
      sortBy,
      sortDirection,
      page,
      itemsPerPage,
    });
  }

  /**
   * @param string - parentEventId
   * @param string? - query
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-500
   * @param string? - sortBy event-start|event-end|name|event-created
   * @param string? - sortDirection ascending|descending
   * @param any[]? - variantFilter full|cio|lite|session|panel|keynote|block|sample|breakout
   * @return Promise|Observable|any
   */
  ListSessionsForParentEvent(
    parentEventId: string,
    query: string = null,
    page: number = null,
    itemsPerPage: number = null,
    sortBy: string = null,
    sortDirection: string = null,
    variantFilter: any[] = null,
  ): any {
    return this.restClient.get('Mobile/UseCase/ListSessionsForParentEvent', {
      parentEventId,
      query,
      page,
      itemsPerPage,
      sortBy,
      sortDirection,
      variantFilter,
    });
  }

  // Commands
}
