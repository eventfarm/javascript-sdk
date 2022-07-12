/**
 * This file was auto generated, please do not edit it directly.
 **/
export interface EventGroupStatusFilterTypeInterface {
  slug: string;
  name: string;
  description?: string;
  isHasInvitation: boolean;
  isDoesNotHaveInvitation: boolean;
}

export class Group {
  EventGroupStatusFilterType(): EventGroupStatusFilterTypeInterface[] {
    return [
      {
        slug: 'has_invitation',
        name: 'Contacts included on the guest list',
        description: null,
        isHasInvitation: true,
        isDoesNotHaveInvitation: false,
      },
      {
        slug: 'does_not_have_invitation',
        name: 'Contacts absent from the guest list',
        description: null,
        isHasInvitation: false,
        isDoesNotHaveInvitation: true,
      },
    ];
  }
}
