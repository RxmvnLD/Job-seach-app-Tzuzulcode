import React, { useRef, useContext, useState } from "react";
import AuthContext from "../Context/AuthContext";
import tw from "twin.macro";
import { axiosPost } from "../axiosInstance";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const email = useRef(),
    password = useRef(),
    name = useRef(),
    role = useRef(),
    navigate = useNavigate(),
    { auth, setAuth } = useContext(AuthContext),
    [option, setOption] = useState("applicant"),
    url = "/auth/signup";

  const signup = async (event) => {
    event.preventDefault();
    const signupData = await {
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
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
      navigate(-1);
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
        <input
          ref={name}
          placeholder="Nombre..."
          type="text"
          className="text-black col-start-2"
        />
        <input
          ref={email}
          placeholder="Email..."
          type="email"
          className="text-black col-start-2"
        />
        <input
          ref={password}
          placeholder="Password..."
          type="password"
          className="text-black col-start-2"
        />
        <RadioContainer>
          <label>
            <input
              ref={role}
              type="radio"
              value="applicant"
              name="signup-form"
              defaultChecked
              onChange={(e) => {
                setOption(e.target.value);
              }}
            />
            Applicant
          </label>
          <label>
            <input
              ref={role}
              type="radio"
              name="signup-form"
              value="employer"
              onChange={(e) => {
                setOption(e.target.value);
              }}
            />
            Employer
          </label>
          <SignUpBtn>SignUp</SignUpBtn>
        </RadioContainer>
      </FormContainer>
    </Container>
  );
}

const Container = tw.main`
grid
grid-cols-1
grid-rows-3
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

const SignUpBtn = tw.button`
bg-secondary
text-primary
h-10
rounded-lg
`;

const RadioContainer = tw.div`
row-start-5
grid
grid-rows-2
gap-0.5
self-center
items-center
`;
