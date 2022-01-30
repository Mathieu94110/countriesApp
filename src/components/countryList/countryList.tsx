import "./countryList.scss";
import React, {useEffect } from "react";
import { CountryCard } from "../countryCard/countryCard";
import { ICountriesList } from "../../models/types";

export const CountryList = ({
  allCountries,
  filteredCountries,
}: {
  allCountries: ICountriesList[] | [];
  filteredCountries: ICountriesList[] | [];
}) => {
  useEffect(() => {
    console.log(allCountries);
  });

  if (!filteredCountries.length) {
    return (
      <div className="countriesListContainer">
        {allCountries.map((country: ICountriesList, id: number) => (
          <CountryCard
            key={id}
            flag={country.flag}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div className="countriesListContainer">
        {filteredCountries.map((country: ICountriesList, id: number) => (
          <CountryCard
            key={id}
            flag={country.flag}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        ))}
      </div>
    );
  }
};
