import React from "react";
import styled from "styled-components";
import logo from "../imports/img/logo.png";

export const DetalleEmpleo = () => {
  return (
    <>
      <Card>
        <Topbar>
          <span>⬅</span>
          <span>❤</span>
        </Topbar>
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
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          neque. Quia nam optio cumque eius eum fugit at repellendus atque,
          porro sint ab perferendis minus consequuntur dolorem fugiat fuga
          suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem consequatur quis animi molestias, itaque dolores
          veritatis similique? Nam fugit saepe id unde minima, dolores
          voluptates error, ex laborum omnis maiores.
        </Text>
      </Card>
      <Card>
        <Subtitle>Descripcion del trabajo</Subtitle>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          neque. Quia nam optio cumque eius eum fugit at repellendus atque,
          porro sint ab perferendis minus consequuntur dolorem fugiat fuga
          suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem consequatur quis animi molestias, itaque dolores
          veritatis similique? Nam fugit saepe id unde minima, dolores
          voluptates error, ex laborum omnis maiores.
        </Text>
      </Card>
      <BotonArea>
        <Button>Aplicar</Button>
      </BotonArea>
    </>
  );
};
const Card = styled.div`
  padding: 25px 30px;
  background-color: white;
  margin: 5px 0px;
  max-width: 700px;
  & span {
    font-size: 12px;
    font-weight: 400;
  }
`;
const Topbar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
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
  text-overflow: ellipsis;
`;
const Button = styled.button`
  padding: 5px;
`;
const BotonArea = styled.div`
background-color: green;
width: 100%;
height: 50px;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
