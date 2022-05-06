import React from "react";
import styled from "styled-components";
import JobCard from "../components/JobCard.";
import { Navbar } from "../components/Navbar";
import SortBy from "../components/SortBy";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Etiqueta>Vacantes destacadas</Etiqueta>
      <Etiqueta>

        <SortBy />
      </Etiqueta>

      <CardContainer>
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
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
