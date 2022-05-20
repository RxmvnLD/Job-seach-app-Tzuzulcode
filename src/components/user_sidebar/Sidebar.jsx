import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import tw from "twin.macro";
import DarkModeToggle from "../DarkModeToggle";
import Logout from "./Logout";

//Agregar ternario para mostrar login-register/datos dependiendo si esta logeado

const Navbar = (props) => {
  const [isOpen, setisOpen] = useState(true);
  return (
    <>
      {isOpen ? (
        <IconContainer
          onClick={() => {
            setisOpen(!isOpen);
          }}
        >
          <FontAwesomeIcon
            className="text-accent w-8 h-8"
            icon={solid("user")}
          />
        </IconContainer>
      ) : (
        <IconContainer
          onClick={() => {
            setisOpen(!isOpen);
          }}
        >
          <FontAwesomeIcon className="text-accent w-8 h-8" icon={solid("x")} />
        </IconContainer>
      )}

      <SideSlider
        className={`${isOpen ? "-translate-x-full" : "-translate-x-0"}`}
      >
        <div className="col-start-3 justify-self-center self-center">
          <DarkModeToggle />
        </div>
        <ul className="row-start-2 col-start-2">
          <Logout className="object-center" />
        </ul>
      </SideSlider>
    </>
  );
};

const SideSlider = tw.div`
grid
grid-rows-5
grid-cols-3
justify-center
content-center
place-content-center
top-0 left-0
fixed w-screen
h-screen
bg-secondary
ease-in-out
duration-300
`;

const IconContainer = tw.div`
z-50
bg-black
rounded-full
w-12
h-12
grid
justify-center
content-center
sticky
`;

export default Navbar;
