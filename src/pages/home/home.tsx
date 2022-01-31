import React from "react";
import { CountryList } from "../../components/countryList/countryList";
import SearchBar from "../../components/searchbar/searchbar";
import "./home.scss";
import { IHomeState } from "../../models/types";
import { ICountriesList } from "../../models/types";
import FilterByRegion from "../../components/filterByRegion/filterByRegion";

export class Home extends React.Component<any, IHomeState> {
  constructor(props: any) {
    super(props);
    this.state = {
      listOfCountries: [],
      searchInput: "",
      filteredList: [],
      listByRegions: [],
    };
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData = async (): Promise<void> => {
    try {
      const countriesList = await fetch("https://restcountries.com/v2/all");
      const formattedcountriesList = await countriesList.json();
      this.setState({ listOfCountries: formattedcountriesList });
    } catch (error) {
      console.error(error);
    }
  };

  refreshPage = () => {
    window.location.reload();
  };

  handleSearchCallback = (searchedCountry: string): void => {
    this.setState({ searchInput: searchedCountry });

    if (this.state.searchInput.length > 1) {
      const filteredCountries = this.state.listOfCountries.filter(
        (country: ICountriesList) =>
          Object.values(country.name)
            .join("")
            .toLowerCase()
            .includes(searchedCountry.toString().toLowerCase())
      );
      this.setState({ filteredList: filteredCountries });
    } else if (
      this.state.filteredList.length > 1 &&
      this.state.searchInput.length === 0
    ) {
      this.refreshPage();
    } else {
      this.setState({ filteredList: [] });
    }
  };

  handleSelectCallback = (searchedRegion: any): void => {
    this.setState({ listByRegions: searchedRegion });
  };

  render() {
    return (
      <div className="homeContainer">
        <div className="researches-container">
          <SearchBar startResearchByCountries={this.handleSearchCallback} />
          <FilterByRegion startResearchByRegion={this.handleSelectCallback} />
        </div>

        <CountryList
          allCountries={this.state.listOfCountries}
          filteredCountries={this.state.filteredList}
          byRegions={this.state.listByRegions}
        />
      </div>
    );
  }
}
