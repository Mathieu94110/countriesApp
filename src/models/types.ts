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

export type ICountriesList = {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
};

export type CountryProps = ICountriesList;
