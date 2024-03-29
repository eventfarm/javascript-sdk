/**
 * This file was auto generated, please do not edit it directly.
 **/
export interface ClearFailureTypeInterface {
  slug: string;
  name: string;
  description?: string;
  isExpired: boolean;
  isNonUnique: boolean;
  isNotFound: boolean;
  isInvalidName: boolean;
}
export interface InvitationActionTypeInterface {
  slug: string;
  name: string;
  description?: string;
  isNone: boolean;
  isClicked: boolean;
  isReceived: boolean;
  isProcessed: boolean;
  isSpamReport: boolean;
  isBounce: boolean;
  isDeferred: boolean;
  isDropped: boolean;
  isOpen: boolean;
  isDelivered: boolean;
  isRs: boolean;
  isBlocked: boolean;
  isUnsubscribed: boolean;
  isUnknown: boolean;
}
export interface InvitationCreationTypeInterface {
  slug: string;
  name: string;
  description?: string;
  isConfirmedNoEmail: boolean;
  isUnconfirmedNoEmail: boolean;
  isSendEmail: boolean;
  shouldSendEmail: any;
}
export interface InvitationStatusTypeInterface {
  slug: string;
  name: string;
  description?: string;
  isAssigned: boolean;
  isPurchased: boolean;
  isConfirmedByRSVP: boolean;
  isDeclinedByRSVP: boolean;
  isLeftBehind: boolean;
  isNotYetPurchased: boolean;
  isRegistered: boolean;
  isUnconfirmed: boolean;
  isRecycled: boolean;
  isNotYetRegistered: boolean;
  isWaitlisted: boolean;
  isAffirmativeResponse: boolean;
  isUsed: boolean;
  isSendToConfirmedOrRegisteredTypeIds: boolean;
  isSendToPurchasedTypeIds: boolean;
  isSendToAssignedTypeIds: boolean;
  isSendToUnconfirmedTypeIds: boolean;
  isSendToDeclinedTypeIds: boolean;
}
export interface InviteSourceTypeInterface {
  slug: string;
  name: string;
  description?: string;
  isDirectInvite: boolean;
  isApiAddition: boolean;
  isDistribution: boolean;
  isEventInvite: boolean;
  isGroupInvite: boolean;
  isImport: boolean;
  isImportMarketo: boolean;
  isImportSalesforce: boolean;
  isIosLeaveBehind: boolean;
  isLeaveBehind: boolean;
  isMobileLeaveBehind: boolean;
  isMobilePurchase: boolean;
  isOutsidePurchase: boolean;
  isPublicInterface: boolean;
  isTransferred: boolean;
  isWalkIn: boolean;
}
export interface WebhookTypeInterface {
  slug: string;
  name: string;
  description?: string;
  isAffirmative: boolean;
  isAssigned: boolean;
  isCheckin: boolean;
  isConfirmed: boolean;
  isCreated: boolean;
  isLeaveBehind: boolean;
  isPurchased: boolean;
  isRegistered: boolean;
  isRemoved: boolean;
  isUpdated: boolean;
  isAffirmativeSMS: boolean;
  isUpdatedSMS: boolean;
  isCreatedSMS: boolean;
}

export class Invitation {
  ClearFailureType(): ClearFailureTypeInterface[] {
    return [
      {
        slug: 'expired',
        name: 'Expired',
        description: null,
        isExpired: true,
        isNonUnique: false,
        isNotFound: false,
        isInvalidName: false,
      },
      {
        slug: 'non-unique',
        name: 'Non Unique',
        description: null,
        isExpired: false,
        isNonUnique: true,
        isNotFound: false,
        isInvalidName: false,
      },
      {
        slug: 'not-found',
        name: 'Not Found',
        description: null,
        isExpired: false,
        isNonUnique: false,
        isNotFound: true,
        isInvalidName: false,
      },
      {
        slug: 'invalid-name',
        name: 'Invalid Name',
        description: null,
        isExpired: false,
        isNonUnique: false,
        isNotFound: false,
        isInvalidName: true,
      },
    ];
  }

  InvitationActionType(): InvitationActionTypeInterface[] {
    return [
      {
        slug: 'none',
        name: 'None',
        description: null,
        isNone: true,
        isClicked: false,
        isReceived: false,
        isProcessed: false,
        isSpamReport: false,
        isBounce: false,
        isDeferred: false,
        isDropped: false,
        isOpen: false,
        isDelivered: false,
        isRs: false,
        isBlocked: false,
        isUnsubscribed: false,
        isUnknown: false,
      },
      {
        slug: 'clicked',
        name: 'Clicked',
        description: null,
        isNone: false,
        isClicked: true,
        isReceived: false,
        isProcessed: false,
        isSpamReport: false,
        isBounce: false,
        isDeferred: false,
        isDropped: false,
        isOpen: false,
        isDelivered: false,
        isRs: false,
        isBlocked: false,
        isUnsubscribed: false,
        isUnknown: false,
      },
      {
        slug: 'received',
        name: 'Received',
        description: null,
        isNone: false,
        isClicked: false,
        isReceived: true,
        isProcessed: false,
        isSpamReport: false,
        isBounce: false,
        isDeferred: false,
        isDropped: false,
        isOpen: false,
        isDelivered: false,
        isRs: false,
        isBlocked: false,
        isUnsubscribed: false,
        isUnknown: false,
      },
      {
        slug: 'processed',
        name: 'Processed',
        description: null,
        isNone: false,
        isClicked: false,
        isReceived: false,
        isProcessed: true,
        isSpamReport: false,
        isBounce: false,
        isDeferred: false,
        isDropped: false,
        isOpen: false,
        isDelivered: false,
        isRs: false,
        isBlocked: false,
        isUnsubscribed: false,
        isUnknown: false,
      },
      {
        slug: 'spam-report',
        name: 'Spam Report',
        description: null,
        isNone: false,
        isClicked: false,
        isReceived: false,
        isProcessed: false,
        isSpamReport: true,
        isBounce: false,
        isDeferred: false,
        isDropped: false,
        isOpen: false,
        isDelivered: false,
        isRs: false,
        isBlocked: false,
        isUnsubscribed: false,
        isUnknown: false,
      },
      {
        slug: 'bounce',
        name: 'Bounce',
        description: null,
        isNone: false,
        isClicked: false,
        isReceived: false,
        isProcessed: false,
        isSpamReport: false,
        isBounce: true,
        isDeferred: false,
        isDropped: false,
        isOpen: false,
        isDelivered: false,
        isRs: false,
        isBlocked: false,
        isUnsubscribed: false,
        isUnknown: false,
      },
      {
        slug: 'deferred',
        name: 'Deferred',
        description: null,
        isNone: false,
        isClicked: false,
        isReceived: false,
        isProcessed: false,
        isSpamReport: false,
        isBounce: false,
        isDeferred: true,
        isDropped: false,
        isOpen: false,
        isDelivered: false,
        isRs: false,
        isBlocked: false,
        isUnsubscribed: false,
        isUnknown: false,
      },
      {
        slug: 'dropped',
        name: 'Dropped',
        description: null,
        isNone: false,
        isClicked: false,
        isReceived: false,
        isProcessed: false,
        isSpamReport: false,
        isBounce: false,
        isDeferred: false,
        isDropped: true,
        isOpen: false,
        isDelivered: false,
        isRs: false,
        isBlocked: false,
        isUnsubscribed: false,
        isUnknown: false,
      },
      {
        slug: 'open',
        name: 'Open',
        description: null,
        isNone: false,
        isClicked: false,
        isReceived: false,
        isProcessed: false,
        isSpamReport: false,
        isBounce: false,
        isDeferred: false,
        isDropped: false,
        isOpen: true,
        isDelivered: false,
        isRs: false,
        isBlocked: false,
        isUnsubscribed: false,
        isUnknown: false,
      },
      {
        slug: 'delivered',
        name: 'Delivered',
        description: null,
        isNone: false,
        isClicked: false,
        isReceived: false,
        isProcessed: false,
        isSpamReport: false,
        isBounce: false,
        isDeferred: false,
        isDropped: false,
        isOpen: false,
        isDelivered: true,
        isRs: false,
        isBlocked: false,
        isUnsubscribed: false,
        isUnknown: false,
      },
      {
        slug: 'rs',
        name: 'Rs',
        description: null,
        isNone: false,
        isClicked: false,
        isReceived: false,
        isProcessed: false,
        isSpamReport: false,
        isBounce: false,
        isDeferred: false,
        isDropped: false,
        isOpen: false,
        isDelivered: false,
        isRs: true,
        isBlocked: false,
        isUnsubscribed: false,
        isUnknown: false,
      },
      {
        slug: 'blocked',
        name: 'Blocked',
        description: null,
        isNone: false,
        isClicked: false,
        isReceived: false,
        isProcessed: false,
        isSpamReport: false,
        isBounce: false,
        isDeferred: false,
        isDropped: false,
        isOpen: false,
        isDelivered: false,
        isRs: false,
        isBlocked: true,
        isUnsubscribed: false,
        isUnknown: false,
      },
      {
        slug: 'unsubscribed',
        name: 'Unsubscribed',
        description: null,
        isNone: false,
        isClicked: false,
        isReceived: false,
        isProcessed: false,
        isSpamReport: false,
        isBounce: false,
        isDeferred: false,
        isDropped: false,
        isOpen: false,
        isDelivered: false,
        isRs: false,
        isBlocked: false,
        isUnsubscribed: true,
        isUnknown: false,
      },
      {
        slug: 'unknown',
        name: 'Unknown',
        description: null,
        isNone: false,
        isClicked: false,
        isReceived: false,
        isProcessed: false,
        isSpamReport: false,
        isBounce: false,
        isDeferred: false,
        isDropped: false,
        isOpen: false,
        isDelivered: false,
        isRs: false,
        isBlocked: false,
        isUnsubscribed: false,
        isUnknown: true,
      },
    ];
  }

  InvitationCreationType(): InvitationCreationTypeInterface[] {
    return [
      {
        slug: 'unconfirmed-no-email',
        name: 'Unconfirmed No Email',
        description: 'Add as Unconfirmed, email will not be sent.',
        isConfirmedNoEmail: false,
        isUnconfirmedNoEmail: true,
        isSendEmail: false,
        shouldSendEmail: false,
      },
      {
        slug: 'confirmed-no-email',
        name: 'Confirmed No Email',
        description: 'Add as Confirmed, email will not be sent.',
        isConfirmedNoEmail: true,
        isUnconfirmedNoEmail: false,
        isSendEmail: false,
        shouldSendEmail: false,
      },
      {
        slug: 'send-email',
        name: 'Send Invitation',
        description: 'Send Invitation by Email.',
        isConfirmedNoEmail: false,
        isUnconfirmedNoEmail: false,
        isSendEmail: true,
        shouldSendEmail: true,
      },
    ];
  }

  InvitationStatusType(): InvitationStatusTypeInterface[] {
    return [
      {
        slug: 'assigned',
        name: 'Assigned',
        description: null,
        isAssigned: true,
        isPurchased: false,
        isConfirmedByRSVP: false,
        isDeclinedByRSVP: false,
        isLeftBehind: false,
        isNotYetPurchased: false,
        isRegistered: false,
        isUnconfirmed: false,
        isRecycled: false,
        isNotYetRegistered: false,
        isWaitlisted: false,
        isAffirmativeResponse: true,
        isUsed: true,
        isSendToConfirmedOrRegisteredTypeIds: true,
        isSendToPurchasedTypeIds: false,
        isSendToAssignedTypeIds: true,
        isSendToUnconfirmedTypeIds: false,
        isSendToDeclinedTypeIds: false,
      },
      {
        slug: 'purchased',
        name: 'Purchased',
        description: null,
        isAssigned: false,
        isPurchased: true,
        isConfirmedByRSVP: false,
        isDeclinedByRSVP: false,
        isLeftBehind: false,
        isNotYetPurchased: false,
        isRegistered: false,
        isUnconfirmed: false,
        isRecycled: false,
        isNotYetRegistered: false,
        isWaitlisted: false,
        isAffirmativeResponse: true,
        isUsed: true,
        isSendToConfirmedOrRegisteredTypeIds: false,
        isSendToPurchasedTypeIds: true,
        isSendToAssignedTypeIds: false,
        isSendToUnconfirmedTypeIds: false,
        isSendToDeclinedTypeIds: false,
      },
      {
        slug: 'confirmed-by-rsvp',
        name: 'Confirmed By RSVP',
        description: null,
        isAssigned: false,
        isPurchased: false,
        isConfirmedByRSVP: true,
        isDeclinedByRSVP: false,
        isLeftBehind: false,
        isNotYetPurchased: false,
        isRegistered: false,
        isUnconfirmed: false,
        isRecycled: false,
        isNotYetRegistered: false,
        isWaitlisted: false,
        isAffirmativeResponse: true,
        isUsed: true,
        isSendToConfirmedOrRegisteredTypeIds: true,
        isSendToPurchasedTypeIds: false,
        isSendToAssignedTypeIds: false,
        isSendToUnconfirmedTypeIds: false,
        isSendToDeclinedTypeIds: false,
      },
      {
        slug: 'declined-by-rsvp',
        name: 'Declined By RSVP',
        description: null,
        isAssigned: false,
        isPurchased: false,
        isConfirmedByRSVP: false,
        isDeclinedByRSVP: true,
        isLeftBehind: false,
        isNotYetPurchased: false,
        isRegistered: false,
        isUnconfirmed: false,
        isRecycled: false,
        isNotYetRegistered: false,
        isWaitlisted: false,
        isAffirmativeResponse: false,
        isUsed: false,
        isSendToConfirmedOrRegisteredTypeIds: false,
        isSendToPurchasedTypeIds: false,
        isSendToAssignedTypeIds: false,
        isSendToUnconfirmedTypeIds: false,
        isSendToDeclinedTypeIds: true,
      },
      {
        slug: 'left-behind',
        name: 'Left Behind',
        description: null,
        isAssigned: false,
        isPurchased: false,
        isConfirmedByRSVP: false,
        isDeclinedByRSVP: false,
        isLeftBehind: true,
        isNotYetPurchased: false,
        isRegistered: false,
        isUnconfirmed: false,
        isRecycled: false,
        isNotYetRegistered: false,
        isWaitlisted: false,
        isAffirmativeResponse: true,
        isUsed: true,
        isSendToConfirmedOrRegisteredTypeIds: false,
        isSendToPurchasedTypeIds: false,
        isSendToAssignedTypeIds: false,
        isSendToUnconfirmedTypeIds: false,
        isSendToDeclinedTypeIds: false,
      },
      {
        slug: 'not-yet-purchased',
        name: 'Not Yet Purchased',
        description: null,
        isAssigned: false,
        isPurchased: false,
        isConfirmedByRSVP: false,
        isDeclinedByRSVP: false,
        isLeftBehind: false,
        isNotYetPurchased: true,
        isRegistered: false,
        isUnconfirmed: false,
        isRecycled: false,
        isNotYetRegistered: false,
        isWaitlisted: false,
        isAffirmativeResponse: false,
        isUsed: true,
        isSendToConfirmedOrRegisteredTypeIds: false,
        isSendToPurchasedTypeIds: false,
        isSendToAssignedTypeIds: false,
        isSendToUnconfirmedTypeIds: true,
        isSendToDeclinedTypeIds: false,
      },
      {
        slug: 'registered',
        name: 'Registered',
        description: null,
        isAssigned: false,
        isPurchased: false,
        isConfirmedByRSVP: false,
        isDeclinedByRSVP: false,
        isLeftBehind: false,
        isNotYetPurchased: false,
        isRegistered: true,
        isUnconfirmed: false,
        isRecycled: false,
        isNotYetRegistered: false,
        isWaitlisted: false,
        isAffirmativeResponse: true,
        isUsed: true,
        isSendToConfirmedOrRegisteredTypeIds: true,
        isSendToPurchasedTypeIds: false,
        isSendToAssignedTypeIds: false,
        isSendToUnconfirmedTypeIds: false,
        isSendToDeclinedTypeIds: false,
      },
      {
        slug: 'unconfirmed',
        name: 'Unconfirmed',
        description: null,
        isAssigned: false,
        isPurchased: false,
        isConfirmedByRSVP: false,
        isDeclinedByRSVP: false,
        isLeftBehind: false,
        isNotYetPurchased: false,
        isRegistered: false,
        isUnconfirmed: true,
        isRecycled: false,
        isNotYetRegistered: false,
        isWaitlisted: false,
        isAffirmativeResponse: false,
        isUsed: true,
        isSendToConfirmedOrRegisteredTypeIds: false,
        isSendToPurchasedTypeIds: false,
        isSendToAssignedTypeIds: false,
        isSendToUnconfirmedTypeIds: true,
        isSendToDeclinedTypeIds: false,
      },
      {
        slug: 'recycled',
        name: 'Recycled',
        description: null,
        isAssigned: false,
        isPurchased: false,
        isConfirmedByRSVP: false,
        isDeclinedByRSVP: false,
        isLeftBehind: false,
        isNotYetPurchased: false,
        isRegistered: false,
        isUnconfirmed: false,
        isRecycled: true,
        isNotYetRegistered: false,
        isWaitlisted: false,
        isAffirmativeResponse: false,
        isUsed: false,
        isSendToConfirmedOrRegisteredTypeIds: false,
        isSendToPurchasedTypeIds: false,
        isSendToAssignedTypeIds: false,
        isSendToUnconfirmedTypeIds: false,
        isSendToDeclinedTypeIds: false,
      },
      {
        slug: 'not-yet-registered',
        name: 'Not Yet Registered',
        description: null,
        isAssigned: false,
        isPurchased: false,
        isConfirmedByRSVP: false,
        isDeclinedByRSVP: false,
        isLeftBehind: false,
        isNotYetPurchased: false,
        isRegistered: false,
        isUnconfirmed: false,
        isRecycled: false,
        isNotYetRegistered: true,
        isWaitlisted: false,
        isAffirmativeResponse: false,
        isUsed: true,
        isSendToConfirmedOrRegisteredTypeIds: false,
        isSendToPurchasedTypeIds: false,
        isSendToAssignedTypeIds: false,
        isSendToUnconfirmedTypeIds: true,
        isSendToDeclinedTypeIds: false,
      },
      {
        slug: 'waitlisted',
        name: 'Waitlisted',
        description: null,
        isAssigned: false,
        isPurchased: false,
        isConfirmedByRSVP: false,
        isDeclinedByRSVP: false,
        isLeftBehind: false,
        isNotYetPurchased: false,
        isRegistered: false,
        isUnconfirmed: false,
        isRecycled: false,
        isNotYetRegistered: false,
        isWaitlisted: true,
        isAffirmativeResponse: false,
        isUsed: false,
        isSendToConfirmedOrRegisteredTypeIds: false,
        isSendToPurchasedTypeIds: false,
        isSendToAssignedTypeIds: false,
        isSendToUnconfirmedTypeIds: false,
        isSendToDeclinedTypeIds: false,
      },
    ];
  }

  InviteSourceType(): InviteSourceTypeInterface[] {
    return [
      {
        slug: 'direct-invite',
        name: 'Direct Invite',
        description: null,
        isDirectInvite: true,
        isApiAddition: false,
        isDistribution: false,
        isEventInvite: false,
        isGroupInvite: false,
        isImport: false,
        isImportMarketo: false,
        isImportSalesforce: false,
        isIosLeaveBehind: false,
        isLeaveBehind: false,
        isMobileLeaveBehind: false,
        isMobilePurchase: false,
        isOutsidePurchase: false,
        isPublicInterface: false,
        isTransferred: false,
        isWalkIn: false,
      },
      {
        slug: 'api-addition',
        name: 'Api Addition',
        description: null,
        isDirectInvite: false,
        isApiAddition: true,
        isDistribution: false,
        isEventInvite: false,
        isGroupInvite: false,
        isImport: false,
        isImportMarketo: false,
        isImportSalesforce: false,
        isIosLeaveBehind: false,
        isLeaveBehind: false,
        isMobileLeaveBehind: false,
        isMobilePurchase: false,
        isOutsidePurchase: false,
        isPublicInterface: false,
        isTransferred: false,
        isWalkIn: false,
      },
      {
        slug: 'distribution',
        name: 'Distribution',
        description: null,
        isDirectInvite: false,
        isApiAddition: false,
        isDistribution: true,
        isEventInvite: false,
        isGroupInvite: false,
        isImport: false,
        isImportMarketo: false,
        isImportSalesforce: false,
        isIosLeaveBehind: false,
        isLeaveBehind: false,
        isMobileLeaveBehind: false,
        isMobilePurchase: false,
        isOutsidePurchase: false,
        isPublicInterface: false,
        isTransferred: false,
        isWalkIn: false,
      },
      {
        slug: 'event-invite',
        name: 'Event Invite',
        description: null,
        isDirectInvite: false,
        isApiAddition: false,
        isDistribution: false,
        isEventInvite: true,
        isGroupInvite: false,
        isImport: false,
        isImportMarketo: false,
        isImportSalesforce: false,
        isIosLeaveBehind: false,
        isLeaveBehind: false,
        isMobileLeaveBehind: false,
        isMobilePurchase: false,
        isOutsidePurchase: false,
        isPublicInterface: false,
        isTransferred: false,
        isWalkIn: false,
      },
      {
        slug: 'group-invite',
        name: 'Group Invite',
        description: null,
        isDirectInvite: false,
        isApiAddition: false,
        isDistribution: false,
        isEventInvite: false,
        isGroupInvite: true,
        isImport: false,
        isImportMarketo: false,
        isImportSalesforce: false,
        isIosLeaveBehind: false,
        isLeaveBehind: false,
        isMobileLeaveBehind: false,
        isMobilePurchase: false,
        isOutsidePurchase: false,
        isPublicInterface: false,
        isTransferred: false,
        isWalkIn: false,
      },
      {
        slug: 'import',
        name: 'Import',
        description: null,
        isDirectInvite: false,
        isApiAddition: false,
        isDistribution: false,
        isEventInvite: false,
        isGroupInvite: false,
        isImport: true,
        isImportMarketo: false,
        isImportSalesforce: false,
        isIosLeaveBehind: false,
        isLeaveBehind: false,
        isMobileLeaveBehind: false,
        isMobilePurchase: false,
        isOutsidePurchase: false,
        isPublicInterface: false,
        isTransferred: false,
        isWalkIn: false,
      },
      {
        slug: 'ios-leave-behind',
        name: 'iOS Leave Behind',
        description: null,
        isDirectInvite: false,
        isApiAddition: false,
        isDistribution: false,
        isEventInvite: false,
        isGroupInvite: false,
        isImport: false,
        isImportMarketo: false,
        isImportSalesforce: false,
        isIosLeaveBehind: true,
        isLeaveBehind: false,
        isMobileLeaveBehind: false,
        isMobilePurchase: false,
        isOutsidePurchase: false,
        isPublicInterface: false,
        isTransferred: false,
        isWalkIn: false,
      },
      {
        slug: 'leave-behind',
        name: 'Leave Behind',
        description: null,
        isDirectInvite: false,
        isApiAddition: false,
        isDistribution: false,
        isEventInvite: false,
        isGroupInvite: false,
        isImport: false,
        isImportMarketo: false,
        isImportSalesforce: false,
        isIosLeaveBehind: false,
        isLeaveBehind: true,
        isMobileLeaveBehind: false,
        isMobilePurchase: false,
        isOutsidePurchase: false,
        isPublicInterface: false,
        isTransferred: false,
        isWalkIn: false,
      },
      {
        slug: 'mobile-leave-behind',
        name: 'Mobile Leave Behind',
        description: null,
        isDirectInvite: false,
        isApiAddition: false,
        isDistribution: false,
        isEventInvite: false,
        isGroupInvite: false,
        isImport: false,
        isImportMarketo: false,
        isImportSalesforce: false,
        isIosLeaveBehind: false,
        isLeaveBehind: false,
        isMobileLeaveBehind: true,
        isMobilePurchase: false,
        isOutsidePurchase: false,
        isPublicInterface: false,
        isTransferred: false,
        isWalkIn: false,
      },
      {
        slug: 'mobile-purchase',
        name: 'Mobile Purchase',
        description: null,
        isDirectInvite: false,
        isApiAddition: false,
        isDistribution: false,
        isEventInvite: false,
        isGroupInvite: false,
        isImport: false,
        isImportMarketo: false,
        isImportSalesforce: false,
        isIosLeaveBehind: false,
        isLeaveBehind: false,
        isMobileLeaveBehind: false,
        isMobilePurchase: true,
        isOutsidePurchase: false,
        isPublicInterface: false,
        isTransferred: false,
        isWalkIn: false,
      },
      {
        slug: 'outside-purchase',
        name: 'Outside Purchase',
        description: null,
        isDirectInvite: false,
        isApiAddition: false,
        isDistribution: false,
        isEventInvite: false,
        isGroupInvite: false,
        isImport: false,
        isImportMarketo: false,
        isImportSalesforce: false,
        isIosLeaveBehind: false,
        isLeaveBehind: false,
        isMobileLeaveBehind: false,
        isMobilePurchase: false,
        isOutsidePurchase: true,
        isPublicInterface: false,
        isTransferred: false,
        isWalkIn: false,
      },
      {
        slug: 'public-interface',
        name: 'Public Interface',
        description: null,
        isDirectInvite: false,
        isApiAddition: false,
        isDistribution: false,
        isEventInvite: false,
        isGroupInvite: false,
        isImport: false,
        isImportMarketo: false,
        isImportSalesforce: false,
        isIosLeaveBehind: false,
        isLeaveBehind: false,
        isMobileLeaveBehind: false,
        isMobilePurchase: false,
        isOutsidePurchase: false,
        isPublicInterface: true,
        isTransferred: false,
        isWalkIn: false,
      },
      {
        slug: 'transferred',
        name: 'Transferred',
        description: null,
        isDirectInvite: false,
        isApiAddition: false,
        isDistribution: false,
        isEventInvite: false,
        isGroupInvite: false,
        isImport: false,
        isImportMarketo: false,
        isImportSalesforce: false,
        isIosLeaveBehind: false,
        isLeaveBehind: false,
        isMobileLeaveBehind: false,
        isMobilePurchase: false,
        isOutsidePurchase: false,
        isPublicInterface: false,
        isTransferred: true,
        isWalkIn: false,
      },
      {
        slug: 'import-salesforce',
        name: 'Import from Salesforce',
        description: null,
        isDirectInvite: false,
        isApiAddition: false,
        isDistribution: false,
        isEventInvite: false,
        isGroupInvite: false,
        isImport: false,
        isImportMarketo: false,
        isImportSalesforce: true,
        isIosLeaveBehind: false,
        isLeaveBehind: false,
        isMobileLeaveBehind: false,
        isMobilePurchase: false,
        isOutsidePurchase: false,
        isPublicInterface: false,
        isTransferred: false,
        isWalkIn: false,
      },
      {
        slug: 'import-marketo',
        name: 'Import from Marketo',
        description: null,
        isDirectInvite: false,
        isApiAddition: false,
        isDistribution: false,
        isEventInvite: false,
        isGroupInvite: false,
        isImport: false,
        isImportMarketo: true,
        isImportSalesforce: false,
        isIosLeaveBehind: false,
        isLeaveBehind: false,
        isMobileLeaveBehind: false,
        isMobilePurchase: false,
        isOutsidePurchase: false,
        isPublicInterface: false,
        isTransferred: false,
        isWalkIn: false,
      },
      {
        slug: 'walk-in',
        name: 'Walk In Addition',
        description: null,
        isDirectInvite: false,
        isApiAddition: false,
        isDistribution: false,
        isEventInvite: false,
        isGroupInvite: false,
        isImport: false,
        isImportMarketo: false,
        isImportSalesforce: false,
        isIosLeaveBehind: false,
        isLeaveBehind: false,
        isMobileLeaveBehind: false,
        isMobilePurchase: false,
        isOutsidePurchase: false,
        isPublicInterface: false,
        isTransferred: false,
        isWalkIn: true,
      },
    ];
  }

  WebhookType(): WebhookTypeInterface[] {
    return [
      {
        slug: 'affirmative',
        name: 'Affirmative',
        description: null,
        isAffirmative: true,
        isAssigned: false,
        isCheckin: false,
        isConfirmed: false,
        isCreated: false,
        isLeaveBehind: false,
        isPurchased: false,
        isRegistered: false,
        isRemoved: false,
        isUpdated: false,
        isAffirmativeSMS: false,
        isUpdatedSMS: false,
        isCreatedSMS: false,
      },
      {
        slug: 'assigned',
        name: 'Assigned',
        description: null,
        isAffirmative: false,
        isAssigned: true,
        isCheckin: false,
        isConfirmed: false,
        isCreated: false,
        isLeaveBehind: false,
        isPurchased: false,
        isRegistered: false,
        isRemoved: false,
        isUpdated: false,
        isAffirmativeSMS: false,
        isUpdatedSMS: false,
        isCreatedSMS: false,
      },
      {
        slug: 'checkin',
        name: 'Check-In',
        description: null,
        isAffirmative: false,
        isAssigned: false,
        isCheckin: true,
        isConfirmed: false,
        isCreated: false,
        isLeaveBehind: false,
        isPurchased: false,
        isRegistered: false,
        isRemoved: false,
        isUpdated: false,
        isAffirmativeSMS: false,
        isUpdatedSMS: false,
        isCreatedSMS: false,
      },
      {
        slug: 'confirmed',
        name: 'Confirmed',
        description: null,
        isAffirmative: false,
        isAssigned: false,
        isCheckin: false,
        isConfirmed: true,
        isCreated: false,
        isLeaveBehind: false,
        isPurchased: false,
        isRegistered: false,
        isRemoved: false,
        isUpdated: false,
        isAffirmativeSMS: false,
        isUpdatedSMS: false,
        isCreatedSMS: false,
      },
      {
        slug: 'created',
        name: 'Created',
        description: null,
        isAffirmative: false,
        isAssigned: false,
        isCheckin: false,
        isConfirmed: false,
        isCreated: true,
        isLeaveBehind: false,
        isPurchased: false,
        isRegistered: false,
        isRemoved: false,
        isUpdated: false,
        isAffirmativeSMS: false,
        isUpdatedSMS: false,
        isCreatedSMS: false,
      },
      {
        slug: 'leave-behind',
        name: 'Leave Behind',
        description: null,
        isAffirmative: false,
        isAssigned: false,
        isCheckin: false,
        isConfirmed: false,
        isCreated: false,
        isLeaveBehind: true,
        isPurchased: false,
        isRegistered: false,
        isRemoved: false,
        isUpdated: false,
        isAffirmativeSMS: false,
        isUpdatedSMS: false,
        isCreatedSMS: false,
      },
      {
        slug: 'purchased',
        name: 'Purchased',
        description: null,
        isAffirmative: false,
        isAssigned: false,
        isCheckin: false,
        isConfirmed: false,
        isCreated: false,
        isLeaveBehind: false,
        isPurchased: true,
        isRegistered: false,
        isRemoved: false,
        isUpdated: false,
        isAffirmativeSMS: false,
        isUpdatedSMS: false,
        isCreatedSMS: false,
      },
      {
        slug: 'registered',
        name: 'Registered',
        description: null,
        isAffirmative: false,
        isAssigned: false,
        isCheckin: false,
        isConfirmed: false,
        isCreated: false,
        isLeaveBehind: false,
        isPurchased: false,
        isRegistered: true,
        isRemoved: false,
        isUpdated: false,
        isAffirmativeSMS: false,
        isUpdatedSMS: false,
        isCreatedSMS: false,
      },
      {
        slug: 'removed',
        name: 'Removed',
        description: null,
        isAffirmative: false,
        isAssigned: false,
        isCheckin: false,
        isConfirmed: false,
        isCreated: false,
        isLeaveBehind: false,
        isPurchased: false,
        isRegistered: false,
        isRemoved: true,
        isUpdated: false,
        isAffirmativeSMS: false,
        isUpdatedSMS: false,
        isCreatedSMS: false,
      },
      {
        slug: 'updated',
        name: 'Updated',
        description: null,
        isAffirmative: false,
        isAssigned: false,
        isCheckin: false,
        isConfirmed: false,
        isCreated: false,
        isLeaveBehind: false,
        isPurchased: false,
        isRegistered: false,
        isRemoved: false,
        isUpdated: true,
        isAffirmativeSMS: false,
        isUpdatedSMS: false,
        isCreatedSMS: false,
      },
      {
        slug: 'affirmative-sms',
        name: 'Affirmative SMS',
        description: null,
        isAffirmative: false,
        isAssigned: false,
        isCheckin: false,
        isConfirmed: false,
        isCreated: false,
        isLeaveBehind: false,
        isPurchased: false,
        isRegistered: false,
        isRemoved: false,
        isUpdated: false,
        isAffirmativeSMS: true,
        isUpdatedSMS: false,
        isCreatedSMS: false,
      },
      {
        slug: 'updated-sms',
        name: 'Updated SMS',
        description: null,
        isAffirmative: false,
        isAssigned: false,
        isCheckin: false,
        isConfirmed: false,
        isCreated: false,
        isLeaveBehind: false,
        isPurchased: false,
        isRegistered: false,
        isRemoved: false,
        isUpdated: false,
        isAffirmativeSMS: false,
        isUpdatedSMS: true,
        isCreatedSMS: false,
      },
      {
        slug: 'created-sms',
        name: 'Created SMS',
        description: null,
        isAffirmative: false,
        isAssigned: false,
        isCheckin: false,
        isConfirmed: false,
        isCreated: false,
        isLeaveBehind: false,
        isPurchased: false,
        isRegistered: false,
        isRemoved: false,
        isUpdated: false,
        isAffirmativeSMS: false,
        isUpdatedSMS: false,
        isCreatedSMS: true,
      },
    ];
  }
}
