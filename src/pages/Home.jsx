import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import JobCard from "../components/JobCard";
import { axiosGet } from "../helpers/axiosInstance";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Categories from "../components/Categories";
import Footer from "../components/Footer";

const Home = () => {
  const [loader, setLoader] = useState(true),
    [jobs, setJobs] = useState([]),
    [filteredJobs, setFilteredJobs] = useState({});

  const getJobs = async () => {
    try {
      let res = await axiosGet("/jobs"),
        json = await res.data;
      // eslint-disable-next-line
      await json.map((element) => {
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
      await setLoader(false);
    } catch (error) {}
  };
  const searchHandler = (searchResults) => {
    setFilteredJobs(searchResults);
  };

  useEffect(() => {
    getJobs();
  }, []);

  useEffect(() => {
    console.log("Categorías:", filteredJobs.jobsByCategory);
  }, [filteredJobs]);

  return (
    <>
      <Etiqueta>Vacantes destacadas</Etiqueta>
      <MainContainer>
        <Categories searchHandler={searchHandler} />
        <JobsContariner>
          {Array.isArray(filteredJobs.jobsByCategory)
            ? filteredJobs.jobsByCategory.map((item) => {
                <Link className="m-auto" to={`/details/${item.id}`}>
                  <JobCard
                    key={item._id}
                    title={item.title}
                    location={item.location}
                    company={item.company}
                    salary={item.salary}
                    applicants={item.applicants}
                  />
                </Link>;
              })
            : jobs.length === 0
            ? loader && <Loader />
            : jobs.map((item) => (
                <Link className="m-auto" to={`/details/${item.id}`}>
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
m-auto
w-full
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
mb-20
`;

export default Home;
