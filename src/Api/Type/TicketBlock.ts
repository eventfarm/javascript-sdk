/**
 * This file was auto generated, please do not edit it directly.
 **/
export interface TicketBlockTypeInterface {
  slug: string;
  name: string;
  description?: string;
  isStandard: boolean;
  isSession: boolean;
}

export class TicketBlock {
  TicketBlockType(): TicketBlockTypeInterface[] {
    return [
      {
        slug: 'standard',
        name: 'Standard Ticket Block',
        description: null,
        isStandard: true,
        isSession: false,
      },
      {
        slug: 'session',
        name: 'Session Ticket Block',
        description: null,
        isStandard: false,
        isSession: true,
      },
    ];
  }
}
