/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class Track {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - trackId
   * @return Promise|Observable|any
   */
  GetTrack(trackId: string): any {
    return this.restClient.get('Track/UseCase/GetTrack', {
      trackId,
    });
  }

  /**
   * @param string - eventId
   * @param string[]? - withData SessionTracks|TicketTypeTracks
   * @param string? - sortBy name
   * @param string? - sortDirection ascending|descending
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-100
   * @param string? - query
   * @return Promise|Observable|any
   */
  ListTracksForEvent(
    eventId: string,
    withData: string[] = null,
    sortBy: string = null,
    sortDirection: string = null,
    page: number = null,
    itemsPerPage: number = null,
    query: string = null,
  ): any {
    return this.restClient.get('Track/UseCase/ListTracksForEvent', {
      eventId,
      withData,
      sortBy,
      sortDirection,
      page,
      itemsPerPage,
      query,
    });
  }

  // Commands

  /**
   * @param string - ticketTypeId
   * @param string - trackId
   * @return Promise|Observable|any
   */
  AddTicketTypeToTrack(ticketTypeId: string, trackId: string): any {
    return this.restClient.post('Track/UseCase/AddTicketTypeToTrack', {
      ticketTypeId,
      trackId,
    });
  }

  /**
   * @param string - eventId
   * @param string - name
   * @param string? - description
   * @param string? - trackId
   * @return Promise|Observable|any
   */
  CreateTrack(
    eventId: string,
    name: string,
    description: string = null,
    trackId: string = null,
  ): any {
    return this.restClient.post('Track/UseCase/CreateTrack', {
      eventId,
      name,
      description,
      trackId,
    });
  }

  /**
   * @param string - trackId
   * @return Promise|Observable|any
   */
  DeleteTrack(trackId: string): any {
    return this.restClient.post('Track/UseCase/DeleteTrack', {
      trackId,
    });
  }

  /**
   * @param string - ticketTypeId
   * @param string - trackId
   * @return Promise|Observable|any
   */
  RemoveTicketTypeFromTrack(ticketTypeId: string, trackId: string): any {
    return this.restClient.post('Track/UseCase/RemoveTicketTypeFromTrack', {
      ticketTypeId,
      trackId,
    });
  }

  /**
   * @param string - trackId
   * @return Promise|Observable|any
   */
  RemoveTrack(trackId: string): any {
    return this.restClient.post('Track/UseCase/RemoveTrack', {
      trackId,
    });
  }

  /**
   * @param string - trackId
   * @param any[] - eventIds
   * @return Promise|Observable|any
   */
  SetSessionsForTrack(trackId: string, eventIds: any[]): any {
    return this.restClient.post('Track/UseCase/SetSessionsForTrack', {
      trackId,
      eventIds,
    });
  }

  /**
   * @param string - trackId
   * @param any[] - ticketTypeIds
   * @return Promise|Observable|any
   */
  SetTicketTypesForTrack(trackId: string, ticketTypeIds: any[]): any {
    return this.restClient.post('Track/UseCase/SetTicketTypesForTrack', {
      trackId,
      ticketTypeIds,
    });
  }

  /**
   * @param string - trackId
   * @param string - trackDescription
   * @return Promise|Observable|any
   */
  SetTrackDescription(trackId: string, trackDescription: string): any {
    return this.restClient.post('Track/UseCase/SetTrackDescription', {
      trackId,
      trackDescription,
    });
  }

  /**
   * @param string - trackId
   * @param string - trackName
   * @return Promise|Observable|any
   */
  SetTrackName(trackId: string, trackName: string): any {
    return this.restClient.post('Track/UseCase/SetTrackName', {
      trackId,
      trackName,
    });
  }

  /**
   * @param string - trackId
   * @param string? - name
   * @param string? - description
   * @return Promise|Observable|any
   */
  UpdateTrack(
    trackId: string,
    name: string = null,
    description: string = null,
  ): any {
    return this.restClient.post('Track/UseCase/UpdateTrack', {
      trackId,
      name,
      description,
    });
  }
}
