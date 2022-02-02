import React from "react";
import "./searchbar.scss";
import { useState } from "react";
import { SidebarProps } from "../../models/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Searchbar = (props: SidebarProps) => {
  const [filter, setFilter] = useState("");

  const searchText = (event: { target: HTMLInputElement }) => {
    setFilter(event.target.value);
    onTrigger();
  };

  const onTrigger = () => {
    props.startResearchByCountries(filter);
  };

  return (
    <div className="search-input">
      <FontAwesomeIcon icon={faSearch} />
      <input
        type="text"
        name="country"
        placeholder="Search for a country"
        value={filter}
        onChange={searchText.bind(this)}
      />
    </div>
  );
};

export default Searchbar;
