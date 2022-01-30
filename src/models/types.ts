export interface IHomeState {
  listOfCountries: ICountriesList[];
  searchInput: string;
  filteredList: ICountriesList[];
  listByRegions: ICountriesList[];
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
