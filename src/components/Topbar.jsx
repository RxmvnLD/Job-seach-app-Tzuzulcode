import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
const TopbarContainer = styled.div`
border-radius: 0px 0px 4px 4px;
  height: 50px;
  padding: 5px 25px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const Icon = styled(FontAwesomeIcon)`
  color: ${(props) => (props.red ? "red" : "black")};
  align-self: center;
  font-size: 20px;
  cursor: pointer;
`;
