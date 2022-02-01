import React from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICardDetails } from "../../models/types";
import { Link } from "react-router-dom";
import "./countryDetails.scss";

export const CountryDetails = ({
  name,
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currencie,
  languages,
  borders,
  flag,
}: ICardDetails) => {
  return (
    <>
      <div className="card-details-page-container">
        <div className="go-back-container">
          <Link to="/">
            <button className="go-back-button">
              <FontAwesomeIcon icon={faArrowLeft} />
              <span className="go-back-button-text">Back</span>
            </button>
          </Link>
        </div>
        <section className="card-details-container">
          <div key={name} className="card-details-items">
            <div className="card-details-items-img">
              <img src={flag} alt={name} />
            </div>

            <article className="card-details-content">
              <div className="details-content-rows">
                <span className="details-content-items-left-bloc">
                  <h2 className="card-details-name">{name}</h2>
                </span>
              </div>
              <div className="details-content-rows">
                <span className="details-content-items-left-bloc">
                  <h3>
                    Native Name:{" "}
                    <span className="style-italic">{nativeName}</span>
                  </h3>
                </span>{" "}
                <span className="details-content-items">
                  <h3>
                    Top Level Domain:{" "}
                    <span className="style-italic">{topLevelDomain}</span>
                  </h3>
                </span>
              </div>

              <div className="details-content-rows">
                <span className="details-content-items-left-bloc">
                  <h3>
                    Population:{" "}
                    <span className="style-italic">{population}</span>
                  </h3>
                </span>
                {currencie && (
                  <h3>
                    Currencies:{" "}
                    <span className="style-italic">
                      {currencie.map((item) => item.name)}
                    </span>
                  </h3>
                )}
              </div>
              <div className="details-content-rows">
                <span className="details-content-items-left-bloc">
                  <h3>
                    Region: <span className="style-italic">{region}</span>
                  </h3>
                </span>
                <h3>
                  Languages:{" "}
                  {languages.map((item, index) => (
                    <span className="style-italic" key={index}>
                      {item.name}
                    </span>
                  ))}
                </h3>
              </div>
              <div className="details-content-rows">
                <span className="details-content-items-left-bloc">
                  <h3>
                    Sub Region:{" "}
                    <span className="style-italic">{subregion}</span>
                  </h3>{" "}
                </span>
              </div>
              <div className="details-content-rows">
                <span className="details-content-items-left-bloc">
                  {capital && (
                    <h3>
                      Capital: <span className="style-italic">{capital}</span>
                    </h3>
                  )}
                </span>
              </div>
              <div className="borders-countries-container">
                <h3 className="border-countries-title">Border Countries:</h3>
                {borders && (
                  <div className="borders">
                    {borders.map((item, index) => {
                      return (
                        <ul key={item}>
                          <li>
                            <Link to={`/code/${item}`} key={index}>
                              {item}
                            </Link>
                          </li>
                        </ul>
                      );
                    })}
                  </div>
                )}
              </div>
            </article>
          </div>
        </section>
      </div>
    </>
  );
};
