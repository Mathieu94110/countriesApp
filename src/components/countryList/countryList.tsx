import "./countryList.scss";
import React, { useEffect } from "react";
import { CountryCard } from "../countryCard/countryCard";
import { ICountriesList } from "../../models/types";
import { Link, NavLink } from "react-router-dom";

export const CountryList = ({
  allCountries,
  filteredCountries,
}: {
  allCountries: ICountriesList[] | [];
  filteredCountries: ICountriesList[] | [];
}) => {
  useEffect(() => {
    // console.log(allCountries);
  });

  if (!filteredCountries.length) {
    return (
      <div className="countriesListContainer">
        {allCountries.map((country: ICountriesList, id: number) => (
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
        {filteredCountries.map((country: ICountriesList) => (
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
  }
};
