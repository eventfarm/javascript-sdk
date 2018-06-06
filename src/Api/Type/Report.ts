export interface ReportFormatTypeInterface {
    slug: string;
    name: string;
    description?: string;
    isCsv: boolean;
    isHtml: boolean;
    isPdf: boolean;
    isZip: boolean;
}
export interface ReportTypeInterface {
    slug: string;
    name: string;
    description?: string;
    isInvitation: boolean;
}

export class Report {
    ReportFormatType(): ReportFormatTypeInterface[] {
        return [
            {
                'slug': 'csv',
                'name': 'csv',
                'description': 'csv',
                'isCsv': true,
                'isHtml': false,
                'isPdf': false,
                'isZip': false,
            },
            {
                'slug': 'html',
                'name': 'html',
                'description': 'html',
                'isCsv': false,
                'isHtml': true,
                'isPdf': false,
                'isZip': false,
            },
            {
                'slug': 'pdf',
                'name': 'pdf',
                'description': 'pdf',
                'isCsv': false,
                'isHtml': false,
                'isPdf': true,
                'isZip': false,
            },
            {
                'slug': 'zip',
                'name': 'zip',
                'description': 'zip',
                'isCsv': false,
                'isHtml': false,
                'isPdf': false,
                'isZip': true,
            },
        ];
    }

    ReportType(): ReportTypeInterface[] {
        return [
            {
                'slug': 'invitation',
                'name': 'Invitation',
                'description': 'Guest Summary Report',
                'isInvitation': true,
            },
        ];
    }
}
