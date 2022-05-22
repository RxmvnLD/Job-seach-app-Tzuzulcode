import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import JobCard from "../components/JobCardAlt";
import Loader from "../components/Loader";
import { Topbar } from "../components/Topbar";

export const Me = () => {
  //Mis postulaciones
  const [jobs, setJobs] = useState();
  useEffect(() => {
    console.log("me");
    fetch("https://backendnodejstzuzulcode.uw.r.appspot.com/api/jobs/me", {
      method: "post",
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
      {!jobs ? <Loader /> : <JobCard jobs={jobs} />}
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
