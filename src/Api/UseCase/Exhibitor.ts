/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class Exhibitor {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - exhibitorId
   * @return Promise|Observable|any
   */
  GetExhibitor(exhibitorId: string): any {
    return this.restClient.get('Exhibitor/UseCase/GetExhibitor', {
      exhibitorId,
    });
  }

  /**
   * @param string - eventId
   * @param string? - query
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-500
   * @param string? - sortBy
   * @param string? - sortDirection ascending|descending
   * @return Promise|Observable|any
   */
  ListExhibitorsForEvent(
    eventId: string,
    query: string = null,
    page: number = null,
    itemsPerPage: number = null,
    sortBy: string = null,
    sortDirection: string = null,
  ): any {
    return this.restClient.get('Exhibitor/UseCase/ListExhibitorsForEvent', {
      eventId,
      query,
      page,
      itemsPerPage,
      sortBy,
      sortDirection,
    });
  }

  /**
   * @param string - poolId
   * @param string - userId
   * @param string? - groupOwnerUserId
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-500
   * @param string? - sortBy
   * @param string? - sortDirection ascending|descending
   * @return Promise|Observable|any
   */
  ListExhibitorsForUser(
    poolId: string,
    userId: string,
    groupOwnerUserId: string = null,
    page: number = null,
    itemsPerPage: number = null,
    sortBy: string = null,
    sortDirection: string = null,
  ): any {
    return this.restClient.get('Exhibitor/UseCase/ListExhibitorsForUser', {
      poolId,
      userId,
      groupOwnerUserId,
      page,
      itemsPerPage,
      sortBy,
      sortDirection,
    });
  }

  // Commands

  /**
   * @param string - exhibitorId
   * @param any[] - userIds
   * @return Promise|Observable|any
   */
  AddUsersToExhibitor(exhibitorId: string, userIds: any[]): any {
    return this.restClient.post('Exhibitor/UseCase/AddUsersToExhibitor', {
      exhibitorId,
      userIds,
    });
  }

  /**
   * @param string - eventId
   * @param string - exhibitorName
   * @param string? - description
   * @param string? - logoUrl
   * @param string? - exhibitorId
   * @return Promise|Observable|any
   */
  CreateExhibitorForEvent(
    eventId: string,
    exhibitorName: string,
    description: string = null,
    logoUrl: string = null,
    exhibitorId: string = null,
  ): any {
    return this.restClient.post('Exhibitor/UseCase/CreateExhibitorForEvent', {
      eventId,
      exhibitorName,
      description,
      logoUrl,
      exhibitorId,
    });
  }

  /**
   * @param string - exhibitorId
   * @return Promise|Observable|any
   */
  DeleteExhibitor(exhibitorId: string): any {
    return this.restClient.post('Exhibitor/UseCase/DeleteExhibitor', {
      exhibitorId,
    });
  }

  /**
   * @param string - exhibitorId
   * @return Promise|Observable|any
   */
  RemoveExhibitor(exhibitorId: string): any {
    return this.restClient.post('Exhibitor/UseCase/RemoveExhibitor', {
      exhibitorId,
    });
  }

  /**
   * @param string - exhibitorId
   * @param any[] - userIds
   * @return Promise|Observable|any
   */
  RemoveUsersFromExhibitor(exhibitorId: string, userIds: any[]): any {
    return this.restClient.post('Exhibitor/UseCase/RemoveUsersFromExhibitor', {
      exhibitorId,
      userIds,
    });
  }

  /**
   * @param string - exhibitorId
   * @param string - exhibitorDescription
   * @return Promise|Observable|any
   */
  SetExhibitorDescription(
    exhibitorId: string,
    exhibitorDescription: string,
  ): any {
    return this.restClient.post('Exhibitor/UseCase/SetExhibitorDescription', {
      exhibitorId,
      exhibitorDescription,
    });
  }

  /**
   * @param string - exhibitorId
   * @param string - exhibitorLogoURL
   * @return Promise|Observable|any
   */
  SetExhibitorLogoUrl(exhibitorId: string, exhibitorLogoURL: string): any {
    return this.restClient.post('Exhibitor/UseCase/SetExhibitorLogoUrl', {
      exhibitorId,
      exhibitorLogoURL,
    });
  }

  /**
   * @param string - exhibitorId
   * @param string - exhibitorName
   * @return Promise|Observable|any
   */
  SetExhibitorName(exhibitorId: string, exhibitorName: string): any {
    return this.restClient.post('Exhibitor/UseCase/SetExhibitorName', {
      exhibitorId,
      exhibitorName,
    });
  }
}
