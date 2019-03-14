/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class Question {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - eventId
   * @param string[]? - withData TicketType|Answers
   * @param boolean? - shouldHideDeleted true|false
   * @param string? - query
   * @param string? - sortBy createdAt|sortOrder
   * @param string? - sortDirection
   * @param number? - page
   * @param number? - itemsPerPage
   * @return Promise|Observable|any
   */
  ListQuestionsForEvent(
    eventId: string,
    withData: string[] = null,
    shouldHideDeleted: boolean = null,
    query: string = null,
    sortBy: string = null,
    sortDirection: string = null,
    page: number = null,
    itemsPerPage: number = null,
  ): any {
    return this.restClient.get('Question/UseCase/ListQuestionsForEvent', {
      eventId,
      withData,
      shouldHideDeleted,
      query,
      sortBy,
      sortDirection,
      page,
      itemsPerPage,
    });
  }

  // Commands
}
