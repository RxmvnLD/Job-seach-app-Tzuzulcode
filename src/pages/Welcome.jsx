import React, { useContext } from "react";
import workingLogo from "../imports/img/working-logo.png";
import tw from "twin.macro";
import WelcomeButton from "../components/WelcomeButton";
import AuthContext from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

function Welcome() {
  const { auth } = useContext(AuthContext);

  return (
    <>
      {auth.logged ? (
        <Navigate to="/home" />
      ) : (
        <Container>
          <img src={workingLogo} alt="Logo" className="max-h-96" />
          <WelcomeText>Climb higher with JobSeek app</WelcomeText>
          <WelcomeButton text="Login" routeToGo={"/login"} />
          <WelcomeButton text="Signup" routeToGo={"/signup"} />
        </Container>
      )}
    </>
  );
}

const Container = tw.main`
p-10
grid
grid-rows-3
justify-items-center
text-center
max-h-screen
`;

const WelcomeText = tw.h1`
font-bold
text-3xl
text-accent
`;

export default Welcome;
