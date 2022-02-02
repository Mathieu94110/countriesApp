import "./countryList.scss";
import React from "react";
import { CountryCard } from "../countryCard/countryCard";
import { ICountriesList } from "../../models/types";
import { NavLink } from "react-router-dom";

export const CountryList = ({
  allCountries,
}: {
  allCountries: ICountriesList[] | [];
}) => {
  if (allCountries.length) {
    return (
      <div className="countries-list-container">
        {allCountries.map((country: ICountriesList) => (
          <div key={country.name}>
            <NavLink to={`/details/${country.name}`}>
              <CountryCard
                flag={country.flag}
                name={country.name}
                population={country.population}
                region={country.region}
                capital={country.capital}
              />
            </NavLink>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="on-loading-container">
        <h2>Loading...</h2>
      </div>
    );
  }
};
