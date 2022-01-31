import React from "react";
import { SelectProps } from "../../models/types";
import "./filterByRegion.scss";

const FilterByRegion = (props: SelectProps) => {
  const onSelect = (region: string) => {
    props.startResearchByRegion(region);
  };

  return (
    <div>
      <select
        className="select-filter"
        onChange={(value) => onSelect(value.target.value)}
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
