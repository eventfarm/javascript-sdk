/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class EmailSample {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - emailDesignId
   * @return Promise|Observable|any
   */
  GetEmailThumbnailUrl(emailDesignId: string): any {
    return this.restClient.get('EmailSample/UseCase/GetEmailThumbnailUrl', {
      emailDesignId,
    });
  }

  /**
   * @param string - emailDesignId
   * @param array? - withData EmailPreview|EmailSpamResult
   * @return Promise|Observable|any
   */
  GetLatestEmailSampleForDesign(
    emailDesignId: string,
    withData: any = null,
  ): any {
    return this.restClient.get(
      'EmailSample/UseCase/GetLatestEmailSampleForDesign',
      {
        emailDesignId,
        withData,
      },
    );
  }

  // Commands

  /**
   * @param string - previewUrl
   * @param string - previewClient
   * @param string - operatingSystem
   * @param string - displayName
   * @param string - thumbnailUrl
   * @param string - emailSampleId
   * @param string? - emailPreviewId
   * @return Promise|Observable|any
   */
  CreateEmailPreview(
    previewUrl: string,
    previewClient: string,
    operatingSystem: string,
    displayName: string,
    thumbnailUrl: string,
    emailSampleId: string,
    emailPreviewId: string = null,
  ): any {
    return this.restClient.post('EmailSample/UseCase/CreateEmailPreview', {
      previewUrl,
      previewClient,
      operatingSystem,
      displayName,
      thumbnailUrl,
      emailSampleId,
      emailPreviewId,
    });
  }

  /**
   * @param string - htmlContent
   * @param string - emailDesignId
   * @param bool - overrideMinimumInterval true|false
   * @param string? - emailSampleId
   * @return Promise|Observable|any
   */
  CreateEmailSample(
    htmlContent: string,
    emailDesignId: string,
    overrideMinimumInterval: boolean,
    emailSampleId: string = null,
  ): any {
    return this.restClient.post('EmailSample/UseCase/CreateEmailSample', {
      htmlContent,
      emailDesignId,
      overrideMinimumInterval,
      emailSampleId,
    });
  }

  /**
   * @param string - spamClient
   * @param string - testType
   * @param string - testDetails
   * @param int - isSpam
   * @param string - emailSampleId
   * @param string? - emailSpamResultId
   * @return Promise|Observable|any
   */
  CreateEmailSpamResult(
    spamClient: string,
    testType: string,
    testDetails: string,
    isSpam: number,
    emailSampleId: string,
    emailSpamResultId: string = null,
  ): any {
    return this.restClient.post('EmailSample/UseCase/CreateEmailSpamResult', {
      spamClient,
      testType,
      testDetails,
      isSpam,
      emailSampleId,
      emailSpamResultId,
    });
  }
}
