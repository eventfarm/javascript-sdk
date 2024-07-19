/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class Nike {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - invitationId
   * @param string? - start
   * @param string? - end
   * @return Promise|Observable|any
   */
  GetActivityForParis2024ForInvitation(
    invitationId: string,
    start: string = null,
    end: string = null,
  ): any {
    return this.restClient.get(
      'Nike/UseCase/GetActivityForParis2024ForInvitation',
      {
        invitationId,
        start,
        end,
      },
    );
  }

  /**
   * @param string - eventId
   * @param string - applicationSlug
   * @param string? - start
   * @param string? - end
   * @param string? - gender
   * @param string? - sport
   * @param string? - country
   * @return Promise|Observable|any
   */
  GetAllUsersForApplicationForParis2024(
    eventId: string,
    applicationSlug: string,
    start: string = null,
    end: string = null,
    gender: string = null,
    sport: string = null,
    country: string = null,
  ): any {
    return this.restClient.get(
      'Nike/UseCase/GetAllUsersForApplicationForParis2024',
      {
        eventId,
        applicationSlug,
        start,
        end,
        gender,
        sport,
        country,
      },
    );
  }

  /**
   * @param string - eventId
   * @param string? - start
   * @param string? - end
   * @param string? - gender
   * @param string? - sport
   * @param string? - country
   * @return Promise|Observable|any
   */
  GetDashboardStatsForParis2024(
    eventId: string,
    start: string = null,
    end: string = null,
    gender: string = null,
    sport: string = null,
    country: string = null,
  ): any {
    return this.restClient.get('Nike/UseCase/GetDashboardStatsForParis2024', {
      eventId,
      start,
      end,
      gender,
      sport,
      country,
    });
  }

  // Commands
}
