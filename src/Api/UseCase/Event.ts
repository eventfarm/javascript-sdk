import { RestClientInterface } from '../../RestClient/RestClientInterface';

export class Event {
    constructor(private restClient: RestClientInterface) {}

    // GET: Queries
    CheckAltKeywordAvailability(altKeyword: string): any {
        return this.restClient.get('Event/UseCase/CheckAltKeywordAvailability', {
            altKeyword
        }    );
    }

    GetAllQuestionsForEvent(eventId: string, withData: any = null): any {
        return this.restClient.get('Event/UseCase/GetAllQuestionsForEvent', {
            eventId,
            withData
        }    );
    }

    GetEvent(eventId: string, withData: any = null): any {
        return this.restClient.get('Event/UseCase/GetEvent', {
            eventId,
            withData
        }    );
    }

    GetEventCountsForPool(poolId: string, earliestStartDate: number = null): any {
        return this.restClient.get('Event/UseCase/GetEventCountsForPool', {
            poolId,
            earliestStartDate
        }    );
    }

    GetQuestion(questionId: string, withData: any = null): any {
        return this.restClient.get('Event/UseCase/GetQuestion', {
            questionId,
            withData
        }    );
    }

    ListChildrenForEvent(parentEventId: string, query: string = null, withData: any = null, page: number = null, itemsPerPage: number = null, sortBy: string = null, sortDirection: string = null, eventDateFilterType: string = null, poolId: string = null, tags: any = null): any {
        return this.restClient.get('Event/UseCase/ListChildrenForEvent', {
            parentEventId,
            query,
            withData,
            page,
            itemsPerPage,
            sortBy,
            sortDirection,
            eventDateFilterType,
            poolId,
            tags
        }    );
    }

    ListChildrenForEventForUser(parentEventId: string, userId: string, query: string = null, withData: any = null, page: number = null, itemsPerPage: number = null, sortBy: string = null, sortDirection: string = null, eventDateFilterType: string = null, poolId: string = null, tags: any = null): any {
        return this.restClient.get('Event/UseCase/ListChildrenForEventForUser', {
            parentEventId,
            userId,
            query,
            withData,
            page,
            itemsPerPage,
            sortBy,
            sortDirection,
            eventDateFilterType,
            poolId,
            tags
        }    );
    }

    ListEventsForUser(userId: string, query: string = null, attributesFilter: any = null, attributesExcludeFilter: any = null, withData: any = null, lastModifiedTimestamp: number = null, page: number = null, itemsPerPage: number = null, sortBy: string = null, sortDirection: string = null, eventDateFilterType: string = null, poolId: string = null, tags: any = null, earliestStartTimestamp: number = null): any {
        return this.restClient.get('Event/UseCase/ListEventsForUser', {
            userId,
            query,
            attributesFilter,
            attributesExcludeFilter,
            withData,
            lastModifiedTimestamp,
            page,
            itemsPerPage,
            sortBy,
            sortDirection,
            eventDateFilterType,
            poolId,
            tags,
            earliestStartTimestamp
        }    );
    }

    ListQuestionsByEventAndContext(eventId: string, questionContextTypes: any = null): any {
        return this.restClient.get('Event/UseCase/ListQuestionsByEventAndContext', {
            eventId,
            questionContextTypes
        }    );
    }

    // POST USE CASES: Commands
    AddChildEvent(eventId: string, childEventId: string): any {
        return this.restClient.post('Event/UseCase/AddChildEvent', {
            eventId,
            childEventId
        }    );
    }

    AddParentToEvent(eventId: string, parentEventId: string): any {
        return this.restClient.post('Event/UseCase/AddParentToEvent', {
            eventId,
            parentEventId
        }    );
    }

    AddUserRoleToEvent(eventId: string, email: string, firstName: string, lastName: string, eventRole: string, authenticatedUserId: string = null): any {
        return this.restClient.post('Event/UseCase/AddUserRoleToEvent', {
            eventId,
            email,
            firstName,
            lastName,
            eventRole,
            authenticatedUserId
        }    );
    }

    ArchiveEvent(eventId: string): any {
        return this.restClient.post('Event/UseCase/ArchiveEvent', {
            eventId
        }    );
    }

    ClearDefaultSitePageForEvent(eventId: string): any {
        return this.restClient.post('Event/UseCase/ClearDefaultSitePageForEvent', {
            eventId
        }    );
    }

    CopyExistingEventConfiguration(fromEventId: string, toEventId: string, shouldCopyUsers: boolean = null, shouldCopyEmailDesigns: boolean = null, shouldCopySettings: boolean = null, shouldCopyRegQuestions: boolean = null, shouldCopySitePages: boolean = null, shouldCopyTicketTypes: boolean = null, shouldCopyTicketBlocks: boolean = null, shouldCopyStacks: boolean = null, shouldCopyIntegrationSettings: boolean = null): any {
        return this.restClient.post('Event/UseCase/CopyExistingEventConfiguration', {
            fromEventId,
            toEventId,
            shouldCopyUsers,
            shouldCopyEmailDesigns,
            shouldCopySettings,
            shouldCopyRegQuestions,
            shouldCopySitePages,
            shouldCopyTicketTypes,
            shouldCopyTicketBlocks,
            shouldCopyStacks,
            shouldCopyIntegrationSettings
        }    );
    }

    CreateAnswer(questionId: string, text: string, sortOrder: number = null, isDefault: boolean = null, answerId: string = null): any {
        return this.restClient.post('Event/UseCase/CreateAnswer', {
            questionId,
            text,
            sortOrder,
            isDefault,
            answerId
        }    );
    }

    CreateCIOEvent(poolId: string, userId: string, eventName: string, startTime: string = null, endTime: string = null, timezone: string = null, eventId: string = null): any {
        return this.restClient.post('Event/UseCase/CreateCIOEvent', {
            poolId,
            userId,
            eventName,
            startTime,
            endTime,
            timezone,
            eventId
        }    );
    }

    CreateEvent(poolId: string, userId: string, eventName: string, altKeyword: string = null, contactEmail: string = null, startTime: string = null, endTime: string = null, timezone: string = null, eventId: string = null): any {
        return this.restClient.post('Event/UseCase/CreateEvent', {
            poolId,
            userId,
            eventName,
            altKeyword,
            contactEmail,
            startTime,
            endTime,
            timezone,
            eventId
        }    );
    }

    CreateQuestion(eventId: string, text: string, questionType: string, sortOrder: number = null, isRequired: boolean = null, isIndividual: boolean = null, ticketTypeId: string = null, questionId: string = null, questionContextTypes: any = null): any {
        return this.restClient.post('Event/UseCase/CreateQuestion', {
            eventId,
            text,
            questionType,
            sortOrder,
            isRequired,
            isIndividual,
            ticketTypeId,
            questionId,
            questionContextTypes
        }    );
    }

    DeleteAnswer(answerId: string): any {
        return this.restClient.post('Event/UseCase/DeleteAnswer', {
            answerId
        }    );
    }

    DeleteQuestion(questionId: string): any {
        return this.restClient.post('Event/UseCase/DeleteQuestion', {
            questionId
        }    );
    }

    DisableEfx(eventId: string): any {
        return this.restClient.post('Event/UseCase/DisableEfx', {
            eventId
        }    );
    }

    DisableQuestion(questionId: string): any {
        return this.restClient.post('Event/UseCase/DisableQuestion', {
            questionId
        }    );
    }

    DisableUserField(eventId: string, field: string): any {
        return this.restClient.post('Event/UseCase/DisableUserField', {
            eventId,
            field
        }    );
    }

    EnableEfx(eventId: string): any {
        return this.restClient.post('Event/UseCase/EnableEfx', {
            eventId
        }    );
    }

    EnableQuestion(questionId: string): any {
        return this.restClient.post('Event/UseCase/EnableQuestion', {
            questionId
        }    );
    }

    EnableUserField(eventId: string, field: string): any {
        return this.restClient.post('Event/UseCase/EnableUserField', {
            eventId,
            field
        }    );
    }

    IncrementCIOAndMessageCSM(poolId: string, userId: string, firstName: string, lastName: string, email: string, company: string, phoneNumber: string, howManyEvents: string, industry: string, typeOfEvents: any): any {
        return this.restClient.post('Event/UseCase/IncrementCIOAndMessageCSM', {
            poolId,
            userId,
            firstName,
            lastName,
            email,
            company,
            phoneNumber,
            howManyEvents,
            industry,
            typeOfEvents
        }    );
    }

    RemoveChildEvent(eventId: string, childEventId: string): any {
        return this.restClient.post('Event/UseCase/RemoveChildEvent', {
            eventId,
            childEventId
        }    );
    }

    RemoveParentFromEvent(eventId: string): any {
        return this.restClient.post('Event/UseCase/RemoveParentFromEvent', {
            eventId
        }    );
    }

    SendMessageToGuestList(): any {
        return this.restClient.post('Event/UseCase/SendMessageToGuestList', {

        }    );
    }

    SetAltKeywordForEvent(eventId: string, altKeyword: string): any {
        return this.restClient.post('Event/UseCase/SetAltKeywordForEvent', {
            eventId,
            altKeyword
        }    );
    }

    SetAnswerSortOrder(answerId: string, sortOrder: number): any {
        return this.restClient.post('Event/UseCase/SetAnswerSortOrder', {
            answerId,
            sortOrder
        }    );
    }

    SetDefaultSitePageForEvent(eventId: string, sitePageId: string): any {
        return this.restClient.post('Event/UseCase/SetDefaultSitePageForEvent', {
            eventId,
            sitePageId
        }    );
    }

    SetQuestionSortOrder(questionId: string, sortOrder: number): any {
        return this.restClient.post('Event/UseCase/SetQuestionSortOrder', {
            questionId,
            sortOrder
        }    );
    }

    UnarchiveEvent(eventId: string): any {
        return this.restClient.post('Event/UseCase/UnarchiveEvent', {
            eventId
        }    );
    }

    UpdateAnswer(answerId: string, text: string, isDefault: boolean = null): any {
        return this.restClient.post('Event/UseCase/UpdateAnswer', {
            answerId,
            text,
            isDefault
        }    );
    }

    UpdateQuestion(questionId: string, text: string, questionType: string, questionContextTypes: any = null, isRequired: boolean = null, isIndividual: boolean = null, ticketTypeId: string = null): any {
        return this.restClient.post('Event/UseCase/UpdateQuestion', {
            questionId,
            text,
            questionType,
            questionContextTypes,
            isRequired,
            isIndividual,
            ticketTypeId
        }    );
    }
}
