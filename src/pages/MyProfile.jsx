import React, { useContext } from "react";
import tw from "twin.macro";
import AuthContext from "../context/AuthContext";
import profilepic from "../assets/profilepic.png";
const MyProfile = () => {
  const { auth } = useContext(AuthContext);

  console.log(auth);
  return (
    <>
      <Etiqueta>Mi perfil</Etiqueta>
      <MainContainer>
        <UserDataContainer>
          <img src={profilepic} alt="profile photo" className="rounded-full" />
          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-bold text-accent">Datos del perfil.</h3>
            <p>
              <b>Nombre:</b> {auth.name}
            </p>
            <p>
              <b>Rol:</b> {auth.role}
            </p>
            <p>
              <b>Correo:</b> {auth.email}
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {auth.role === "applicant" ? (
              <h3 className="text-xl font-bold text-accent">Mi dirección.</h3>
            ) : (
              <h3 className="text-xl font-bold text-accent">
                Dirección de la empresa.
              </h3>
            )}

            <p>
              <b>Calle y num:</b> Lorem ipsum dolor, sit amet consectetur
              adipisicing elit.
            </p>
            <p>
              <b>Ciudad o municipio:</b> Lorem ipsum dolor, sit amet consectetur
              adipisicing elit.
            </p>
            <p>
              <b>Estado:</b> Lorem ipsum dolor, sit amet consectetur adipisicing
              elit.
            </p>
            <p>
              <b>Pais:</b> Lorem ipsum dolor, sit amet consectetur adipisicing
              elit.
            </p>
          </div>
        </UserDataContainer>
      </MainContainer>
    </>
  );
};

const MainContainer = tw.main`
top-56
flex
flex-row
gap-2.5
mx-16
m-auto
w-full
h-full
`;

const Etiqueta = tw.h1`
text-center
m-5
text-3xl
text-primary
font-bold
`;

const UserDataContainer = tw.section`
flex
flex-row
border-2
border-purple-600
rounded-2xl
w-3/4
px-14
py-4
m-auto
gap-10
justify-evenly
`;

export default MyProfile;
