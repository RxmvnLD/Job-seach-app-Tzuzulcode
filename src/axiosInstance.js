import axios from "axios";

const getToken = () => {
  const storedToken = window.localStorage.getItem("token");
  if (typeof storedToken === "string") {
    return storedToken;
  }
};

const axiosInstance = axios.create({
  baseURL: "https://backendnodejstzuzulcode.uw.r.appspot.com/api",
  headers: {
    "Content-type": "application/json; charset=utf-8",
    Authorization: `Bearer ${getToken()}`,
  },
});

/* const axiosPost = async (url, rawData) => {
  try {
    const res = await axiosInstance.post(url, rawData),
      json = await res.data;
    return json;
  } catch (error) {
    console.log(error);
  }
};

export { axiosPost }; */
export default axiosInstance;
