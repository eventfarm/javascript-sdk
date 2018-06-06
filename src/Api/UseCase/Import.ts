import { RestClientInterface } from '../../RestClient/RestClientInterface';

export class Import {
    constructor(private restClient: RestClientInterface) {}

    // GET: Queries
    GetUserImport(userImportId: string, withData: any = null): any {
        return this.restClient.get('Import/UseCase/GetUserImport', {
            userImportId,
            withData
        }    );
    }

    GetUserImportFile(userImportId: string, fileId: string): any {
        return this.restClient.get('Import/UseCase/GetUserImportFile', {
            userImportId,
            fileId
        },
        null,
        {
            responseType: 'text'
        }
        );
    }

    // POST USE CASES: Commands
    PostProcessAndImportInvitations(userImportId: string, eventId: string, stackId: string = null, guestsPerInvitation: number = null, invitationCreationType: string = null, groupName: string = null, groupId: string = null, redirectUrl: string = null): any {
        return this.restClient.post('Import/UseCase/PostProcessAndImportInvitations', {
            userImportId,
            eventId,
            stackId,
            guestsPerInvitation,
            invitationCreationType,
            groupName,
            groupId,
            redirectUrl
        }    );
    }

    PostProcessAndImportUsers(userImportId: string, groupName: string = null, groupId: string = null, redirectUrl: string = null): any {
        return this.restClient.post('Import/UseCase/PostProcessAndImportUsers', {
            userImportId,
            groupName,
            groupId,
            redirectUrl
        }    );
    }

    PreProcessSpreadsheetForUserImport(userId: string, poolId: string, spreadsheet: any): any {
        return this.restClient.postMultipart('Import/UseCase/PreProcessSpreadsheetForUserImport', {
            userId,
            poolId,
            spreadsheet
        }    );
    }
}
