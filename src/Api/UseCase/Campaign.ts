/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class Campaign {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - campaignId
   * @return Promise|Observable|any
   */
  GetCampaign(campaignId: string): any {
    return this.restClient.get('Campaign/UseCase/GetCampaign', {
      campaignId,
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
  ListCampaignsForPool(
    poolId: string,
    page: number = null,
    itemsPerPage: number = null,
    sortBy: string = null,
    sortDirection: string = null,
  ): any {
    return this.restClient.get('Campaign/UseCase/ListCampaignsForPool', {
      poolId,
      page,
      itemsPerPage,
      sortBy,
      sortDirection,
    });
  }

  // Commands

  /**
   * @param string - campaignId
   * @param string - invitationId
   * @return Promise|Observable|any
   */
  AddInvitationToCampaign(campaignId: string, invitationId: string): any {
    return this.restClient.post('Campaign/UseCase/AddInvitationToCampaign', {
      campaignId,
      invitationId,
    });
  }

  /**
   * @param string - campaignId
   * @return Promise|Observable|any
   */
  ArchiveCampaign(campaignId: string): any {
    return this.restClient.post('Campaign/UseCase/ArchiveCampaign', {
      campaignId,
    });
  }

  /**
   * @param string - name
   * @param string - eventId
   * @param string? - campaignId
   * @return Promise|Observable|any
   */
  CreateCampaign(
    name: string,
    eventId: string,
    campaignId: string = null,
  ): any {
    return this.restClient.post('Campaign/UseCase/CreateCampaign', {
      name,
      eventId,
      campaignId,
    });
  }

  /**
   * @param string - campaignId
   * @return Promise|Observable|any
   */
  DeleteCampaign(campaignId: string): any {
    return this.restClient.post('Campaign/UseCase/DeleteCampaign', {
      campaignId,
    });
  }

  /**
   * @param string - campaignId
   * @param string - invitationId
   * @return Promise|Observable|any
   */
  RemoveInvitationFromCampaign(campaignId: string, invitationId: string): any {
    return this.restClient.post(
      'Campaign/UseCase/RemoveInvitationFromCampaign',
      {
        campaignId,
        invitationId,
      },
    );
  }

  /**
   * @param string - campaignId
   * @param string - name
   * @param string - eventId
   * @return Promise|Observable|any
   */
  UpdateCampaign(campaignId: string, name: string, eventId: string): any {
    return this.restClient.post('Campaign/UseCase/UpdateCampaign', {
      campaignId,
      name,
      eventId,
    });
  }
}
