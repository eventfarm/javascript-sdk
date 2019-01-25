/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../interfaces';

export class DomainMask {
  constructor(private restClient: RestClientInterface) {}

  // GET: Queries
  GetAllDomainMasksByPool(poolId: string): any {
    return this.restClient.get('DomainMask/UseCase/GetAllDomainMasksByPool', {
      poolId,
    });
  }

  GetDomainMask(domainMaskId: string): any {
    return this.restClient.get('DomainMask/UseCase/GetDomainMask', {
      domainMaskId,
    });
  }

  // POST USE CASES: Commands
  CreateDomainMask(poolId: string, domain: string): any {
    return this.restClient.post('DomainMask/UseCase/CreateDomainMask', {
      poolId,
      domain,
    });
  }

  RemoveDomainMask(domainMaskId: string): any {
    return this.restClient.post('DomainMask/UseCase/RemoveDomainMask', {
      domainMaskId,
    });
  }
}
