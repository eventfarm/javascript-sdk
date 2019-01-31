/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class Canvas {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  // Commands

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  EnableCanvasForEvent(eventId: string): any {
    return this.restClient.post('Canvas/UseCase/EnableCanvasForEvent', {
      eventId,
    });
  }
}
