/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class Lead {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - leadId
   * @return Promise|Observable|any
   */
  GetLead(leadId: string): any {
    return this.restClient.get('Lead/UseCase/GetLead', {
      leadId,
    });
  }

  /**
   * @param string - exhibitorId
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-500
   * @param string? - sortBy
   * @param string? - sortDirection ascending|descending
   * @param string? - sourceUserId
   * @return Promise|Observable|any
   */
  ListLeadsForExhibitor(
    exhibitorId: string,
    page: number = null,
    itemsPerPage: number = null,
    sortBy: string = null,
    sortDirection: string = null,
    sourceUserId: string = null,
  ): any {
    return this.restClient.get('Lead/UseCase/ListLeadsForExhibitor', {
      exhibitorId,
      page,
      itemsPerPage,
      sortBy,
      sortDirection,
      sourceUserId,
    });
  }

  // Commands

  /**
   * @param string - exhibitorId
   * @param string - firstName
   * @param string - lastName
   * @param string - sourceUserId
   * @param string? - emailAddress
   * @param string? - phoneNumber
   * @param number? - score
   * @param string? - notes
   * @param string? - temperature not-set|cold|warm|hot
   * @param string? - title
   * @param string? - company
   * @param string? - leadId
   * @return Promise|Observable|any
   */
  CreateLead(
    exhibitorId: string,
    firstName: string,
    lastName: string,
    sourceUserId: string,
    emailAddress: string = null,
    phoneNumber: string = null,
    score: number = null,
    notes: string = null,
    temperature: string = null,
    title: string = null,
    company: string = null,
    leadId: string = null,
  ): any {
    return this.restClient.post('Lead/UseCase/CreateLead', {
      exhibitorId,
      firstName,
      lastName,
      sourceUserId,
      emailAddress,
      phoneNumber,
      score,
      notes,
      temperature,
      title,
      company,
      leadId,
    });
  }

  /**
   * @param string - leadId
   * @return Promise|Observable|any
   */
  DeleteLead(leadId: string): any {
    return this.restClient.post('Lead/UseCase/DeleteLead', {
      leadId,
    });
  }

  /**
   * @param string - exhibitorId
   * @param string - userId
   * @return Promise|Observable|any
   */
  ExportLeadsForExhibitor(exhibitorId: string, userId: string): any {
    return this.restClient.post('Lead/UseCase/ExportLeadsForExhibitor', {
      exhibitorId,
      userId,
    });
  }

  /**
   * @param string - leadId
   * @return Promise|Observable|any
   */
  RemoveLead(leadId: string): any {
    return this.restClient.post('Lead/UseCase/RemoveLead', {
      leadId,
    });
  }

  /**
   * @param string - leadId
   * @param string - company
   * @return Promise|Observable|any
   */
  SetLeadCompany(leadId: string, company: string): any {
    return this.restClient.post('Lead/UseCase/SetLeadCompany', {
      leadId,
      company,
    });
  }

  /**
   * @param string - leadId
   * @param string - leadEmailAddress
   * @return Promise|Observable|any
   */
  SetLeadEmailAddress(leadId: string, leadEmailAddress: string): any {
    return this.restClient.post('Lead/UseCase/SetLeadEmailAddress', {
      leadId,
      leadEmailAddress,
    });
  }

  /**
   * @param string - leadId
   * @param string - leadFirstName
   * @return Promise|Observable|any
   */
  SetLeadFirstName(leadId: string, leadFirstName: string): any {
    return this.restClient.post('Lead/UseCase/SetLeadFirstName', {
      leadId,
      leadFirstName,
    });
  }

  /**
   * @param string - leadId
   * @param string - leadLastName
   * @return Promise|Observable|any
   */
  SetLeadLastName(leadId: string, leadLastName: string): any {
    return this.restClient.post('Lead/UseCase/SetLeadLastName', {
      leadId,
      leadLastName,
    });
  }

  /**
   * @param string - leadId
   * @param string - leadNotes
   * @return Promise|Observable|any
   */
  SetLeadNotes(leadId: string, leadNotes: string): any {
    return this.restClient.post('Lead/UseCase/SetLeadNotes', {
      leadId,
      leadNotes,
    });
  }

  /**
   * @param string - leadId
   * @param string - leadPhoneNumber
   * @return Promise|Observable|any
   */
  SetLeadPhoneNumber(leadId: string, leadPhoneNumber: string): any {
    return this.restClient.post('Lead/UseCase/SetLeadPhoneNumber', {
      leadId,
      leadPhoneNumber,
    });
  }

  /**
   * @param string - leadId
   * @param number - leadScore
   * @return Promise|Observable|any
   */
  SetLeadScore(leadId: string, leadScore: number): any {
    return this.restClient.post('Lead/UseCase/SetLeadScore', {
      leadId,
      leadScore,
    });
  }

  /**
   * @param string - leadId
   * @param string - leadTemperature not-set|cold|warm|hot
   * @return Promise|Observable|any
   */
  SetLeadTemperature(leadId: string, leadTemperature: string): any {
    return this.restClient.post('Lead/UseCase/SetLeadTemperature', {
      leadId,
      leadTemperature,
    });
  }

  /**
   * @param string - leadId
   * @param string - leadNotes
   * @return Promise|Observable|any
   */
  SetLeadTitle(leadId: string, leadNotes: string): any {
    return this.restClient.post('Lead/UseCase/SetLeadTitle', {
      leadId,
      leadNotes,
    });
  }

  /**
   * @param string - leadId
   * @param string? - firstName
   * @param string? - lastName
   * @param string? - emailAddress
   * @param string? - phoneNumber
   * @param number? - score
   * @param string? - notes
   * @param string? - temperature not-set|cold|warm|hot
   * @param string? - title
   * @param string? - company
   * @return Promise|Observable|any
   */
  UpdateLead(
    leadId: string,
    firstName: string = null,
    lastName: string = null,
    emailAddress: string = null,
    phoneNumber: string = null,
    score: number = null,
    notes: string = null,
    temperature: string = null,
    title: string = null,
    company: string = null,
  ): any {
    return this.restClient.post('Lead/UseCase/UpdateLead', {
      leadId,
      firstName,
      lastName,
      emailAddress,
      phoneNumber,
      score,
      notes,
      temperature,
      title,
      company,
    });
  }
}
