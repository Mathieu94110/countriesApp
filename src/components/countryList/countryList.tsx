import "./countryList.scss";
import React, { useEffect } from "react";
import { CountryCard } from "../countryCard/countryCard";
import { ICountriesList } from "../../models/types";
import { NavLink } from "react-router-dom";

export const CountryList = ({
  allCountries,
}: {
  allCountries: ICountriesList[] | [];
}) => {
  useEffect(() => {
    console.log("allCountries value =", allCountries);
  });

  if (allCountries.length) {
    return (
      <div className="countriesListContainer">
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
      <div className="countriesListContainer">
        <p>No received data from Api!</p>
      </div>
    );
  }
};
