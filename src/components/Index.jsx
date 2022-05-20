import React, { useEffect, useState } from "react";
import JobCard from "./JobCard.";
import Burger from "./nav/Burger";
import SortBy from "./SortBy";

function Index() {
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

  return (
    <div className="dark:text-white">
      <Burger />
      <SortBy />
      <JobCard jobs={jobs} />
    </div>
  );
}

export default Index;
