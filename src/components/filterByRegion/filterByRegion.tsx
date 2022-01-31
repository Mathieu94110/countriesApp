import React, { useState, useEffect } from "react";
import { SelectProps } from "../../models/types";
import "./filterByRegion.scss";

const FilterByRegion = (props: SelectProps) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    console.log(countries);
  });

  const filterByRegion = async (region: string) => {
    console.log(region);
    if (region.trim()) {
      const fetchSelect = async () => {
        const response = await fetch(
          `https://restcountries.com/v2/region/${region}`
        );
        const data = await response.json();
        console.log(data);
        setCountries(data);
      };
      try {
        fetchSelect();
        onSelect();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const onSelect = () => {
    props.startResearchByRegion(countries);
  };

  return (
    <div>
      <select
        className="select-filter"
        onChange={(value) => filterByRegion(value.target.value)}
      >
        <option value="">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
};

export default FilterByRegion;
