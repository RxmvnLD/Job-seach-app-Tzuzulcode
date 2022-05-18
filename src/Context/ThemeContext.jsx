import React, { useState, createContext } from "react";

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    //getting and return the theme
    const storedTheme = window.localStorage.getItem("color-theme");
    //string validation
    if (typeof storedTheme === "string") {
      return storedTheme;
    }
    //checking if user its using dark mode
    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }

  //return default theme
  return "light";
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ initialTheme, children }) => {
  //setting stored theme to state
  const [theme, setTheme] = useState(getInitialTheme);

  const rawSetTheme = (theme) => {
    const root = window.document.documentElement;

    //Setting the class to html document
    root.classList.remove(theme === "dark" ? "light" : "dark");
    root.classList.add(theme);
    //updating local storage theme
    localStorage.setItem("color-theme", theme);
  };

  //if we get a theme preferency from a component, we change the theme
  if (initialTheme) {
    rawSetTheme(initialTheme);
  }
  //setting the stored theme while mounting the component
  React.useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
