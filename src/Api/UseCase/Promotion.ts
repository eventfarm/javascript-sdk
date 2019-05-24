/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class Promotion {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - eventId
   * @param string[]? - withData StackAndTicketType
   * @param string? - sortBy createdAt
   * @param string? - sortDirection ascending|descending
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-100
   * @return Promise|Observable|any
   */
  ListPromotionsForEvent(
    eventId: string,
    withData: string[] = null,
    sortBy: string = null,
    sortDirection: string = null,
    page: number = null,
    itemsPerPage: number = null,
  ): any {
    return this.restClient.get('Promotion/UseCase/ListPromotionsForEvent', {
      eventId,
      withData,
      sortBy,
      sortDirection,
      page,
      itemsPerPage,
    });
  }

  // Commands

  /**
   * @param string - eventId
   * @param string - promotionType
   * @param string - code
   * @param string - startTime
   * @param string - endTime
   * @param number - amount
   * @param number - used
   * @param string - message
   * @param number? - maximum
   * @param boolean? - isEnabled true|false
   * @param string? - promotionId
   * @param boolean? - isDeleted true|false
   * @return Promise|Observable|any
   */
  CreatePromotion(
    eventId: string,
    promotionType: string,
    code: string,
    startTime: string,
    endTime: string,
    amount: number,
    used: number,
    message: string,
    maximum: number = null,
    isEnabled: boolean = null,
    promotionId: string = null,
    isDeleted: boolean = null,
  ): any {
    return this.restClient.post('Promotion/UseCase/CreatePromotion', {
      eventId,
      promotionType,
      code,
      startTime,
      endTime,
      amount,
      used,
      message,
      maximum,
      isEnabled,
      promotionId,
      isDeleted,
    });
  }

  /**
   * @param string - promotionId
   * @return Promise|Observable|any
   */
  DisablePromotion(promotionId: string): any {
    return this.restClient.post('Promotion/UseCase/DisablePromotion', {
      promotionId,
    });
  }

  /**
   * @param string - promotionId
   * @return Promise|Observable|any
   */
  EnablePromotion(promotionId: string): any {
    return this.restClient.post('Promotion/UseCase/EnablePromotion', {
      promotionId,
    });
  }

  /**
   * @param string - promotionId
   * @return Promise|Observable|any
   */
  RemovePromotion(promotionId: string): any {
    return this.restClient.post('Promotion/UseCase/RemovePromotion', {
      promotionId,
    });
  }

  /**
   * @param string - promotionId
   * @param number - amount
   * @return Promise|Observable|any
   */
  SetAmount(promotionId: string, amount: number): any {
    return this.restClient.post('Promotion/UseCase/SetAmount', {
      promotionId,
      amount,
    });
  }

  /**
   * @param string - promotionId
   * @param string - code
   * @return Promise|Observable|any
   */
  SetCode(promotionId: string, code: string): any {
    return this.restClient.post('Promotion/UseCase/SetCode', {
      promotionId,
      code,
    });
  }

  /**
   * @param string - promotionId
   * @param number - endTime
   * @return Promise|Observable|any
   */
  SetEndTime(promotionId: string, endTime: number): any {
    return this.restClient.post('Promotion/UseCase/SetEndTime', {
      promotionId,
      endTime,
    });
  }

  /**
   * @param string - promotionId
   * @param number - maximum
   * @return Promise|Observable|any
   */
  SetMaximum(promotionId: string, maximum: number): any {
    return this.restClient.post('Promotion/UseCase/SetMaximum', {
      promotionId,
      maximum,
    });
  }

  /**
   * @param string - promotionId
   * @param string - message
   * @return Promise|Observable|any
   */
  SetMessage(promotionId: string, message: string): any {
    return this.restClient.post('Promotion/UseCase/SetMessage', {
      promotionId,
      message,
    });
  }

  /**
   * @param string - promotionId
   * @param string - promotionType
   * @return Promise|Observable|any
   */
  SetPromotionType(promotionId: string, promotionType: string): any {
    return this.restClient.post('Promotion/UseCase/SetPromotionType', {
      promotionId,
      promotionType,
    });
  }

  /**
   * @param string - promotionId
   * @param any[] - stackIds
   * @return Promise|Observable|any
   */
  SetStacksForPromotion(promotionId: string, stackIds: any[]): any {
    return this.restClient.post('Promotion/UseCase/SetStacksForPromotion', {
      promotionId,
      stackIds,
    });
  }

  /**
   * @param string - promotionId
   * @param number - startTime
   * @return Promise|Observable|any
   */
  SetStartTime(promotionId: string, startTime: number): any {
    return this.restClient.post('Promotion/UseCase/SetStartTime', {
      promotionId,
      startTime,
    });
  }

  /**
   * @param string - promotionId
   * @param string? - promotionType
   * @param string? - code
   * @param string? - startTime
   * @param string? - endTime
   * @param number? - amount
   * @param number? - used
   * @param string? - message
   * @param number? - maximum
   * @param boolean? - isEnabled true|false
   * @return Promise|Observable|any
   */
  UpdatePromotion(
    promotionId: string,
    promotionType: string = null,
    code: string = null,
    startTime: string = null,
    endTime: string = null,
    amount: number = null,
    used: number = null,
    message: string = null,
    maximum: number = null,
    isEnabled: boolean = null,
  ): any {
    return this.restClient.post('Promotion/UseCase/UpdatePromotion', {
      promotionId,
      promotionType,
      code,
      startTime,
      endTime,
      amount,
      used,
      message,
      maximum,
      isEnabled,
    });
  }
}
