import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";

export const Topbar = (heart) => {
  console.log(heart);
  const [red, setRed] = useState(false);
  //Ir atras
  const back = useNavigate();
  return (
    <TopbarContainer>
      <Icon icon={solid("arrow-left")} onClick={() => back(-1)} />
      {heart === true && (
        <Icon
          icon={red ? solid("heart") : regular("heart")}
          onClick={() => {
            setRed(!red);
          }}
          red={red}
        />
      )}
    </TopbarContainer>
  );
};
const TopbarContainer = tw.div`
p-6
w-full
bg-secondary
rounded-lg
border
border-gray-200
shadow-md
hover:bg-gray-100
dark:bg-gray-800
dark:border-gray-700
dark:hover:bg-gray-700
`;
const Icon = styled(FontAwesomeIcon)`
  color: ${(props) => (props.red ? "red" : "white")};
  align-self: center;
  font-size: 20px;
  cursor: pointer;
`;