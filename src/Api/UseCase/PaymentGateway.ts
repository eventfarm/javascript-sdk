/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class PaymentGateway {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  // Commands

  /**
   * @param string - stringId
   * @param string - name
   * @param string - companyName
   * @param string? - companyUrl
   * @param string? - logoUrl
   * @return Promise|Observable|any
   */
  CreatePaymentGateway(
    stringId: string,
    name: string,
    companyName: string,
    companyUrl: string = null,
    logoUrl: string = null,
  ): any {
    return this.restClient.post('PaymentGateway/UseCase/CreatePaymentGateway', {
      stringId,
      name,
      companyName,
      companyUrl,
      logoUrl,
    });
  }

  /**
   * @param string - paymentGatewayId
   * @param string - sortOrder 1-65535
   * @return Promise|Observable|any
   */
  SetSortOrderForPaymentGateway(
    paymentGatewayId: string,
    sortOrder: string,
  ): any {
    return this.restClient.post(
      'PaymentGateway/UseCase/SetSortOrderForPaymentGateway',
      {
        paymentGatewayId,
        sortOrder,
      },
    );
  }
}
