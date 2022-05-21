import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import JobCard from "../components/JobCardAlt";
import { Topbar } from "../components/Topbar";

export const Me = () => {
  //Mis postulaciones
  const [jobs, setJobs] = useState();
  useEffect(() => {
    fetch("https://backendnodejstzuzulcode.uw.r.appspot.com/api/jobs/me", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((job) => {
        console.log(job);
        setJobs(job);
      });
  }, []);

  return (
    <div>
      <Topbar />
      <Title>
        <h2>Mis postulaciones</h2>
      </Title>

      <JobCard jobs={jobs} />
    </div>
  );
};
const Title = tw.div`
p-6
w-full
bg-primary
  text-primary

rounded-lg
`;
