import React from "react";
import { CountryList } from "../../components/countryList/countryList";
import "./home.scss";

/* type MyProps = {};
type MyState = {}; */

interface IState {
  listOfCountries: any;
}

export class Home extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      listOfCountries: [],
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

  render() {
    return (
      <div className="homeContainer">
  
        <CountryList allCountries={this.state.listOfCountries} />
      </div>
    );
  }
}
function componentDidMount() {
  throw new Error("Function not implemented.");
}
