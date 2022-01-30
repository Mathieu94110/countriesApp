import React from "react";
import { CountryList } from "../../components/countryList/countryList";
import SearchBar from "../../components/searchbar/searchbar";
import "./home.scss";

interface IState {
  listOfCountries: any;
  searchInput: string;
}

export class Home extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      listOfCountries: [],
      searchInput: "",
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

  handleCallback = (searchedCountry: string): any => {
    this.setState({ searchInput: searchedCountry });

    if (this.state.searchInput) {
      const filteredCountries = this.state.listOfCountries.filter(
        (country: any) =>
          Object.values(country.name)
            .join("")
            .toLowerCase()
            .includes(searchedCountry.toLowerCase())
      );
      this.setState({ listOfCountries: filteredCountries });
    } else {
      return;
    }
  };

  render() {
    return (
      <div className="homeContainer">
        <SearchBar startResearch={this.handleCallback} />
        <CountryList allCountries={this.state.listOfCountries} />
      </div>
    );
  }
}
