import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
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
          }}
        >
          <FontAwesomeIcon className="text-5xl" icon={solid("moon")} />
        </button>
      ) : (
        <button
          onClick={() => {
            setTheme("light");
          }}
        >
          <FontAwesomeIcon className="text-5xl" icon={solid("sun")} />
        </button>
      )}
    </>
  );
};

export default DarkModeToggle;
