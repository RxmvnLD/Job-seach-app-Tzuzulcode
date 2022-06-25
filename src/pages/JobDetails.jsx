import React, { useEffect, useState, useContext } from "react";
import logo from "../imports/img/logo.png";
import { useParams } from "react-router-dom";
import { axiosGet, axiosPut, axiosPost } from "../helpers/axiosInstance";
import Loader from "../components/Loader";
import tw from "twin.macro";
import Button from "../components/Button";
import AuthContext from "../context/AuthContext";
import { FaCaretDown } from "react-icons/fa";

function ReadMore({ children = 100 }) {
  const text = children;
  const [isShow, setIsShowLess] = useState(true);
  const result = isShow ? `${text.slice(0, 100)}...` : text;

  function toggleIsShow() {
    setIsShowLess(!isShow);
  }

  return (
    <>
      {result}
      <p
        className="flex flex-row items-center btn btn-link text-accent"
        onClick={toggleIsShow}
      >
        {isShow ? "Leer mas" : "Leer menos"}
        <FaCaretDown />
      </p>
    </>
  );
}

//DETALLE EMPLEO
export const JobDetails = () => {
  const { id } = useParams(),
    { auth } = useContext(AuthContext),
    [loading, setLoading] = useState(true),
    [job, setJob] = useState(null),
    [applied, setApplied] = useState(false);
  //Obtner el id de la URL
  const getJob = async () => {
    try {
      let res = await axiosGet(`/jobs/${id}`),
        json = await res.data;
      console.log(json);
      await setJob(json);
      await setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const applyFunc = async () => {
    let res = await axiosPut(`/jobs/apply/${id}`),
      json = await res.data;
    console.log(json);
    setApplied(true);
  };

  const unApplyFunc = async () => {
    await axiosPut(`/jobs/unapply/${id}`);
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
    if (auth.role === "applicant") {
      getAppliedJobs();
    }
    getJob();
    // eslint-disable-next-line
  }, [id]);

  return (
    <>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <MainContainer>
            <JobContariner>
              <DataDivider>
                <Img src={logo} alt={"logo"} />
                <JobTitle>{job.title}</JobTitle>
                <JobAttribute>{job.employer.name}</JobAttribute>
                <div className="flex flex-row gap-1">
                  <JobAttribute>Publicada: </JobAttribute>
                  <p> {Date(job.creationDate)}</p>
                </div>
              </DataDivider>

              <JobDetailsBox>
                <div>
                  <JobAttribute>Aplicar antes de:</JobAttribute>
                  <p> 20 Oct 2022</p>
                </div>
                <div>
                  <JobAttribute>Requisitos</JobAttribute>
                  <p>Lorem ipsum dolor sit.</p>
                </div>
                <div>
                  <JobAttribute>Rango salarial</JobAttribute>
                  <p>$ {Intl.NumberFormat("es-MX").format(job.salary)}</p>
                </div>
                <div>
                  <JobAttribute>Ubicacion</JobAttribute>
                  <p>
                    {job.location.city} | {job.location.country}
                  </p>
                </div>
                <div>
                  <JobAttribute>Cantidad de aplicantes</JobAttribute>
                  <p>{job.applicants.length.toString()}</p>
                </div>
                <div>
                  <JobAttribute>Categorías</JobAttribute>
                  <div className="flex gap-1">
                    {job.category.map((item) => (
                      <p> {item},</p>
                    ))}
                  </div>
                </div>
              </JobDetailsBox>

              <DataDivider>
                <JobAttribute>Descripcion del trabajo</JobAttribute>
                <ReadMore>{job.description}</ReadMore>
              </DataDivider>

              <DataDivider>
                <JobAttribute>Requisitos del trabajo</JobAttribute>
                <ReadMore>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus, neque. Quia nam optio cumque eius eum fugit at
                  repellendus atque, porro sint ab perferendis minus
                  consequuntur dolorem fugiat fuga suscipit. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Exercitationem
                  consequatur quis animi molestias, itaque dolores veritatis
                  similique? Nam fugit saepe id unde minima, dolores voluptates
                  error, ex laborum omnis maiores.
                </ReadMore>
              </DataDivider>
              <DataDivider className="justify-self-center">
                {auth.role === "applicant" ? (
                  !applied ? (
                    <Button onClick={applyFunc} text="Aplicar"></Button>
                  ) : (
                    <Button onClick={unApplyFunc} text="Desaplicar"></Button>
                  )
                ) : null}
              </DataDivider>
            </JobContariner>
          </MainContainer>
        </>
      )}
    </>
  );
};

const MainContainer = tw.main`
top-56
flex
flex-row
gap-2.5
m-auto
mt-10
w-full
`;

const JobContariner = tw.section`
grid
border-2
border-purple-600
rounded-2xl
w-3/4
px-14
py-4
m-auto
`;
const JobDetailsBox = tw.div`
m-2
p-5
flex
flex-wrap
gap-2
justify-between
w-full
`;

const DataDivider = tw.div`
p-5
m-2
`;

const Img = tw.img`
  w-20
  mb-2
`;

const JobTitle = tw.h1`
  text-3xl
  font-bold
`;
const JobAttribute = tw.h2`
  text-base
  font-bold
`;
