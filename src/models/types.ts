export interface IHomeState {
  listOfCountries: ICountriesList[];
  searchInput: string;
}

export interface SidebarProps {
  startResearchByCountries: any;
}

export interface SelectProps {
  startResearchByRegion: any;
}

export type CountryProps = ICountriesList;

export interface ICountryDetail extends ICountriesList {
  nativeName: string;
  subregion: string;
  flags: {
    png: string;
  };
  topLevelDomain: [string];
  currencies: [
    {
      name: string;
    }
  ];
  languages: [
    {
      name: string;
    }
  ];
  borders: [string];
}

export interface ICardDetails extends ICountriesList {
  nativeName: string;
  subregion: string;
  topLevelDomain: string;
  currencie: [
    {
      name: string;
    }
  ];
  languages: [
    {
      name: string;
    }
  ];

  borders: [string];
}

export interface ICountriesList {
  flag: string;
  name: string;
  region: string;
  capital: string;
  population: number;
}
