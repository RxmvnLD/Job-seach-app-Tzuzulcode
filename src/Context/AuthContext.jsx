/* eslint-disable no-throw-literal */
import React, { createContext, useState, useEffect } from "react";
const AuthContext = createContext();
const loggedOut = { logged: false, email: "", name: "", id: "" },
  storedToken = window.localStorage.getItem("token"),
  url = "https://backendnodejstzuzulcode.uw.r.appspot.com/api/auth/validate",
  options = {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=utf-8",
      Authorization: `Basic ${storedToken}`,
    },
    redirect: "follow",
  };

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(loggedOut);

  useEffect(() => {
    const validateSession = async (url, options) => {
      try {
        let res = await fetch(url, options);
        if (!res.ok) {
          throw {
            error: true,
            status: res.status,
            statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
          };
        }
        let data = await res.json();
        //console.log(data);
        const userData = await {
          logged: data.logged,
          email: data.user.email,
          name: data.user.name,
          id: data.user.name,
        };
        await setAuth(userData);
      } catch (error) {
        console.log(error);
      }
    };
    if (storedToken) {
      validateSession(url, options);
    }
  }, []);
  //console.log(auth);

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
export default AuthContext;
