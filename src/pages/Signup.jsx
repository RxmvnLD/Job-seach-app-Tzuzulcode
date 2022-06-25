import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import tw from "twin.macro";
import { axiosPost } from "../helpers/axiosInstance";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

export default function SignUp() {
  const navigate = useNavigate(),
    { setAuth } = useContext(AuthContext),
    [option, setOption] = useState("applicant"),
    url = "/auth/signup";

  const signup = async (event) => {
    event.preventDefault();
    const { name, email, password } = event.target;
    const signupData = await {
      name: name.value,
      email: email.value,
      password: password.value,
      role: option,
    };

    try {
      let res = await axiosPost(url, signupData),
        json = await res.data;
      if (typeof window !== "undefined" && window.localStorage) {
        await localStorage.setItem("token", json.token);
      }
      await setAuth({
        logged: true,
        email: json.user.email,
        name: json.user.name,
        id: json.user.id,
      });
      await alert("Registro exitoso");
      navigate("/home");
    } catch (error) {
      error.response.data.message === "Wrong credentials"
        ? alert("Email o contraseña incorrecta")
        : alert(error.response.data.message);
      console.log(error.response);
    }
  };

  return (
    <Container>
      <FormContainer onSubmit={signup}>
        <CustomH1>SignUp</CustomH1>
        <Input name="name" type="text" inputPlaceholder="Nombre" />
        <Input name="email" type="email" inputPlaceholder="Correo" />
        <Input name="password" type="password" inputPlaceholder="Contraseña" />
        <RadioContainer>
          <label>
            <input
              type="radio"
              value="applicant"
              name="signup-form"
              defaultChecked
              onChange={(e) => {
                setOption(e.target.value);
                console.log(e.target.value);
              }}
            />
            Applicant
          </label>
          <label>
            <input
              type="radio"
              name="signup-form"
              value="employer"
              onChange={(e) => {
                setOption(e.target.value);
                console.log(e.target.value);
              }}
            />
            Employer
          </label>
          <Button text="Registrarse" />
        </RadioContainer>
      </FormContainer>
    </Container>
  );
}

const Container = tw.main`
mt-36
flex
flex-col
items-center
justify-center
justify-items-center
text-center
max-w-full
`;
const CustomH1 = tw.h1`
self-center
font-bold
text-2xl
text-accent
`;

const FormContainer = tw.form`
self-center
row-start-2
justify-items-center
flex
flex-col
gap-5
`;

const RadioContainer = tw.div`
row-start-5
grid
grid-rows-2
gap-0.5
self-center
items-center
`;
