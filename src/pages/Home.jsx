import React, { useContext, useEffect, useState } from "react";
import tw from "twin.macro";
import JobCard from "../components/JobCard";
import Sidebar from "../components/user_sidebar/Sidebar";
import SortBy from "../components/SortBy";
import { axiosGet, axiosPost } from "../axiosInstance";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import AuthContext from "../Context/AuthContext";

const Home = () => {
  const { auth } = useContext(AuthContext),
    [jobs, setJobs] = useState([]),
    [offers, setOffers] = useState([]);

  const getJobs = async () => {
    try {
      let res = await axiosGet("/jobs"),
        json = await res.data;
      //console.log(json);
      json.forEach((element) => {
        let job = {
          title: element.title,
          location: element.location.country,
          company: element.employer.name,
          salary: element.salary,
          id: element._id,
          applicants: element.applicants.length.toString(),
        };
        setJobs((jobs) => [...jobs, job]);
      });
    } catch (error) {
      //console.log(error);
    }
  };

  const getOffers = async () => {
    try {
      let res = await axiosPost("/jobs/employer"),
        json = await res.data;
      //console.log(json);
      json.forEach((element) => {
        let offer = {
          title: element.title,
          location: element.location.country,
          company: element.employer.name,
          salary: element.salary,
          id: element._id,
          applicants: element.applicants.length.toString(),
        };
        //console.log(element.applicants.length);
        setOffers((offers) => [...offers, offer]);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const categoriesSearch = async (categories) => {
    //console.log("State categories", categories);
    let catsBody = { category: categories };
    try {
      let res = await axiosPost("/jobs/category", catsBody),
        json = await res.data;
      //console.log(json);
      if (jobs.length !== 0) {
        setJobs([]);
        json.forEach((element) => {
          let job = {
            title: element.title,
            location: element.location.country,
            company: element.employer.name,
            salary: element.salary,
            id: element._id,
            applicants: element.applicants.length.toString(),
          };
          setJobs((jobs) => [...jobs, job]);
        });
      } else {
        getJobs();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const locationSearch = async (location) => {
    //console.log("State locations", location);
    try {
      let res = await axiosPost("/jobs/location", location),
        json = await res.data;
      //console.log(json);
      if (jobs.length !== 0) {
        setJobs([]);
        json.forEach((element) => {
          let job = {
            title: element.title,
            location: element.location.country,
            company: element.employer.name,
            salary: element.salary,
            id: element._id,
            applicants: element.applicants.length.toString(),
          };
          setJobs((jobs) => [...jobs, job]);
        });
      } else {
        getJobs();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth.role === "applicant") {
      getJobs();
    }
    if (auth.role === "employer") {
    } else {
      getOffers();
    }
  }, [auth.role]);

  return (
    <>
      <MainContainer>
        <Sidebar />
        {auth.role === "applicant" ? (
          <>
            <Etiqueta>Vacantes destacadas</Etiqueta>
            <SortBy
              sendCategories={categoriesSearch}
              sendLocations={locationSearch}
            />
          </>
        ) : (
          <Etiqueta>Mis Empleos Publicados</Etiqueta>
        )}

        {auth.role === "applicant" ? (
          jobs.length === 0 ? (
            <Loader />
          ) : (
            jobs.map((item) => (
              <Link to={`/details/${item.id}`}>
                <JobCard
                  key={item.id}
                  title={item.title}
                  location={item.location}
                  company={item.company}
                  salary={item.salary}
                  applicants={item.applicants}
                />
              </Link>
            ))
          )
        ) : offers.length === 0 ? (
          <Loader />
        ) : (
          offers.map((item) => (
            <JobCard
              key={item.id}
              title={item.title}
              location={item.location}
              company={item.company}
              salary={item.salary}
              applicants={item.applicants}
            />
          ))
        )}
      </MainContainer>
    </>
  );
};
const MainContainer = tw.main`
top-56
grid
grid-cols-1
gap-2.5
`;

const Etiqueta = tw.h1`
text-3xl
text-primary
font-bold
justify-self-center
`;

export default Home;
