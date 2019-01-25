/**
 * This file was auto generated, please do not edit it directly.
**/
export interface SitePageTemplateDifficultyTypeInterface {
    slug: string;
    name: string;
    description?: string;
    isCustom: boolean;
    isBeginner: boolean;
    isIntermediate: boolean;
    isAdvanced: boolean;
    isExpert: boolean;
}

export class SitePage {
    SitePageTemplateDifficultyType(): SitePageTemplateDifficultyTypeInterface[] {
        return [
            {
                'slug': 'custom',
                'name': 'Custom',
                'description': null,
                'isCustom': true,
                'isBeginner': false,
                'isIntermediate': false,
                'isAdvanced': false,
                'isExpert': false,
            },
            {
                'slug': 'beginner',
                'name': 'Beginner',
                'description': null,
                'isCustom': false,
                'isBeginner': true,
                'isIntermediate': false,
                'isAdvanced': false,
                'isExpert': false,
            },
            {
                'slug': 'intermediate',
                'name': 'Intermediate',
                'description': null,
                'isCustom': false,
                'isBeginner': false,
                'isIntermediate': true,
                'isAdvanced': false,
                'isExpert': false,
            },
            {
                'slug': 'advanced',
                'name': 'Advanced',
                'description': null,
                'isCustom': false,
                'isBeginner': false,
                'isIntermediate': false,
                'isAdvanced': true,
                'isExpert': false,
            },
            {
                'slug': 'expert',
                'name': 'Expert',
                'description': null,
                'isCustom': false,
                'isBeginner': false,
                'isIntermediate': false,
                'isAdvanced': false,
                'isExpert': true,
            },
        ];
    }
}
