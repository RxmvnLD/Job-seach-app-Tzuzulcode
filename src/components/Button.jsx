import React from "react";
import tw from "twin.macro";

const Button = ({ onClick, text }) => {
  return <CustomButton onClick={onClick}>{text}</CustomButton>;
};

const CustomButton = tw.button`
bg-secondary
text-primary
hover:bg-primary
hover:text-accent
border-2
border-purple-600
transition-all
duration-200
hover:ease-out
font-bold
py-2
px-4
m-auto
rounded
`;

export default Button;
