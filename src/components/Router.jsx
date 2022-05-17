import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "../pages/Welcome";
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import Home from "../pages/Home"


const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" exact component={Welcome} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/home" component={Home} />
        </Routes>
      </BrowserRouter>
  )
}

export default Router