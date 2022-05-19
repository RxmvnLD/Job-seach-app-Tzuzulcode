import React, { useContext, useRef } from "react";
import AuthContext from "../Context/AuthContext";

export default function Login() {
  const context = useContext(AuthContext);

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
        console.log(data);
        localStorage.setItem("token", data.token);
        context.setAuth({
          id: data.user.id,
          name: data.user.name,
          role: data.user.role,
          logged: true,
        });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={login}>
        <input
          ref={email}
          placeholder="Email..."
          type="email"
          className="text-black"
        />
        <input
          ref={password}
          placeholder="Password..."
          type="password"
          className="text-black"
        />
        <button>Login</button>
      </form>
    </div>
  );
}
