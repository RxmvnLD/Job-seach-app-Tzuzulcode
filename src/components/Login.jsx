import { axiosPost } from "../helpers/axiosInstance";
import tw from "twin.macro";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import { Link } from "react-router-dom";
import workingLogo from "../imports/img/working-logo.png";

const Login = () => {
  const navigate = useNavigate();
  const login = async (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    try {
      const res = await axiosPost("/auth/login", {
        email: email.value,
        password: password.value,
      });
      const json = await res.data;
      await localStorage.setItem("token", json.token);
      await navigate("/home");
    } catch (error) {
      alert("Credenciales incorrectas");
    }
  };
  return (
    <>
      <MainContainer>
        <LogoContainer>
          <img src={workingLogo} className=" w-52" alt="logo" />
          <p className="w-full text-xl font-semibold text-center text-primary">
            Únete a DevJobs, una de las aplicaciones sociales profesionales más
            grandes. Busca trabajos y haz conexiones en una aplicación.
          </p>
        </LogoContainer>

        <LoginContainer>
          <Title>INGRESA A TU CUENTA</Title>
          <p>Por favor ingresa tu e-mail y contraseña </p>
          <FormContainer onSubmit={login}>
            <Input name="email" type="email" inputPlaceholder="Email" />
            <Input
              name="password"
              type="password"
              inputPlaceholder="Contraseña"
            />
            <Button text="Iniciar sesión" className="bg-purple-600" />
          </FormContainer>
          <p>
            ¿No tienes una cuenta?{" "}
            <Link
              to="/signup"
              className="hover:font-bold hover:text-accent hover:text-xl"
            >
              Crear una cuenta
            </Link>
          </p>
        </LoginContainer>
      </MainContainer>
      <footer></footer>
    </>
  );
};

const MainContainer = tw.main`
mt-32
flex
flex-row
justify-evenly
`;

const LoginContainer = tw.main`
mt-24
sm:mt-16
md:text-xl
flex
flex-col
items-center
gap-3
`;

const Title = tw.h1`
text-xl
md:text-3xl
font-semibold
text-accent
`;

const FormContainer = tw.form`
flex
flex-col
gap-2
items-center
`;

const LogoContainer = tw.div`
mt-[-82px]
w-1/4
flex
flex-col
items-center
`;

export default Login;
