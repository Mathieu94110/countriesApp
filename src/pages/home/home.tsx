import React from "react";
import { CountryList } from "../../components/countryList/countryList";
import SearchBar from "../../components/searchbar/searchbar";
import "./home.scss";
import { IHomeState } from "../../models/types";
import { ICountriesList } from "../../models/types";

export class Home extends React.Component<any, IHomeState> {
  constructor(props: any) {
    super(props);
    this.state = {
      listOfCountries: [],
      searchInput: "",
      filteredList: [],
    };
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const countriesList = await fetch("https://restcountries.com/v2/all");
      const formattedcountriesList = await countriesList.json();
      console.log(formattedcountriesList);
      this.setState({ listOfCountries: formattedcountriesList });
    } catch (error) {
      console.error(error);
    }
  };

  handleCallback = (searchedCountry: string): void => {
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
    } else {
      this.setState({ filteredList: [] });
      this.fetchData();
    }
  };

  render() {
    return (
      <div className="homeContainer">
        <SearchBar startResearch={this.handleCallback} />
        <CountryList
          allCountries={this.state.listOfCountries}
          filteredCountries={this.state.filteredList}
        />
      </div>
    );
  }
}
