/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class Venue {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - venueId
   * @return Promise|Observable|any
   */
  GetVenue(venueId: string): any {
    return this.restClient.get('Venue/UseCase/GetVenue', {
      venueId,
    });
  }

  /**
   * @param string - venueLocationId
   * @return Promise|Observable|any
   */
  GetVenueLocation(venueLocationId: string): any {
    return this.restClient.get('Venue/UseCase/GetVenueLocation', {
      venueLocationId,
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
  ListVenuesForPool(
    poolId: string,
    page: number = null,
    itemsPerPage: number = null,
    sortBy: string = null,
    sortDirection: string = null,
  ): any {
    return this.restClient.get('Venue/UseCase/ListVenuesForPool', {
      poolId,
      page,
      itemsPerPage,
      sortBy,
      sortDirection,
    });
  }

  // Commands

  /**
   * @param string - poolId
   * @param string - name
   * @param string? - venueType in-person|virbela|virtual|other
   * @param string? - street1
   * @param string? - street2
   * @param string? - city
   * @param string? - county
   * @param string? - province
   * @param number? - countryId
   * @param string? - postalCode
   * @param string? - description
   * @param string? - url
   * @param number? - capacity
   * @param string? - venueId
   * @return Promise|Observable|any
   */
  CreateVenue(
    poolId: string,
    name: string,
    venueType: string = null,
    street1: string = null,
    street2: string = null,
    city: string = null,
    county: string = null,
    province: string = null,
    countryId: number = null,
    postalCode: string = null,
    description: string = null,
    url: string = null,
    capacity: number = null,
    venueId: string = null,
  ): any {
    return this.restClient.post('Venue/UseCase/CreateVenue', {
      poolId,
      name,
      venueType,
      street1,
      street2,
      city,
      county,
      province,
      countryId,
      postalCode,
      description,
      url,
      capacity,
      venueId,
    });
  }

  /**
   * @param string - venueId
   * @param string - name
   * @param string? - gpsCoordinates
   * @param string? - venueLocationId
   * @return Promise|Observable|any
   */
  CreateVenueLocation(
    venueId: string,
    name: string,
    gpsCoordinates: string = null,
    venueLocationId: string = null,
  ): any {
    return this.restClient.post('Venue/UseCase/CreateVenueLocation', {
      venueId,
      name,
      gpsCoordinates,
      venueLocationId,
    });
  }

  /**
   * @param string - venueId
   * @return Promise|Observable|any
   */
  DeleteVenue(venueId: string): any {
    return this.restClient.post('Venue/UseCase/DeleteVenue', {
      venueId,
    });
  }

  /**
   * @param string - venueLocationId
   * @return Promise|Observable|any
   */
  DeleteVenueLocation(venueLocationId: string): any {
    return this.restClient.post('Venue/UseCase/DeleteVenueLocation', {
      venueLocationId,
    });
  }

  /**
   * @param string - venueId
   * @return Promise|Observable|any
   */
  RemoveVenue(venueId: string): any {
    return this.restClient.post('Venue/UseCase/RemoveVenue', {
      venueId,
    });
  }

  /**
   * @param string - venueLocationId
   * @return Promise|Observable|any
   */
  RemoveVenueLocation(venueLocationId: string): any {
    return this.restClient.post('Venue/UseCase/RemoveVenueLocation', {
      venueLocationId,
    });
  }

  /**
   * @param string - venueId
   * @param string - poolId
   * @param string - name
   * @param string? - venueType in-person|virbela|virtual|other
   * @param string? - street1
   * @param string? - street2
   * @param string? - city
   * @param string? - county
   * @param string? - province
   * @param number? - countryId
   * @param string? - postalCode
   * @param string? - description
   * @param string? - url
   * @param number? - capacity
   * @return Promise|Observable|any
   */
  UpdateVenue(
    venueId: string,
    poolId: string,
    name: string,
    venueType: string = null,
    street1: string = null,
    street2: string = null,
    city: string = null,
    county: string = null,
    province: string = null,
    countryId: number = null,
    postalCode: string = null,
    description: string = null,
    url: string = null,
    capacity: number = null,
  ): any {
    return this.restClient.post('Venue/UseCase/UpdateVenue', {
      venueId,
      poolId,
      name,
      venueType,
      street1,
      street2,
      city,
      county,
      province,
      countryId,
      postalCode,
      description,
      url,
      capacity,
    });
  }

  /**
   * @param string - venueLocationId
   * @param string? - venueId
   * @param string? - name
   * @param string? - gpsCoordinates
   * @return Promise|Observable|any
   */
  UpdateVenueLocation(
    venueLocationId: string,
    venueId: string = null,
    name: string = null,
    gpsCoordinates: string = null,
  ): any {
    return this.restClient.post('Venue/UseCase/UpdateVenueLocation', {
      venueLocationId,
      venueId,
      name,
      gpsCoordinates,
    });
  }
}
