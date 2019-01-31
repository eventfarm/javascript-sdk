/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class Question {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - eventId
   * @param array? - withData TicketType|Answers
   * @param bool? - shouldHideDeleted true|false
   * @param string? - query
   * @param string? - sortBy
   * @param string? - sortDirection
   * @param int? - page
   * @param int? - itemsPerPage
   * @return Promise|Observable|any
   */
  ListQuestionsForEvent(
    eventId: string,
    withData: any = null,
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
