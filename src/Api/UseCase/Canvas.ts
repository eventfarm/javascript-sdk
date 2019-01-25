/**
 * This file was auto generated, please do not edit it directly.
**/

import { RestClientInterface } from '../../interfaces';

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
