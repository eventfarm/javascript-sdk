/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class Question {
  constructor(private restClient: RestClientInterface) {}

  // GET: Queries
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

  // POST USE CASES: Commands
}
