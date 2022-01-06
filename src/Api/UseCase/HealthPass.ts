/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class HealthPass {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  // Commands

  /**
   * @param string - healthPassImportId
   * @return Promise|Observable|any
   */
  PostProcessAndImportHealthPass(healthPassImportId: string): any {
    return this.restClient.post(
      'HealthPass/UseCase/PostProcessAndImportHealthPass',
      {
        healthPassImportId,
      },
    );
  }

  /**
   * @param any - spreadsheet
   * @return Promise|Observable|any
   */
  PreProcessSpreadsheetForHealthPassImport(spreadsheet: any): any {
    return this.restClient.postMultipart(
      'HealthPass/UseCase/PreProcessSpreadsheetForHealthPassImport',
      {
        spreadsheet,
      },
    );
  }
}
