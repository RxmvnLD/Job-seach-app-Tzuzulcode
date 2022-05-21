import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../imports/img/logo.png";
import { useLocation } from "react-router-dom";
import { Topbar } from "../components/Topbar";
import tw from "twin.macro";

//Funcion para leer mas
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
        <FontAwesomeIcon
          style={{ padding: "0px 5px" }}
          icon={isShow ? solid("caret-down") : solid("caret-up")}
        />
      </Text>
    </>
  );
}

//DETALLE EMPLEO
export const DetalleEmpleo = () => {
  const [apply, setApply] = useState(false);
  //Obtner el id de la URL
  const location = useLocation();
  const vacanteId = location.pathname.split("/")[2];

  //Get detalles del empleo
  const [isLoading, setIsLoading] = useState(true);
  const [job, setJob] = useState(null);
  useEffect(() => {
    fetch(
      "https://backendnodejstzuzulcode.uw.r.appspot.com/api/jobs/" + vacanteId,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    )
      .then((res) => res.json())
      .then((job) => {
        setJob(job);
        setIsLoading(false);
      });
  }, [vacanteId]);
  if (isLoading) {
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }
  const aplicar = () => {
    fetch(
      "https://backendnodejstzuzulcode.uw.r.appspot.com/api/jobs/apply/" +
        vacanteId,
      {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    )
      .then((res) => res.json())
      .then((jobApply) => {
        console.log(jobApply);
      });
    setApply(true);
  };
  const desaplicar = () => {
    fetch(
      "https://backendnodejstzuzulcode.uw.r.appspot.com/api/jobs/unapply/" +
        vacanteId,
      {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    )
      .then((res) => res.json())
      .then((jobApply) => {
        console.log(jobApply);
      });
    setApply(false);
  };
  return (
    <>
      <Topbar heart={true} />
      <CardContainer>
        <Card>
          <Img src={logo} alt={"logo"} />
          <Title>{job.title}</Title>
          <Subtitle>Nombre de la empresa</Subtitle>
          <span>Publicada: {job.creationDate}</span>
        </Card>
        <Card>
          <BoxDetalles>
            <div>
              <Subtitle>Aplicar antes de</Subtitle>
              <span> 20 Oct 2022</span>
            </div>
            <div>
              <Subtitle>Trabajo</Subtitle>
              <span>Hacer algo productivo</span>
            </div>
            <div>
              <Subtitle>Rango salarial</Subtitle>
              <span>$ {job.salary}</span>
            </div>
            <div>
              <Subtitle>Ubicacion</Subtitle>
              <span>
                {job.location.city} | {job.location.country}
              </span>
            </div>
          </BoxDetalles>
        </Card>
        <Card>
          <Subtitle>Categorias</Subtitle>
          <div>{job.category}</div>
        </Card>
        <Card>
          <Subtitle>Descripcion del trabajo</Subtitle>
          <ReadMore>{job.description}</ReadMore>
        </Card>

        {/* <Card>
          <Subtitle>Requisitos del trabajo</Subtitle>
          <ReadMore>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            neque. Quia nam optio cumque eius eum fugit at repellendus atque,
            porro sint ab perferendis minus consequuntur dolorem fugiat fuga
            suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem consequatur quis animi molestias, itaque dolores
            veritatis similique? Nam fugit saepe id unde minima, dolores
            voluptates error, ex laborum omnis maiores.
          </ReadMore>
        </Card> */}
      </CardContainer>
      <div style={{ height: "50px" }} />
      <BotonArea>
        {!apply ? (
          <Button onClick={aplicar}>Aplicar</Button>
        ) : (
          <Button onClick={desaplicar} style={{ backgroundColor: "red" }}>
            Desaplicar
          </Button>
        )}
      </BotonArea>
    </>
  );
};
const CardContainer = tw.main`
flex 
flex-wrap flex-col
`;
const Card = tw.div`
  // padding: 25px 30px;
  // background-color: white;
  // margin: 0px 0px 5px 0px;
  // border-radius: 4px;
  // & span {
  //   font-size: 12px;
  //   font-weight: 400;
  // }
  p-6
max-w-xl
bg-secondary
rounded-lg
border
border-gray-200
shadow-md
hover:bg-gray-100
dark:bg-gray-800
dark:border-gray-700
dark:hover:bg-gray-700
m-2

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
