import React from "react";
import "./countryDetails.scss";

interface SidebarProps {
  drawerState: boolean;
}

const CountryDetails = (props: SidebarProps) => {
  const drawerState = props;

  return <div>Country Details</div>;
};

export default CountryDetails;
