import "./countryList.scss";
import React, { useEffect } from "react";
import { CountryCard } from "../countryCard/countryCard";
import { ICountriesList } from "../../models/types";
import { NavLink } from "react-router-dom";

export const CountryList = ({
  allCountries,
  filteredCountries,
  byRegions,
}: {
  allCountries: ICountriesList[] | [];
  filteredCountries: ICountriesList[] | [];
  byRegions: ICountriesList[] | [];
}) => {
  useEffect(() => {
    console.log("allCountries value =", allCountries);
    console.log("filteredCountries value =", filteredCountries);
    console.log("byRegions value =", byRegions);
  });

  if (byRegions.length) {
    return (
      <div className="countriesListContainer">
        {byRegions.map((country: ICountriesList) => (
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
  } else if (filteredCountries.length) {
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
  } else {
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
  }
};
