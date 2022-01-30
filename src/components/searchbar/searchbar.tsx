import React from "react";
import "./searchbar.scss";
import { useState } from "react";
import { SidebarProps } from "../../models/types";

const Searchbar = (props: SidebarProps) => {
  const [filter, setFilter] = useState("");

  const searchText = (event: { target: HTMLInputElement }) => {
    setFilter(event.target.value);
    onTrigger();
  };

  const onTrigger = () => {
    props.startResearch(filter);
  };

  return (
    <div className="searbar-container">
      <input
        type="text"
        name="country"
        placeholder="Search for a country"
        className="searchInput"
        value={filter}
        onChange={searchText.bind(this)}
      />
    </div>
  );
};

export default Searchbar;
