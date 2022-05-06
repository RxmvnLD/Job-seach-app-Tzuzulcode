import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import React, { useState } from "react";
import styled from "styled-components";
import logo from "../imports/img/logo.png";
import { useNavigate } from "react-router-dom";

function ReadMore({ children = 100 }) {
  const text = children;

  const [isShow, setIsShowLess] = useState(true);
  const result = isShow ? text.slice(0, 100) : text;

  function toggleIsShow() {
    setIsShowLess(!isShow);
  }

  return (
    <>
      {result}
      <Text className="btn btn-link" onClick={toggleIsShow}>
        {isShow ? "Leer mas" : "Leer menos"}
        <FontAwesomeIcon style={{padding:"0px 5px"}} icon={isShow ? solid("caret-down") : solid("caret-up")} />
      </Text>
    </>
  );
}

export const DetalleEmpleo = () => {
  const back = useNavigate();

  const [red, setRed] = useState(false);
  return (
    <>
      {" "}
      <Topbar>
        <Icon icon={solid("arrow-left")} onClick={() => back(-1)} />
        <Icon
          icon={red ? solid("heart") : regular("heart")}
          onClick={() => {
            setRed(!red);
          }}
          red={red}
        />
      </Topbar>
      <CardContainer>
        <Card>
          <Img src={logo} alt={"logo"} />
          <Title>Nombre de la vacante</Title>
          <Subtitle>Nombre de la empresa</Subtitle>
          <span>Publicada: 10 Jul 2022</span>
        </Card>
        <Card>
          <BoxDetalles>
            <div>
              <Subtitle>Aplicar antes de</Subtitle>
              <span> 20 Oct 2022</span>
            </div>
            <div>
              <Subtitle>Trabjo</Subtitle>
              <span>Hacer algo productivo</span>
            </div>
            <div>
              <Subtitle>Rango salarial</Subtitle>
              <span> $1000 - $2000</span>
            </div>
            <div>
              <Subtitle>Ubicacion</Subtitle>
              <span> 20 Oct 2022</span>
            </div>
          </BoxDetalles>
        </Card>
        <Card>
          <Subtitle>Descripcion del trabajo</Subtitle>
          <ReadMore>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            neque. Quia nam optio cumque eius eum fugit at repellendus atque,
            porro sint ab perferendis minus consequuntur dolorem fugiat fuga
            suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem consequatur quis animi molestias, itaque dolores
            veritatis similique? Nam fugit saepe id unde minima, dolores
            voluptates error, ex laborum omnis maiores.
          </ReadMore>
        </Card>
        <Card>
          <Subtitle>Descripcion del trabajo</Subtitle>
          <ReadMore>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            neque. Quia nam optio cumque eius eum fugit at repellendus atque,
            porro sint ab perferendis minus consequuntur dolorem fugiat fuga
            suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem consequatur quis animi molestias, itaque dolores
            veritatis similique? Nam fugit saepe id unde minima, dolores
            voluptates error, ex laborum omnis maiores.
          </ReadMore>
        </Card>
      </CardContainer>
      <div style={{ height: "50px" }} />
      <BotonArea>
        <Button>Aplicar</Button>
      </BotonArea>
    </>
  );
};
const CardContainer = styled.div`
  margin: 0 auto;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
`;
const Card = styled.div`
  padding: 25px 30px;
  background-color: white;
  margin: 0px 0px 5px 0px;
  border-radius: 4px;

  & span {
    font-size: 12px;
    font-weight: 400;
  }
`;
const Topbar = styled.div`
  height: 50px;
  padding: 5px 25px;
  background-color: white;
  display: flex;
  justify-content: space-between;
`;
const Img = styled.img`
  width: 50px;
`;
const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
`;
const Subtitle = styled.h1`
  letter-spacing: -0.5px;
  font-size: 15px;
  font-weight: 600;
`;
const BoxDetalles = styled.div`
  display: flex;
  flex-wrap: wrap;
  & div {
    padding: 5px 0px;
    width: 50%;
  }
`;
const Text = styled.p`
  color: #1c58f2;
  font-weight: 600;
`;
const Button = styled.button`
  padding: 10px 50px;
  font-size: 16px;
  background-color: transparent;
  cursor: pointer;
  border-radius: 4px;
  border: 2px solid #313131;
  background: #1c58f2;
`;
const BotonArea = styled.div`
  margin: 5px;
  color: white;
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Icon = styled(FontAwesomeIcon)`
  color: ${(props) => (props.red ? "red" : "black")};
  align-self: center;
  font-size: 20px;
  cursor: pointer;
`;
