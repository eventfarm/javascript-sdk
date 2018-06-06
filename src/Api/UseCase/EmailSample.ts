import { RestClientInterface } from '../../RestClient/RestClientInterface';

export class EmailSample {
    constructor(private restClient: RestClientInterface) {}

    // GET: Queries
    GetEmailThumbnailUrl(emailDesignId: string): any {
        return this.restClient.get('EmailSample/UseCase/GetEmailThumbnailUrl', {
            emailDesignId
        }    );
    }

    GetLatestEmailSampleForDesign(emailDesignId: string, withData: any = null): any {
        return this.restClient.get('EmailSample/UseCase/GetLatestEmailSampleForDesign', {
            emailDesignId,
            withData
        }    );
    }

    // POST USE CASES: Commands
    CreateEmailPreview(previewUrl: string, previewClient: string, operatingSystem: string, displayName: string, thumbnailUrl: string, emailSampleId: string, emailPreviewId: string = null): any {
        return this.restClient.post('EmailSample/UseCase/CreateEmailPreview', {
            previewUrl,
            previewClient,
            operatingSystem,
            displayName,
            thumbnailUrl,
            emailSampleId,
            emailPreviewId
        }    );
    }

    CreateEmailSample(htmlContent: string, emailDesignId: string, overrideMinimumInterval: boolean, emailSampleId: string = null): any {
        return this.restClient.post('EmailSample/UseCase/CreateEmailSample', {
            htmlContent,
            emailDesignId,
            overrideMinimumInterval,
            emailSampleId
        }    );
    }

    CreateEmailSpamResult(spamClient: string, testType: string, testDetails: string, isSpam: number, emailSampleId: string, emailSpamResultId: string = null): any {
        return this.restClient.post('EmailSample/UseCase/CreateEmailSpamResult', {
            spamClient,
            testType,
            testDetails,
            isSpam,
            emailSampleId,
            emailSpamResultId
        }    );
    }
}
