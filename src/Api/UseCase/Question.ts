/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class Question {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - eventId
   * @param string[]? - withData TicketType|Answers|AnswerBindings
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

  /**
   * @param string - questionId
   * @param string - answerId
   * @param string - answerBindingType equal_to|not_equal_to
   * @return Promise|Observable|any
   */
  CreateAnswerBindingForQuestion(
    questionId: string,
    answerId: string,
    answerBindingType: string,
  ): any {
    return this.restClient.post(
      'Question/UseCase/CreateAnswerBindingForQuestion',
      {
        questionId,
        answerId,
        answerBindingType,
      },
    );
  }

  /**
   * @param string - answerBindingId
   * @return Promise|Observable|any
   */
  RemoveAnswerBindingForQuestion(answerBindingId: string): any {
    return this.restClient.post(
      'Question/UseCase/RemoveAnswerBindingForQuestion',
      {
        answerBindingId,
      },
    );
  }

  /**
   * @param string - answerId
   * @param string - answerBindingType equal_to|not_equal_to
   * @param string - answerBindingId
   * @return Promise|Observable|any
   */
  UpdateAnswerBindingForQuestion(
    answerId: string,
    answerBindingType: string,
    answerBindingId: string,
  ): any {
    return this.restClient.post(
      'Question/UseCase/UpdateAnswerBindingForQuestion',
      {
        answerId,
        answerBindingType,
        answerBindingId,
      },
    );
  }
}
