import { RestClientInterface } from '../../RestClient/RestClientInterface';

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
