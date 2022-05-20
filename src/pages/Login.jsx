import React, { useRef, useContext } from "react";
import AuthContext from "../Context/AuthContext";
import tw from "twin.macro";
import { axiosPost } from "../axiosInstance";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const email = useRef(),
    password = useRef(),
    navigate = useNavigate(),
    { auth, setAuth } = useContext(AuthContext),
    url = "/auth/login";

  const login = async (event) => {
    event.preventDefault();
    const loginData = await {
      email: email.current.value,
      password: password.current.value,
    };
    try {
      let res = await axiosPost(url, loginData),
        json = await res.data;
      console.log(json);
      if (typeof window !== "undefined" && window.localStorage) {
        await localStorage.setItem("token", json.token);
      }
      await setAuth({
        logged: true,
        email: json.user.email,
        name: json.user.name,
        id: json.user.id,
      });
      await console.log(auth);
      navigate(-1);
    } catch (error) {
      error.response.data.message === "Wrong credentials"
        ? alert("Email o contraseña incorrecta")
        : alert(error.response.data.message);
      console.log(error.response);
    }
  };

  return (
    <>
      <Container>
        <CustomH1>Login</CustomH1>
        <FormContainer onSubmit={login}>
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
          <LoginBtn>Login</LoginBtn>
        </FormContainer>
      </Container>
    </>
  );
}

const Container = tw.main`
grid
grid-cols-1
grid-rows-5
justify-items-center
items-center
text-center
max-w-full
`;

const FormContainer = tw.form`
row-start-4
justify-items-center
flex
flex-col
gap-5
`;

const CustomH1 = tw.h1`
row-start-3
font-bold
text-2xl
text-accent
`;

const LoginBtn = tw.button`
bg-secondary
text-primary
h-10
rounded-lg
`;
