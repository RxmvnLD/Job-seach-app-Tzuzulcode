/* This example requires Tailwind CSS v2.0+ */
import React from "react";
import styled from "styled-components";
import Burger from "./nav/Burger";

export const Navbar = () => {
  return (
    <Container>
      <Name>JSA</Name>
      <Burger  />
    </Container>
  );
};
const Container = styled.main.attrs({
  className: "",
})`
  display: flex;
   padding: 10px;
  margin: 10px;
  align-items: center;
  justify-content: space-between;

`;
const Name = styled.h1`
  font-size: large;
  font-weight: 800;
  color: #b5cce3;
  
`;
