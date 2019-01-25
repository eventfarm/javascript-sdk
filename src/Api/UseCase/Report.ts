/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class Report {
  constructor(private restClient: RestClientInterface) {}

  // GET: Queries
  ReportTotalEventsRunningBetweenDates(
    startTime: number,
    endTime: number,
  ): any {
    return this.restClient.get(
      'Report/UseCase/ReportTotalEventsRunningBetweenDates',
      {
        startTime,
        endTime,
      },
    );
  }

  // POST USE CASES: Commands
  CreateAdminEventReport(
    eventId: string,
    ownerUserId: string,
    name: string = null,
  ): any {
    return this.restClient.post('Report/UseCase/CreateAdminEventReport', {
      eventId,
      ownerUserId,
      name,
    });
  }

  CreateConfirmedGuestReport(
    eventId: string,
    ownerUserId: string,
    name: string = null,
  ): any {
    return this.restClient.post('Report/UseCase/CreateConfirmedGuestReport', {
      eventId,
      ownerUserId,
      name,
    });
  }

  CreateEmailDeliverabilityReport(
    eventId: string,
    ownerUserId: string,
    name: string,
  ): any {
    return this.restClient.post(
      'Report/UseCase/CreateEmailDeliverabilityReport',
      {
        eventId,
        ownerUserId,
        name,
      },
    );
  }

  CreateGraphicalCheckinReport(
    eventId: string,
    ownerUserId: string,
    name: string,
  ): any {
    return this.restClient.post('Report/UseCase/CreateGraphicalCheckinReport', {
      eventId,
      ownerUserId,
      name,
    });
  }

  CreateGuestSummaryReport(
    eventId: string,
    ownerUserId: string,
    name: string,
  ): any {
    return this.restClient.post('Report/UseCase/CreateGuestSummaryReport', {
      eventId,
      ownerUserId,
      name,
    });
  }

  CreatePurchasedReport(
    eventId: string,
    ownerUserId: string,
    name: string,
  ): any {
    return this.restClient.post('Report/UseCase/CreatePurchasedReport', {
      eventId,
      ownerUserId,
      name,
    });
  }

  CreateSentEmailReport(
    eventId: string,
    ownerUserId: string,
    name: string,
  ): any {
    return this.restClient.post('Report/UseCase/CreateSentEmailReport', {
      eventId,
      ownerUserId,
      name,
    });
  }

  CreateTicketBlockSummaryReport(
    eventId: string,
    ownerUserId: string,
    ticketBlockId: string,
    name: string,
  ): any {
    return this.restClient.post(
      'Report/UseCase/CreateTicketBlockSummaryReport',
      {
        eventId,
        ownerUserId,
        ticketBlockId,
        name,
      },
    );
  }

  CreateTicketBlockUserReport(
    eventId: string,
    ownerUserId: string,
    name: string,
  ): any {
    return this.restClient.post('Report/UseCase/CreateTicketBlockUserReport', {
      eventId,
      ownerUserId,
      name,
    });
  }

  CreateTransferReport(
    eventId: string,
    ownerUserId: string,
    name: string,
  ): any {
    return this.restClient.post('Report/UseCase/CreateTransferReport', {
      eventId,
      ownerUserId,
      name,
    });
  }

  CreateUnconfirmedGuestReport(
    eventId: string,
    ownerUserId: string,
    name: string,
  ): any {
    return this.restClient.post('Report/UseCase/CreateUnconfirmedGuestReport', {
      eventId,
      ownerUserId,
      name,
    });
  }

  CreateWaitListReport(
    eventId: string,
    ownerUserId: string,
    name: string,
  ): any {
    return this.restClient.post('Report/UseCase/CreateWaitListReport', {
      eventId,
      ownerUserId,
      name,
    });
  }

  CreateWaiverReport(eventId: string, ownerUserId: string, name: string): any {
    return this.restClient.post('Report/UseCase/CreateWaiverReport', {
      eventId,
      ownerUserId,
      name,
    });
  }
}
