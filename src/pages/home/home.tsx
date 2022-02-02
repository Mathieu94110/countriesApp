import React from "react";
import "./home.scss";
import { CountryList } from "../../components/countryList/countryList";
import SearchBar from "../../components/searchbar/searchbar";
import { IHomeState } from "../../models/types";
import FilterByRegion from "../../components/filterByRegion/filterByRegion";

export class Home extends React.Component<any, IHomeState> {
  constructor(props: any) {
    super(props);
    this.state = {
      listOfCountries: [],
      searchInput: "",
    };
  }

  componentDidMount() {
    this.fetchAllCountries();
  }

  fetchAllCountries = async (): Promise<void> => {
    try {
      const countriesList = await fetch("https://restcountries.com/v2/all");
      const formattedcountriesList = await countriesList.json();
      this.setState({ listOfCountries: formattedcountriesList });
    } catch (error) {
      console.error(error);
    }
  };

  handleSearchCallback = async (searchedCountry: string): Promise<void> => {
    if (searchedCountry.trim()) {
      try {
        const searchedCountries = await fetch(
          `https://restcountries.com/v2/name/${searchedCountry}`
        );
        const response = await searchedCountries.json();
        this.setState({ listOfCountries: response });
      } catch (error) {
        console.error(error);
      }
    } else {
      this.fetchAllCountries();
    }
  };

  handleSelectCallback = async (searchedRegion: string): Promise<void> => {
    if (searchedRegion.trim()) {
      try {
        const regionCountries = await fetch(
          `https://restcountries.com/v2/region/${searchedRegion}`
        );
        const response = await regionCountries.json();
        this.setState({ listOfCountries: response });
      } catch (error) {
        console.error(error);
      }
    } else {
      this.fetchAllCountries();
    }
  };

  render() {
    return (
      <div className="home-container">
        <div className="researches-container">
          <SearchBar startResearchByCountries={this.handleSearchCallback} />
          <FilterByRegion startResearchByRegion={this.handleSelectCallback} />
        </div>
        <CountryList allCountries={this.state.listOfCountries} />
      </div>
    );
  }
}
