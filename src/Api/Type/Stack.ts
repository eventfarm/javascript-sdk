/**
 * This file was auto generated, please do not edit it directly.
 **/
export interface EmailSendTypeInterface {
  slug: string;
  name: string;
  description?: string;
  isConfirm: boolean;
  isDecline: boolean;
  isInvite: boolean;
}
export interface StackMethodTypeInterface {
  slug: string;
  name: string;
  description?: string;
  isPublicRegistration: boolean;
  isPublicPurchase: boolean;
  isInviteToRegister: boolean;
  isInviteToPurchase: boolean;
  isInviteToRSVP: boolean;
  isInviteToRegisterFCFS: boolean;
  isInviteToPurchaseFCFS: boolean;
  isInviteToRSVPFCFS: boolean;
  isInvitation: boolean;
  isFirstComeFirstServe: boolean;
  isAnyInviteToPurchase: boolean;
  isAnyInviteToRegister: boolean;
  isAnyInviteToRSVP: boolean;
}

export class Stack {
  EmailSendType(): EmailSendTypeInterface[] {
    return [
      {
        slug: 'confirm',
        name: 'Confirmation Email',
        description: null,
        isConfirm: true,
        isDecline: false,
        isInvite: false,
      },
      {
        slug: 'decline',
        name: 'Declination Email',
        description: null,
        isConfirm: false,
        isDecline: true,
        isInvite: false,
      },
      {
        slug: 'invite',
        name: 'Invitation Email',
        description: null,
        isConfirm: false,
        isDecline: false,
        isInvite: true,
      },
    ];
  }

  StackMethodType(): StackMethodTypeInterface[] {
    return [
      {
        slug: 'public-registration',
        name: 'Public Registration',
        description: null,
        isPublicRegistration: true,
        isPublicPurchase: false,
        isInviteToRegister: false,
        isInviteToPurchase: false,
        isInviteToRSVP: false,
        isInviteToRegisterFCFS: false,
        isInviteToPurchaseFCFS: false,
        isInviteToRSVPFCFS: false,
        isInvitation: false,
        isFirstComeFirstServe: false,
        isAnyInviteToPurchase: false,
        isAnyInviteToRegister: false,
        isAnyInviteToRSVP: false,
      },
      {
        slug: 'public-purchase',
        name: 'Public Purchase',
        description: null,
        isPublicRegistration: false,
        isPublicPurchase: true,
        isInviteToRegister: false,
        isInviteToPurchase: false,
        isInviteToRSVP: false,
        isInviteToRegisterFCFS: false,
        isInviteToPurchaseFCFS: false,
        isInviteToRSVPFCFS: false,
        isInvitation: false,
        isFirstComeFirstServe: false,
        isAnyInviteToPurchase: false,
        isAnyInviteToRegister: false,
        isAnyInviteToRSVP: false,
      },
      {
        slug: 'invite-to-register',
        name: 'Invite to Register',
        description: null,
        isPublicRegistration: false,
        isPublicPurchase: false,
        isInviteToRegister: true,
        isInviteToPurchase: false,
        isInviteToRSVP: false,
        isInviteToRegisterFCFS: false,
        isInviteToPurchaseFCFS: false,
        isInviteToRSVPFCFS: false,
        isInvitation: true,
        isFirstComeFirstServe: false,
        isAnyInviteToPurchase: false,
        isAnyInviteToRegister: true,
        isAnyInviteToRSVP: false,
      },
      {
        slug: 'invite-to-purchase',
        name: 'Invite to Purchase',
        description: null,
        isPublicRegistration: false,
        isPublicPurchase: false,
        isInviteToRegister: false,
        isInviteToPurchase: true,
        isInviteToRSVP: false,
        isInviteToRegisterFCFS: false,
        isInviteToPurchaseFCFS: false,
        isInviteToRSVPFCFS: false,
        isInvitation: true,
        isFirstComeFirstServe: false,
        isAnyInviteToPurchase: true,
        isAnyInviteToRegister: false,
        isAnyInviteToRSVP: false,
      },
      {
        slug: 'invite-to-rsvp',
        name: 'Invite to RSVP',
        description: null,
        isPublicRegistration: false,
        isPublicPurchase: false,
        isInviteToRegister: false,
        isInviteToPurchase: false,
        isInviteToRSVP: true,
        isInviteToRegisterFCFS: false,
        isInviteToPurchaseFCFS: false,
        isInviteToRSVPFCFS: false,
        isInvitation: true,
        isFirstComeFirstServe: false,
        isAnyInviteToPurchase: false,
        isAnyInviteToRegister: false,
        isAnyInviteToRSVP: true,
      },
      {
        slug: 'invite-to-register-fcfs',
        name: 'Invite to Register (FCFS)',
        description: null,
        isPublicRegistration: false,
        isPublicPurchase: false,
        isInviteToRegister: false,
        isInviteToPurchase: false,
        isInviteToRSVP: false,
        isInviteToRegisterFCFS: true,
        isInviteToPurchaseFCFS: false,
        isInviteToRSVPFCFS: false,
        isInvitation: true,
        isFirstComeFirstServe: true,
        isAnyInviteToPurchase: false,
        isAnyInviteToRegister: true,
        isAnyInviteToRSVP: false,
      },
      {
        slug: 'invite-to-purchase-fcfs',
        name: 'Invite to Purchase (FCFS)',
        description: null,
        isPublicRegistration: false,
        isPublicPurchase: false,
        isInviteToRegister: false,
        isInviteToPurchase: false,
        isInviteToRSVP: false,
        isInviteToRegisterFCFS: false,
        isInviteToPurchaseFCFS: true,
        isInviteToRSVPFCFS: false,
        isInvitation: true,
        isFirstComeFirstServe: true,
        isAnyInviteToPurchase: true,
        isAnyInviteToRegister: false,
        isAnyInviteToRSVP: false,
      },
      {
        slug: 'invite-to-rsvp-fcfs',
        name: 'Invite to RSVP (FCFS)',
        description: null,
        isPublicRegistration: false,
        isPublicPurchase: false,
        isInviteToRegister: false,
        isInviteToPurchase: false,
        isInviteToRSVP: false,
        isInviteToRegisterFCFS: false,
        isInviteToPurchaseFCFS: false,
        isInviteToRSVPFCFS: true,
        isInvitation: true,
        isFirstComeFirstServe: true,
        isAnyInviteToPurchase: false,
        isAnyInviteToRegister: false,
        isAnyInviteToRSVP: true,
      },
    ];
  }
}
