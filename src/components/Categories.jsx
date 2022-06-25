import React from "react";
import tw from "twin.macro";
//import { axiosPost } from "../helpers/axiosInstance";

const Categories = () => {
  /*  const categoriesSearch = async (categories) => {
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
      }; */

  return (
    <MainContainer>
      <nav>
        <ul>
          <Category>
            <label>
              <input type="checkbox" name="" />
              category 1
            </label>
          </Category>
          <Category>cat2</Category>
          <Category>cat3</Category>
          <Category>cat4</Category>
          <Category>cat5</Category>
          <Category>cat6</Category>
          <Category>cat7</Category>
          <Category>cat8</Category>
          <Category>cat9</Category>
          <Category>cat10</Category>
        </ul>
      </nav>
    </MainContainer>
  );
};

const MainContainer = tw.aside`
border-2
border-purple-600
rounded-2xl
px-5
py-5
flex
flex-col
text-xl
w-1/12
mx-14
`;

const Category = tw.li`
m-auto
`;

export default Categories;
