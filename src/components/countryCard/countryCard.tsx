import React from "react";
import "./countryCard.scss";

type CountryProps = {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
};

export const CountryCard = (props: React.PropsWithChildren<CountryProps>) => {
  return (
    <div className="country-card">
      <div className="country-card-container">
        <img src={props.flag} alt={props.name} />
        <div className="card-text-content">
          <h2>{props.name.substring(0, 17)}</h2>
          <h3>
            Population: <span className="style-italic">{props.population}</span>
          </h3>
          <h3>
            Region: <span className="style-italic">{props.region}</span>
          </h3>
          <h3>
            Capital: <span className="style-italic">{props.capital}</span>
          </h3>
        </div>
      </div>
    </div>
  );
};
