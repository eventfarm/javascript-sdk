/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class PoolPaymentGateway {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - poolId
   * @return Promise|Observable|any
   */
  ListPaymentGatewaysForPool(poolId: string): any {
    return this.restClient.get(
      'PoolPaymentGateway/UseCase/ListPaymentGatewaysForPool',
      {
        poolId,
      },
    );
  }

  /**
   * @param string - poolId
   * @return Promise|Observable|any
   */
  ListPaymentGatewaysForSpreedly(poolId: string): any {
    return this.restClient.get(
      'PoolPaymentGateway/UseCase/ListPaymentGatewaysForSpreedly',
      {
        poolId,
      },
    );
  }

  // Commands

  /**
   * @param string - poolId
   * @param string - name
   * @param string - paymentGatewayStringId
   * @param any[] - createParameters
   * @param string? - poolPaymentGatewayId
   * @return Promise|Observable|any
   */
  CreatePaymentGatewayForPool(
    poolId: string,
    name: string,
    paymentGatewayStringId: string,
    createParameters: any[],
    poolPaymentGatewayId: string = null,
  ): any {
    return this.restClient.post(
      'PoolPaymentGateway/UseCase/CreatePaymentGatewayForPool',
      {
        poolId,
        name,
        paymentGatewayStringId,
        createParameters,
        poolPaymentGatewayId,
      },
    );
  }

  /**
   * @param string - poolPaymentGatewayId
   * @return Promise|Observable|any
   */
  DeletePaymentGatewayForPool(poolPaymentGatewayId: string): any {
    return this.restClient.post(
      'PoolPaymentGateway/UseCase/DeletePaymentGatewayForPool',
      {
        poolPaymentGatewayId,
      },
    );
  }

  /**
   * @param string - poolPaymentGatewayId
   * @return Promise|Observable|any
   */
  RemovePaymentGatewayForPool(poolPaymentGatewayId: string): any {
    return this.restClient.post(
      'PoolPaymentGateway/UseCase/RemovePaymentGatewayForPool',
      {
        poolPaymentGatewayId,
      },
    );
  }

  /**
   * @param string - poolPaymentGatewayId
   * @param string - name
   * @param string - paymentGatewayStringId
   * @param any[] - updateParameters
   * @return Promise|Observable|any
   */
  UpdatePaymentGatewayForPool(
    poolPaymentGatewayId: string,
    name: string,
    paymentGatewayStringId: string,
    updateParameters: any[],
  ): any {
    return this.restClient.post(
      'PoolPaymentGateway/UseCase/UpdatePaymentGatewayForPool',
      {
        poolPaymentGatewayId,
        name,
        paymentGatewayStringId,
        updateParameters,
      },
    );
  }
}
