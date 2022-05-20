import React from "react";
import { Link } from "react-router-dom";
import tw from "twin.macro";

const WelcomeButton = ({ text, routeToGo }) => {
  return (
    <>
      <Link to={routeToGo}>
        <Btn>{text}</Btn>
      </Link>
    </>
  );
};

const Btn = tw.button`
bg-secondary
text-primary
w-40

h-10
rounded-lg
`;

export default WelcomeButton;
