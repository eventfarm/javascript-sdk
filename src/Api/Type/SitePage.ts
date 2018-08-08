export interface SitePageTemplateDifficultyTypeInterface {
    slug: string;
    name: string;
    description?: string;
    isBeginner: boolean;
    isIntermediate: boolean;
    isAdvanced: boolean;
    isExpert: boolean;
}

export class SitePage {
    SitePageTemplateDifficultyType(): SitePageTemplateDifficultyTypeInterface[] {
        return [
            {
                'slug': 'beginner',
                'name': 'Beginner',
                'description': 'Beginner templates are for noobs',
                'isBeginner': true,
                'isIntermediate': false,
                'isAdvanced': false,
                'isExpert': false,
            },
            {
                'slug': 'intermediate',
                'name': 'Intermediate',
                'description': 'Intermediate templates are for noobs',
                'isBeginner': false,
                'isIntermediate': true,
                'isAdvanced': false,
                'isExpert': false,
            },
            {
                'slug': 'advanced',
                'name': 'Advanced',
                'description': 'Advanced templates are for noobs',
                'isBeginner': false,
                'isIntermediate': false,
                'isAdvanced': true,
                'isExpert': false,
            },
            {
                'slug': 'expert',
                'name': 'Expert',
                'description': 'Expert templates are for noobs',
                'isBeginner': false,
                'isIntermediate': false,
                'isAdvanced': false,
                'isExpert': true,
            },
        ];
    }
}
