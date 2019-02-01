/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class BugReport {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - bugReportId
   * @param string[]? - withData User
   * @return Promise|Observable|any
   */
  GetBugReport(bugReportId: string, withData: string[] = null): any {
    return this.restClient.get('BugReport/UseCase/GetBugReport', {
      bugReportId,
      withData,
    });
  }

  /**
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-500
   * @return Promise|Observable|any
   */
  ListBugReports(page: number = null, itemsPerPage: number = null): any {
    return this.restClient.get('BugReport/UseCase/ListBugReports', {
      page,
      itemsPerPage,
    });
  }

  // Commands

  /**
   * @param string - userId
   * @param string - action
   * @param string - message
   * @param string - request
   * @param string - response
   * @param string? - bugReportId
   * @return Promise|Observable|any
   */
  CreateBugReport(
    userId: string,
    action: string,
    message: string,
    request: string,
    response: string,
    bugReportId: string = null,
  ): any {
    return this.restClient.post('BugReport/UseCase/CreateBugReport', {
      userId,
      action,
      message,
      request,
      response,
      bugReportId,
    });
  }
}
