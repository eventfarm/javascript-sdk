import { RestClientInterface } from '../../RestClient/RestClientInterface';

export class Report {
    constructor(private restClient: RestClientInterface) {}

    // GET: Queries
    ReportTotalEventsRunningBetweenDates(startTime: number, endTime: number): any {
        return this.restClient.get('Report/UseCase/ReportTotalEventsRunningBetweenDates', {
            startTime,
            endTime
        }    );
    }

    // POST USE CASES: Commands
    CreateTicketBlockSummaryReport(eventId: string, ownerUserId: string, ticketBlockId: string): any {
        return this.restClient.post('Report/UseCase/CreateTicketBlockSummaryReport', {
            eventId,
            ownerUserId,
            ticketBlockId
        }    );
    }
}
