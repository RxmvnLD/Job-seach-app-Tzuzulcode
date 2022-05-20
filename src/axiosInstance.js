/* eslint-disable no-throw-literal */
import axios from "axios";

function getToken() {
  const storedToken = window.localStorage.getItem("token");
  if (typeof storedToken === "string") {
    return storedToken;
  }
}

const axiosInstance = axios.create({
  baseURL: "https://backendnodejstzuzulcode.uw.r.appspot.com/api",
  headers: {
    "Content-type": "application/json; charset=utf-8",
    Authorization: `Bearer ${getToken()}`,
  },
});

//Post
export const axiosPost = (url, data) => {
  return axiosInstance.post(url, data);
};
