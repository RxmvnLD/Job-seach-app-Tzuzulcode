import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import JobCard from "../components/JobCard";
//import SortBy from "../components/SortBy";
import { axiosPost } from "../helpers/axiosInstance";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

const MyApplications = () => {
  const [jobs, setJobs] = useState([]),
    [loader, setLoader] = useState(true);

  const getJobs = async () => {
    try {
      let res = await axiosPost("/jobs/me"),
        json = await res.data;
      console.log(json);
      //eslint-disable-next-line
      json.map((element) => {
        let job = {
          title: element.title,
          location: element.location.country,
          company: element.employer.name,
          salary: element.salary,
          id: element._id,
          applicants: json.length.toString(),
        };
        setJobs((jobs) => [...jobs, job]);
      });
      await setLoader(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <>
      <Etiqueta>Mis postulaciones</Etiqueta>
      <MainContainer>
        <JobsContariner>
          {jobs.length === 0
            ? loader && <Loader />
            : jobs.map((item) => (
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
              ))}
        </JobsContariner>
      </MainContainer>
    </>
  );
};
const MainContainer = tw.main`
top-56
flex
flex-row
gap-2.5
mx-16
m-auto
w-full
h-full
`;

const Etiqueta = tw.h1`
text-center
m-5
text-3xl
text-primary
font-bold
`;

const JobsContariner = tw.section`
flex
flex-wrap
border-2
border-purple-600
rounded-2xl
w-3/4
px-14
py-4
m-auto
`;

export default MyApplications;
