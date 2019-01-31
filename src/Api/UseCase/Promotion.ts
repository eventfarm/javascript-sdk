/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class Promotion {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  // Commands

  /**
   * @param string - eventId
   * @param string - promotionType
   * @param string - code
   * @param int - startTime
   * @param int - endTime
   * @param float - amount
   * @param int - used
   * @param int - maximum
   * @param string - message
   * @param bool? - isEnabled true|false
   * @param string? - promotionId
   * @return Promise|Observable|any
   */
  CreatePromotion(
    eventId: string,
    promotionType: string,
    code: string,
    startTime: number,
    endTime: number,
    amount: number,
    used: number,
    maximum: number,
    message: string,
    isEnabled: boolean = null,
    promotionId: string = null,
  ): any {
    return this.restClient.post('Promotion/UseCase/CreatePromotion', {
      eventId,
      promotionType,
      code,
      startTime,
      endTime,
      amount,
      used,
      maximum,
      message,
      isEnabled,
      promotionId,
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
   * @param float - amount
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
   * @param int - endTime
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
   * @param int - maximum
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
   * @param int - startTime
   * @return Promise|Observable|any
   */
  SetStartTime(promotionId: string, startTime: number): any {
    return this.restClient.post('Promotion/UseCase/SetStartTime', {
      promotionId,
      startTime,
    });
  }
}
