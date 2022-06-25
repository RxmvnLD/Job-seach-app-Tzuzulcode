/* eslint-disable no-throw-literal */
import axios from "axios";

export const getToken = () => {
  const storedToken = window.localStorage.getItem("token");
  if (typeof storedToken === "string") {
    return storedToken;
  }
};

const axiosInstance = axios.create({
  baseURL: "https://jobsearchapp-backend.uc.r.appspot.com/api",
  //baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json; charset=utf-8",
    Authorization: `Bearer ${getToken()}`,
  },
});

//Post
export const axiosPost = (url, data) => {
  return axiosInstance.post(url, data);
};

export const axiosGet = (url) => {
  return axiosInstance.get(url);
};

export const axiosPut = (url) => {
  return axiosInstance.put(url);
};
