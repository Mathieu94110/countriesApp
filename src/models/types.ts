export interface IHomeState {
  listOfCountries: ICountriesList[];
  searchInput: string;
  filteredList: ICountriesList[];
}

export interface SidebarProps {
  startResearch: any;
}

export type ICountriesList = {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
};

export type CountryProps = ICountriesList;
