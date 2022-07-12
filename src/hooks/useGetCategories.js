import { useState, useEffect } from "react";
const { axiosGet } = require("../helpers/axiosInstance");

const useGetCategories = (url) => {
  const [categories, setCategories] = useState([]),
    [locations, setLocations] = useState({
      country: [],
      province: [],
      city: [],
    });

  const unfilteredCategories = [],
    unfilteredLocations = {
      country: [],
      province: [],
      city: [],
    };

  const getJobs = async (url) => {
    try {
      let res = await axiosGet(url),
        json = await res.data;
      // eslint-disable-next-line
      await json.map((element) => {
        unfilteredLocations.country.push(element.location.country);
        unfilteredLocations.province.push(element.location.province);
        unfilteredLocations.city.push(element.location.city);
        element.category.forEach((el) => {
          unfilteredCategories.push(el);
        });
      });
      await setCategories([...new Set(unfilteredCategories)]);
      await setLocations({
        country: [...new Set(unfilteredLocations.country)],
        province: [...new Set(unfilteredLocations.province)],
        city: [...new Set(unfilteredLocations.city)],
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJobs(url);
  }, [url]);

  return { categories, locations };
};

export default useGetCategories;
