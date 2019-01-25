/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../interfaces';

export class Stack {
  constructor(private restClient: RestClientInterface) {}

  // GET: Queries
  GetStack(stackId: string, withData: any = null): any {
    return this.restClient.get('Stack/UseCase/GetStack', {
      stackId,
      withData,
    });
  }

  ListStacksForEvent(
    eventId: string,
    withData: any = null,
    excludeStackMethodFilter: any = null,
    shouldHideDeleted: boolean = null,
    query: string = null,
    sortBy: string = null,
    sortDirection: string = null,
    page: number = null,
    itemsPerPage: number = null,
  ): any {
    return this.restClient.get('Stack/UseCase/ListStacksForEvent', {
      eventId,
      withData,
      excludeStackMethodFilter,
      shouldHideDeleted,
      query,
      sortBy,
      sortDirection,
      page,
      itemsPerPage,
    });
  }

  ListStacksForPromotion(
    promotionId: string,
    withData: any = null,
    excludeStackMethodFilter: any = null,
    shouldHideDeleted: boolean = null,
    query: string = null,
    sortBy: string = null,
    sortDirection: string = null,
    page: number = null,
    itemsPerPage: number = null,
  ): any {
    return this.restClient.get('Stack/UseCase/ListStacksForPromotion', {
      promotionId,
      withData,
      excludeStackMethodFilter,
      shouldHideDeleted,
      query,
      sortBy,
      sortDirection,
      page,
      itemsPerPage,
    });
  }

  ListStacksForTicketType(
    ticketTypeId: string,
    page: number = null,
    itemsPerPage: number = null,
  ): any {
    return this.restClient.get('Stack/UseCase/ListStacksForTicketType', {
      ticketTypeId,
      page,
      itemsPerPage,
    });
  }

  // POST USE CASES: Commands
  AddPromotionToStacks(promotionId: string, stackIds: any): any {
    return this.restClient.post('Stack/UseCase/AddPromotionToStacks', {
      promotionId,
      stackIds,
    });
  }

  CreateStack(
    eventId: string,
    ticketTypeId: string,
    methodId: string,
    quantity: number,
    maxQty: number,
    price: number = null,
    serviceFee: number = null,
    openingTime: number = null,
    closingTime: number = null,
    transferable: boolean = null,
    inviteDesignId: string = null,
    confirmDesignId: string = null,
    declineDesignId: string = null,
    stackId: string = null,
  ): any {
    return this.restClient.post('Stack/UseCase/CreateStack', {
      eventId,
      ticketTypeId,
      methodId,
      quantity,
      maxQty,
      price,
      serviceFee,
      openingTime,
      closingTime,
      transferable,
      inviteDesignId,
      confirmDesignId,
      declineDesignId,
      stackId,
    });
  }

  CreateStackFromSettings(
    eventId: string,
    ticketTypeId: string,
    privateInvite: boolean,
    fcfs: boolean,
    quantity: number,
    maxQty: number,
    price: number = null,
    serviceFee: number = null,
    openingTime: number = null,
    closingTime: number = null,
    transferable: boolean = null,
    inviteDesignId: string = null,
    confirmDesignId: string = null,
    declineDesignId: string = null,
    stackId: string = null,
  ): any {
    return this.restClient.post('Stack/UseCase/CreateStackFromSettings', {
      eventId,
      ticketTypeId,
      privateInvite,
      fcfs,
      quantity,
      maxQty,
      price,
      serviceFee,
      openingTime,
      closingTime,
      transferable,
      inviteDesignId,
      confirmDesignId,
      declineDesignId,
      stackId,
    });
  }

  DeleteStack(stackId: string): any {
    return this.restClient.post('Stack/UseCase/DeleteStack', {
      stackId,
    });
  }

  RemovePromotionFromStacks(promotionId: string, stackIds: any): any {
    return this.restClient.post('Stack/UseCase/RemovePromotionFromStacks', {
      promotionId,
      stackIds,
    });
  }

  SetClosingTimeForStack(stackId: string, closingTime: number): any {
    return this.restClient.post('Stack/UseCase/SetClosingTimeForStack', {
      stackId,
      closingTime,
    });
  }

  SetConfirmDesignForStack(stackId: string, confirmDesignId: string): any {
    return this.restClient.post('Stack/UseCase/SetConfirmDesignForStack', {
      stackId,
      confirmDesignId,
    });
  }

  SetDeclineDesignForStack(stackId: string, declineDesignId: string): any {
    return this.restClient.post('Stack/UseCase/SetDeclineDesignForStack', {
      stackId,
      declineDesignId,
    });
  }

  SetInviteDesignForStack(stackId: string, inviteDesignId: string): any {
    return this.restClient.post('Stack/UseCase/SetInviteDesignForStack', {
      stackId,
      inviteDesignId,
    });
  }

  SetMaxQuantityForStack(stackId: string, maxQuantity: number): any {
    return this.restClient.post('Stack/UseCase/SetMaxQuantityForStack', {
      stackId,
      maxQuantity,
    });
  }

  SetMethodForStack(stackId: string, methodSlug: string): any {
    return this.restClient.post('Stack/UseCase/SetMethodForStack', {
      stackId,
      methodSlug,
    });
  }

  SetOpeningTimeForStack(stackId: string, openingTime: number): any {
    return this.restClient.post('Stack/UseCase/SetOpeningTimeForStack', {
      stackId,
      openingTime,
    });
  }

  SetPriceForStack(stackId: string, price: number): any {
    return this.restClient.post('Stack/UseCase/SetPriceForStack', {
      stackId,
      price,
    });
  }

  SetQuantityForStack(stackId: string, quantity: number): any {
    return this.restClient.post('Stack/UseCase/SetQuantityForStack', {
      stackId,
      quantity,
    });
  }

  SetServiceFeeForStack(stackId: string, serviceFee: number): any {
    return this.restClient.post('Stack/UseCase/SetServiceFeeForStack', {
      stackId,
      serviceFee,
    });
  }

  SetTransferableForStack(stackId: string, transferable: boolean): any {
    return this.restClient.post('Stack/UseCase/SetTransferableForStack', {
      stackId,
      transferable,
    });
  }

  UpdateStack(
    stackId: string,
    methodSlug: string = null,
    price: number = null,
    serviceFee: number = null,
    quantity: number = null,
    maxQuantity: number = null,
    transferable: boolean = null,
  ): any {
    return this.restClient.post('Stack/UseCase/UpdateStack', {
      stackId,
      methodSlug,
      price,
      serviceFee,
      quantity,
      maxQuantity,
      transferable,
    });
  }

  UpdateStackFromSettings(
    stackId: string,
    eventId: string = null,
    ticketTypeId: string = null,
    privateInvite: boolean = null,
    fcfs: boolean = null,
    quantity: number = null,
    maxQty: number = null,
    price: number = null,
    serviceFee: number = null,
    openingTime: number = null,
    closingTime: number = null,
    transferable: boolean = null,
    inviteDesignId: string = null,
    confirmDesignId: string = null,
    declineDesignId: string = null,
  ): any {
    return this.restClient.post('Stack/UseCase/UpdateStackFromSettings', {
      stackId,
      eventId,
      ticketTypeId,
      privateInvite,
      fcfs,
      quantity,
      maxQty,
      price,
      serviceFee,
      openingTime,
      closingTime,
      transferable,
      inviteDesignId,
      confirmDesignId,
      declineDesignId,
    });
  }
}
