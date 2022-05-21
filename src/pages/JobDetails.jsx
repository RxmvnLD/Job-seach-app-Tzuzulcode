import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../imports/img/logo.png";
import { useParams, useNavigate } from "react-router-dom";
import { axiosGet, axiosPut, axiosPost } from "../axiosInstance";
import Loader from "../components/Loader";
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
export const JobDetails = () => {
  const { id } = useParams(),
    back = useNavigate(),
    [red, setRed] = useState(false),
    [isLoading, setIsLoading] = useState(true),
    [job, setJob] = useState(null),
    [applied, setApplied] = useState(false);
  //Obtner el id de la URL
  const getJob = async () => {
    try {
      let res = await axiosGet(`/jobs/${id}`),
        json = await res.data;
      //await console.log(json);
      await setJob(json);
      await setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const applyFunc = async () => {
    let res = await axiosPut(`/jobs/apply/${id}`),
      json = await res.data;
    //console.log(json);
    setApplied(true);
  };

  const unApplyFunc = async () => {
    let res = await axiosPut(`/jobs/unapply/${id}`),
      json = await res.data;
    //console.log(json);
    setApplied(false);
  };
  const getAppliedJobs = async () => {
    try {
      let res = await axiosPost("/jobs/me"),
        json = await res.data;
      //console.log(json);
      json.forEach((item) => {
        if (item._id === id) {
          setApplied(true);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAppliedJobs();
    getJob();
  }, [id]);

  return (
    <>
      {isLoading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
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
                  <Subtitle>Trabjo</Subtitle>
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
              <Subtitle>Descripcion del trabajo</Subtitle>
              <ReadMore>{job.description}</ReadMore>
            </Card>
            <Card>
              <Subtitle>Requisitos del trabajo</Subtitle>
              <ReadMore>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Delectus, neque. Quia nam optio cumque eius eum fugit at
                repellendus atque, porro sint ab perferendis minus consequuntur
                dolorem fugiat fuga suscipit. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Exercitationem consequatur quis
                animi molestias, itaque dolores veritatis similique? Nam fugit
                saepe id unde minima, dolores voluptates error, ex laborum omnis
                maiores.
              </ReadMore>
            </Card>
          </CardContainer>
          <div style={{ height: "50px" }} />
          <BotonArea>
            {!applied ? (
              <Button onClick={applyFunc}>Aplicar</Button>
            ) : (
              <Button onClick={unApplyFunc} style={{ backgroundColor: "red" }}>
                Desaplicar
              </Button>
            )}
          </BotonArea>
        </>
      )}
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
  background-color: --var(--color-bg-secondary);
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
  background-color: --var(--color-bg-primary);
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
