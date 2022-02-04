/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class HealthPass {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  // Commands

  /**
   * @param string - firstName
   * @param string - lastName
   * @param string - email
   * @param string - score
   * @param string - finalScoringTime
   * @param string - healthPassShortCode
   * @param string - externalUserId
   * @return Promise|Observable|any
   */
  AddUserHealthPassRecordFromClear(
    firstName: string,
    lastName: string,
    email: string,
    score: string,
    finalScoringTime: string,
    healthPassShortCode: string,
    externalUserId: string,
  ): any {
    return this.restClient.post(
      'HealthPass/UseCase/AddUserHealthPassRecordFromClear',
      {
        firstName,
        lastName,
        email,
        score,
        finalScoringTime,
        healthPassShortCode,
        externalUserId,
      },
    );
  }

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
   * @param string - healthPassImportId
   * @return Promise|Observable|any
   */
  PostProcessHealthPassImport(healthPassImportId: string): any {
    return this.restClient.post(
      'HealthPass/UseCase/PostProcessHealthPassImport',
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

  /**
   * @param number - firstResult
   * @param number - maxResults
   * @return Promise|Observable|any
   */
  ProcessRecords(firstResult: number, maxResults: number): any {
    return this.restClient.post('HealthPass/UseCase/ProcessRecords', {
      firstResult,
      maxResults,
    });
  }
}
