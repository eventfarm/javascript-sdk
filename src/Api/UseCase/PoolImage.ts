/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class PoolImage {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - poolImageId
   * @return Promise|Observable|any
   */
  GetPoolImage(poolImageId: string): any {
    return this.restClient.get('PoolImage/UseCase/GetPoolImage', {
      poolImageId,
    });
  }

  /**
   * @param string - poolId
   * @param string? - sortDirection ascending|descending
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-100
   * @param any[]? - imageFilter
   * @return Promise|Observable|any
   */
  ListPoolImagesForPool(
    poolId: string,
    sortDirection: string = null,
    page: number = null,
    itemsPerPage: number = null,
    imageFilter: any[] = null,
  ): any {
    return this.restClient.get('PoolImage/UseCase/ListPoolImagesForPool', {
      poolId,
      sortDirection,
      page,
      itemsPerPage,
      imageFilter,
    });
  }

  // Commands

  /**
   * @param string - poolId
   * @param any - image image/jpeg|image/png
   * @param string - poolImageType
   * @param string? - poolImageId
   * @return Promise|Observable|any
   */
  CreatePoolImage(
    poolId: string,
    image: any,
    poolImageType: string,
    poolImageId: string = null,
  ): any {
    return this.restClient.postMultipart('PoolImage/UseCase/CreatePoolImage', {
      poolId,
      image,
      poolImageType,
      poolImageId,
    });
  }
}
