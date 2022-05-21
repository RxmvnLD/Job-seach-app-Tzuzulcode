import React, { useEffect, useState } from "react";
import JobCard from "./JobCard.";
import Burger from "./nav/Burger";
import SortBy from "./SortBy";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";

function Index() {
  const [jobs, setJobs] = useState();
  const [filtro, setFiltro] = useState();
  const [search, setSearch] = useState();
  useEffect(() => {
    fetch("https://backendnodejstzuzulcode.uw.r.appspot.com/api/jobs", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((job) => {
        setJobs(job);
      });
  }, []);

  return (
    <div className="dark:text-white">
      <Burger />
      <FiltroContainer>
        <div>
          Filtro:
          <Select>
            <option>Todos</option>
            <option value={"category"}>Categoria</option>
            <option value={"location"}>Ubicacion</option>
          </Select>
        </div>
        <div>
          <Search type="search" name="search" id="" placeholder="Buscar por:" />
          <Button>
            <Icon icon={solid("magnifying-glass")} />
          </Button>
        </div>
      </FiltroContainer>
      <h1>Vacantes disponibles</h1>
      <JobCard jobs={jobs} />
    </div>
  );
}

export default Index;
const Select = styled.select`
  background-color: transparent;
  color: white;
  padding: 5px;
  border: 1px solid lightgray;
  margin-left: 10px;
  border-radius: 5px;
`;
const Search = styled.input`
  padding: 5px;
  border-radius: 5px 0px 0px 5px;
`;
const FiltroContainer = styled.div`
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
