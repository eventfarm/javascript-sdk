/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class Import {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - userImportId
   * @param array? - withData GoodRecords|DuplicateRecords|ErrorRecords|ImportFailureRecords
   * @return Promise|Observable|any
   */
  GetUserImport(userImportId: string, withData: any = null): any {
    return this.restClient.get('Import/UseCase/GetUserImport', {
      userImportId,
      withData,
    });
  }

  /**
   * @param string - userImportId
   * @param string - fileId
   * @return Promise|Observable|any
   */
  GetUserImportFile(userImportId: string, fileId: string): any {
    return this.restClient.get(
      'Import/UseCase/GetUserImportFile',
      {
        userImportId,
        fileId,
      },
      null,
      {
        responseType: 'text',
      },
    );
  }

  // Commands

  /**
   * @param string - userImportId
   * @param string - eventId
   * @param string? - stackId
   * @param int? - guestsPerInvitation >= 1
   * @param string? - invitationCreationType unconfirmed-no-email|confirmed-no-email|send-email
   * @param string? - groupName
   * @param string? - groupId
   * @param string? - redirectUrl
   * @return Promise|Observable|any
   */
  PostProcessAndImportInvitations(
    userImportId: string,
    eventId: string,
    stackId: string = null,
    guestsPerInvitation: number = null,
    invitationCreationType: string = null,
    groupName: string = null,
    groupId: string = null,
    redirectUrl: string = null,
  ): any {
    return this.restClient.post(
      'Import/UseCase/PostProcessAndImportInvitations',
      {
        userImportId,
        eventId,
        stackId,
        guestsPerInvitation,
        invitationCreationType,
        groupName,
        groupId,
        redirectUrl,
      },
    );
  }

  /**
   * @param string - userImportId
   * @param string? - groupName
   * @param string? - groupId
   * @param string? - redirectUrl
   * @return Promise|Observable|any
   */
  PostProcessAndImportUsers(
    userImportId: string,
    groupName: string = null,
    groupId: string = null,
    redirectUrl: string = null,
  ): any {
    return this.restClient.post('Import/UseCase/PostProcessAndImportUsers', {
      userImportId,
      groupName,
      groupId,
      redirectUrl,
    });
  }

  /**
   * @param string - userId
   * @param string - poolId
   * @param string - spreadsheet
   * @return Promise|Observable|any
   */
  PreProcessSpreadsheetForUserImport(
    userId: string,
    poolId: string,
    spreadsheet: any,
  ): any {
    return this.restClient.postMultipart(
      'Import/UseCase/PreProcessSpreadsheetForUserImport',
      {
        userId,
        poolId,
        spreadsheet,
      },
    );
  }
}
