/**
 * This file was auto generated, please do not edit it directly.
 **/
export interface ActivityLogActionTypeInterface {
  slug: string;
  name: string;
  description?: string;
  isAdded: boolean;
  isCreated: boolean;
  isAddedToTransaction: boolean;
  isAddedToWebConference: boolean;
  isAddedToWorld: boolean;
  isUpdatedForWorld: boolean;
  isChangedRoleForWorld: boolean;
  isChangedTeamIdForWorld: boolean;
  isChangedTitleForWorld: boolean;
  isCheckIn: boolean;
  isInteracted: boolean;
  isEmail: boolean;
  isRemoved: boolean;
  isResponded: boolean;
  isUpdated: boolean;
  isTransferred: boolean;
}

export class ActivityLog {
  ActivityLogActionType(): ActivityLogActionTypeInterface[] {
    return [
      {
        slug: 'added',
        name: 'Added',
        description: null,
        isAdded: true,
        isCreated: false,
        isAddedToTransaction: false,
        isAddedToWebConference: false,
        isAddedToWorld: false,
        isUpdatedForWorld: false,
        isChangedRoleForWorld: false,
        isChangedTeamIdForWorld: false,
        isChangedTitleForWorld: false,
        isCheckIn: false,
        isInteracted: false,
        isEmail: false,
        isRemoved: false,
        isResponded: false,
        isUpdated: false,
        isTransferred: false,
      },
      {
        slug: 'created',
        name: 'Created',
        description: null,
        isAdded: false,
        isCreated: true,
        isAddedToTransaction: false,
        isAddedToWebConference: false,
        isAddedToWorld: false,
        isUpdatedForWorld: false,
        isChangedRoleForWorld: false,
        isChangedTeamIdForWorld: false,
        isChangedTitleForWorld: false,
        isCheckIn: false,
        isInteracted: false,
        isEmail: false,
        isRemoved: false,
        isResponded: true,
        isUpdated: false,
        isTransferred: false,
      },
      {
        slug: 'added-to-transaction',
        name: 'Added To Transaction',
        description: null,
        isAdded: false,
        isCreated: false,
        isAddedToTransaction: true,
        isAddedToWebConference: false,
        isAddedToWorld: false,
        isUpdatedForWorld: false,
        isChangedRoleForWorld: false,
        isChangedTeamIdForWorld: false,
        isChangedTitleForWorld: false,
        isCheckIn: false,
        isInteracted: false,
        isEmail: false,
        isRemoved: false,
        isResponded: false,
        isUpdated: false,
        isTransferred: false,
      },
      {
        slug: 'added-to-web-conference',
        name: 'Added To Web Conference',
        description: null,
        isAdded: false,
        isCreated: false,
        isAddedToTransaction: false,
        isAddedToWebConference: true,
        isAddedToWorld: false,
        isUpdatedForWorld: false,
        isChangedRoleForWorld: false,
        isChangedTeamIdForWorld: false,
        isChangedTitleForWorld: false,
        isCheckIn: false,
        isInteracted: false,
        isEmail: false,
        isRemoved: false,
        isResponded: false,
        isUpdated: false,
        isTransferred: false,
      },
      {
        slug: 'added-to-world',
        name: 'Added To World',
        description: null,
        isAdded: false,
        isCreated: false,
        isAddedToTransaction: false,
        isAddedToWebConference: false,
        isAddedToWorld: true,
        isUpdatedForWorld: false,
        isChangedRoleForWorld: false,
        isChangedTeamIdForWorld: false,
        isChangedTitleForWorld: false,
        isCheckIn: false,
        isInteracted: false,
        isEmail: false,
        isRemoved: false,
        isResponded: false,
        isUpdated: false,
        isTransferred: false,
      },
      {
        slug: 'updated-for-world',
        name: 'Updated For World',
        description: null,
        isAdded: false,
        isCreated: false,
        isAddedToTransaction: false,
        isAddedToWebConference: false,
        isAddedToWorld: false,
        isUpdatedForWorld: true,
        isChangedRoleForWorld: false,
        isChangedTeamIdForWorld: false,
        isChangedTitleForWorld: false,
        isCheckIn: false,
        isInteracted: false,
        isEmail: false,
        isRemoved: false,
        isResponded: false,
        isUpdated: false,
        isTransferred: false,
      },
      {
        slug: 'changed-role-for-world',
        name: 'Changed Role For World',
        description: null,
        isAdded: false,
        isCreated: false,
        isAddedToTransaction: false,
        isAddedToWebConference: false,
        isAddedToWorld: false,
        isUpdatedForWorld: false,
        isChangedRoleForWorld: true,
        isChangedTeamIdForWorld: false,
        isChangedTitleForWorld: false,
        isCheckIn: false,
        isInteracted: false,
        isEmail: false,
        isRemoved: false,
        isResponded: false,
        isUpdated: false,
        isTransferred: false,
      },
      {
        slug: 'changed-team-id-for-world',
        name: 'Changed Team Id For World',
        description: null,
        isAdded: false,
        isCreated: false,
        isAddedToTransaction: false,
        isAddedToWebConference: false,
        isAddedToWorld: false,
        isUpdatedForWorld: false,
        isChangedRoleForWorld: false,
        isChangedTeamIdForWorld: true,
        isChangedTitleForWorld: false,
        isCheckIn: false,
        isInteracted: false,
        isEmail: false,
        isRemoved: false,
        isResponded: false,
        isUpdated: false,
        isTransferred: false,
      },
      {
        slug: 'changed-title-for-world',
        name: 'Changed Title For World',
        description: null,
        isAdded: false,
        isCreated: false,
        isAddedToTransaction: false,
        isAddedToWebConference: false,
        isAddedToWorld: false,
        isUpdatedForWorld: false,
        isChangedRoleForWorld: false,
        isChangedTeamIdForWorld: false,
        isChangedTitleForWorld: true,
        isCheckIn: false,
        isInteracted: false,
        isEmail: false,
        isRemoved: false,
        isResponded: false,
        isUpdated: false,
        isTransferred: false,
      },
      {
        slug: 'check-in',
        name: 'Check-In',
        description: null,
        isAdded: false,
        isCreated: false,
        isAddedToTransaction: false,
        isAddedToWebConference: false,
        isAddedToWorld: false,
        isUpdatedForWorld: false,
        isChangedRoleForWorld: false,
        isChangedTeamIdForWorld: false,
        isChangedTitleForWorld: false,
        isCheckIn: true,
        isInteracted: false,
        isEmail: false,
        isRemoved: false,
        isResponded: false,
        isUpdated: false,
        isTransferred: false,
      },
      {
        slug: 'interacted',
        name: 'Interacted',
        description: null,
        isAdded: false,
        isCreated: false,
        isAddedToTransaction: false,
        isAddedToWebConference: false,
        isAddedToWorld: false,
        isUpdatedForWorld: false,
        isChangedRoleForWorld: false,
        isChangedTeamIdForWorld: false,
        isChangedTitleForWorld: false,
        isCheckIn: false,
        isInteracted: true,
        isEmail: false,
        isRemoved: false,
        isResponded: false,
        isUpdated: false,
        isTransferred: false,
      },
      {
        slug: 'email',
        name: 'Email',
        description: null,
        isAdded: false,
        isCreated: false,
        isAddedToTransaction: false,
        isAddedToWebConference: false,
        isAddedToWorld: false,
        isUpdatedForWorld: false,
        isChangedRoleForWorld: false,
        isChangedTeamIdForWorld: false,
        isChangedTitleForWorld: false,
        isCheckIn: false,
        isInteracted: false,
        isEmail: true,
        isRemoved: false,
        isResponded: false,
        isUpdated: false,
        isTransferred: false,
      },
      {
        slug: 'removed',
        name: 'Removed',
        description: null,
        isAdded: false,
        isCreated: false,
        isAddedToTransaction: false,
        isAddedToWebConference: false,
        isAddedToWorld: false,
        isUpdatedForWorld: false,
        isChangedRoleForWorld: false,
        isChangedTeamIdForWorld: false,
        isChangedTitleForWorld: false,
        isCheckIn: false,
        isInteracted: false,
        isEmail: false,
        isRemoved: true,
        isResponded: false,
        isUpdated: false,
        isTransferred: false,
      },
      {
        slug: 'responded',
        name: 'Responded',
        description: null,
        isAdded: false,
        isCreated: false,
        isAddedToTransaction: false,
        isAddedToWebConference: false,
        isAddedToWorld: false,
        isUpdatedForWorld: false,
        isChangedRoleForWorld: false,
        isChangedTeamIdForWorld: false,
        isChangedTitleForWorld: false,
        isCheckIn: false,
        isInteracted: false,
        isEmail: false,
        isRemoved: false,
        isResponded: false,
        isUpdated: false,
        isTransferred: false,
      },
      {
        slug: 'updated',
        name: 'Updated',
        description: null,
        isAdded: false,
        isCreated: false,
        isAddedToTransaction: false,
        isAddedToWebConference: false,
        isAddedToWorld: false,
        isUpdatedForWorld: false,
        isChangedRoleForWorld: false,
        isChangedTeamIdForWorld: false,
        isChangedTitleForWorld: false,
        isCheckIn: false,
        isInteracted: false,
        isEmail: false,
        isRemoved: false,
        isResponded: false,
        isUpdated: true,
        isTransferred: false,
      },
      {
        slug: 'transferred',
        name: 'Transferred',
        description: null,
        isAdded: false,
        isCreated: false,
        isAddedToTransaction: false,
        isAddedToWebConference: false,
        isAddedToWorld: false,
        isUpdatedForWorld: false,
        isChangedRoleForWorld: false,
        isChangedTeamIdForWorld: false,
        isChangedTitleForWorld: false,
        isCheckIn: false,
        isInteracted: false,
        isEmail: false,
        isRemoved: false,
        isResponded: false,
        isUpdated: false,
        isTransferred: true,
      },
    ];
  }
}
