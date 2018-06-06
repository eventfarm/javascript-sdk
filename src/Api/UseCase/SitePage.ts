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

    // POST USE CASES: Commands
    CreateSitePage(eventId: string, title: string, content: string, displayOrder: number = null, sitePageId: string = null): any {
        return this.restClient.post('SitePage/UseCase/CreateSitePage', {
            eventId,
            title,
            content,
            displayOrder,
            sitePageId
        }    );
    }

    RemoveSitePage(sitePageId: string): any {
        return this.restClient.post('SitePage/UseCase/RemoveSitePage', {
            sitePageId
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
}
