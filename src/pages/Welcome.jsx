import React, { useContext } from "react";
import workingLogo from "../imports/img/working-logo.png";
import tw from "twin.macro";
import ButtonLink from "../components/ButtonLink";
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
          <img
            src={workingLogo}
            alt="Logo"
            className="max-h-60 row-start-1 self-center"
          />
          <WelcomeText>Climb higher with JobSeek app</WelcomeText>
          <ButtonContainer>
            <ButtonLink text="Login" routeToGo={"/login"} />
            <ButtonLink text="Signup" routeToGo={"/signup"} />
          </ButtonContainer>
        </Container>
      )}
    </>
  );
}

const Container = tw.main`
grid
grid-cols-1
grid-rows-3
justify-items-center
items-center
text-center
max-w-full
`;
const WelcomeText = tw.h1`
row-start-2
font-bold
text-3xl
text-accent
`;
const ButtonContainer = tw.div`
row-start-3
flex
flex-col
gap-5
`;

export default Welcome;
