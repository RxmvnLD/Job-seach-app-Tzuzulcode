import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "../pages/Welcome";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import { JobDetails } from "../pages/JobDetails";
import NotFound from "../pages/NotFound";
import MyApplications from "../pages/MyApplications";
import CreateJob from "../pages/CreateJob";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/myapplications" element={<MyApplications />} />
        <Route path="/createjob" element={<CreateJob />} />
        <Route path="/details/:id" element={<JobDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
