/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class TicketType {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - eventId
   * @param boolean? - shouldHideDeleted true|false
   * @return Promise|Observable|any
   */
  ListTicketTypesForEvent(
    eventId: string,
    shouldHideDeleted: boolean = null,
  ): any {
    return this.restClient.get('TicketType/UseCase/ListTicketTypesForEvent', {
      eventId,
      shouldHideDeleted,
    });
  }

  // Commands

  /**
   * @param string - eventId
   * @param string - name
   * @param string - code
   * @param number - quantity
   * @param number - sortOrder
   * @param boolean? - isDeleted true|false
   * @param string? - description
   * @param string? - checkInMessage
   * @param string? - ticketTypeId
   * @return Promise|Observable|any
   */
  CreateTicketType(
    eventId: string,
    name: string,
    code: string,
    quantity: number,
    sortOrder: number,
    isDeleted: boolean = null,
    description: string = null,
    checkInMessage: string = null,
    ticketTypeId: string = null,
  ): any {
    return this.restClient.post('TicketType/UseCase/CreateTicketType', {
      eventId,
      name,
      code,
      quantity,
      sortOrder,
      isDeleted,
      description,
      checkInMessage,
      ticketTypeId,
    });
  }

  /**
   * @param string - ticketTypeId
   * @return Promise|Observable|any
   */
  DeleteTicketType(ticketTypeId: string): any {
    return this.restClient.post('TicketType/UseCase/DeleteTicketType', {
      ticketTypeId,
    });
  }

  /**
   * @param string - ticketTypeId
   * @param string? - checkInMessage
   * @return Promise|Observable|any
   */
  SetCheckInMessageForTicketType(
    ticketTypeId: string,
    checkInMessage: string = null,
  ): any {
    return this.restClient.post(
      'TicketType/UseCase/SetCheckInMessageForTicketType',
      {
        ticketTypeId,
        checkInMessage,
      },
    );
  }

  /**
   * @param string - ticketTypeId
   * @param string? - description
   * @return Promise|Observable|any
   */
  SetDescriptionForTicketType(
    ticketTypeId: string,
    description: string = null,
  ): any {
    return this.restClient.post(
      'TicketType/UseCase/SetDescriptionForTicketType',
      {
        ticketTypeId,
        description,
      },
    );
  }

  /**
   * @param string - ticketTypeId
   * @param number - displayOrder
   * @return Promise|Observable|any
   */
  SetDisplayOrderForTicketType(
    ticketTypeId: string,
    displayOrder: number,
  ): any {
    return this.restClient.post(
      'TicketType/UseCase/SetDisplayOrderForTicketType',
      {
        ticketTypeId,
        displayOrder,
      },
    );
  }

  /**
   * @param string - ticketTypeId
   * @param string - name
   * @return Promise|Observable|any
   */
  SetNameForTicketType(ticketTypeId: string, name: string): any {
    return this.restClient.post('TicketType/UseCase/SetNameForTicketType', {
      ticketTypeId,
      name,
    });
  }

  /**
   * @param string - ticketTypeId
   * @param number - quantity
   * @return Promise|Observable|any
   */
  SetQuantityForTicketType(ticketTypeId: string, quantity: number): any {
    return this.restClient.post('TicketType/UseCase/SetQuantityForTicketType', {
      ticketTypeId,
      quantity,
    });
  }
}
