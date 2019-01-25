/**
 * This file was auto generated, please do not edit it directly.
**/

import { RestClientInterface } from '../../interfaces';

export class BugReport {
    constructor(private restClient: RestClientInterface) {}

    // GET: Queries
    GetBugReport(bugReportId: string, withData: any = null): any {
        return this.restClient.get('BugReport/UseCase/GetBugReport', {
            bugReportId,
            withData
        }    );
    }

    ListBugReports(page: number = null, itemsPerPage: number = null): any {
        return this.restClient.get('BugReport/UseCase/ListBugReports', {
            page,
            itemsPerPage
        }    );
    }

    // POST USE CASES: Commands
    CreateBugReport(userId: string, action: string, message: string, request: string, response: string, bugReportId: string = null): any {
        return this.restClient.post('BugReport/UseCase/CreateBugReport', {
            userId,
            action,
            message,
            request,
            response,
            bugReportId
        }    );
    }
}
