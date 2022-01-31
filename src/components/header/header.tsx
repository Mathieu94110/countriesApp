import React from "react";
import "./header.scss";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="header-container">
      <h1 className="home-title">Where in the world?</h1>
      <div className="mode-container">
        <FontAwesomeIcon icon={faMoon} />
        <h2 className="mode-title">Dark Mode</h2>
      </div>
    </div>
  );
};

export default Header;
