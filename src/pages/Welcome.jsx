import React from "react";
import workingLogo from "../imports/img/working-logo.png";
import { Link } from "react-router-dom";
//tw import
import tw from "twin.macro";

function Welcome() {
  return (
    <Header>
      <img src={workingLogo} alt="Logo" className="max-h-96" />
      <Customh1>Climb higher with JobSeek app</Customh1>
      <Link to="/home">{<StartButton>START BROWSING</StartButton>}</Link>
    </Header>
  );
}

//tw.html element
const Header = tw.header`
//tailwind classes
container
text-center
`;

const Customh1 = tw.h1`
font-bold
text-3xl
text-accent
`;

const StartButton = tw.button`
w-full
h-full
p-2
rounded-lg
bg-secondary
text-secondary
`;

export default Welcome;
