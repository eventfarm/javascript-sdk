/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class Link {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - linkId
   * @return Promise|Observable|any
   */
  GetLink(linkId: string): any {
    return this.restClient.get('Link/UseCase/GetLink', {
      linkId,
    });
  }

  // Commands

  /**
   * @param string - linkId
   * @param string - profileId
   * @return Promise|Observable|any
   */
  AddLinkToProfile(linkId: string, profileId: string): any {
    return this.restClient.post('Link/UseCase/AddLinkToProfile', {
      linkId,
      profileId,
    });
  }

  /**
   * @param any[] - linkIds
   * @param string - profileId
   * @return Promise|Observable|any
   */
  AddLinksToProfile(linkIds: any[], profileId: string): any {
    return this.restClient.post('Link/UseCase/AddLinksToProfile', {
      linkIds,
      profileId,
    });
  }

  /**
   * @param string - poolId
   * @param string - url
   * @param string? - shownText
   * @param string? - linkType
   * @param string? - linkId
   * @return Promise|Observable|any
   */
  CreateLink(
    poolId: string,
    url: string,
    shownText: string = null,
    linkType: string = null,
    linkId: string = null,
  ): any {
    return this.restClient.post('Link/UseCase/CreateLink', {
      poolId,
      url,
      shownText,
      linkType,
      linkId,
    });
  }

  /**
   * @param string - linkId
   * @return Promise|Observable|any
   */
  DeleteLink(linkId: string): any {
    return this.restClient.post('Link/UseCase/DeleteLink', {
      linkId,
    });
  }

  /**
   * @param string - linkId
   * @return Promise|Observable|any
   */
  RemoveLink(linkId: string): any {
    return this.restClient.post('Link/UseCase/RemoveLink', {
      linkId,
    });
  }

  /**
   * @param string - linkId
   * @param string - profileId
   * @return Promise|Observable|any
   */
  RemoveLinkFromProfile(linkId: string, profileId: string): any {
    return this.restClient.post('Link/UseCase/RemoveLinkFromProfile', {
      linkId,
      profileId,
    });
  }

  /**
   * @param any[] - linkIds
   * @param string - profileId
   * @return Promise|Observable|any
   */
  RemoveLinksFromProfile(linkIds: any[], profileId: string): any {
    return this.restClient.post('Link/UseCase/RemoveLinksFromProfile', {
      linkIds,
      profileId,
    });
  }

  /**
   * @param string - linkId
   * @param string - linkType
   * @return Promise|Observable|any
   */
  SetLinkType(linkId: string, linkType: string): any {
    return this.restClient.post('Link/UseCase/SetLinkType', {
      linkId,
      linkType,
    });
  }

  /**
   * @param string - linkId
   * @param string - shownText
   * @return Promise|Observable|any
   */
  SetShownText(linkId: string, shownText: string): any {
    return this.restClient.post('Link/UseCase/SetShownText', {
      linkId,
      shownText,
    });
  }

  /**
   * @param string - linkId
   * @param string - url
   * @return Promise|Observable|any
   */
  SetUrl(linkId: string, url: string): any {
    return this.restClient.post('Link/UseCase/SetUrl', {
      linkId,
      url,
    });
  }

  /**
   * @param string - linkId
   * @param string - poolId
   * @param string? - url
   * @param string? - shownText
   * @param string? - linkType
   * @return Promise|Observable|any
   */
  UpdateLink(
    linkId: string,
    poolId: string,
    url: string = null,
    shownText: string = null,
    linkType: string = null,
  ): any {
    return this.restClient.post('Link/UseCase/UpdateLink', {
      linkId,
      poolId,
      url,
      shownText,
      linkType,
    });
  }
}
