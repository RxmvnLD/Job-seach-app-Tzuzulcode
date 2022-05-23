/* eslint-disable no-throw-literal */
import React, { createContext, useState, useEffect } from "react";
import { getToken, axiosPost } from "../axiosInstance";
const AuthContext = createContext();
const loggedOut = { logged: false, email: "", name: "", id: "", role: "" },
  url = "/auth/validate";

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(loggedOut);
  useEffect(() => {
    const validateSession = async (url) => {
      try {
        let res = await axiosPost(url),
          json = res.data;
        //console.log(json);
        const userData = await {
          logged: json.logged,
          email: json.user.email,
          name: json.user.name,
          id: json.user.name,
          role: json.user.role,
        };
        await setAuth(userData);
      } catch (error) {
        console.log(error.response);
      }
    };
    if (getToken()) {
      validateSession(url);
    }
  }, []);

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
