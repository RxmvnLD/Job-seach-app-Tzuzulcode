import React, { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Welcome from "../pages/Welcome";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import { DetalleEmpleo } from "../pages/DetalleEmpleo";
import  AuthContext  from"../Context/AuthContext";
import { Me } from "../pages/Me";
import { NotFound } from "../pages/NotFound";


function Redirect({ to }) {
  let navigate = useNavigate();
  useEffect(() => {
    navigate(to);
  });
  return null;
}

const Router = () => {
  const context = useContext(AuthContext);
  const user = context.auth.logged;
  console.log(user)
  return (
    <BrowserRouter>
       {!user ? (
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/me" element={<Me />} />
            <Route path="/vacante/:id" element={<DetalleEmpleo />} />
            <Route
              path="/login"
              element={user ? <Redirect to="/" /> : <Login />}
            />
            <Route
              path="/signup"
              element={user ? <Redirect to="/" /> : <Signup />}
            />
            <Route path="/vacante/:id" element={<DetalleEmpleo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
    </BrowserRouter>
  );
};

export default Router;
