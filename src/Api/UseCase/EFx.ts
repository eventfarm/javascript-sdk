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

  // Commands

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
   * @param string - moduleType access-control|concierge|digital-memory-bank|messaging|smsquiz|product-pickup|raffle|reservation|roaming-photographer|smart-bar|teams
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
   * @param string - moduleType access-control|concierge|digital-memory-bank|messaging|smsquiz|product-pickup|raffle|reservation|roaming-photographer|smart-bar|teams
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
   * @param string - eventId
   * @param string - userId
   * @param any[]? - requestedEFxModules access-control|concierge|digital-memory-bank|messaging|smsquiz|product-pickup|raffle|reservation|roaming-photographer|smart-bar|teams
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
}
