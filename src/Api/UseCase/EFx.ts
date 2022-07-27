/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class EFx {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  GetAdminConfigForEvent(eventId: string): any {
    return this.restClient.get('EFx/UseCase/GetAdminConfigForEvent', {
      eventId,
    });
  }

  /**
   * @param string - eventId
   * @param boolean? - withDisabledModules true|false
   * @return Promise|Observable|any
   */
  GetAllModulesForEvent(
    eventId: string,
    withDisabledModules: boolean = null,
  ): any {
    return this.restClient.get('EFx/UseCase/GetAllModulesForEvent', {
      eventId,
      withDisabledModules,
    });
  }

  /**
   * @param string - screenId
   * @return Promise|Observable|any
   */
  GetEFxScreen(screenId: string): any {
    return this.restClient.get('EFx/UseCase/GetEFxScreen', {
      screenId,
    });
  }

  /**
   * @param string - stationId
   * @param string[]? - withData StackAndTicketType|EFxScreens
   * @return Promise|Observable|any
   */
  GetEFxStation(stationId: string, withData: string[] = null): any {
    return this.restClient.get('EFx/UseCase/GetEFxStation', {
      stationId,
      withData,
    });
  }

  /**
   * @param string - eventId
   * @param string? - sortBy createdAt
   * @param string? - sortDirection ascending|descending
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-100
   * @param any[]? - screenTypeFilter
   * @return Promise|Observable|any
   */
  ListEFxScreensForEvent(
    eventId: string,
    sortBy: string = null,
    sortDirection: string = null,
    page: number = null,
    itemsPerPage: number = null,
    screenTypeFilter: any[] = null,
  ): any {
    return this.restClient.get('EFx/UseCase/ListEFxScreensForEvent', {
      eventId,
      sortBy,
      sortDirection,
      page,
      itemsPerPage,
      screenTypeFilter,
    });
  }

  /**
   * @param string - eventId
   * @param string[]? - withData StackAndTicketType|EFxScreens
   * @param string? - sortBy createdAt
   * @param string? - sortDirection ascending|descending
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-100
   * @param any[]? - moduleFilter
   * @param string? - query
   * @return Promise|Observable|any
   */
  ListEFxStationsForEvent(
    eventId: string,
    withData: string[] = null,
    sortBy: string = null,
    sortDirection: string = null,
    page: number = null,
    itemsPerPage: number = null,
    moduleFilter: any[] = null,
    query: string = null,
  ): any {
    return this.restClient.get('EFx/UseCase/ListEFxStationsForEvent', {
      eventId,
      withData,
      sortBy,
      sortDirection,
      page,
      itemsPerPage,
      moduleFilter,
      query,
    });
  }

  // Commands

  /**
   * @param string - eventId
   * @param string - backgroundUrl
   * @param string - textColor
   * @param string - screenType scan-view|failure-view|check-out-view|success-view|register-success-view|register-scan-view|register-failure-view
   * @param string - text
   * @param string? - screenId
   * @return Promise|Observable|any
   */
  CreateEFxScreen(
    eventId: string,
    backgroundUrl: string,
    textColor: string,
    screenType: string,
    text: string,
    screenId: string = null,
  ): any {
    return this.restClient.post('EFx/UseCase/CreateEFxScreen', {
      eventId,
      backgroundUrl,
      textColor,
      screenType,
      text,
      screenId,
    });
  }

  /**
   * @param string - eventId
   * @param string - stationName
   * @param string - moduleType access-control
   * @param string - stationType check-in|check-in-out
   * @param string? - stationId
   * @return Promise|Observable|any
   */
  CreateEFxStation(
    eventId: string,
    stationName: string,
    moduleType: string,
    stationType: string,
    stationId: string = null,
  ): any {
    return this.restClient.post('EFx/UseCase/CreateEFxStation', {
      eventId,
      stationName,
      moduleType,
      stationType,
      stationId,
    });
  }

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  DisableForEvent(eventId: string): any {
    return this.restClient.post('EFx/UseCase/DisableForEvent', {
      eventId,
    });
  }

  /**
   * @param string - eventId
   * @param string - moduleType guest-management|access-control|athletes-bag|concierge|digital-memory-bank|guest-info|messaging|smsquiz|product-pickup|raffle|reservation|roaming-photographer|smart-bar|teams|lead-retrieval
   * @return Promise|Observable|any
   */
  DisableModuleForEvent(eventId: string, moduleType: string): any {
    return this.restClient.post('EFx/UseCase/DisableModuleForEvent', {
      eventId,
      moduleType,
    });
  }

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  DisableNFCForEvent(eventId: string): any {
    return this.restClient.post('EFx/UseCase/DisableNFCForEvent', {
      eventId,
    });
  }

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  DisableSMSForEvent(eventId: string): any {
    return this.restClient.post('EFx/UseCase/DisableSMSForEvent', {
      eventId,
    });
  }

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  EnableForEvent(eventId: string): any {
    return this.restClient.post('EFx/UseCase/EnableForEvent', {
      eventId,
    });
  }

  /**
   * @param string - eventId
   * @param string - moduleType guest-management|access-control|athletes-bag|concierge|digital-memory-bank|guest-info|messaging|smsquiz|product-pickup|raffle|reservation|roaming-photographer|smart-bar|teams|lead-retrieval
   * @return Promise|Observable|any
   */
  EnableModuleForEvent(eventId: string, moduleType: string): any {
    return this.restClient.post('EFx/UseCase/EnableModuleForEvent', {
      eventId,
      moduleType,
    });
  }

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  EnableNFCForEvent(eventId: string): any {
    return this.restClient.post('EFx/UseCase/EnableNFCForEvent', {
      eventId,
    });
  }

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  EnableSMSForEvent(eventId: string): any {
    return this.restClient.post('EFx/UseCase/EnableSMSForEvent', {
      eventId,
    });
  }

  /**
   * @param string - stationId
   * @return Promise|Observable|any
   */
  RemoveEFxStation(stationId: string): any {
    return this.restClient.post('EFx/UseCase/RemoveEFxStation', {
      stationId,
    });
  }

  /**
   * @param string - eventId
   * @param string - userId
   * @param any[]? - requestedEFxModules guest-management|access-control|athletes-bag|concierge|digital-memory-bank|guest-info|messaging|smsquiz|product-pickup|raffle|reservation|roaming-photographer|smart-bar|teams|lead-retrieval
   * @return Promise|Observable|any
   */
  RequestForEvent(
    eventId: string,
    userId: string,
    requestedEFxModules: any[] = null,
  ): any {
    return this.restClient.post('EFx/UseCase/RequestForEvent', {
      eventId,
      userId,
      requestedEFxModules,
    });
  }

  /**
   * @param string - phoneNumber
   * @return Promise|Observable|any
   */
  SendSMSWithAppLink(phoneNumber: string): any {
    return this.restClient.post('EFx/UseCase/SendSMSWithAppLink', {
      phoneNumber,
    });
  }

  /**
   * @param string - eventId
   * @param string - pin
   * @return Promise|Observable|any
   */
  SetAdminPinForEvent(eventId: string, pin: string): any {
    return this.restClient.post('EFx/UseCase/SetAdminPinForEvent', {
      eventId,
      pin,
    });
  }

  /**
   * @param string - stationId
   * @param string? - smsText
   * @param string? - smsMedialUrl
   * @return Promise|Observable|any
   */
  SetContentDeliveryForEFxStation(
    stationId: string,
    smsText: string = null,
    smsMedialUrl: string = null,
  ): any {
    return this.restClient.post('EFx/UseCase/SetContentDeliveryForEFxStation', {
      stationId,
      smsText,
      smsMedialUrl,
    });
  }

  /**
   * @param string - eventId
   * @param string - message
   * @return Promise|Observable|any
   */
  SetSMSForEvent(eventId: string, message: string): any {
    return this.restClient.post('EFx/UseCase/SetSMSForEvent', {
      eventId,
      message,
    });
  }

  /**
   * @param string - stationId
   * @param any[]? - screenIds
   * @return Promise|Observable|any
   */
  SetScreensForEFxStation(stationId: string, screenIds: any[] = null): any {
    return this.restClient.post('EFx/UseCase/SetScreensForEFxStation', {
      stationId,
      screenIds,
    });
  }

  /**
   * @param string - stationId
   * @param any[]? - stackIds
   * @return Promise|Observable|any
   */
  SetStacksForEFxStation(stationId: string, stackIds: any[] = null): any {
    return this.restClient.post('EFx/UseCase/SetStacksForEFxStation', {
      stationId,
      stackIds,
    });
  }

  /**
   * @param string - screenId
   * @param string - text
   * @param string - textColor
   * @param string - backgroundUrl
   * @return Promise|Observable|any
   */
  UpdateEFxScreen(
    screenId: string,
    text: string,
    textColor: string,
    backgroundUrl: string,
  ): any {
    return this.restClient.post('EFx/UseCase/UpdateEFxScreen', {
      screenId,
      text,
      textColor,
      backgroundUrl,
    });
  }

  /**
   * @param string - stationId
   * @param string - stationName
   * @param string - stationType check-in|check-in-out
   * @return Promise|Observable|any
   */
  UpdateEFxStation(
    stationId: string,
    stationName: string,
    stationType: string,
  ): any {
    return this.restClient.post('EFx/UseCase/UpdateEFxStation', {
      stationId,
      stationName,
      stationType,
    });
  }
}
