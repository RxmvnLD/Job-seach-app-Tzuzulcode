import React from "react";
import tw from "twin.macro";
import logo from "../imports/img/logo.png";

function JobCard({ title, location, company, salary }) {
  return (
    <JobContainer>
      <img src={logo} alt="Company logo" className="row-span-3" />
      <InfoContainer>
        <JobTitle>{title}</JobTitle>
        <JobText>${salary}</JobText>
        <JobText>{location}</JobText>
        <JobText>{company}</JobText>
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
border-gray-200
shadow-md
hover:bg-gray-100
dark:bg-gray-800
dark:border-gray-700
dark:hover:bg-gray-700
m-2
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
