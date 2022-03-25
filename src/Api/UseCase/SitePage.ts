/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class SitePage {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - sitePageId
   * @return Promise|Observable|any
   */
  GetSitePage(sitePageId: string): any {
    return this.restClient.get('SitePage/UseCase/GetSitePage', {
      sitePageId,
    });
  }

  /**
   * @param string - eventId
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-100
   * @return Promise|Observable|any
   */
  ListSitePagesForEvent(
    eventId: string,
    page: number = null,
    itemsPerPage: number = null,
  ): any {
    return this.restClient.get('SitePage/UseCase/ListSitePagesForEvent', {
      eventId,
      page,
      itemsPerPage,
    });
  }

  /**
   * @param string - poolId
   * @param boolean? - shouldIncludeSharedTemplates true|false
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-500
   * @return Promise|Observable|any
   */
  ListTemplatesForPool(
    poolId: string,
    shouldIncludeSharedTemplates: boolean = null,
    page: number = null,
    itemsPerPage: number = null,
  ): any {
    return this.restClient.get('SitePage/UseCase/ListTemplatesForPool', {
      poolId,
      shouldIncludeSharedTemplates,
      page,
      itemsPerPage,
    });
  }

  // Commands

  /**
   * @param string - eventId
   * @param string - title
   * @param string - content
   * @param number? - displayOrder
   * @param string? - sitePageId
   * @param string? - styles
   * @param string? - scripts
   * @param string? - sourceTemplateId
   * @return Promise|Observable|any
   */
  CreateSitePage(
    eventId: string,
    title: string,
    content: string,
    displayOrder: number = null,
    sitePageId: string = null,
    styles: string = null,
    scripts: string = null,
    sourceTemplateId: string = null,
  ): any {
    return this.restClient.post('SitePage/UseCase/CreateSitePage', {
      eventId,
      title,
      content,
      displayOrder,
      sitePageId,
      styles,
      scripts,
      sourceTemplateId,
    });
  }

  /**
   * @param string - name
   * @param string - content
   * @param string - difficulty custom|beginner|intermediate|advanced|expert
   * @param string? - poolId
   * @param string? - styles
   * @param string? - scripts
   * @param string? - description
   * @param string? - templateId
   * @return Promise|Observable|any
   */
  CreateTemplate(
    name: string,
    content: string,
    difficulty: string,
    poolId: string = null,
    styles: string = null,
    scripts: string = null,
    description: string = null,
    templateId: string = null,
  ): any {
    return this.restClient.post('SitePage/UseCase/CreateTemplate', {
      name,
      content,
      difficulty,
      poolId,
      styles,
      scripts,
      description,
      templateId,
    });
  }

  /**
   * @param string - sitePageId
   * @return Promise|Observable|any
   */
  DisableSearchEngineIndexingForSitePage(sitePageId: string): any {
    return this.restClient.post(
      'SitePage/UseCase/DisableSearchEngineIndexingForSitePage',
      {
        sitePageId,
      },
    );
  }

  /**
   * @param string - sitePageId
   * @param string? - newSitePageId
   * @param string? - toEventId
   * @return Promise|Observable|any
   */
  DuplicateSitePage(
    sitePageId: string,
    newSitePageId: string = null,
    toEventId: string = null,
  ): any {
    return this.restClient.post('SitePage/UseCase/DuplicateSitePage', {
      sitePageId,
      newSitePageId,
      toEventId,
    });
  }

  /**
   * @param string - templateId
   * @param string? - newTemplateId
   * @param string? - toPoolId
   * @return Promise|Observable|any
   */
  DuplicateTemplate(
    templateId: string,
    newTemplateId: string = null,
    toPoolId: string = null,
  ): any {
    return this.restClient.post('SitePage/UseCase/DuplicateTemplate', {
      templateId,
      newTemplateId,
      toPoolId,
    });
  }

  /**
   * @param string - sitePageId
   * @return Promise|Observable|any
   */
  EnableSearchEngineIndexingForSitePage(sitePageId: string): any {
    return this.restClient.post(
      'SitePage/UseCase/EnableSearchEngineIndexingForSitePage',
      {
        sitePageId,
      },
    );
  }

  /**
   * @return Promise|Observable|any
   */
  GenerateSitePageTemplates(): any {
    return this.restClient.post(
      'SitePage/UseCase/GenerateSitePageTemplates',
      {},
    );
  }

  /**
   * @param string - sitePageId
   * @return Promise|Observable|any
   */
  RemoveSitePage(sitePageId: string): any {
    return this.restClient.post('SitePage/UseCase/RemoveSitePage', {
      sitePageId,
    });
  }

  /**
   * @param string - sitePageTemplateId
   * @return Promise|Observable|any
   */
  RemoveTemplate(sitePageTemplateId: string): any {
    return this.restClient.post('SitePage/UseCase/RemoveTemplate', {
      sitePageTemplateId,
    });
  }

  /**
   * @param string - sitePageId
   * @param string - content
   * @param string? - styles
   * @param string? - scripts
   * @return Promise|Observable|any
   */
  SetContentForSitePage(
    sitePageId: string,
    content: string,
    styles: string = null,
    scripts: string = null,
  ): any {
    return this.restClient.post('SitePage/UseCase/SetContentForSitePage', {
      sitePageId,
      content,
      styles,
      scripts,
    });
  }

  /**
   * @param string - sitePageId
   * @param string - displayOrder
   * @return Promise|Observable|any
   */
  SetDisplayOrderForSitePage(sitePageId: string, displayOrder: string): any {
    return this.restClient.post('SitePage/UseCase/SetDisplayOrderForSitePage', {
      sitePageId,
      displayOrder,
    });
  }

  /**
   * @param string - sitePageId
   * @param string? - title
   * @param string? - description
   * @param string? - keywords
   * @param string? - imageUrl
   * @param string? - name
   * @return Promise|Observable|any
   */
  SetMetaInfoForSitePage(
    sitePageId: string,
    title: string = null,
    description: string = null,
    keywords: string = null,
    imageUrl: string = null,
    name: string = null,
  ): any {
    return this.restClient.post('SitePage/UseCase/SetMetaInfoForSitePage', {
      sitePageId,
      title,
      description,
      keywords,
      imageUrl,
      name,
    });
  }

  /**
   * @param string - sitePageId
   * @param string - title
   * @return Promise|Observable|any
   */
  SetTitleForSitePage(sitePageId: string, title: string): any {
    return this.restClient.post('SitePage/UseCase/SetTitleForSitePage', {
      sitePageId,
      title,
    });
  }

  /**
   * @param string - sitePageId
   * @param string - eventId
   * @param string - title
   * @param string - content
   * @param number? - displayOrder
   * @return Promise|Observable|any
   */
  UpdateSitePage(
    sitePageId: string,
    eventId: string,
    title: string,
    content: string,
    displayOrder: number = null,
  ): any {
    return this.restClient.post('SitePage/UseCase/UpdateSitePage', {
      sitePageId,
      eventId,
      title,
      content,
      displayOrder,
    });
  }

  /**
   * @param string - templateId
   * @param string? - name
   * @param string? - content
   * @param string? - poolId
   * @param string? - styles
   * @param string? - scripts
   * @return Promise|Observable|any
   */
  UpdateTemplate(
    templateId: string,
    name: string = null,
    content: string = null,
    poolId: string = null,
    styles: string = null,
    scripts: string = null,
  ): any {
    return this.restClient.post('SitePage/UseCase/UpdateTemplate', {
      templateId,
      name,
      content,
      poolId,
      styles,
      scripts,
    });
  }
}
