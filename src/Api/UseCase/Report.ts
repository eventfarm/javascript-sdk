/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class Report {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - eventId
   * @param int? - page >= 1
   * @param int? - itemsPerPage 1-100
   * @param string? - sortBy createdAt
   * @param string? - sortDirection ascending|descending
   * @return Promise|Observable|any
   */
  ListReportsForEvent(
    eventId: string,
    page: number = null,
    itemsPerPage: number = null,
    sortBy: string = null,
    sortDirection: string = null,
  ): any {
    return this.restClient.get('Report/UseCase/ListReportsForEvent', {
      eventId,
      page,
      itemsPerPage,
      sortBy,
      sortDirection,
    });
  }

  /**
   * @param int - startTime
   * @param int - endTime
   * @return Promise|Observable|any
   */
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

  // Commands

  /**
   * @param string - eventId
   * @param string - ownerUserId
   * @param string? - name
   * @param string? - reportId
   * @return Promise|Observable|any
   */
  CreateActivityLogReport(
    eventId: string,
    ownerUserId: string,
    name: string = null,
    reportId: string = null,
  ): any {
    return this.restClient.post('Report/UseCase/CreateActivityLogReport', {
      eventId,
      ownerUserId,
      name,
      reportId,
    });
  }

  /**
   * @param string - eventId
   * @param string - ownerUserId
   * @param string? - name
   * @param string? - reportId
   * @return Promise|Observable|any
   */
  CreateAdminEventReport(
    eventId: string,
    ownerUserId: string,
    name: string = null,
    reportId: string = null,
  ): any {
    return this.restClient.post('Report/UseCase/CreateAdminEventReport', {
      eventId,
      ownerUserId,
      name,
      reportId,
    });
  }

  /**
   * @param string - eventId
   * @param string - ownerUserId
   * @param string? - name
   * @param string? - reportId
   * @return Promise|Observable|any
   */
  CreateConfirmedGuestReport(
    eventId: string,
    ownerUserId: string,
    name: string = null,
    reportId: string = null,
  ): any {
    return this.restClient.post('Report/UseCase/CreateConfirmedGuestReport', {
      eventId,
      ownerUserId,
      name,
      reportId,
    });
  }

  /**
   * @param string - eventId
   * @param string - ownerUserId
   * @param string? - name
   * @param string? - reportId
   * @return Promise|Observable|any
   */
  CreateEmailDeliverabilityReport(
    eventId: string,
    ownerUserId: string,
    name: string = null,
    reportId: string = null,
  ): any {
    return this.restClient.post(
      'Report/UseCase/CreateEmailDeliverabilityReport',
      {
        eventId,
        ownerUserId,
        name,
        reportId,
      },
    );
  }

  /**
   * @param string - eventId
   * @param string - ownerUserId
   * @param string? - name
   * @param string? - reportId
   * @return Promise|Observable|any
   */
  CreateGraphicalCheckinReport(
    eventId: string,
    ownerUserId: string,
    name: string = null,
    reportId: string = null,
  ): any {
    return this.restClient.post('Report/UseCase/CreateGraphicalCheckinReport', {
      eventId,
      ownerUserId,
      name,
      reportId,
    });
  }

  /**
   * @param string - eventId
   * @param string - ownerUserId
   * @param string? - name
   * @param string? - reportId
   * @return Promise|Observable|any
   */
  CreateGuestSummaryReport(
    eventId: string,
    ownerUserId: string,
    name: string = null,
    reportId: string = null,
  ): any {
    return this.restClient.post('Report/UseCase/CreateGuestSummaryReport', {
      eventId,
      ownerUserId,
      name,
      reportId,
    });
  }

  /**
   * @param string - eventId
   * @param string - ownerUserId
   * @param string? - name
   * @param string? - reportId
   * @return Promise|Observable|any
   */
  CreatePurchasedReport(
    eventId: string,
    ownerUserId: string,
    name: string = null,
    reportId: string = null,
  ): any {
    return this.restClient.post('Report/UseCase/CreatePurchasedReport', {
      eventId,
      ownerUserId,
      name,
      reportId,
    });
  }

  /**
   * @param string - eventId
   * @param string - ownerUserId
   * @param string? - name
   * @param string? - reportId
   * @return Promise|Observable|any
   */
  CreateSentEmailReport(
    eventId: string,
    ownerUserId: string,
    name: string = null,
    reportId: string = null,
  ): any {
    return this.restClient.post('Report/UseCase/CreateSentEmailReport', {
      eventId,
      ownerUserId,
      name,
      reportId,
    });
  }

  /**
   * @param string - eventId
   * @param string - ownerUserId
   * @param string - ticketBlockId
   * @param string? - name
   * @param string? - reportId
   * @return Promise|Observable|any
   */
  CreateTicketBlockSummaryReport(
    eventId: string,
    ownerUserId: string,
    ticketBlockId: string,
    name: string = null,
    reportId: string = null,
  ): any {
    return this.restClient.post(
      'Report/UseCase/CreateTicketBlockSummaryReport',
      {
        eventId,
        ownerUserId,
        ticketBlockId,
        name,
        reportId,
      },
    );
  }

  /**
   * @param string - eventId
   * @param string - ownerUserId
   * @param string? - name
   * @param string? - reportId
   * @return Promise|Observable|any
   */
  CreateTicketBlockUserReport(
    eventId: string,
    ownerUserId: string,
    name: string = null,
    reportId: string = null,
  ): any {
    return this.restClient.post('Report/UseCase/CreateTicketBlockUserReport', {
      eventId,
      ownerUserId,
      name,
      reportId,
    });
  }

  /**
   * @param string - eventId
   * @param string - ownerUserId
   * @param string? - name
   * @param string? - reportId
   * @return Promise|Observable|any
   */
  CreateTransferReport(
    eventId: string,
    ownerUserId: string,
    name: string = null,
    reportId: string = null,
  ): any {
    return this.restClient.post('Report/UseCase/CreateTransferReport', {
      eventId,
      ownerUserId,
      name,
      reportId,
    });
  }

  /**
   * @param string - eventId
   * @param string - ownerUserId
   * @param string? - name
   * @param string? - reportId
   * @return Promise|Observable|any
   */
  CreateUnconfirmedGuestReport(
    eventId: string,
    ownerUserId: string,
    name: string = null,
    reportId: string = null,
  ): any {
    return this.restClient.post('Report/UseCase/CreateUnconfirmedGuestReport', {
      eventId,
      ownerUserId,
      name,
      reportId,
    });
  }

  /**
   * @param string - eventId
   * @param string - ownerUserId
   * @param string? - name
   * @param string? - reportId
   * @return Promise|Observable|any
   */
  CreateWaitListReport(
    eventId: string,
    ownerUserId: string,
    name: string = null,
    reportId: string = null,
  ): any {
    return this.restClient.post('Report/UseCase/CreateWaitListReport', {
      eventId,
      ownerUserId,
      name,
      reportId,
    });
  }

  /**
   * @param string - eventId
   * @param string - ownerUserId
   * @param string? - name
   * @param string? - reportId
   * @return Promise|Observable|any
   */
  CreateWaiverReport(
    eventId: string,
    ownerUserId: string,
    name: string = null,
    reportId: string = null,
  ): any {
    return this.restClient.post('Report/UseCase/CreateWaiverReport', {
      eventId,
      ownerUserId,
      name,
      reportId,
    });
  }
}
