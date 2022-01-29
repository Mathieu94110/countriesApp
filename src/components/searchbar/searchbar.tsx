import React from "react";
import "./searchbar.scss";

interface SidebarProps {
  drawerState: boolean;
}

const Searchbar = (props: SidebarProps) => {
  const drawerState = props;

  return <div>SearchBar</div>;
};

export default Searchbar;
