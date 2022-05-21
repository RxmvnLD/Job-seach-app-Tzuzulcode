import React, { useContext } from "react";
import authContext from "../../Context/AuthContext";
import tw from "twin.macro";
import { Link } from "react-router-dom";

const Logout = () => {
  const { auth, setAuth } = useContext(authContext);
  const logoutHandler = () => {
    localStorage.removeItem("token");
    setAuth({ logged: false, email: "", name: "", id: "" });
    console.log(auth);
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
border-white
border-2
h-10
rounded-lg
`;

export default Logout;
