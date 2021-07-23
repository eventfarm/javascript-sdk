/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class Pool {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - poolId
   * @return Promise|Observable|any
   */
  GetPool(poolId: string): any {
    return this.restClient.get('Pool/UseCase/GetPool', {
      poolId,
    });
  }

  /**
   * @param string - poolId
   * @return Promise|Observable|any
   */
  GetPoolContract(poolId: string): any {
    return this.restClient.get('Pool/UseCase/GetPoolContract', {
      poolId,
    });
  }

  /**
   * @param string - userId
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-500
   * @param string? - sortBy
   * @param string? - sortDirection ascending|descending
   * @return Promise|Observable|any
   */
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

  /**
   * @param string - poolId
   * @param string? - sortBy name
   * @param string? - sortDirection ascending|descending
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-100
   * @return Promise|Observable|any
   */
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

  /**
   * @param string - poolId
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-500
   * @return Promise|Observable|any
   */
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

  /**
   * @param string? - name
   * @param string? - sortBy name
   * @param string? - sortDirection ascending|descending
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-100
   * @return Promise|Observable|any
   */
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

  /**
   * @param string - poolId
   * @param string? - sortBy name|slug
   * @param string? - sortDirection ascending|descending
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-500
   * @return Promise|Observable|any
   */
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

  /**
   * @param string - poolId
   * @return Promise|Observable|any
   */
  ListUniqueTagNamesForPool(poolId: string): any {
    return this.restClient.get('Pool/UseCase/ListUniqueTagNamesForPool', {
      poolId,
    });
  }

  // Commands

  /**
   * @param string - name
   * @param string - shortName
   * @param string? - poolId
   * @return Promise|Observable|any
   */
  CreatePool(name: string, shortName: string, poolId: string = null): any {
    return this.restClient.post('Pool/UseCase/CreatePool', {
      name,
      shortName,
      poolId,
    });
  }

  /**
   * @param string - poolId
   * @param string - poolContractType cio|intro|trial|pro|premier|premierPlus|custom|internal
   * @param number - startDate
   * @param number - endDate
   * @param string? - poolContractId
   * @return Promise|Observable|any
   */
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

  /**
   * @param string - poolId
   * @param string - poolWebhookType
   * @param string - url
   * @return Promise|Observable|any
   */
  CreatePoolWebhook(poolId: string, poolWebhookType: string, url: string): any {
    return this.restClient.post('Pool/UseCase/CreatePoolWebhook', {
      poolId,
      poolWebhookType,
      url,
    });
  }

  /**
   * @param string - userId
   * @param string - poolId
   * @return Promise|Observable|any
   */
  RemoveAllUserRolesFromPool(userId: string, poolId: string): any {
    return this.restClient.post('Pool/UseCase/RemoveAllUserRolesFromPool', {
      userId,
      poolId,
    });
  }

  /**
   * @param string - poolId
   * @return Promise|Observable|any
   */
  RemoveCustomerDisplayNameForPool(poolId: string): any {
    return this.restClient.post(
      'Pool/UseCase/RemoveCustomerDisplayNameForPool',
      {
        poolId,
      },
    );
  }

  /**
   * @param string - poolId
   * @return Promise|Observable|any
   */
  RemovePrivacyPolicyLinkForPool(poolId: string): any {
    return this.restClient.post('Pool/UseCase/RemovePrivacyPolicyLinkForPool', {
      poolId,
    });
  }

  /**
   * @param string - poolId
   * @param string - userId
   * @param string? - slackUserId
   * @param any[]? - requestedFeatureSlugs
   * @param string? - other
   * @return Promise|Observable|any
   */
  SendUpgradeRequestToCsm(
    poolId: string,
    userId: string,
    slackUserId: string = null,
    requestedFeatureSlugs: any[] = null,
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

  /**
   * @param string - poolId
   * @param string - customerDisplayName
   * @return Promise|Observable|any
   */
  SetCustomerDisplayNameForPool(
    poolId: string,
    customerDisplayName: string,
  ): any {
    return this.restClient.post('Pool/UseCase/SetCustomerDisplayNameForPool', {
      poolId,
      customerDisplayName,
    });
  }

  /**
   * @param string - poolId
   * @param string - name
   * @return Promise|Observable|any
   */
  SetNameForPool(poolId: string, name: string): any {
    return this.restClient.post('Pool/UseCase/SetNameForPool', {
      poolId,
      name,
    });
  }

  /**
   * @param string - poolId
   * @param string - privacyPolicyLink
   * @return Promise|Observable|any
   */
  SetPrivacyPolicyLinkForPool(poolId: string, privacyPolicyLink: string): any {
    return this.restClient.post('Pool/UseCase/SetPrivacyPolicyLinkForPool', {
      poolId,
      privacyPolicyLink,
    });
  }

  /**
   * @param string - poolId
   * @param string - shortName
   * @return Promise|Observable|any
   */
  SetShortNameForPool(poolId: string, shortName: string): any {
    return this.restClient.post('Pool/UseCase/SetShortNameForPool', {
      poolId,
      shortName,
    });
  }

  /**
   * @param string - poolContractId
   * @param string? - poolContractType cio|intro|trial|pro|premier|premierPlus|custom|internal
   * @param number? - startDate
   * @param number? - endDate
   * @return Promise|Observable|any
   */
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
