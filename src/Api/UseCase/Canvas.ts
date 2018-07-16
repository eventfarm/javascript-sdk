import { RestClientInterface } from '../../RestClient/RestClientInterface';

export class Canvas {
    constructor(private restClient: RestClientInterface) {}

    // GET: Queries

    // POST USE CASES: Commands
    EnableCanvasForEvent(eventId: string): any {
        return this.restClient.post('Canvas/UseCase/EnableCanvasForEvent', {
            eventId
        }    );
    }
}
