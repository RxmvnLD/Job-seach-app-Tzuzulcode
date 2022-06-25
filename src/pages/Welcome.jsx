import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login";
function Welcome() {
  const { auth } = useContext(AuthContext),
    navigate = useNavigate();

  return <>{auth.logged ? navigate("/home") : <Login />}</>;
}

export default Welcome;
