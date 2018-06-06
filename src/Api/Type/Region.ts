export interface RegionTypeInterface {
    slug: string;
    name: string;
    description?: string;
    isAfrica: boolean;
    isAntarctica: boolean;
    isAsia: boolean;
    isEurope: boolean;
    isNorthAmerica: boolean;
    isOceania: boolean;
    isSouthAmerica: boolean;
}

export class Region {
    RegionType(): RegionTypeInterface[] {
        return [
            {
                'slug': 'africa',
                'name': 'Africa',
                'description': null,
                'isAfrica': true,
                'isAntarctica': false,
                'isAsia': false,
                'isEurope': false,
                'isNorthAmerica': false,
                'isOceania': false,
                'isSouthAmerica': false,
            },
            {
                'slug': 'antarctica',
                'name': 'Antarctica',
                'description': null,
                'isAfrica': false,
                'isAntarctica': true,
                'isAsia': false,
                'isEurope': false,
                'isNorthAmerica': false,
                'isOceania': false,
                'isSouthAmerica': false,
            },
            {
                'slug': 'asia',
                'name': 'Asia',
                'description': null,
                'isAfrica': false,
                'isAntarctica': false,
                'isAsia': true,
                'isEurope': false,
                'isNorthAmerica': false,
                'isOceania': false,
                'isSouthAmerica': false,
            },
            {
                'slug': 'europe',
                'name': 'Europe',
                'description': null,
                'isAfrica': false,
                'isAntarctica': false,
                'isAsia': false,
                'isEurope': true,
                'isNorthAmerica': false,
                'isOceania': false,
                'isSouthAmerica': false,
            },
            {
                'slug': 'north-america',
                'name': 'North America',
                'description': null,
                'isAfrica': false,
                'isAntarctica': false,
                'isAsia': false,
                'isEurope': false,
                'isNorthAmerica': true,
                'isOceania': false,
                'isSouthAmerica': false,
            },
            {
                'slug': 'oceania',
                'name': 'Oceania',
                'description': null,
                'isAfrica': false,
                'isAntarctica': false,
                'isAsia': false,
                'isEurope': false,
                'isNorthAmerica': false,
                'isOceania': true,
                'isSouthAmerica': false,
            },
            {
                'slug': 'south-america',
                'name': 'South America',
                'description': null,
                'isAfrica': false,
                'isAntarctica': false,
                'isAsia': false,
                'isEurope': false,
                'isNorthAmerica': false,
                'isOceania': false,
                'isSouthAmerica': true,
            },
        ];
    }
}
