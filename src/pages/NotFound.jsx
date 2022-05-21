import React from "react";
import tw from "twin.macro";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container>
      <CustomH1>404</CustomH1>
      <Link to="/home">
        <ClickOnMe>Click on me! I'll help you</ClickOnMe>
      </Link>
    </Container>
  );
};

const Container = tw.main`
grid
justify-items-center
content-center
min-h-screen
`;

const CustomH1 = tw.h1`
text-center
text-accent
font-bold
text-9xl
`;
const ClickOnMe = tw.h2`
text-center
text-accent
font-bold
text-5xl
`;

export default NotFound;
