import React, { useContext } from "react";
import { AiFillCode } from "react-icons/ai";
import AuthContext from "../context/AuthContext";
import tw from "twin.macro";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setAuth({ logged: false, email: "", name: "", id: "" });
    console.log(auth);
    navigate("/");
  };
  //console.log(auth);
  return (
    <header>
      <TopNav>
        {auth.logged ? (
          <>
            <div className="flex flex-row items-center justify-between w-full">
              <Link to="/myprofile" className="m-auto">
                <Button text="Mi perfil" />
              </Link>

              <Link
                to="/home"
                className="flex flex-row items-center text-6xl text-primary "
              >
                {" "}
                <AiFillCode /> DevJobs
              </Link>

              <Button
                text="Cerrar sesión"
                onClick={logoutHandler}
                className="m-auto"
              />
            </div>

            {auth.role === "applicant" ? (
              <div className="flex gap-10 m-auto">
                <Link to="/myapplications">
                  <Button text="Mis postulaciones" />
                </Link>
                <Button text="Favoritos" />
              </div>
            ) : (
              <div className="flex gap-10 m-auto">
                <Link to="/myoffers">
                  <Button text="Vacantes publicadas" />
                </Link>
                <Link to="/createjob">
                  <Button text="Crear vacante" />
                </Link>
              </div>
            )}
          </>
        ) : (
          <>
            <Link
              to="/"
              className="flex flex-row items-center m-auto text-6xl text-primary "
            >
              {" "}
              <AiFillCode /> DevJobs
            </Link>
          </>
        )}
      </TopNav>
    </header>
  );
};

const TopNav = tw.nav`
w-full
bg-secondary
flex
flex-col
p-5
gap-5
items-center
`;
export default NavBar;
