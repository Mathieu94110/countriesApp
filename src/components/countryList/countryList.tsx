import "./countryList.scss";
import React, { useState, useEffect } from "react";
import { CountryCard } from "../countryCard/countryCard";

type ICountriesList = {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
};

export const CountryList = ({
  allCountries,
}: {
  allCountries: ICountriesList[] | [];
}) => {
  useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
    console.log(allCountries);
  });

  return (
    <div className="countriesListContainer">
      {allCountries &&
        allCountries.length > 0 &&
        allCountries.map((country: ICountriesList, id: number) => (
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
};
