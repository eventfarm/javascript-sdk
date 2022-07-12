/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class PaymentGateway {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - poolId
   * @return Promise|Observable|any
   */
  ListPaymentGatewaysForPool(poolId: string): any {
    return this.restClient.get(
      'PaymentGateway/UseCase/ListPaymentGatewaysForPool',
      {
        poolId,
      },
    );
  }

  // Commands

  /**
   * @param string - poolId
   * @param string - paymentGatewayType STRIPE|PAYPAL|AUTHORIZENET
   * @param string - gatewayToken
   * @param string? - paymentGatewayId
   * @return Promise|Observable|any
   */
  CreatePaymentGatewayForPool(
    poolId: string,
    paymentGatewayType: string,
    gatewayToken: string,
    paymentGatewayId: string = null,
  ): any {
    return this.restClient.post(
      'PaymentGateway/UseCase/CreatePaymentGatewayForPool',
      {
        poolId,
        paymentGatewayType,
        gatewayToken,
        paymentGatewayId,
      },
    );
  }

  /**
   * @param string - paymentGatewayId
   * @return Promise|Observable|any
   */
  DeletePaymentGatewayForPool(paymentGatewayId: string): any {
    return this.restClient.post(
      'PaymentGateway/UseCase/DeletePaymentGatewayForPool',
      {
        paymentGatewayId,
      },
    );
  }

  /**
   * @param string - paymentGatewayId
   * @return Promise|Observable|any
   */
  RemovePaymentGatewayForPool(paymentGatewayId: string): any {
    return this.restClient.post(
      'PaymentGateway/UseCase/RemovePaymentGatewayForPool',
      {
        paymentGatewayId,
      },
    );
  }

  /**
   * @param string - gatewayToken
   * @param string - paymentGatewayId
   * @return Promise|Observable|any
   */
  UpdateGatewayTokenForType(
    gatewayToken: string,
    paymentGatewayId: string,
  ): any {
    return this.restClient.post(
      'PaymentGateway/UseCase/UpdateGatewayTokenForType',
      {
        gatewayToken,
        paymentGatewayId,
      },
    );
  }
}
