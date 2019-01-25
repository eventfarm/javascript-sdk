/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../interfaces';

export class Promotion {
  constructor(private restClient: RestClientInterface) {}

  // GET: Queries

  // POST USE CASES: Commands
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

  DisablePromotion(promotionId: string): any {
    return this.restClient.post('Promotion/UseCase/DisablePromotion', {
      promotionId,
    });
  }

  EnablePromotion(promotionId: string): any {
    return this.restClient.post('Promotion/UseCase/EnablePromotion', {
      promotionId,
    });
  }

  RemovePromotion(promotionId: string): any {
    return this.restClient.post('Promotion/UseCase/RemovePromotion', {
      promotionId,
    });
  }

  SetAmount(promotionId: string, amount: number): any {
    return this.restClient.post('Promotion/UseCase/SetAmount', {
      promotionId,
      amount,
    });
  }

  SetCode(promotionId: string, code: string): any {
    return this.restClient.post('Promotion/UseCase/SetCode', {
      promotionId,
      code,
    });
  }

  SetEndTime(promotionId: string, endTime: number): any {
    return this.restClient.post('Promotion/UseCase/SetEndTime', {
      promotionId,
      endTime,
    });
  }

  SetMaximum(promotionId: string, maximum: number): any {
    return this.restClient.post('Promotion/UseCase/SetMaximum', {
      promotionId,
      maximum,
    });
  }

  SetMessage(promotionId: string, message: string): any {
    return this.restClient.post('Promotion/UseCase/SetMessage', {
      promotionId,
      message,
    });
  }

  SetPromotionType(promotionId: string, promotionType: string): any {
    return this.restClient.post('Promotion/UseCase/SetPromotionType', {
      promotionId,
      promotionType,
    });
  }

  SetStartTime(promotionId: string, startTime: number): any {
    return this.restClient.post('Promotion/UseCase/SetStartTime', {
      promotionId,
      startTime,
    });
  }
}
