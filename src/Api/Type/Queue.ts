export interface QueueCommandMessageLevelTypeInterface {
    slug: string;
    name: string;
    description?: string;
    isError: boolean;
    isWarning: boolean;
    isInfo: boolean;
}
export interface QueueTaskMessageLevelTypeInterface {
    slug: string;
    name: string;
    description?: string;
    isError: boolean;
    isWarning: boolean;
    isInfo: boolean;
}

export class Queue {
    QueueCommandMessageLevelType(): QueueCommandMessageLevelTypeInterface[] {
        return [
            {
                'slug': 'error',
                'name': 'Error',
                'description': null,
                'isError': true,
                'isWarning': false,
                'isInfo': false,
            },
            {
                'slug': 'warning',
                'name': 'Warning',
                'description': null,
                'isError': false,
                'isWarning': true,
                'isInfo': false,
            },
            {
                'slug': 'info',
                'name': 'Info',
                'description': null,
                'isError': false,
                'isWarning': false,
                'isInfo': true,
            },
        ];
    }

    QueueTaskMessageLevelType(): QueueTaskMessageLevelTypeInterface[] {
        return [
            {
                'slug': 'error',
                'name': 'Error',
                'description': null,
                'isError': true,
                'isWarning': false,
                'isInfo': false,
            },
            {
                'slug': 'warning',
                'name': 'Warning',
                'description': null,
                'isError': false,
                'isWarning': true,
                'isInfo': false,
            },
            {
                'slug': 'info',
                'name': 'Info',
                'description': null,
                'isError': false,
                'isWarning': false,
                'isInfo': true,
            },
        ];
    }
}
