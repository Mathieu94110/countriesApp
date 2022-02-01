import React, { useEffect, useState } from "react";

interface Theme {
  theme: "light" | "dark";
  toggleTheme?: () => void;
}

export const ThemeContext = React.createContext<Theme>({ theme: "light" });

const ThemeContextProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<Theme["theme"]>("light");

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
