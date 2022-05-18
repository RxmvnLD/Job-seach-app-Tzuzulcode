import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

//Agregar ternario para mostrar login-register/datos dependiendo si esta logeado

const Navbar = (props) => {
  const [isOpen, setisOpen] = useState(true);
  return (
    <>
      {isOpen ? (
        <div
          className="z-50 bg-dark-blue dark:bg-bone rounded-full w-12 h-12 grid justify-center content-center sticky top-6 left-6"
          onClick={() => {
            setisOpen(!isOpen);
          }}
        >
          <FontAwesomeIcon
            className="text-black w-8 h-8"
            icon={solid("user")}
          />
        </div>
      ) : (
        <div
          className="z-50 bg-dark-blue dark:bg-bone rounded-full w-12 h-12 grid justify-center content-center sticky top-6 left-6"
          onClick={() => {
            setisOpen(!isOpen);
          }}
        >
          <FontAwesomeIcon className="text-black w-8 h-8" icon={solid("x")} />
        </div>
      )}

      <div
        className={`grid grid-rows-5 justify-center content-center place-content-center top-0 left-0 fixed w-screen h-screen dark:bg-navy-blue bg-bone ${
          isOpen ? "-translate-x-full" : "-translate-x-0"
        } ease-in-out duration-300`}
      >
        <ul className="  row-start-2	 ">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>Registrarse</li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
