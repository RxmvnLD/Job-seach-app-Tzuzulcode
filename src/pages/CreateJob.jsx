import React, { useContext } from "react";
import tw from "twin.macro";
import { axiosPost } from "../helpers/axiosInstance";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Input from "../components/Input";
import Button from "../components/Button";

const CreateJob = () => {
  const { auth } = useContext(AuthContext),
    navigate = useNavigate();
  console.log(auth);

  const createNewJob = async (event) => {
    event.preventDefault();
    const { title, description, categories, country, province, city, salary } =
      event.target;

    const jobData = {
      employer: {
        id: auth.id,
        name: auth.name,
        email: auth.email,
        role: auth.role,
      },
      description: description.value,
      title: title.value,
      category: categories.value.split(", "),
      location: {
        country: country.value,
        province: province.value,
        city: city.value,
      },
      salary: salary.value,
    };
    console.log(jobData);
    try {
      const res = await axiosPost("/jobs", jobData);
      console.log(res.data);
      //await console.log(json);
      await alert("Empleo creado con éxito");
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Etiqueta>Nuevo empleo</Etiqueta>
      <MainContainer>
        <FormContainer onSubmit={createNewJob}>
          <label>Titulo:</label>
          <Input
            type="text"
            name="title"
            inputPlaceholder="Nombre de la vacante"
            required
          />
          <label>Descripción:</label>
          <textarea
            type="text"
            name="description"
            placeholder="Descripción del puesto"
            className="p-2 border-2 border-purple-500 rounded text-accent bg-secondary caret-blue-900"
            required
          />
          <label>Categorías:</label>
          <Input
            type="text"
            name="categories"
            inputPlaceholder="Separe las categorías por una coma"
            required
          />
          <label>Ubicación:</label>
          <Input type="text" name="country" inputPlaceholder="Pais" required />
          <Input
            type="text"
            name="province"
            inputPlaceholder="Estado"
            required
          />
          <Input type="text" name="city" inputPlaceholder="Ciudad" required />
          <label>Salario mensual:</label>
          <Input
            type="number"
            name="salary"
            inputPlaceholder="Salario"
            required
          />
          <Button text="Crear vacante" />
        </FormContainer>
      </MainContainer>
    </>
  );
};
const MainContainer = tw.main`
top-56
md:top-10
grid
grid-cols-1
gap-1
m-auto
`;

const Etiqueta = tw.h1`
text-center
m-5
text-3xl
text-primary
font-bold
`;

const FormContainer = tw.form`
justify-items-center
flex
flex-col
gap-3
m-auto
w-1/4
`;

export default CreateJob;
