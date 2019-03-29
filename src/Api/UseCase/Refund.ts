/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class Refund {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - refundId
   * @param string[]? - withData
   * @return Promise|Observable|any
   */
  GetRefund(refundId: string, withData: string[] = null): any {
    return this.restClient.get('Refund/UseCase/GetRefund', {
      refundId,
      withData,
    });
  }

  /**
   * @param string - transactionId
   * @param string[]? - withData
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-100
   * @param string? - sortBy
   * @param string? - sortDirection
   * @return Promise|Observable|any
   */
  ListRefundsForTransaction(
    transactionId: string,
    withData: string[] = null,
    page: number = null,
    itemsPerPage: number = null,
    sortBy: string = null,
    sortDirection: string = null,
  ): any {
    return this.restClient.get('Refund/UseCase/ListRefundsForTransaction', {
      transactionId,
      withData,
      page,
      itemsPerPage,
      sortBy,
      sortDirection,
    });
  }

  // Commands

  /**
   * @param string - transactionId
   * @param string - refundTransId
   * @param number - amount
   * @param string? - refundId
   * @return Promise|Observable|any
   */
  CreateRefund(
    transactionId: string,
    refundTransId: string,
    amount: number,
    refundId: string = null,
  ): any {
    return this.restClient.post('Refund/UseCase/CreateRefund', {
      transactionId,
      refundTransId,
      amount,
      refundId,
    });
  }

  /**
   * @param string - refundId
   * @return Promise|Observable|any
   */
  DeleteRefund(refundId: string): any {
    return this.restClient.post('Refund/UseCase/DeleteRefund', {
      refundId,
    });
  }
}
