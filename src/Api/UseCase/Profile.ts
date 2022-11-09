/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class Profile {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - profileId
   * @return Promise|Observable|any
   */
  GetProfile(profileId: string): any {
    return this.restClient.get('Profile/UseCase/GetProfile', {
      profileId,
    });
  }

  /**
   * @param string - eventId
   * @param string[] - withData EventProfiles
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-500
   * @param string? - sortBy name|title|company|created
   * @param string? - sortDirection ascending|descending
   * @param string? - query
   * @param boolean? - shouldHideDeleted true|false
   * @return Promise|Observable|any
   */
  ListProfilesForEvent(
    eventId: string,
    withData: string[],
    page: number = null,
    itemsPerPage: number = null,
    sortBy: string = null,
    sortDirection: string = null,
    query: string = null,
    shouldHideDeleted: boolean = null,
  ): any {
    return this.restClient.get('Profile/UseCase/ListProfilesForEvent', {
      eventId,
      withData,
      page,
      itemsPerPage,
      sortBy,
      sortDirection,
      query,
      shouldHideDeleted,
    });
  }

  /**
   * @param string - poolId
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-500
   * @param string? - sortBy
   * @param string? - sortDirection ascending|descending
   * @return Promise|Observable|any
   */
  ListProfilesForPool(
    poolId: string,
    page: number = null,
    itemsPerPage: number = null,
    sortBy: string = null,
    sortDirection: string = null,
  ): any {
    return this.restClient.get('Profile/UseCase/ListProfilesForPool', {
      poolId,
      page,
      itemsPerPage,
      sortBy,
      sortDirection,
    });
  }

  // Commands

  /**
   * @param string - profileId
   * @param string - eventId
   * @param string - eventProfileType speaker|presenter|sponsor|panelist|moderator|host|participant|other
   * @return Promise|Observable|any
   */
  AddProfileToEvent(
    profileId: string,
    eventId: string,
    eventProfileType: string,
  ): any {
    return this.restClient.post('Profile/UseCase/AddProfileToEvent', {
      profileId,
      eventId,
      eventProfileType,
    });
  }

  /**
   * @param any[] - profileIds
   * @param string - eventId
   * @param string - eventProfileType speaker|presenter|sponsor|panelist|moderator|host|participant|other
   * @return Promise|Observable|any
   */
  AddProfilesToEvent(
    profileIds: any[],
    eventId: string,
    eventProfileType: string,
  ): any {
    return this.restClient.post('Profile/UseCase/AddProfilesToEvent', {
      profileIds,
      eventId,
      eventProfileType,
    });
  }

  /**
   * @param string - poolId
   * @param string? - firstName
   * @param string? - lastName
   * @param string? - company
   * @param string? - emailAddress
   * @param string? - title
   * @param string? - description
   * @param string? - imageUrl
   * @param string? - profileType person|company|other
   * @param string? - profileId
   * @param string? - eventId
   * @param string? - eventProfileType
   * @return Promise|Observable|any
   */
  CreateProfile(
    poolId: string,
    firstName: string = null,
    lastName: string = null,
    company: string = null,
    emailAddress: string = null,
    title: string = null,
    description: string = null,
    imageUrl: string = null,
    profileType: string = null,
    profileId: string = null,
    eventId: string = null,
    eventProfileType: string = null,
  ): any {
    return this.restClient.post('Profile/UseCase/CreateProfile', {
      poolId,
      firstName,
      lastName,
      company,
      emailAddress,
      title,
      description,
      imageUrl,
      profileType,
      profileId,
      eventId,
      eventProfileType,
    });
  }

  /**
   * @param string - profileId
   * @return Promise|Observable|any
   */
  DeleteProfile(profileId: string): any {
    return this.restClient.post('Profile/UseCase/DeleteProfile', {
      profileId,
    });
  }

  /**
   * @param string - profileId
   * @return Promise|Observable|any
   */
  RemoveProfile(profileId: string): any {
    return this.restClient.post('Profile/UseCase/RemoveProfile', {
      profileId,
    });
  }

  /**
   * @param string - profileId
   * @param string - eventId
   * @return Promise|Observable|any
   */
  RemoveProfileFromEvent(profileId: string, eventId: string): any {
    return this.restClient.post('Profile/UseCase/RemoveProfileFromEvent', {
      profileId,
      eventId,
    });
  }

  /**
   * @param string - profileId
   * @param string - company
   * @return Promise|Observable|any
   */
  SetCompany(profileId: string, company: string): any {
    return this.restClient.post('Profile/UseCase/SetCompany', {
      profileId,
      company,
    });
  }

  /**
   * @param string - profileId
   * @param string - description
   * @return Promise|Observable|any
   */
  SetDescription(profileId: string, description: string): any {
    return this.restClient.post('Profile/UseCase/SetDescription', {
      profileId,
      description,
    });
  }

  /**
   * @param string - profileId
   * @param string? - firstName
   * @param string? - lastName
   * @return Promise|Observable|any
   */
  SetName(
    profileId: string,
    firstName: string = null,
    lastName: string = null,
  ): any {
    return this.restClient.post('Profile/UseCase/SetName', {
      profileId,
      firstName,
      lastName,
    });
  }

  /**
   * @param string - profileId
   * @param string - profileType
   * @return Promise|Observable|any
   */
  SetProfileType(profileId: string, profileType: string): any {
    return this.restClient.post('Profile/UseCase/SetProfileType', {
      profileId,
      profileType,
    });
  }

  /**
   * @param string - eventProfileId
   * @param string - eventProfileType speaker|presenter|sponsor|panelist|moderator|host|participant|other
   * @return Promise|Observable|any
   */
  UpdateEventProfileType(
    eventProfileId: string,
    eventProfileType: string,
  ): any {
    return this.restClient.post('Profile/UseCase/UpdateEventProfileType', {
      eventProfileId,
      eventProfileType,
    });
  }

  /**
   * @param string - profileId
   * @param string? - poolId
   * @param string? - firstName
   * @param string? - lastName
   * @param string? - company
   * @param string? - emailAddress
   * @param string? - title
   * @param string? - description
   * @param string? - imageUrl
   * @param string? - profileType person|company|other
   * @return Promise|Observable|any
   */
  UpdateProfile(
    profileId: string,
    poolId: string = null,
    firstName: string = null,
    lastName: string = null,
    company: string = null,
    emailAddress: string = null,
    title: string = null,
    description: string = null,
    imageUrl: string = null,
    profileType: string = null,
  ): any {
    return this.restClient.post('Profile/UseCase/UpdateProfile', {
      profileId,
      poolId,
      firstName,
      lastName,
      company,
      emailAddress,
      title,
      description,
      imageUrl,
      profileType,
    });
  }
}
