/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../interfaces';

export class EmailDesign {
  constructor(private restClient: RestClientInterface) {}

  // GET: Queries
  GetEmailDesign(emailDesignId: string): any {
    return this.restClient.get('EmailDesign/UseCase/GetEmailDesign', {
      emailDesignId,
    });
  }

  GetEmailDesignImage(emailDesignImageId: string): any {
    return this.restClient.get('EmailDesign/UseCase/GetEmailDesignImage', {
      emailDesignImageId,
    });
  }

  ListEmailDesignsByEvent(
    eventId: string,
    page: number = null,
    itemsPerPage: number = null,
  ): any {
    return this.restClient.get('EmailDesign/UseCase/ListEmailDesignsByEvent', {
      eventId,
      page,
      itemsPerPage,
    });
  }

  // POST USE CASES: Commands
  CreateEmailDesign(
    name: string,
    layout: string,
    fromName: string,
    subject: string,
    content: string,
    backgroundColor: string,
    emailDesignTypeId: string,
    eventId: string,
    fromEmail: string = null,
    replyEmail: string = null,
    ccEmail: any = null,
    bccEmail: any = null,
    domainMaskId: string = null,
    domainMaskEmail: string = null,
    emailDesignId: string = null,
  ): any {
    return this.restClient.post('EmailDesign/UseCase/CreateEmailDesign', {
      name,
      layout,
      fromName,
      subject,
      content,
      backgroundColor,
      emailDesignTypeId,
      eventId,
      fromEmail,
      replyEmail,
      ccEmail,
      bccEmail,
      domainMaskId,
      domainMaskEmail,
      emailDesignId,
    });
  }

  CreateEmailDesignFromTemplate(
    name: string,
    layout: string,
    fromName: string,
    subject: string,
    backgroundColor: string,
    emailDesignTypeId: string,
    eventId: string,
    emailTemplateType: string,
    fromEmail: string = null,
    replyEmail: string = null,
    ccEmails: any = null,
    bccEmails: any = null,
    domainMaskId: string = null,
    domainMaskEmail: string = null,
    emailDesignId: string = null,
  ): any {
    return this.restClient.post(
      'EmailDesign/UseCase/CreateEmailDesignFromTemplate',
      {
        name,
        layout,
        fromName,
        subject,
        backgroundColor,
        emailDesignTypeId,
        eventId,
        emailTemplateType,
        fromEmail,
        replyEmail,
        ccEmails,
        bccEmails,
        domainMaskId,
        domainMaskEmail,
        emailDesignId,
      },
    );
  }

  CreateEmailDesignImage(
    eventId: string,
    image: any,
    emailDesignImageId: string = null,
  ): any {
    return this.restClient.postMultipart(
      'EmailDesign/UseCase/CreateEmailDesignImage',
      {
        eventId,
        image,
        emailDesignImageId,
      },
    );
  }

  DuplicateEmailDesign(
    originalEmailDesignId: string,
    duplicateEventId: string = null,
    duplicateEmailDesignId: string = null,
  ): any {
    return this.restClient.post('EmailDesign/UseCase/DuplicateEmailDesign', {
      originalEmailDesignId,
      duplicateEventId,
      duplicateEmailDesignId,
    });
  }

  RemoveEmailDesign(emailDesignId: string): any {
    return this.restClient.post('EmailDesign/UseCase/RemoveEmailDesign', {
      emailDesignId,
    });
  }

  UpdateEmailDesign(
    emailDesignId: string,
    name: string,
    layout: string,
    fromName: string,
    subject: string,
    content: string,
    backgroundColor: string,
    emailDesignTypeId: string,
    eventId: string,
    fromEmail: string = null,
    replyEmail: string = null,
    ccEmail: any = null,
    bccEmail: any = null,
    domainMaskId: string = null,
    domainMaskEmail: string = null,
  ): any {
    return this.restClient.post('EmailDesign/UseCase/UpdateEmailDesign', {
      emailDesignId,
      name,
      layout,
      fromName,
      subject,
      content,
      backgroundColor,
      emailDesignTypeId,
      eventId,
      fromEmail,
      replyEmail,
      ccEmail,
      bccEmail,
      domainMaskId,
      domainMaskEmail,
    });
  }
}
