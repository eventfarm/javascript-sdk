/**
 * This file was auto generated, please do not edit it directly.
**/

import { RestClientInterface } from '../../interfaces';

export class AppVersion {
    constructor(private restClient: RestClientInterface) {}

    // GET: Queries
    GetAppVersion(appVersionId: string): any {
        return this.restClient.get('AppVersion/UseCase/GetAppVersion', {
            appVersionId
        }    );
    }

    GetAppVersionByType(appVersionType: string): any {
        return this.restClient.get('AppVersion/UseCase/GetAppVersionByType', {
            appVersionType
        }    );
    }

    GetSystemStatus(): any {
        return this.restClient.get('AppVersion/UseCase/GetSystemStatus', {

        }    );
    }

    ListAppVersions(): any {
        return this.restClient.get('AppVersion/UseCase/ListAppVersions', {

        }    );
    }

    // POST USE CASES: Commands
    SetAppVersionNumberByType(appVersionType: string, softVersion: string, hardVersion: string): any {
        return this.restClient.post('AppVersion/UseCase/SetAppVersionNumberByType', {
            appVersionType,
            softVersion,
            hardVersion
        }    );
    }
}
