/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class Answer {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  // Commands

  /**
   * @param string - questionId
   * @param string - text
   * @param number? - sortOrder
   * @param boolean? - isDefault true|false
   * @param string? - answerId
   * @return Promise|Observable|any
   */
  CreateAnswer(
    questionId: string,
    text: string,
    sortOrder: number = null,
    isDefault: boolean = null,
    answerId: string = null,
  ): any {
    return this.restClient.post('Answer/UseCase/CreateAnswer', {
      questionId,
      text,
      sortOrder,
      isDefault,
      answerId,
    });
  }

  /**
   * @param string - answerId
   * @return Promise|Observable|any
   */
  DeleteAnswer(answerId: string): any {
    return this.restClient.post('Answer/UseCase/DeleteAnswer', {
      answerId,
    });
  }

  /**
   * @param string - answerId
   * @param number - sortOrder
   * @return Promise|Observable|any
   */
  SetAnswerSortOrder(answerId: string, sortOrder: number): any {
    return this.restClient.post('Answer/UseCase/SetAnswerSortOrder', {
      answerId,
      sortOrder,
    });
  }

  /**
   * @param string - answerId
   * @param string - text
   * @param boolean? - isDefault true|false
   * @return Promise|Observable|any
   */
  UpdateAnswer(answerId: string, text: string, isDefault: boolean = null): any {
    return this.restClient.post('Answer/UseCase/UpdateAnswer', {
      answerId,
      text,
      isDefault,
    });
  }
}
