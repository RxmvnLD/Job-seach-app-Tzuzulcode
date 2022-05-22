import React, { useRef, useContext } from "react";
import tw from "twin.macro";
import Sidebar from "../components/user_sidebar/Sidebar";
import { axiosPost } from "../axiosInstance";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";

const CreateJob = () => {
  const title = useRef(),
    description = useRef(),
    categories = useRef(),
    country = useRef(),
    province = useRef(),
    city = useRef(),
    salary = useRef(),
    { auth } = useContext(AuthContext),
    navigate = useNavigate();

  const createNewJob = async (event) => {
    event.preventDefault();
    const jobData = {
      employer: {
        id: auth.id,
        name: auth.name,
        email: auth.email,
        role: auth.role,
      },
      description: description.current.value,
      title: title.current.value,
      category: categories.current.value.split(", "),
      location: {
        country: country.current.value,
        province: province.current.value,
        city: city.current.value,
      },
      salary: salary.current.value,
    };
    try {
      await axiosPost("/jobs", jobData);
      //await console.log(json);
      await alert("Empleo creado con éxito");
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <MainContainer>
        <Sidebar />
        <Etiqueta>Nuevo empleo</Etiqueta>
        <FormContainer onSubmit={createNewJob}>
          <label>Titulo:</label>
          <JobInput
            type="text"
            placeholder="Nombre de la vacante"
            ref={title}
            required
          />
          <label>Descripción:</label>
          <textarea
            type="text"
            placeholder="Descripción del puesto"
            ref={description}
            className="text-black"
            required
          />
          <label>Categorías:</label>
          <JobInput
            type="text"
            placeholder="Separe las categorías por una coma"
            ref={categories}
            required
          />
          <label>Ubicación:</label>
          <JobInput type="text" placeholder="Pais" ref={country} required />
          <JobInput type="text" placeholder="Estado" ref={province} required />
          <JobInput type="text" placeholder="Ciudad" ref={city} required />
          <label>Salario mensual:</label>
          <JobInput type="number" placeholder="Salario" ref={salary} required />
          <CreateBtn>Crear vacante</CreateBtn>
        </FormContainer>
      </MainContainer>
    </>
  );
};
const MainContainer = tw.main`
top-56
grid
grid-cols-1
gap-1
`;

const Etiqueta = tw.h1`
text-3xl
text-primary
font-bold
justify-self-center
`;

const FormContainer = tw.form`
m-16
row-start-4
justify-items-center
flex
flex-col
gap-3
`;

const JobInput = tw.input`
text-black
`;

const CreateBtn = tw.button`
bg-secondary
text-primary
h-10
rounded-lg
`;
export default CreateJob;
