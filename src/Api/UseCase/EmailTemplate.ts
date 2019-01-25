/**
 * This file was auto generated, please do not edit it directly.
**/

import { RestClientInterface } from '../../interfaces';

export class EmailTemplate {
    constructor(private restClient: RestClientInterface) {}

    // GET: Queries
    GetEmailTemplateByType(emailTemplateType: string): any {
        return this.restClient.get('EmailTemplate/UseCase/GetEmailTemplateByType', {
            emailTemplateType
        }    );
    }

    // POST USE CASES: Commands
}
