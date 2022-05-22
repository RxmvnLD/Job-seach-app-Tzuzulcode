import React, { useContext } from "react";
import authContext from "../../Context/AuthContext";
import tw from "twin.macro";
import { Link, useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const { auth, setAuth } = useContext(authContext);
  const logoutHandler = () => {
    localStorage.removeItem("token");
    setAuth({ logged: false, email: "", name: "", id: "" });
    console.log(auth);
    navigate();
  };

  return (
    <>
      <Link to="/">
        <Btn onClick={logoutHandler}>Logout</Btn>
      </Link>
    </>
  );
};

const Btn = tw.button`
bg-secondary
text-primary
w-40
border-blue-700
dark:border-white
border-2
h-10
rounded-lg
`;

export default Logout;
