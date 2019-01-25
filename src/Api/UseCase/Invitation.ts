/**
 * This file was auto generated, please do not edit it directly.
**/

import { RestClientInterface } from '../../interfaces';

export class Invitation {
    constructor(private restClient: RestClientInterface) {}

    // GET: Queries
    GetAllInvitationStatusTypesForStackMethodType(stackMethodType: string): any {
        return this.restClient.get('Invitation/UseCase/GetAllInvitationStatusTypesForStackMethodType', {
            stackMethodType
        }    );
    }

    GetCheckInCountsForEvent(eventId: string): any {
        return this.restClient.get('Invitation/UseCase/GetCheckInCountsForEvent', {
            eventId
        }    );
    }

    GetCheckInCountsForTicketBlock(ticketBlockId: string): any {
        return this.restClient.get('Invitation/UseCase/GetCheckInCountsForTicketBlock', {
            ticketBlockId
        }    );
    }

    GetInvitation(invitationId: string, withData: any = null): any {
        return this.restClient.get('Invitation/UseCase/GetInvitation', {
            invitationId,
            withData
        }    );
    }

    GetInvitationCountsForEvent(eventId: string): any {
        return this.restClient.get('Invitation/UseCase/GetInvitationCountsForEvent', {
            eventId
        }    );
    }

    GetInvitationCountsForTicketBlock(ticketBlockId: string): any {
        return this.restClient.get('Invitation/UseCase/GetInvitationCountsForTicketBlock', {
            ticketBlockId
        }    );
    }

    GetInvitationCountsForUser(userId: string, poolId: string = null): any {
        return this.restClient.get('Invitation/UseCase/GetInvitationCountsForUser', {
            userId,
            poolId
        }    );
    }

    GetInvitationLastActionCountsForEvent(eventId: string): any {
        return this.restClient.get('Invitation/UseCase/GetInvitationLastActionCountsForEvent', {
            eventId
        }    );
    }

    GetInvitationStatusTypeCountsForEvent(eventId: string): any {
        return this.restClient.get('Invitation/UseCase/GetInvitationStatusTypeCountsForEvent', {
            eventId
        }    );
    }

    GetInvitationStatusTypeCountsForTicketBlock(ticketBlockId: string): any {
        return this.restClient.get('Invitation/UseCase/GetInvitationStatusTypeCountsForTicketBlock', {
            ticketBlockId
        }    );
    }

    ListInvitationsForEvent(eventId: string, withData: any = null, withUserAttributes: any = null, query: string = null, statusFilter: any = null, lastModifiedTimestamp: number = null, isCheckedIn: boolean = null, sortBy: string = null, sortDirection: string = null, page: number = null, itemsPerPage: number = null): any {
        return this.restClient.get('Invitation/UseCase/ListInvitationsForEvent', {
            eventId,
            withData,
            withUserAttributes,
            query,
            statusFilter,
            lastModifiedTimestamp,
            isCheckedIn,
            sortBy,
            sortDirection,
            page,
            itemsPerPage
        }    );
    }

    ListInvitationsForStack(eventId: string, stackId: string, withData: any = null, withUserAttributes: any = null, query: string = null, statusFilter: any = null, lastModifiedTimestamp: number = null, isCheckedIn: boolean = null, sortBy: string = null, sortDirection: string = null, page: number = null, itemsPerPage: number = null): any {
        return this.restClient.get('Invitation/UseCase/ListInvitationsForStack', {
            eventId,
            stackId,
            withData,
            withUserAttributes,
            query,
            statusFilter,
            lastModifiedTimestamp,
            isCheckedIn,
            sortBy,
            sortDirection,
            page,
            itemsPerPage
        }    );
    }

    ListInvitationsForTicketBlock(ticketBlockId: string, withData: any = null, withUserAttributes: any = null, query: string = null, statusFilter: any = null, lastModifiedTimestamp: number = null, isCheckedIn: boolean = null, sortBy: string = null, sortDirection: string = null, page: number = null, itemsPerPage: number = null): any {
        return this.restClient.get('Invitation/UseCase/ListInvitationsForTicketBlock', {
            ticketBlockId,
            withData,
            withUserAttributes,
            query,
            statusFilter,
            lastModifiedTimestamp,
            isCheckedIn,
            sortBy,
            sortDirection,
            page,
            itemsPerPage
        }    );
    }

    ListInvitationsForUser(userId: string, poolId: string = null, eventId: string = null, page: number = null, itemsPerPage: number = null, eventDateFilterType: string = null, sortDirection: string = null, withData: any = null, statusFilter: any = null): any {
        return this.restClient.get('Invitation/UseCase/ListInvitationsForUser', {
            userId,
            poolId,
            eventId,
            page,
            itemsPerPage,
            eventDateFilterType,
            sortDirection,
            withData,
            statusFilter
        }    );
    }

    ListInvitationsForUserByEmail(email: string, poolId: string = null, eventId: string = null, page: number = null, itemsPerPage: number = null, eventDateFilterType: string = null, sortDirection: string = null, withData: any = null, statusFilter: any = null): any {
        return this.restClient.get('Invitation/UseCase/ListInvitationsForUserByEmail', {
            email,
            poolId,
            eventId,
            page,
            itemsPerPage,
            eventDateFilterType,
            sortDirection,
            withData,
            statusFilter
        }    );
    }

    ListInvitationsForUserForParent(userId: string, parentEventId: string, poolId: string = null, page: number = null, itemsPerPage: number = null, eventDateFilterType: string = null, sortDirection: string = null, withData: any = null, statusFilter: any = null): any {
        return this.restClient.get('Invitation/UseCase/ListInvitationsForUserForParent', {
            userId,
            parentEventId,
            poolId,
            page,
            itemsPerPage,
            eventDateFilterType,
            sortDirection,
            withData,
            statusFilter
        }    );
    }

    ListWaitlistForEvent(eventId: string, withData: any = null, withUserAttributes: any = null, query: string = null, lastModifiedTimestamp: number = null, isCheckedIn: boolean = null, sortBy: string = null, sortDirection: string = null, page: number = null, itemsPerPage: number = null): any {
        return this.restClient.get('Invitation/UseCase/ListWaitlistForEvent', {
            eventId,
            withData,
            withUserAttributes,
            query,
            lastModifiedTimestamp,
            isCheckedIn,
            sortBy,
            sortDirection,
            page,
            itemsPerPage
        }    );
    }

    ListWaitlistForStack(eventId: string, stackId: string, withData: any = null, withUserAttributes: any = null, query: string = null, statusFilter: any = null, lastModifiedTimestamp: number = null, isCheckedIn: boolean = null, sortBy: string = null, sortDirection: string = null, page: number = null, itemsPerPage: number = null): any {
        return this.restClient.get('Invitation/UseCase/ListWaitlistForStack', {
            eventId,
            stackId,
            withData,
            withUserAttributes,
            query,
            statusFilter,
            lastModifiedTimestamp,
            isCheckedIn,
            sortBy,
            sortDirection,
            page,
            itemsPerPage
        }    );
    }

    // POST USE CASES: Commands
    AddInvitationToWaitlist(invitationId: string): any {
        return this.restClient.post('Invitation/UseCase/AddInvitationToWaitlist', {
            invitationId
        }    );
    }

    ChangeInvitationStatus(invitationId: string, invitationStatus: string): any {
        return this.restClient.post('Invitation/UseCase/ChangeInvitationStatus', {
            invitationId,
            invitationStatus
        }    );
    }

    ChangeInviteCount(invitationId: string, inviteCount: number = null): any {
        return this.restClient.post('Invitation/UseCase/ChangeInviteCount', {
            invitationId,
            inviteCount
        }    );
    }

    CheckIn(invitationId: string, checkInAt: number = null): any {
        return this.restClient.post('Invitation/UseCase/CheckIn', {
            invitationId,
            checkInAt
        }    );
    }

    CreateInvitation(eventId: string, stackId: string, invitationStatus: string, inviteSource: string, isCheckedIn: boolean, inviteCount: number, email: string = null, firstName: string = null, lastName: string = null, company: string = null, position: string = null, checkInNotes: string = null, invitationId: string = null, shouldSendInvitation: boolean = null, invitationNotes: string = null, title: string = null, telephone: string = null, other: string = null): any {
        return this.restClient.post('Invitation/UseCase/CreateInvitation', {
            eventId,
            stackId,
            invitationStatus,
            inviteSource,
            isCheckedIn,
            inviteCount,
            email,
            firstName,
            lastName,
            company,
            position,
            checkInNotes,
            invitationId,
            shouldSendInvitation,
            invitationNotes,
            title,
            telephone,
            other
        }    );
    }

    CreateInvitationForTicketBlock(eventId: string, stackId: string, ticketBlockId: string, invitationStatus: string, inviteSource: string, isCheckedIn: boolean, inviteCount: number, email: string = null, firstName: string = null, lastName: string = null, company: string = null, position: string = null, checkInNotes: string = null, invitationId: string = null, shouldSendInvitation: boolean = null, invitationNotes: string = null, title: string = null, telephone: string = null, other: string = null): any {
        return this.restClient.post('Invitation/UseCase/CreateInvitationForTicketBlock', {
            eventId,
            stackId,
            ticketBlockId,
            invitationStatus,
            inviteSource,
            isCheckedIn,
            inviteCount,
            email,
            firstName,
            lastName,
            company,
            position,
            checkInNotes,
            invitationId,
            shouldSendInvitation,
            invitationNotes,
            title,
            telephone,
            other
        }    );
    }

    CreateInvitationsFromGroup(groupId: string, stackId: string, guestsPerInvitation: number, invitationCreationType: string): any {
        return this.restClient.post('Invitation/UseCase/CreateInvitationsFromGroup', {
            groupId,
            stackId,
            guestsPerInvitation,
            invitationCreationType
        }    );
    }

    CreateInvitationsFromGroupForCIOEvent(eventId: string, groupId: string, guestsPerInvitation: number, stackId: string = null): any {
        return this.restClient.post('Invitation/UseCase/CreateInvitationsFromGroupForCIOEvent', {
            eventId,
            groupId,
            guestsPerInvitation,
            stackId
        }    );
    }

    CreateInvitationsFromGroupForTicketBlock(groupId: string, ticketBlockId: string, stackId: string, guestsPerInvitation: number, invitationCreationType: string): any {
        return this.restClient.post('Invitation/UseCase/CreateInvitationsFromGroupForTicketBlock', {
            groupId,
            ticketBlockId,
            stackId,
            guestsPerInvitation,
            invitationCreationType
        }    );
    }

    CreateWebhook(eventId: string, webhookType: string, webhookMethod: string, url: string): any {
        return this.restClient.post('Invitation/UseCase/CreateWebhook', {
            eventId,
            webhookType,
            webhookMethod,
            url
        }    );
    }

    DeleteWebhook(webhookId: string): any {
        return this.restClient.post('Invitation/UseCase/DeleteWebhook', {
            webhookId
        }    );
    }

    DisableArrivalAlert(invitationId: string): any {
        return this.restClient.post('Invitation/UseCase/DisableArrivalAlert', {
            invitationId
        }    );
    }

    PromoteInvitationsFromWaitlist(invitationIds: any, newInvitationStatus: string, shouldSendEmail: boolean = null): any {
        return this.restClient.post('Invitation/UseCase/PromoteInvitationsFromWaitlist', {
            invitationIds,
            newInvitationStatus,
            shouldSendEmail
        }    );
    }

    SetAllQuestionResponses(invitationId: string, questionId: string, questionResponseIdsWithAnswersJson: string): any {
        return this.restClient.post('Invitation/UseCase/SetAllQuestionResponses', {
            invitationId,
            questionId,
            questionResponseIdsWithAnswersJson
        }    );
    }

    SetArrivalAlertEmail(invitationId: string, toEmail: string, ccEmails: any = null, shouldSendArrivalAlert: boolean = null): any {
        return this.restClient.post('Invitation/UseCase/SetArrivalAlertEmail', {
            invitationId,
            toEmail,
            ccEmails,
            shouldSendArrivalAlert
        }    );
    }

    SetCheckInNotes(invitationId: string, checkInNotes: string = null): any {
        return this.restClient.post('Invitation/UseCase/SetCheckInNotes', {
            invitationId,
            checkInNotes
        }    );
    }

    SetInvitationNotes(invitationId: string, invitationNotes: string = null): any {
        return this.restClient.post('Invitation/UseCase/SetInvitationNotes', {
            invitationId,
            invitationNotes
        }    );
    }

    SetQuestionResponse(invitationId: string, questionId: string, answerIds: any = null, text: string = null): any {
        return this.restClient.post('Invitation/UseCase/SetQuestionResponse', {
            invitationId,
            questionId,
            answerIds,
            text
        }    );
    }

    UndoCheckIn(invitationId: string): any {
        return this.restClient.post('Invitation/UseCase/UndoCheckIn', {
            invitationId
        }    );
    }

    UpdateInvitation(invitationId: string, stackId: string, invitationStatus: string, company: string = null, position: string = null, email: string = null, firstName: string = null, lastName: string = null, other: string = null, telephone: string = null): any {
        return this.restClient.post('Invitation/UseCase/UpdateInvitation', {
            invitationId,
            stackId,
            invitationStatus,
            company,
            position,
            email,
            firstName,
            lastName,
            other,
            telephone
        }    );
    }
}
