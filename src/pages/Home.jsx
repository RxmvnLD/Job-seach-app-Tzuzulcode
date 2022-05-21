import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import JobCard from "../components/JobCardAlt";
import Sidebar from "../components/user_sidebar/Sidebar";
import styled from "styled-components";
import { axiosGet, axiosPost } from "../axiosInstance";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const Home = () => {
  const [jobs, setJobs] = useState();
  const [filter, setFilter] = useState();
  const [key, setKey] = useState();

  useEffect(() => {
    const getJobs = async () => {
      try {
        const res = await axiosGet("/jobs"),
          json = res.data;
        setJobs(json);
      } catch (error) {
        console.log(error);
      }
    };
    getJobs();
  }, []);

  const filtro = async (filtroBy, category) => {
    console.log("===Filtro===");
    console.log(filtroBy);
    console.log(category);
    try {
      const res = await axiosPost("/jobs/" + filtroBy, {
        category: [category],
        country: category,
      });
      console.log(res.data);
      setJobs(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <MainContainer>
        <Sidebar />
        <Etiqueta>Vacantes destacadas</Etiqueta>
        <FiltroContainer>
          <div>
            Filtro:
            <Select onChange={(e) => setFilter(e.target.value)}>
              <option>Todos</option>
              <option value={"category"}>Categoria</option>
              <option value={"location"}>Ubicacion</option>
            </Select>
          </div>
          <div>
            <Search
              onChange={(e) => setKey(e.target.value)}
              type="search"
              name="search"
              id=""
              placeholder={"Buscar por: " + filter}
            />
            <Button onClick={() => filtro(filter, key)}>
              <Icon icon={solid("magnifying-glass")} />
            </Button>
          </div>
        </FiltroContainer>
        {!jobs ? (
          <Etiqueta>Cargando empleos disponibles</Etiqueta>
        ) : (
          <JobCard jobs={jobs} />
        )}
      </MainContainer>
    </>
  );
};
const MainContainer = tw.main`
top-56
grid
grid-cols-1
`;

const Etiqueta = tw.h1`
text-3xl
text-primary
font-bold
`;
const Select = styled.select`
  background-color: transparent;
  color: white;
  padding: 5px;
  border: 1px solid lightgray;
  margin-left: 10px;
  border-radius: 5px;
`;
const Search = styled.input`
  color: lightgray;
  padding: 5px;
  border-radius: 5px 0px 0px 5px;
`;
const FiltroContainer = styled.div`
  margin: 15px 0px;
  padding: 0px 25px;
  display: flex;
  justify-content: space-between;
`;
const Button = styled.button`
  padding: 5px;
  border-radius: 0px 5px 5px 0px;
  color: black;
  background-color: white;
`;
const Icon = styled(FontAwesomeIcon)`
  color: ${(props) => (props.red ? "red" : "black")};
  align-self: center;
  font-size: 20px;
  cursor: pointer;
`;
export default Home;
