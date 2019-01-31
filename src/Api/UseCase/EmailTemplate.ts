/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class EmailTemplate {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - emailTemplateType simple-template|simple-header|simple-template-border|default-invite|full-width-header
   * @return Promise|Observable|any
   */
  GetEmailTemplateByType(emailTemplateType: string): any {
    return this.restClient.get('EmailTemplate/UseCase/GetEmailTemplateByType', {
      emailTemplateType,
    });
  }

  // Commands
}
