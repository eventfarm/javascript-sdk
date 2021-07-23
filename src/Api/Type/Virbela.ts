/**
 * This file was auto generated, please do not edit it directly.
 **/
export interface VirbelaRoleTypeInterface {
  slug: string;
  name: string;
  description?: string;
  isMember: boolean;
  isAdmin: boolean;
  isSuspended: boolean;
  isModerator: boolean;
  isLeader: boolean;
}

export class Virbela {
  VirbelaRoleType(): VirbelaRoleTypeInterface[] {
    return [
      {
        slug: 'member',
        name: 'Member',
        description: null,
        isMember: true,
        isAdmin: false,
        isSuspended: false,
        isModerator: false,
        isLeader: false,
      },
      {
        slug: 'moderator',
        name: 'Moderator',
        description: null,
        isMember: false,
        isAdmin: false,
        isSuspended: false,
        isModerator: true,
        isLeader: false,
      },
      {
        slug: 'admin',
        name: 'Admin',
        description: null,
        isMember: false,
        isAdmin: true,
        isSuspended: false,
        isModerator: false,
        isLeader: false,
      },
      {
        slug: 'suspended',
        name: 'Suspended',
        description: null,
        isMember: false,
        isAdmin: false,
        isSuspended: true,
        isModerator: false,
        isLeader: false,
      },
      {
        slug: 'leader',
        name: 'Leader',
        description: null,
        isMember: false,
        isAdmin: false,
        isSuspended: false,
        isModerator: false,
        isLeader: true,
      },
    ];
  }
}
