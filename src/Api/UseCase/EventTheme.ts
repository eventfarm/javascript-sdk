/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class EventTheme {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  GetEventThemeForEvent(eventId: string): any {
    return this.restClient.get('EventTheme/UseCase/GetEventThemeForEvent', {
      eventId,
    });
  }

  // Commands

  /**
   * @param string - eventId
   * @param string - primaryColor
   * @param string - primaryAltColor
   * @param string - alertColor
   * @param string - backgroundColor
   * @param string - fontColor
   * @param string - themeNameType material
   * @param string - themeFontFamilyType times
   * @return Promise|Observable|any
   */
  SetEventTheme(
    eventId: string,
    primaryColor: string,
    primaryAltColor: string,
    alertColor: string,
    backgroundColor: string,
    fontColor: string,
    themeNameType: string,
    themeFontFamilyType: string,
  ): any {
    return this.restClient.post('EventTheme/UseCase/SetEventTheme', {
      eventId,
      primaryColor,
      primaryAltColor,
      alertColor,
      backgroundColor,
      fontColor,
      themeNameType,
      themeFontFamilyType,
    });
  }
}
