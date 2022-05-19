import React, { useRef } from "react";

export default function SignUp() {
  const email = useRef();
  const password = useRef();
  const name = useRef();

  const signup = (event) => {
    event.preventDefault();
    fetch("http://localhost:4000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.current.value,
        email: email.current.value,
        password: password.current.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={signup}>
        <input
          ref={name}
          placeholder="Nombre..."
          type="text"
          className="text-black"
        />
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

        <button>Sign up</button>
      </form>
    </div>
  );
}
