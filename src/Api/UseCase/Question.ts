/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class Question {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - eventId
   * @param string[]? - withData Answers|TicketType|QuestionContexts
   * @return Promise|Observable|any
   */
  GetAllQuestionsForEvent(eventId: string, withData: string[] = null): any {
    return this.restClient.get('Question/UseCase/GetAllQuestionsForEvent', {
      eventId,
      withData,
    });
  }

  /**
   * @param string - questionId
   * @param string[]? - withData Answers|TicketType|QuestionResponseCounts|AnswerQuestionResponseCounts|QuestionContexts|AnswerBindings
   * @return Promise|Observable|any
   */
  GetQuestion(questionId: string, withData: string[] = null): any {
    return this.restClient.get('Question/UseCase/GetQuestion', {
      questionId,
      withData,
    });
  }

  /**
   * @param string - eventId
   * @param any[]? - questionContextTypes registration|lead
   * @return Promise|Observable|any
   */
  ListQuestionsByEventAndContext(
    eventId: string,
    questionContextTypes: any[] = null,
  ): any {
    return this.restClient.get(
      'Question/UseCase/ListQuestionsByEventAndContext',
      {
        eventId,
        questionContextTypes,
      },
    );
  }

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
   * @param string - eventId
   * @param string - text
   * @param string - questionType checkbox|radio|multi|text|select|date|waiver|address
   * @param number? - sortOrder
   * @param boolean? - isRequired true|false
   * @param boolean? - isIndividual true|false
   * @param string? - ticketTypeId
   * @param string? - questionId
   * @param any[]? - questionContextTypes registration|lead
   * @return Promise|Observable|any
   */
  CreateQuestion(
    eventId: string,
    text: string,
    questionType: string,
    sortOrder: number = null,
    isRequired: boolean = null,
    isIndividual: boolean = null,
    ticketTypeId: string = null,
    questionId: string = null,
    questionContextTypes: any[] = null,
  ): any {
    return this.restClient.post('Question/UseCase/CreateQuestion', {
      eventId,
      text,
      questionType,
      sortOrder,
      isRequired,
      isIndividual,
      ticketTypeId,
      questionId,
      questionContextTypes,
    });
  }

  /**
   * @param string - questionId
   * @return Promise|Observable|any
   */
  DeleteQuestion(questionId: string): any {
    return this.restClient.post('Question/UseCase/DeleteQuestion', {
      questionId,
    });
  }

  /**
   * @param string - questionId
   * @return Promise|Observable|any
   */
  DisableQuestion(questionId: string): any {
    return this.restClient.post('Question/UseCase/DisableQuestion', {
      questionId,
    });
  }

  /**
   * @param string - questionId
   * @return Promise|Observable|any
   */
  EnableQuestion(questionId: string): any {
    return this.restClient.post('Question/UseCase/EnableQuestion', {
      questionId,
    });
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
   * @param string - questionId
   * @param number - sortOrder
   * @return Promise|Observable|any
   */
  SetQuestionSortOrder(questionId: string, sortOrder: number): any {
    return this.restClient.post('Question/UseCase/SetQuestionSortOrder', {
      questionId,
      sortOrder,
    });
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

  /**
   * @param string - questionId
   * @param string - text
   * @param string - questionType checkbox|radio|multi|text|select|date|waiver|address
   * @param any[]? - questionContextTypes registration|lead
   * @param boolean? - isRequired true|false
   * @param boolean? - isIndividual true|false
   * @param string? - ticketTypeId
   * @return Promise|Observable|any
   */
  UpdateQuestion(
    questionId: string,
    text: string,
    questionType: string,
    questionContextTypes: any[] = null,
    isRequired: boolean = null,
    isIndividual: boolean = null,
    ticketTypeId: string = null,
  ): any {
    return this.restClient.post('Question/UseCase/UpdateQuestion', {
      questionId,
      text,
      questionType,
      questionContextTypes,
      isRequired,
      isIndividual,
      ticketTypeId,
    });
  }
}
