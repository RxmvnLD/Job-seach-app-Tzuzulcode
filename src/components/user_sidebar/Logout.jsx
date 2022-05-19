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
bg-primary
text-primary
py-2
w-20
rounded-lg
`;

export default Logout;
