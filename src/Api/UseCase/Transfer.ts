/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class Transfer {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - transferId
   * @param string[]? - withData
   * @return Promise|Observable|any
   */
  GetTransfer(transferId: string, withData: string[] = null): any {
    return this.restClient.get('Transfer/UseCase/GetTransfer', {
      transferId,
      withData,
    });
  }

  /**
   * @param string - eventId
   * @param string[]? - withData
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-100
   * @param string? - sortBy
   * @param string? - sortDirection
   * @return Promise|Observable|any
   */
  ListTransfersForEvent(
    eventId: string,
    withData: string[] = null,
    page: number = null,
    itemsPerPage: number = null,
    sortBy: string = null,
    sortDirection: string = null,
  ): any {
    return this.restClient.get('Transfer/UseCase/ListTransfersForEvent', {
      eventId,
      withData,
      page,
      itemsPerPage,
      sortBy,
      sortDirection,
    });
  }

  /**
   * @param string - invitationId
   * @param string[]? - withData
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-100
   * @param string? - sortBy
   * @param string? - sortDirection
   * @return Promise|Observable|any
   */
  ListTransfersForInvitation(
    invitationId: string,
    withData: string[] = null,
    page: number = null,
    itemsPerPage: number = null,
    sortBy: string = null,
    sortDirection: string = null,
  ): any {
    return this.restClient.get('Transfer/UseCase/ListTransfersForInvitation', {
      invitationId,
      withData,
      page,
      itemsPerPage,
      sortBy,
      sortDirection,
    });
  }

  // Commands

  /**
   * @param string - transferId
   * @param string - code
   * @return Promise|Observable|any
   */
  ConfirmTransfer(transferId: string, code: string): any {
    return this.restClient.post('Transfer/UseCase/ConfirmTransfer', {
      transferId,
      code,
    });
  }

  /**
   * @param string - eventId
   * @param string - senderId
   * @param string - firstName
   * @param string - lastName
   * @param string - email
   * @param number - transferQty
   * @param string? - transferId
   * @return Promise|Observable|any
   */
  CreateTransfer(
    eventId: string,
    senderId: string,
    firstName: string,
    lastName: string,
    email: string,
    transferQty: number,
    transferId: string = null,
  ): any {
    return this.restClient.post('Transfer/UseCase/CreateTransfer', {
      eventId,
      senderId,
      firstName,
      lastName,
      email,
      transferQty,
      transferId,
    });
  }

  /**
   * @param string - transferId
   * @return Promise|Observable|any
   */
  DeleteTransfer(transferId: string): any {
    return this.restClient.post('Transfer/UseCase/DeleteTransfer', {
      transferId,
    });
  }

  /**
   * @param string - transferId
   * @return Promise|Observable|any
   */
  ForceTransfer(transferId: string): any {
    return this.restClient.post('Transfer/UseCase/ForceTransfer', {
      transferId,
    });
  }

  /**
   * @param string - transferId
   * @return Promise|Observable|any
   */
  ResendAuthorizationRequestEmail(transferId: string): any {
    return this.restClient.post(
      'Transfer/UseCase/ResendAuthorizationRequestEmail',
      {
        transferId,
      },
    );
  }
}
