import React, { useEffect, useState } from "react";
import styled from "styled-components";
import JobCard from "../components/JobCard";
import Sidebar from "../components/user_sidebar/Sidebar";
import SortBy from "../components/SortBy";
import DarkModeToggle from "../components/DarkModeToggle";
const Home = () => {
  const [jobs, setJobs] = useState();
  useEffect(() => {
    fetch("https://backendnodejstzuzulcode.uw.r.appspot.com/api/jobs", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((job) => {
        setJobs(job);
      });
  }, []);
  //console.log(jobs);
  return (
    <>
      <Sidebar />
      <DarkModeToggle />
      <Etiqueta>Vacantes destacadas</Etiqueta>
      <Etiqueta>
        <SortBy />
      </Etiqueta>
      <CardContainer>
        <JobCard jobs={jobs} />
      </CardContainer>
    </>
  );
};

const CardContainer = styled.main.attrs({
  className: "",
})`
  display: flex;
  flex-wrap: wrap;
`;
const Etiqueta = styled.h1.attrs({})`
  padding: 10px;
  font-size: large;
  font-weight: 700;
  color: lightslategray;
`;

export default Home;
