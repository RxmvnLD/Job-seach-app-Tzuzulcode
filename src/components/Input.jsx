import React from "react";
import tw from "twin.macro";

const Input = ({ type, name, inputPlaceholder }) => {
  return <CustomInput type={type} name={name} placeholder={inputPlaceholder} />;
};

const CustomInput = tw.input`
text-accent
rounded
bg-secondary
border-2
border-purple-500
p-2
caret-purple-900
`;

export default Input;
