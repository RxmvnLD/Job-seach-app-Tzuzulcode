import React, { useContext, useRef } from "react";
import { authContext } from "../Context/AuthContext";

export default function Login() {
  const context = useContext(authContext);

  const email = useRef();
  const password = useRef();

  const login = (event) => {
    event.preventDefault();
    fetch("https://backendnodejstzuzulcode.uw.r.appspot.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.current.value,
        password: password.current.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
          console.log(data)
        localStorage.setItem("token", data.token);
        context.setAuth({
          id: data.user.id,
          name: data.user.name,
          role:data.user.role,
          logged: true,
        });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={login}>
        <input ref={email} placeholder="Email..." type="email" />
        <input ref={password} placeholder="Password..." type="password" />

        <button>Login</button>
      </form>
    </div>
  );
}
