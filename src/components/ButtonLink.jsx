import React from "react";
import { Link } from "react-router-dom";
import tw, { styled } from "twin.macro";

const ButtonLink = ({ text, routeToGo, border }) => {
  return (
    <>
      <Link to={routeToGo}>
        <Btn {...{ border }}>{text}</Btn>
      </Link>
    </>
  );
};

const Btn = styled.button(({ border }) => [
  border &&
    tw`border-2 border-blue-700
  dark:border-white`,
  tw`bg-secondary`,
  tw`text-primary`,
  tw`w-40`,
  tw`h-10`,
  tw`rounded-lg`,
]);

export default ButtonLink;
