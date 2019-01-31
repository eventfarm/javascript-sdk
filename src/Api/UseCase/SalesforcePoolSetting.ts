/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class SalesforcePoolSetting {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - poolId
   * @return Promise|Observable|any
   */
  GetSalesforcePoolSetting(poolId: string): any {
    return this.restClient.get(
      'SalesforcePoolSetting/UseCase/GetSalesforcePoolSetting',
      {
        poolId,
      },
    );
  }

  // Commands

  /**
   * @param string - poolId
   * @param string? - syncUserId
   * @param string? - defaultLeadCompany
   * @param string? - defaultLeadSource
   * @return Promise|Observable|any
   */
  CreateSalesforcePoolSetting(
    poolId: string,
    syncUserId: string = null,
    defaultLeadCompany: string = null,
    defaultLeadSource: string = null,
  ): any {
    return this.restClient.post(
      'SalesforcePoolSetting/UseCase/CreateSalesforcePoolSetting',
      {
        poolId,
        syncUserId,
        defaultLeadCompany,
        defaultLeadSource,
      },
    );
  }

  /**
   * @param string - poolId
   * @return Promise|Observable|any
   */
  RemoveSyncUserForPool(poolId: string): any {
    return this.restClient.post(
      'SalesforcePoolSetting/UseCase/RemoveSyncUserForPool',
      {
        poolId,
      },
    );
  }

  /**
   * @param string - poolId
   * @param string - leadCompany
   * @return Promise|Observable|any
   */
  SetLeadCompanyForPool(poolId: string, leadCompany: string): any {
    return this.restClient.post(
      'SalesforcePoolSetting/UseCase/SetLeadCompanyForPool',
      {
        poolId,
        leadCompany,
      },
    );
  }

  /**
   * @param string - poolId
   * @param string - leadSource
   * @return Promise|Observable|any
   */
  SetLeadSourceForPool(poolId: string, leadSource: string): any {
    return this.restClient.post(
      'SalesforcePoolSetting/UseCase/SetLeadSourceForPool',
      {
        poolId,
        leadSource,
      },
    );
  }

  /**
   * @param string - poolId
   * @param string - syncUserId
   * @return Promise|Observable|any
   */
  SetSyncUserForPool(poolId: string, syncUserId: string): any {
    return this.restClient.post(
      'SalesforcePoolSetting/UseCase/SetSyncUserForPool',
      {
        poolId,
        syncUserId,
      },
    );
  }
}
