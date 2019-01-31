/**
 * This file was auto generated, please do not edit it directly.
 **/
export interface ReportFormatTypeInterface {
  slug: string;
  name: string;
  description?: string;
  isCsv: boolean;
  isHtml: boolean;
  isPdf: boolean;
  isZip: boolean;
}
export interface ReportStatusTypeInterface {
  slug: string;
  name: string;
  description?: string;
  isNew: boolean;
  isPending: boolean;
  isDone: boolean;
  isError: boolean;
}
export interface ReportTypeInterface {
  slug: string;
  name: string;
  description?: string;
  isInvitation: boolean;
  isConfirmed: boolean;
  isUnconfirmed: boolean;
  isPurchased: boolean;
  isWaitlist: boolean;
  isCheckin: boolean;
  isTransfer: boolean;
  isTicketblockUsers: boolean;
  isEmailDeliverability: boolean;
  isSentEmails: boolean;
  isWaiver: boolean;
  isActivityLog: boolean;
  isAdminEvents: boolean;
}

export class Report {
  ReportFormatType(): ReportFormatTypeInterface[] {
    return [
      {
        slug: 'csv',
        name: 'csv',
        description: 'csv',
        isCsv: true,
        isHtml: false,
        isPdf: false,
        isZip: false,
      },
      {
        slug: 'html',
        name: 'html',
        description: 'html',
        isCsv: false,
        isHtml: true,
        isPdf: false,
        isZip: false,
      },
      {
        slug: 'pdf',
        name: 'pdf',
        description: 'pdf',
        isCsv: false,
        isHtml: false,
        isPdf: true,
        isZip: false,
      },
      {
        slug: 'zip',
        name: 'zip',
        description: 'zip',
        isCsv: false,
        isHtml: false,
        isPdf: false,
        isZip: true,
      },
    ];
  }

  ReportStatusType(): ReportStatusTypeInterface[] {
    return [
      {
        slug: 'new',
        name: 'New',
        description: null,
        isNew: true,
        isPending: false,
        isDone: false,
        isError: false,
      },
      {
        slug: 'pending',
        name: 'Pending',
        description: null,
        isNew: false,
        isPending: true,
        isDone: false,
        isError: false,
      },
      {
        slug: 'done',
        name: 'Done',
        description: null,
        isNew: false,
        isPending: false,
        isDone: true,
        isError: false,
      },
      {
        slug: 'error',
        name: 'Error',
        description: null,
        isNew: false,
        isPending: false,
        isDone: false,
        isError: true,
      },
    ];
  }

  ReportType(): ReportTypeInterface[] {
    return [
      {
        slug: 'invitation',
        name: 'Invitation',
        description: 'Guest Summary Report',
        isInvitation: true,
        isConfirmed: false,
        isUnconfirmed: false,
        isPurchased: false,
        isWaitlist: false,
        isCheckin: false,
        isTransfer: false,
        isTicketblockUsers: false,
        isEmailDeliverability: false,
        isSentEmails: false,
        isWaiver: false,
        isActivityLog: false,
        isAdminEvents: false,
      },
      {
        slug: 'confirmed',
        name: 'Confirmed',
        description: 'Confirmed Guest List',
        isInvitation: false,
        isConfirmed: true,
        isUnconfirmed: false,
        isPurchased: false,
        isWaitlist: false,
        isCheckin: false,
        isTransfer: false,
        isTicketblockUsers: false,
        isEmailDeliverability: false,
        isSentEmails: false,
        isWaiver: false,
        isActivityLog: false,
        isAdminEvents: false,
      },
      {
        slug: 'unconfirmed',
        name: 'Unconfirmed',
        description: 'Unconfirmed Guest List',
        isInvitation: false,
        isConfirmed: false,
        isUnconfirmed: true,
        isPurchased: false,
        isWaitlist: false,
        isCheckin: false,
        isTransfer: false,
        isTicketblockUsers: false,
        isEmailDeliverability: false,
        isSentEmails: false,
        isWaiver: false,
        isActivityLog: false,
        isAdminEvents: false,
      },
      {
        slug: 'purchase',
        name: 'Purchased',
        description: 'Ticket Purchase List',
        isInvitation: false,
        isConfirmed: false,
        isUnconfirmed: false,
        isPurchased: true,
        isWaitlist: false,
        isCheckin: false,
        isTransfer: false,
        isTicketblockUsers: false,
        isEmailDeliverability: false,
        isSentEmails: false,
        isWaiver: false,
        isActivityLog: false,
        isAdminEvents: false,
      },
      {
        slug: 'waitlist',
        name: 'Waitlist',
        description: 'Event Wait List',
        isInvitation: false,
        isConfirmed: false,
        isUnconfirmed: false,
        isPurchased: false,
        isWaitlist: true,
        isCheckin: false,
        isTransfer: false,
        isTicketblockUsers: false,
        isEmailDeliverability: false,
        isSentEmails: false,
        isWaiver: false,
        isActivityLog: false,
        isAdminEvents: false,
      },
      {
        slug: 'checkin',
        name: 'Check In',
        description: 'Check In Report',
        isInvitation: false,
        isConfirmed: false,
        isUnconfirmed: false,
        isPurchased: false,
        isWaitlist: false,
        isCheckin: true,
        isTransfer: false,
        isTicketblockUsers: false,
        isEmailDeliverability: false,
        isSentEmails: false,
        isWaiver: false,
        isActivityLog: false,
        isAdminEvents: false,
      },
      {
        slug: 'transfer',
        name: 'Transfer',
        description: 'Event Transfer List',
        isInvitation: false,
        isConfirmed: false,
        isUnconfirmed: false,
        isPurchased: false,
        isWaitlist: false,
        isCheckin: false,
        isTransfer: true,
        isTicketblockUsers: false,
        isEmailDeliverability: false,
        isSentEmails: false,
        isWaiver: false,
        isActivityLog: false,
        isAdminEvents: false,
      },
      {
        slug: 'ticketblock',
        name: 'Ticketblock Users',
        description: 'Ticket Block User List',
        isInvitation: false,
        isConfirmed: false,
        isUnconfirmed: false,
        isPurchased: false,
        isWaitlist: false,
        isCheckin: false,
        isTransfer: false,
        isTicketblockUsers: true,
        isEmailDeliverability: false,
        isSentEmails: false,
        isWaiver: false,
        isActivityLog: false,
        isAdminEvents: false,
      },
      {
        slug: 'email',
        name: 'Email Deliverability',
        description: 'Email Deliverability Report',
        isInvitation: false,
        isConfirmed: false,
        isUnconfirmed: false,
        isPurchased: false,
        isWaitlist: false,
        isCheckin: false,
        isTransfer: false,
        isTicketblockUsers: false,
        isEmailDeliverability: true,
        isSentEmails: false,
        isWaiver: false,
        isActivityLog: false,
        isAdminEvents: false,
      },
      {
        slug: 'sent',
        name: 'Sent Emails',
        description: 'Event Sent Email Report',
        isInvitation: false,
        isConfirmed: false,
        isUnconfirmed: false,
        isPurchased: false,
        isWaitlist: false,
        isCheckin: false,
        isTransfer: false,
        isTicketblockUsers: false,
        isEmailDeliverability: false,
        isSentEmails: true,
        isWaiver: false,
        isActivityLog: false,
        isAdminEvents: false,
      },
      {
        slug: 'waiver',
        name: 'Waiver',
        description: 'Event Waiver Agreements',
        isInvitation: false,
        isConfirmed: false,
        isUnconfirmed: false,
        isPurchased: false,
        isWaitlist: false,
        isCheckin: false,
        isTransfer: false,
        isTicketblockUsers: false,
        isEmailDeliverability: false,
        isSentEmails: false,
        isWaiver: true,
        isActivityLog: false,
        isAdminEvents: false,
      },
      {
        slug: 'activitylog',
        name: 'Activity Log',
        description: 'Log of Events Activities',
        isInvitation: false,
        isConfirmed: false,
        isUnconfirmed: false,
        isPurchased: false,
        isWaitlist: false,
        isCheckin: false,
        isTransfer: false,
        isTicketblockUsers: false,
        isEmailDeliverability: false,
        isSentEmails: false,
        isWaiver: false,
        isActivityLog: true,
        isAdminEvents: false,
      },
      {
        slug: 'adminevents',
        name: 'Admin Events',
        description: 'Admin Event List',
        isInvitation: false,
        isConfirmed: false,
        isUnconfirmed: false,
        isPurchased: false,
        isWaitlist: false,
        isCheckin: false,
        isTransfer: false,
        isTicketblockUsers: false,
        isEmailDeliverability: false,
        isSentEmails: false,
        isWaiver: false,
        isActivityLog: false,
        isAdminEvents: true,
      },
    ];
  }
}
