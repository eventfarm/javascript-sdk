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

  // Commands

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
