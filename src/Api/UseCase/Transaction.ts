/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class Transaction {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - transactionId
   * @param string[]? - withData Invitations|ActivityLogs|Payments
   * @return Promise|Observable|any
   */
  GetTransaction(transactionId: string, withData: string[] = null): any {
    return this.restClient.get('Transaction/UseCase/GetTransaction', {
      transactionId,
      withData,
    });
  }

  // Commands

  /**
   * @param string - transactionId
   * @param string - invitationId
   * @param any[]? - invitations
   * @return Promise|Observable|any
   */
  AddInvitationToTransaction(
    transactionId: string,
    invitationId: string,
    invitations: any[] = null,
  ): any {
    return this.restClient.post(
      'Transaction/UseCase/AddInvitationToTransaction',
      {
        transactionId,
        invitationId,
        invitations,
      },
    );
  }

  /**
   * @param string - poolId
   * @param string? - transactionId
   * @param any[]? - invitations
   * @param any[]? - payment
   * @param any[]? - requestedPromotionIds
   * @param string? - primaryInvitationId
   * @return Promise|Observable|any
   */
  CreateTransaction(
    poolId: string,
    transactionId: string = null,
    invitations: any[] = null,
    payment: any[] = null,
    requestedPromotionIds: any[] = null,
    primaryInvitationId: string = null,
  ): any {
    return this.restClient.post('Transaction/UseCase/CreateTransaction', {
      poolId,
      transactionId,
      invitations,
      payment,
      requestedPromotionIds,
      primaryInvitationId,
    });
  }
}
