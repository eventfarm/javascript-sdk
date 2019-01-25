/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../interfaces';

export class Pool {
  constructor(private restClient: RestClientInterface) {}

  // GET: Queries
  GetPool(poolId: string): any {
    return this.restClient.get('Pool/UseCase/GetPool', {
      poolId,
    });
  }

  GetPoolContract(poolId: string): any {
    return this.restClient.get('Pool/UseCase/GetPoolContract', {
      poolId,
    });
  }

  ListAccessiblePoolsForUser(
    userId: string,
    page: number = null,
    itemsPerPage: number = null,
    sortBy: string = null,
    sortDirection: string = null,
  ): any {
    return this.restClient.get('Pool/UseCase/ListAccessiblePoolsForUser', {
      userId,
      page,
      itemsPerPage,
      sortBy,
      sortDirection,
    });
  }

  ListPoolAllotmentsForPool(
    poolId: string,
    sortBy: string = null,
    sortDirection: string = null,
    page: number = null,
    itemsPerPage: number = null,
  ): any {
    return this.restClient.get('Pool/UseCase/ListPoolAllotmentsForPool', {
      poolId,
      sortBy,
      sortDirection,
      page,
      itemsPerPage,
    });
  }

  ListPoolContactsByPoolId(
    poolId: string,
    page: number = null,
    itemsPerPage: number = null,
  ): any {
    return this.restClient.get('Pool/UseCase/ListPoolContactsByPoolId', {
      poolId,
      page,
      itemsPerPage,
    });
  }

  ListPools(
    name: string = null,
    sortBy: string = null,
    sortDirection: string = null,
    page: number = null,
    itemsPerPage: number = null,
  ): any {
    return this.restClient.get('Pool/UseCase/ListPools', {
      name,
      sortBy,
      sortDirection,
      page,
      itemsPerPage,
    });
  }

  ListTagsForPool(
    poolId: string,
    sortBy: string = null,
    sortDirection: string = null,
    page: number = null,
    itemsPerPage: number = null,
  ): any {
    return this.restClient.get('Pool/UseCase/ListTagsForPool', {
      poolId,
      sortBy,
      sortDirection,
      page,
      itemsPerPage,
    });
  }

  // POST USE CASES: Commands
  CreatePoolContract(
    poolId: string,
    poolContractType: string,
    startDate: number,
    endDate: number,
    poolContractId: string = null,
  ): any {
    return this.restClient.post('Pool/UseCase/CreatePoolContract', {
      poolId,
      poolContractType,
      startDate,
      endDate,
      poolContractId,
    });
  }

  CreatePoolWebhook(poolId: string, poolWebhookType: string, url: string): any {
    return this.restClient.post('Pool/UseCase/CreatePoolWebhook', {
      poolId,
      poolWebhookType,
      url,
    });
  }

  RemoveCustomerDisplayNameForPool(poolId: string): any {
    return this.restClient.post(
      'Pool/UseCase/RemoveCustomerDisplayNameForPool',
      {
        poolId,
      },
    );
  }

  RemovePrivacyPolicyLinkForPool(poolId: string): any {
    return this.restClient.post('Pool/UseCase/RemovePrivacyPolicyLinkForPool', {
      poolId,
    });
  }

  SendUpgradeRequestToCsm(
    poolId: string,
    userId: string,
    slackUserId: string = null,
    requestedFeatureSlugs: any = null,
    other: string = null,
  ): any {
    return this.restClient.post('Pool/UseCase/SendUpgradeRequestToCsm', {
      poolId,
      userId,
      slackUserId,
      requestedFeatureSlugs,
      other,
    });
  }

  SetCustomerDisplayNameForPool(
    poolId: string,
    customerDisplayName: string,
  ): any {
    return this.restClient.post('Pool/UseCase/SetCustomerDisplayNameForPool', {
      poolId,
      customerDisplayName,
    });
  }

  SetPrivacyPolicyLinkForPool(poolId: string, privacyPolicyLink: string): any {
    return this.restClient.post('Pool/UseCase/SetPrivacyPolicyLinkForPool', {
      poolId,
      privacyPolicyLink,
    });
  }

  UpdatePoolContract(
    poolContractId: string,
    poolContractType: string = null,
    startDate: number = null,
    endDate: number = null,
  ): any {
    return this.restClient.post('Pool/UseCase/UpdatePoolContract', {
      poolContractId,
      poolContractType,
      startDate,
      endDate,
    });
  }
}
