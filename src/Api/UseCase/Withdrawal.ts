/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class Withdrawal {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - withdrawalId
   * @param string[]? - withData
   * @return Promise|Observable|any
   */
  GetWithdrawal(withdrawalId: string, withData: string[] = null): any {
    return this.restClient.get('Withdrawal/UseCase/GetWithdrawal', {
      withdrawalId,
      withData,
    });
  }

  /**
   * @param string - eventId
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-100
   * @param string? - sortBy
   * @param string? - sortDirection
   * @return Promise|Observable|any
   */
  ListWithdrawalsForEvent(
    eventId: string,
    page: number = null,
    itemsPerPage: number = null,
    sortBy: string = null,
    sortDirection: string = null,
  ): any {
    return this.restClient.get('Withdrawal/UseCase/ListWithdrawalsForEvent', {
      eventId,
      page,
      itemsPerPage,
      sortBy,
      sortDirection,
    });
  }

  // Commands

  /**
   * @param string - eventId
   * @param number - amount
   * @param string? - withdrawalId
   * @return Promise|Observable|any
   */
  CreateWithdrawal(
    eventId: string,
    amount: number,
    withdrawalId: string = null,
  ): any {
    return this.restClient.post('Withdrawal/UseCase/CreateWithdrawal', {
      eventId,
      amount,
      withdrawalId,
    });
  }

  /**
   * @param string - withdrawalId
   * @return Promise|Observable|any
   */
  DeleteWithdrawal(withdrawalId: string): any {
    return this.restClient.post('Withdrawal/UseCase/DeleteWithdrawal', {
      withdrawalId,
    });
  }
}
