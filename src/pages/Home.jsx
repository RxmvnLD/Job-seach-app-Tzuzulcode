import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import JobCard from "../components/JobCard";
import Sidebar from "../components/user_sidebar/Sidebar";
import SortBy from "../components/SortBy";
import { axiosGet } from "../axiosInstance";

const Home = () => {
  const [jobs, setJobs] = useState([]);

  const getJobs = async () => {
    try {
      let res = await axiosGet("/jobs"),
        json = await res.data;
      console.log(json);
      json.forEach((element) => {
        let job = {
          title: element.title,
          location: element.location.country,
          company: element.employer.name,
          salary: element.salary,
          id: element._id,
        };
        setJobs((jobs) => [...jobs, job]);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <>
      <MainContainer>
        <Sidebar />
        <Etiqueta>Vacantes destacadas</Etiqueta>
        <SortBy />
        {jobs.length === 0 ? (
          <Etiqueta>Cargando empleos disponibles</Etiqueta>
        ) : (
          jobs.map((item) => (
            <JobCard
              key={item._id}
              title={item.title}
              location={item.location}
              company={item.company}
              salary={item.salary}
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
`;

const Etiqueta = tw.h1`
text-3xl
text-primary
font-bold
`;

export default Home;
