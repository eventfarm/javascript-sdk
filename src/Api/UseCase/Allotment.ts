/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class Allotment {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - stackId
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-100
   * @return Promise|Observable|any
   */
  ListAllotmentsForStack(
    stackId: string,
    page: number = null,
    itemsPerPage: number = null,
  ): any {
    return this.restClient.get('Allotment/UseCase/ListAllotmentsForStack', {
      stackId,
      page,
      itemsPerPage,
    });
  }

  // Commands

  /**
   * @param string - ticketBlockId
   * @param string - stackId
   * @param number - quantity
   * @param string? - allotmentId
   * @return Promise|Observable|any
   */
  CreateAllotment(
    ticketBlockId: string,
    stackId: string,
    quantity: number,
    allotmentId: string = null,
  ): any {
    return this.restClient.post('Allotment/UseCase/CreateAllotment', {
      ticketBlockId,
      stackId,
      quantity,
      allotmentId,
    });
  }

  /**
   * @param string - allotmentId
   * @return Promise|Observable|any
   */
  DeleteAllotment(allotmentId: string): any {
    return this.restClient.post('Allotment/UseCase/DeleteAllotment', {
      allotmentId,
    });
  }

  /**
   * @param string - allotmentId
   * @param number - quantity >= 1
   * @return Promise|Observable|any
   */
  SetAllotmentQuantity(allotmentId: string, quantity: number): any {
    return this.restClient.post('Allotment/UseCase/SetAllotmentQuantity', {
      allotmentId,
      quantity,
    });
  }
}
