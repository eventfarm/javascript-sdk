/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../interfaces';

export class SalesforcePoolSetting {
  constructor(private restClient: RestClientInterface) {}

  // GET: Queries
  GetSalesforcePoolSetting(poolId: string): any {
    return this.restClient.get(
      'SalesforcePoolSetting/UseCase/GetSalesforcePoolSetting',
      {
        poolId,
      },
    );
  }

  // POST USE CASES: Commands
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

  RemoveSyncUserForPool(poolId: string): any {
    return this.restClient.post(
      'SalesforcePoolSetting/UseCase/RemoveSyncUserForPool',
      {
        poolId,
      },
    );
  }

  SetLeadCompanyForPool(poolId: string, leadCompany: string): any {
    return this.restClient.post(
      'SalesforcePoolSetting/UseCase/SetLeadCompanyForPool',
      {
        poolId,
        leadCompany,
      },
    );
  }

  SetLeadSourceForPool(poolId: string, leadSource: string): any {
    return this.restClient.post(
      'SalesforcePoolSetting/UseCase/SetLeadSourceForPool',
      {
        poolId,
        leadSource,
      },
    );
  }

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
