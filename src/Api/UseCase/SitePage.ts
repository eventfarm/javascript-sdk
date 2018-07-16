import { RestClientInterface } from '../../RestClient/RestClientInterface';

export class SitePage {
    constructor(private restClient: RestClientInterface) {}

    // GET: Queries
    GetSitePage(sitePageId: string): any {
        return this.restClient.get('SitePage/UseCase/GetSitePage', {
            sitePageId
        }    );
    }

    ListSitePagesForEvent(eventId: string, page: number = null, itemsPerPage: number = null): any {
        return this.restClient.get('SitePage/UseCase/ListSitePagesForEvent', {
            eventId,
            page,
            itemsPerPage
        }    );
    }

    ListTemplatesForPool(poolId: string, shouldIncludeSharedTemplates: boolean = null, page: number = null, itemsPerPage: number = null): any {
        return this.restClient.get('SitePage/UseCase/ListTemplatesForPool', {
            poolId,
            shouldIncludeSharedTemplates,
            page,
            itemsPerPage
        }    );
    }

    // POST USE CASES: Commands
    CreateSitePage(eventId: string, title: string, content: string, displayOrder: number = null, sitePageId: string = null, styles: string = null, scripts: string = null): any {
        return this.restClient.post('SitePage/UseCase/CreateSitePage', {
            eventId,
            title,
            content,
            displayOrder,
            sitePageId,
            styles,
            scripts
        }    );
    }

    CreateTemplate(name: string, content: string, poolId: string = null, styles: string = null, scripts: string = null, color1: string = null, color2: string = null, color3: string = null, templateId: string = null): any {
        return this.restClient.post('SitePage/UseCase/CreateTemplate', {
            name,
            content,
            poolId,
            styles,
            scripts,
            color1,
            color2,
            color3,
            templateId
        }    );
    }

    DuplicateSitePage(sitePageId: string, newSitePageId: string = null, toEventId: string = null): any {
        return this.restClient.post('SitePage/UseCase/DuplicateSitePage', {
            sitePageId,
            newSitePageId,
            toEventId
        }    );
    }

    RemoveSitePage(sitePageId: string): any {
        return this.restClient.post('SitePage/UseCase/RemoveSitePage', {
            sitePageId
        }    );
    }

    RemoveTemplate(sitePageTemplateId: string): any {
        return this.restClient.post('SitePage/UseCase/RemoveTemplate', {
            sitePageTemplateId
        }    );
    }

    SetContentForSitePage(sitePageId: string, content: string, styles: string = null, scripts: string = null): any {
        return this.restClient.post('SitePage/UseCase/SetContentForSitePage', {
            sitePageId,
            content,
            styles,
            scripts
        }    );
    }

    SetDisplayOrderForSitePage(sitePageId: string, displayOrder: string): any {
        return this.restClient.post('SitePage/UseCase/SetDisplayOrderForSitePage', {
            sitePageId,
            displayOrder
        }    );
    }

    SetMetaInfoForSitePage(sitePageId: string, title: string = null, description: string = null, keywords: string = null, imageUrl: string = null, name: string = null): any {
        return this.restClient.post('SitePage/UseCase/SetMetaInfoForSitePage', {
            sitePageId,
            title,
            description,
            keywords,
            imageUrl,
            name
        }    );
    }

    SetTitleForSitePage(sitePageId: string, title: string): any {
        return this.restClient.post('SitePage/UseCase/SetTitleForSitePage', {
            sitePageId,
            title
        }    );
    }

    UpdateSitePage(sitePageId: string, eventId: string, title: string, content: string, displayOrder: number = null): any {
        return this.restClient.post('SitePage/UseCase/UpdateSitePage', {
            sitePageId,
            eventId,
            title,
            content,
            displayOrder
        }    );
    }

    UpdateTemplate(templateId: string, name: string = null, content: string = null, poolId: string = null, styles: string = null, scripts: string = null, color1: string = null, color2: string = null, color3: string = null): any {
        return this.restClient.post('SitePage/UseCase/UpdateTemplate', {
            templateId,
            name,
            content,
            poolId,
            styles,
            scripts,
            color1,
            color2,
            color3
        }    );
    }
}
