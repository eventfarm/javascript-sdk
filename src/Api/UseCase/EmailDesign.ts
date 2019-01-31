/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class EmailDesign {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - emailDesignId
   * @return Promise|Observable|any
   */
  GetEmailDesign(emailDesignId: string): any {
    return this.restClient.get('EmailDesign/UseCase/GetEmailDesign', {
      emailDesignId,
    });
  }

  /**
   * @param string - emailDesignImageId
   * @return Promise|Observable|any
   */
  GetEmailDesignImage(emailDesignImageId: string): any {
    return this.restClient.get('EmailDesign/UseCase/GetEmailDesignImage', {
      emailDesignImageId,
    });
  }

  /**
   * @param string - eventId
   * @param int? - page
   * @param int? - itemsPerPage
   * @return Promise|Observable|any
   */
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

  // Commands

  /**
   * @param string - name
   * @param string - layout
   * @param string - fromName
   * @param string - subject
   * @param string - content
   * @param string - backgroundColor
   * @param string - emailDesignTypeId
   * @param string - eventId
   * @param string? - fromEmail
   * @param string? - replyEmail
   * @param array? - ccEmail
   * @param array? - bccEmail
   * @param string? - domainMaskId
   * @param string? - domainMaskEmail
   * @param string? - emailDesignId
   * @return Promise|Observable|any
   */
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

  /**
   * @param string - name
   * @param string - layout blank|alt-email-layout
   * @param string - fromName
   * @param string - subject
   * @param string - backgroundColor
   * @param string - emailDesignTypeId
   * @param string - eventId
   * @param string - emailTemplateType simple-template|simple-header|simple-template-border|default-invite|full-width-header
   * @param string? - fromEmail
   * @param string? - replyEmail
   * @param array? - ccEmails
   * @param array? - bccEmails
   * @param string? - domainMaskId
   * @param string? - domainMaskEmail
   * @param string? - emailDesignId
   * @return Promise|Observable|any
   */
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

  /**
   * @param string - eventId
   * @param string - image image/jpeg|image/png
   * @param string? - emailDesignImageId
   * @return Promise|Observable|any
   */
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

  /**
   * @param string - originalEmailDesignId
   * @param string? - duplicateEventId
   * @param string? - duplicateEmailDesignId
   * @return Promise|Observable|any
   */
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

  /**
   * @param string - emailDesignId
   * @return Promise|Observable|any
   */
  RemoveEmailDesign(emailDesignId: string): any {
    return this.restClient.post('EmailDesign/UseCase/RemoveEmailDesign', {
      emailDesignId,
    });
  }

  /**
   * @param string - emailDesignId
   * @param string - name
   * @param string - layout
   * @param string - fromName
   * @param string - subject
   * @param string - content
   * @param string - backgroundColor
   * @param string - emailDesignTypeId
   * @param string - eventId
   * @param string? - fromEmail
   * @param string? - replyEmail
   * @param array? - ccEmail
   * @param array? - bccEmail
   * @param string? - domainMaskId
   * @param string? - domainMaskEmail
   * @return Promise|Observable|any
   */
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
