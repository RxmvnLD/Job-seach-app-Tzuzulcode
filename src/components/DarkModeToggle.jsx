import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const DarkModeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <>
      {theme === "light" ? (
        <button
          onClick={() => {
            setTheme("dark");
            console.log("enabling darkmode");
          }}
        >
          <FontAwesomeIcon icon={solid("moon")} />
        </button>
      ) : (
        <button
          onClick={() => {
            setTheme("light");
            console.log("enabling lightmode");
          }}
        >
          <FontAwesomeIcon icon={solid("sun")} />
        </button>
      )}
    </>
  );
};

export default DarkModeToggle;
