import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CountryDetails } from "../../components/countryDetails/countryDetails";
import { ICountryDetail } from "../../models/types";

export const Details = () => {
  const { name, code } = useParams();
  const [country, setCountry] = useState<ICountryDetail[]>([]);

  useEffect(() => {
    if (name) {
      getCountry(name);
    } else if (code) {
      getCountry(code);
    }
  }, [name, code]);

  const getCountry = async (param: string) => {
    const country = name
      ? await getCountryByName(param)
      : await getCountryByCode(param);
    setCountry(country);
  };

  const getCountryByName = async (name: string) => {
    const response = await fetch(
      `https://restcountries.com/v2/name/${name}?fullText=true`
    );
    const result = response.json();
    return result;
  };
  const getCountryByCode = async (code: string) => {
    const response = await fetch(
      `https://restcountries.com/v2/alpha?codes=${code}`
    );

    const result = response.json();
    return result;
  };

  return (
    <div>
      {country.map((item, index) => (
        <div key={index}>
          <CountryDetails
            key={item.name}
            flag={item.flags.png}
            name={item.name}
            nativeName={item.nativeName}
            population={item.population}
            region={item.region}
            subregion={item.subregion}
            capital={item.capital}
            topLevelDomain={item.topLevelDomain[0]}
            currencie={item.currencies && item.currencies}
            languages={item.languages}
            borders={item.borders}
          />
        </div>
      ))}
    </div>
  );
};
