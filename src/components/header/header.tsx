import React, { useContext } from "react";
import "./header.scss";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeContext } from "../theme/theme-provider";

const Header = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <div className="header-container">
      <h1 className="home-title">Where in the world?</h1>
      <div className="mode-container">
        {theme === "light" ? (
          <>
            <FontAwesomeIcon icon={faMoon} color="gray" onClick={toggleTheme} />
            <h2 className="mode-title">Dark Mode</h2>
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faSun} color="gray" onClick={toggleTheme} />
            <h2 className="mode-title">Light Mode</h2>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
