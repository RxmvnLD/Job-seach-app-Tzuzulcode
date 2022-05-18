import React, { useState, useEffect } from 'react';
import JobCard from './JobCard'
import SortBy from './SortBy'
import Sidebar from './user_sidebar/Sidebar'
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
  console.log(jobs);

  return (
    <div className=''>
        <Sidebar/>
        <div className='flex justify-end'>
        <SortBy/>
        </div>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
    </div>
  );
}

export default Index;
