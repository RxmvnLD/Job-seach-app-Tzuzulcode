import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className={props.hamburgerToggle ? "visible" : "invisible"}>
      <ul>
        <Link to={"/login"}>
          <li>Iniciar sesión</li>
        </Link>
        <Link to={"/signup"}>
          <li>Registrarse</li>
        </Link>
        <Link to={"/me"}>
          <li>Mis postulaciones</li>
        </Link>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Navbar;
