import React from "react";
import tw from "twin.macro";

const Footer = () => {
  return <MainContainer></MainContainer>;
};

const MainContainer = tw.footer`
sticky
bottom-0
mt-20
bg-secondary
h-32`;

export default Footer;
