import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import { JobDetails } from "../pages/JobDetails";
import NotFound from "../pages/NotFound";
import MyApplications from "../pages/MyApplications";
import CreateJob from "../pages/CreateJob";
import Welcome from "../pages/Welcome";
import NavBar from "./NavBar";
import MyOffers from "../pages/MyOffers";
import MyProfile from "../pages/MyProfile";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/myapplications" element={<MyApplications />} />
        <Route path="/myoffers" element={<MyOffers />} />
        <Route path="/createjob" element={<CreateJob />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/details/:id" element={<JobDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
