import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./details.scss";
export const Details = () => {
  const [country, setCountry] = useState<any[]>([]);
  const { name } = useParams();

  const fetchCountryData = async () => {
    const res = await fetch(`https://restcountries.com/v2/name/${name}`);
    const data = await res.json();
    setCountry(data);
  };

  useEffect(() => {
    fetchCountryData();
  }, [name]);

  return (
    <>
      <div className="card-details-page-container">
        <div className="go-back-container">
          <Link to="/">
            <button className="go-back-button">
              <FontAwesomeIcon icon={faArrowLeft} />
              <span className="go-back-button-text">Go Back</span>
            </button>
          </Link>
        </div>
        <section className="card-details-container">
          {country.map(
            ({
              nativeName,
              population,
              region,
              name,
              capital,
              subregion,
              topLevelDomain,
              currencies,
              languages,
              flag,
              borders,
            }) => (
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
                    <h3>
                      Currencies:{" "}
                      <span className="style-italic">{currencies[0].name}</span>
                    </h3>
                  </div>
                  <div className="details-content-rows">
                    <span className="details-content-items-left-bloc">
                      <h3>
                        Region: <span className="style-italic">{region}</span>
                      </h3>
                    </span>
                    <h3>
                      Languages:{" "}
                      <span className="style-italic">{languages[0].name}</span>
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
                      <h3>
                        Capital: <span className="style-italic">{capital}</span>
                      </h3>
                    </span>
                  </div>
                  <div className="borders-countries-container">
                    <h3 className="border-countries-title">
                      Border Countries:
                    </h3>
                    <div className="borders">
                      {borders.length ? (
                        borders.map((border: string) => {
                          return (
                            <ul key={border}>
                              <li>{border}</li>
                            </ul>
                          );
                        })
                      ) : (
                        <div>
                          <p>No borders for this country!</p>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              </div>
            )
          )}
        </section>
      </div>
    </>
  );
};
