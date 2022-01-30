import React, { useState } from "react";
import "./filterByRegion.scss";

const FilterByRegion = () => {
  const [query, setQuery] = useState("");

  const searchCountry = (searchValue: string) => {
    
  setQuery(searchValue);

  if (searchValue) {
    const filteredCountries = countries.filter((country) =>
      Object.values(country)
        .join("")
        .toLowerCase()
        .includes(searchValue.toLowerCase())
    );
    setFiltered(filteredCountries);
  } else {
    setFiltered(countries);
  }
};

  return (
    <div>
      <input
        placeholder="Enter Post Title"
        onChange={(event) => searchCountry(event.target.value)}
      />
      {Data.map((post, index) => {
        <div key={index}>
          <p>{post.title}</p>
          <p>{post.author}</p>
        </div>;
      })}
    </div>
  );
};

export default FilterByRegion;
