/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class Stack {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - stackId
   * @param string[]? - withData Event|TicketType|availabilityCounts|AvailabilityCounts
   * @return Promise|Observable|any
   */
  GetStack(stackId: string, withData: string[] = null): any {
    return this.restClient.get('Stack/UseCase/GetStack', {
      stackId,
      withData,
    });
  }

  /**
   * @param string - eventId
   * @param string[]? - withData TicketType|Event|availabilityCounts|AvailabilityCounts|availibilityCounts
   * @param any[]? - excludeStackMethodFilter
   * @param boolean? - shouldHideDeleted true|false
   * @param string? - query
   * @param string? - sortBy
   * @param string? - sortDirection
   * @param number? - page
   * @param number? - itemsPerPage 1-200
   * @return Promise|Observable|any
   */
  ListStacksForEvent(
    eventId: string,
    withData: string[] = null,
    excludeStackMethodFilter: any[] = null,
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

  /**
   * @param any[] - eventIds
   * @param string[]? - withData TicketType|Event|availabilityCounts|AvailabilityCounts|availibilityCounts
   * @param any[]? - excludeStackMethodFilter
   * @param boolean? - shouldHideDeleted true|false
   * @param string? - query
   * @param string? - sortBy
   * @param string? - sortDirection
   * @param number? - page
   * @param number? - itemsPerPage 1-200
   * @return Promise|Observable|any
   */
  ListStacksForEvents(
    eventIds: any[],
    withData: string[] = null,
    excludeStackMethodFilter: any[] = null,
    shouldHideDeleted: boolean = null,
    query: string = null,
    sortBy: string = null,
    sortDirection: string = null,
    page: number = null,
    itemsPerPage: number = null,
  ): any {
    return this.restClient.get('Stack/UseCase/ListStacksForEvents', {
      eventIds,
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

  /**
   * @param string - promotionId
   * @param string[]? - withData TicketType|Event|availabilityCounts|AvailabilityCounts|availibilityCounts
   * @param any[]? - excludeStackMethodFilter
   * @param boolean? - shouldHideDeleted true|false
   * @param string? - query
   * @param string? - sortBy
   * @param string? - sortDirection
   * @param number? - page
   * @param number? - itemsPerPage 1-200
   * @return Promise|Observable|any
   */
  ListStacksForPromotion(
    promotionId: string,
    withData: string[] = null,
    excludeStackMethodFilter: any[] = null,
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

  /**
   * @param string - ticketTypeId
   * @param number? - page
   * @param number? - itemsPerPage
   * @return Promise|Observable|any
   */
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

  // Commands

  /**
   * @param string - promotionId
   * @param any[] - stackIds
   * @return Promise|Observable|any
   */
  AddPromotionToStacks(promotionId: string, stackIds: any[]): any {
    return this.restClient.post('Stack/UseCase/AddPromotionToStacks', {
      promotionId,
      stackIds,
    });
  }

  /**
   * @param string - eventId
   * @param string - ticketTypeId
   * @param string - methodId
   * @param number - quantity
   * @param number - maxQty
   * @param number? - price
   * @param number? - serviceFee
   * @param number? - openingTime
   * @param number? - closingTime
   * @param boolean? - transferable true|false
   * @param string? - inviteDesignId
   * @param string? - confirmDesignId
   * @param string? - declineDesignId
   * @param string? - stackId
   * @param number? - virbelaTeamId
   * @param string? - virbelaRole member|moderator|leader
   * @return Promise|Observable|any
   */
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
    virbelaTeamId: number = null,
    virbelaRole: string = null,
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
      virbelaTeamId,
      virbelaRole,
    });
  }

  /**
   * @param string - eventId
   * @param string - ticketTypeId
   * @param boolean - privateInvite true|false
   * @param boolean - fcfs true|false
   * @param number - quantity
   * @param number - maxQty
   * @param number? - price
   * @param number? - serviceFee
   * @param string? - openingTime
   * @param string? - closingTime
   * @param boolean? - transferable true|false
   * @param string? - inviteDesignId
   * @param string? - confirmDesignId
   * @param string? - declineDesignId
   * @param string? - stackId
   * @param number? - virbelaTeamId
   * @param string? - virbelaRole member|moderator|leader
   * @param string? - expirationStartTime
   * @param string? - expirationEndTime
   * @return Promise|Observable|any
   */
  CreateStackFromSettings(
    eventId: string,
    ticketTypeId: string,
    privateInvite: boolean,
    fcfs: boolean,
    quantity: number,
    maxQty: number,
    price: number = null,
    serviceFee: number = null,
    openingTime: string = null,
    closingTime: string = null,
    transferable: boolean = null,
    inviteDesignId: string = null,
    confirmDesignId: string = null,
    declineDesignId: string = null,
    stackId: string = null,
    virbelaTeamId: number = null,
    virbelaRole: string = null,
    expirationStartTime: string = null,
    expirationEndTime: string = null,
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
      virbelaTeamId,
      virbelaRole,
      expirationStartTime,
      expirationEndTime,
    });
  }

  /**
   * @param string - eventId
   * @param string - ticketTypeId
   * @param any[] - stacks
   * @param boolean - privateInvite true|false
   * @param boolean - fcfs true|false
   * @param number - maxQty
   * @param number? - price
   * @param number? - serviceFee
   * @param string? - openingTime
   * @param string? - closingTime
   * @param boolean? - transferable true|false
   * @param string? - inviteDesignId
   * @param string? - confirmDesignId
   * @param string? - declineDesignId
   * @return Promise|Observable|any
   */
  CreateStacksForTicketTypeFromSettings(
    eventId: string,
    ticketTypeId: string,
    stacks: any[],
    privateInvite: boolean,
    fcfs: boolean,
    maxQty: number,
    price: number = null,
    serviceFee: number = null,
    openingTime: string = null,
    closingTime: string = null,
    transferable: boolean = null,
    inviteDesignId: string = null,
    confirmDesignId: string = null,
    declineDesignId: string = null,
  ): any {
    return this.restClient.post(
      'Stack/UseCase/CreateStacksForTicketTypeFromSettings',
      {
        eventId,
        ticketTypeId,
        stacks,
        privateInvite,
        fcfs,
        maxQty,
        price,
        serviceFee,
        openingTime,
        closingTime,
        transferable,
        inviteDesignId,
        confirmDesignId,
        declineDesignId,
      },
    );
  }

  /**
   * @param string - stackId
   * @return Promise|Observable|any
   */
  DeleteStack(stackId: string): any {
    return this.restClient.post('Stack/UseCase/DeleteStack', {
      stackId,
    });
  }

  /**
   * @param string - promotionId
   * @param any[] - stackIds
   * @return Promise|Observable|any
   */
  RemovePromotionFromStacks(promotionId: string, stackIds: any[]): any {
    return this.restClient.post('Stack/UseCase/RemovePromotionFromStacks', {
      promotionId,
      stackIds,
    });
  }

  /**
   * @param string - stackId
   * @param number - closingTime
   * @return Promise|Observable|any
   */
  SetClosingTimeForStack(stackId: string, closingTime: number): any {
    return this.restClient.post('Stack/UseCase/SetClosingTimeForStack', {
      stackId,
      closingTime,
    });
  }

  /**
   * @param string - stackId
   * @param string? - inviteDesignId
   * @param string? - confirmDesignId
   * @param string? - declineDesignId
   * @return Promise|Observable|any
   */
  SetEmailDesignsForStack(
    stackId: string,
    inviteDesignId: string = null,
    confirmDesignId: string = null,
    declineDesignId: string = null,
  ): any {
    return this.restClient.post('Stack/UseCase/SetEmailDesignsForStack', {
      stackId,
      inviteDesignId,
      confirmDesignId,
      declineDesignId,
    });
  }

  /**
   * @param string - stackId
   * @param number - maxQuantity
   * @return Promise|Observable|any
   */
  SetMaxQuantityForStack(stackId: string, maxQuantity: number): any {
    return this.restClient.post('Stack/UseCase/SetMaxQuantityForStack', {
      stackId,
      maxQuantity,
    });
  }

  /**
   * @param string - stackId
   * @param string - methodSlug
   * @return Promise|Observable|any
   */
  SetMethodForStack(stackId: string, methodSlug: string): any {
    return this.restClient.post('Stack/UseCase/SetMethodForStack', {
      stackId,
      methodSlug,
    });
  }

  /**
   * @param string - stackId
   * @param number - openingTime
   * @return Promise|Observable|any
   */
  SetOpeningTimeForStack(stackId: string, openingTime: number): any {
    return this.restClient.post('Stack/UseCase/SetOpeningTimeForStack', {
      stackId,
      openingTime,
    });
  }

  /**
   * @param string - stackId
   * @param number - price
   * @return Promise|Observable|any
   */
  SetPriceForStack(stackId: string, price: number): any {
    return this.restClient.post('Stack/UseCase/SetPriceForStack', {
      stackId,
      price,
    });
  }

  /**
   * @param string - stackId
   * @param number - quantity
   * @return Promise|Observable|any
   */
  SetQuantityForStack(stackId: string, quantity: number): any {
    return this.restClient.post('Stack/UseCase/SetQuantityForStack', {
      stackId,
      quantity,
    });
  }

  /**
   * @param string - stackId
   * @param number - serviceFee
   * @return Promise|Observable|any
   */
  SetServiceFeeForStack(stackId: string, serviceFee: number): any {
    return this.restClient.post('Stack/UseCase/SetServiceFeeForStack', {
      stackId,
      serviceFee,
    });
  }

  /**
   * @param string - stackId
   * @param boolean - transferable true|false
   * @return Promise|Observable|any
   */
  SetTransferableForStack(stackId: string, transferable: boolean): any {
    return this.restClient.post('Stack/UseCase/SetTransferableForStack', {
      stackId,
      transferable,
    });
  }

  /**
   * @param string - stackId
   * @param string? - methodSlug
   * @param number? - price
   * @param number? - serviceFee
   * @param number? - quantity
   * @param number? - maxQuantity
   * @param boolean? - transferable true|false
   * @param number? - virbelaTeamId
   * @param string? - virbelaRole member|moderator|leader
   * @return Promise|Observable|any
   */
  UpdateStack(
    stackId: string,
    methodSlug: string = null,
    price: number = null,
    serviceFee: number = null,
    quantity: number = null,
    maxQuantity: number = null,
    transferable: boolean = null,
    virbelaTeamId: number = null,
    virbelaRole: string = null,
  ): any {
    return this.restClient.post('Stack/UseCase/UpdateStack', {
      stackId,
      methodSlug,
      price,
      serviceFee,
      quantity,
      maxQuantity,
      transferable,
      virbelaTeamId,
      virbelaRole,
    });
  }

  /**
   * @param string - stackId
   * @param string? - eventId
   * @param string? - ticketTypeId
   * @param boolean? - privateInvite true|false
   * @param boolean? - fcfs true|false
   * @param number? - quantity
   * @param number? - maxQty
   * @param number? - price
   * @param number? - serviceFee
   * @param string? - openingTime
   * @param string? - closingTime
   * @param boolean? - transferable true|false
   * @param string? - inviteDesignId
   * @param string? - confirmDesignId
   * @param string? - declineDesignId
   * @param number? - virbelaTeamId
   * @param string? - virbelaRole member|moderator|leader
   * @param string? - expirationStartTime
   * @param string? - expirationEndTime
   * @return Promise|Observable|any
   */
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
    openingTime: string = null,
    closingTime: string = null,
    transferable: boolean = null,
    inviteDesignId: string = null,
    confirmDesignId: string = null,
    declineDesignId: string = null,
    virbelaTeamId: number = null,
    virbelaRole: string = null,
    expirationStartTime: string = null,
    expirationEndTime: string = null,
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
      virbelaTeamId,
      virbelaRole,
      expirationStartTime,
      expirationEndTime,
    });
  }

  /**
   * @param string - eventId
   * @param string - ticketTypeId
   * @param any[] - stacks
   * @param boolean? - privateInvite true|false
   * @param boolean? - fcfs true|false
   * @param number? - maxQty
   * @param number? - price
   * @param number? - serviceFee
   * @param string? - openingTime
   * @param string? - closingTime
   * @param boolean? - transferable true|false
   * @param string? - inviteDesignId
   * @param string? - confirmDesignId
   * @param string? - declineDesignId
   * @return Promise|Observable|any
   */
  UpdateStacksForTicketTypeFromSettings(
    eventId: string,
    ticketTypeId: string,
    stacks: any[],
    privateInvite: boolean = null,
    fcfs: boolean = null,
    maxQty: number = null,
    price: number = null,
    serviceFee: number = null,
    openingTime: string = null,
    closingTime: string = null,
    transferable: boolean = null,
    inviteDesignId: string = null,
    confirmDesignId: string = null,
    declineDesignId: string = null,
  ): any {
    return this.restClient.post(
      'Stack/UseCase/UpdateStacksForTicketTypeFromSettings',
      {
        eventId,
        ticketTypeId,
        stacks,
        privateInvite,
        fcfs,
        maxQty,
        price,
        serviceFee,
        openingTime,
        closingTime,
        transferable,
        inviteDesignId,
        confirmDesignId,
        declineDesignId,
      },
    );
  }
}
