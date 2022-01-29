import React from "react";
import "./header.scss";
import ToggleSwitch from "../toggleSwitch/toggleSwitch";

const Header = () => {
  return (
    <div className="header-container">
      <h1 className="home-title">Where in the world?</h1> <ToggleSwitch />
    </div>
  );
};

export default Header;
