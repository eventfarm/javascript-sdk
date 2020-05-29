/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class UserUnsubscribe {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - emailAddress
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-100
   * @return Promise|Observable|any
   */
  ListSubscriptionsByEmail(
    emailAddress: string,
    page: number = null,
    itemsPerPage: number = null,
  ): any {
    return this.restClient.get(
      'UserUnsubscribe/UseCase/ListSubscriptionsByEmail',
      {
        emailAddress,
        page,
        itemsPerPage,
      },
    );
  }

  // Commands

  /**
   * @param string - eventId
   * @param string - emailAddress
   * @return Promise|Observable|any
   */
  ResubscribeUserToEvent(eventId: string, emailAddress: string): any {
    return this.restClient.post(
      'UserUnsubscribe/UseCase/ResubscribeUserToEvent',
      {
        eventId,
        emailAddress,
      },
    );
  }

  /**
   * @param string - poolId
   * @param string - emailAddress
   * @return Promise|Observable|any
   */
  ResubscribeUserToPool(poolId: string, emailAddress: string): any {
    return this.restClient.post(
      'UserUnsubscribe/UseCase/ResubscribeUserToPool',
      {
        poolId,
        emailAddress,
      },
    );
  }

  /**
   * @param string - ticketblockId
   * @param string - emailAddress
   * @return Promise|Observable|any
   */
  ResubscribeUserToTicketblock(
    ticketblockId: string,
    emailAddress: string,
  ): any {
    return this.restClient.post(
      'UserUnsubscribe/UseCase/ResubscribeUserToTicketblock',
      {
        ticketblockId,
        emailAddress,
      },
    );
  }

  /**
   * @param string - eventId
   * @param string - emailAddress
   * @param string? - userUnsubscribeId
   * @return Promise|Observable|any
   */
  UnsubscribeUserFromEvent(
    eventId: string,
    emailAddress: string,
    userUnsubscribeId: string = null,
  ): any {
    return this.restClient.post(
      'UserUnsubscribe/UseCase/UnsubscribeUserFromEvent',
      {
        eventId,
        emailAddress,
        userUnsubscribeId,
      },
    );
  }

  /**
   * @param string - poolId
   * @param string - emailAddress
   * @param string? - userUnsubscribeId
   * @return Promise|Observable|any
   */
  UnsubscribeUserFromPool(
    poolId: string,
    emailAddress: string,
    userUnsubscribeId: string = null,
  ): any {
    return this.restClient.post(
      'UserUnsubscribe/UseCase/UnsubscribeUserFromPool',
      {
        poolId,
        emailAddress,
        userUnsubscribeId,
      },
    );
  }

  /**
   * @param string - ticketblockId
   * @param string - emailAddress
   * @param string? - userUnsubscribeId
   * @return Promise|Observable|any
   */
  UnsubscribeUserFromTicketblock(
    ticketblockId: string,
    emailAddress: string,
    userUnsubscribeId: string = null,
  ): any {
    return this.restClient.post(
      'UserUnsubscribe/UseCase/UnsubscribeUserFromTicketblock',
      {
        ticketblockId,
        emailAddress,
        userUnsubscribeId,
      },
    );
  }
}
