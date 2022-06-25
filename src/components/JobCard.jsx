import React from "react";
import tw from "twin.macro";
import logo from "../imports/img/logo.png";

function JobCard({ title, location, company, salary, applicants }) {
  return (
    <JobContainer>
      <img src={logo} alt="Company logo" className="row-span-3" />
      <InfoContainer>
        <JobTitle>{title}</JobTitle>
        <JobText>${salary}</JobText>
        <JobText>{location}</JobText>
        <JobText>{company}</JobText>
        <JobText>Postulaciones: {applicants}</JobText>
      </InfoContainer>
    </JobContainer>
  );
}

const JobContainer = tw.div`
p-6
max-w-sm
bg-secondary
rounded-lg
border
border-purple-200
shadow-md
hover:bg-purple-100
dark:bg-gray-800
dark:border-purple-700
dark:hover:bg-gray-700
m-5
grid
grid-cols-4
cursor-pointer
gap-2
`;

const JobTitle = tw.h5`
mb-2
font-bold
tracking-tight
text-primary
col-span-2
`;

const InfoContainer = tw.div`
col-span-3
grid
grid-rows-2
`;
const JobText = tw.div`
font-normal
text-secondary
`;

export default JobCard;
