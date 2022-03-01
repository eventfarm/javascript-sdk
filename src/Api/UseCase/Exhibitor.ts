/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class Exhibitor {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - exhibitorId
   * @param string[]? - withData
   * @return Promise|Observable|any
   */
  GetExhibitor(exhibitorId: string, withData: string[] = null): any {
    return this.restClient.get('Exhibitor/UseCase/GetExhibitor', {
      exhibitorId,
      withData,
    });
  }

  /**
   * @param string - eventId
   * @param string[]? - withData totalUserRolesForExhibitor
   * @param boolean? - shouldHideDeleted true|false
   * @param string? - query
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-500
   * @param string? - sortBy
   * @param string? - sortDirection ascending|descending
   * @return Promise|Observable|any
   */
  ListExhibitorsForEvent(
    eventId: string,
    withData: string[] = null,
    shouldHideDeleted: boolean = null,
    query: string = null,
    page: number = null,
    itemsPerPage: number = null,
    sortBy: string = null,
    sortDirection: string = null,
  ): any {
    return this.restClient.get('Exhibitor/UseCase/ListExhibitorsForEvent', {
      eventId,
      withData,
      shouldHideDeleted,
      query,
      page,
      itemsPerPage,
      sortBy,
      sortDirection,
    });
  }

  /**
   * @param string - userId
   * @param string? - query
   * @param string[]? - withData
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-500
   * @param string? - sortBy
   * @param string? - sortDirection ascending|descending
   * @param string? - eventDateFilterType
   * @param string? - poolId
   * @return Promise|Observable|any
   */
  ListExhibitorsForUser(
    userId: string,
    query: string = null,
    withData: string[] = null,
    page: number = null,
    itemsPerPage: number = null,
    sortBy: string = null,
    sortDirection: string = null,
    eventDateFilterType: string = null,
    poolId: string = null,
  ): any {
    return this.restClient.get('Exhibitor/UseCase/ListExhibitorsForUser', {
      userId,
      query,
      withData,
      page,
      itemsPerPage,
      sortBy,
      sortDirection,
      eventDateFilterType,
      poolId,
    });
  }

  // Commands

  /**
   * @param string - exhibitorId
   * @param string - email
   * @param string - firstName
   * @param string - lastName
   * @param string? - authenticatedUserId
   * @return Promise|Observable|any
   */
  AddUserToExhibitor(
    exhibitorId: string,
    email: string,
    firstName: string,
    lastName: string,
    authenticatedUserId: string = null,
  ): any {
    return this.restClient.post('Exhibitor/UseCase/AddUserToExhibitor', {
      exhibitorId,
      email,
      firstName,
      lastName,
      authenticatedUserId,
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
   * @param string - userId
   * @param string - exhibitorId
   * @return Promise|Observable|any
   */
  RemoveUserFromExhibitor(userId: string, exhibitorId: string): any {
    return this.restClient.post('Exhibitor/UseCase/RemoveUserFromExhibitor', {
      userId,
      exhibitorId,
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
