/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class PoolFile {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - poolAssetId
   * @return Promise|Observable|any
   */
  GetPoolAsset(poolAssetId: string): any {
    return this.restClient.get('PoolFile/UseCase/GetPoolAsset', {
      poolAssetId,
    });
  }

  /**
   * @param string - poolDocumentId
   * @return Promise|Observable|any
   */
  GetPoolDocument(poolDocumentId: string): any {
    return this.restClient.get('PoolFile/UseCase/GetPoolDocument', {
      poolDocumentId,
    });
  }

  /**
   * @param string - poolId
   * @param string? - sortDirection ascending|descending
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-100
   * @param any[]? - poolFileCategoryFilter
   * @param string? - query
   * @return Promise|Observable|any
   */
  ListPoolFilesForPool(
    poolId: string,
    sortDirection: string = null,
    page: number = null,
    itemsPerPage: number = null,
    poolFileCategoryFilter: any[] = null,
    query: string = null,
  ): any {
    return this.restClient.get('PoolFile/UseCase/ListPoolFilesForPool', {
      poolId,
      sortDirection,
      page,
      itemsPerPage,
      poolFileCategoryFilter,
      query,
    });
  }

  // Commands

  /**
   * @param string - poolId
   * @param any - image image/jpeg|image/png
   * @param string - poolFileCategoryType profile|efx|other
   * @param string - fileName
   * @param string? - poolAssetId
   * @return Promise|Observable|any
   */
  CreatePoolAsset(
    poolId: string,
    image: any,
    poolFileCategoryType: string,
    fileName: string,
    poolAssetId: string = null,
  ): any {
    return this.restClient.postMultipart('PoolFile/UseCase/CreatePoolAsset', {
      poolId,
      image,
      poolFileCategoryType,
      fileName,
      poolAssetId,
    });
  }

  /**
   * @param string - poolId
   * @param any - document
   * @param string - poolFileCategoryType profile|efx|other
   * @param string - fileName
   * @param string? - poolDocumentId
   * @return Promise|Observable|any
   */
  CreatePoolDocument(
    poolId: string,
    document: any,
    poolFileCategoryType: string,
    fileName: string,
    poolDocumentId: string = null,
  ): any {
    return this.restClient.postMultipart(
      'PoolFile/UseCase/CreatePoolDocument',
      {
        poolId,
        document,
        poolFileCategoryType,
        fileName,
        poolDocumentId,
      },
    );
  }
}
