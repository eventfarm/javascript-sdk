/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class DomainMask {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - poolId
   * @return Promise|Observable|any
   */
  GetAllDomainMasksByPool(poolId: string): any {
    return this.restClient.get('DomainMask/UseCase/GetAllDomainMasksByPool', {
      poolId,
    });
  }

  /**
   * @param string - domainMaskId
   * @return Promise|Observable|any
   */
  GetDomainMask(domainMaskId: string): any {
    return this.restClient.get('DomainMask/UseCase/GetDomainMask', {
      domainMaskId,
    });
  }

  // Commands

  /**
   * @param string - poolId
   * @param string - domain
   * @return Promise|Observable|any
   */
  CreateDomainMask(poolId: string, domain: string): any {
    return this.restClient.post('DomainMask/UseCase/CreateDomainMask', {
      poolId,
      domain,
    });
  }

  /**
   * @param string - domainMaskId
   * @return Promise|Observable|any
   */
  RemoveDomainMask(domainMaskId: string): any {
    return this.restClient.post('DomainMask/UseCase/RemoveDomainMask', {
      domainMaskId,
    });
  }
}
