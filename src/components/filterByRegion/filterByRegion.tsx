import React from "react";
import "./filterByRegion.scss";

interface SidebarProps {
  drawerState: boolean;
}

const FilterByRegion = (props: SidebarProps) => {
  const drawerState = props;

  return <div>Filter by region</div>;
};

export default FilterByRegion;
