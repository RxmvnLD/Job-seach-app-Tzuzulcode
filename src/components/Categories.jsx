import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import { axiosPost } from "../helpers/axiosInstance";
import useGetCategories from "../hooks/useGetCategories";

const Categories = ({ searchHandler }) => {
  const { categories, locations } = useGetCategories("/jobs");
  const [filter, setFilter] = useState({
    categories: [],
    countries: [],
    provinces: [],
    cities: [],
  });
  const [search, setSearch] = useState({
    categories: [],
    countries: [],
    provinces: [],
    cities: [],
  });
  const [results, setResults] = useState({
    jobsByCategory: [],
    jobsByLocation: [],
  });

  const filterCategoriesCheckboxes = (event) => {
    if (event.target.checked) {
      setFilter({
        ...filter,
        categories: [...filter.categories, event.target.value],
      });
    } else {
      setFilter({
        ...search,
        categories: search.categories.filter(
          (item) => item !== event.target.value
        ),
      });
    }
  };
  const filterCountriesCheckboxes = (event) => {
    if (event.target.checked) {
      setFilter({
        ...filter,
        countries: [...filter.countries, event.target.value],
      });
    } else {
      setFilter({
        ...search,
        countries: search.countries.filter(
          (country) => country !== event.target.value
        ),
      });
    }
  };
  const filterProvincesCheckboxes = (event) => {
    if (event.target.checked) {
      setFilter({
        ...filter,
        provinces: [...filter.provinces, event.target.value],
      });
    } else {
      setFilter({
        ...search,
        provinces: search.provinces.filter(
          (province) => province !== event.target.value
        ),
      });
    }
  };
  const filterCitiesCheckboxes = (event) => {
    if (event.target.checked) {
      setFilter({
        ...filter,
        cities: [...filter.cities, event.target.value],
      });
    } else {
      setFilter({
        ...search,
        cities: search.cities.filter((city) => city !== event.target.value),
      });
    }
  };

  const categorySearch = async () => {
    try {
      let res = await axiosPost("/jobs/category", {
          category: search.categories,
        }),
        json = await res.data;
      await console.log(json);
      await setResults((results.jobsByCategory = json));
    } catch (error) {
      console.log(error);
    }
  };

  const countrySearch = async () => {
    try {
      let res = await axiosPost("/jobs/location", {
          country: search.countries,
        }),
        json = await res.data;
      setResults((results.jobsByLocation = json));
    } catch (error) {
      console.log(error);
    }
  };
  const provinceSearch = async () => {
    try {
      let res = await axiosPost("/jobs/location", {
          province: search.provinces,
        }),
        json = await res.data;
      console.log(json);
      await setResults((results.jobsByLocation = json));
    } catch (error) {
      console.log(error);
    }
  };
  const citySearch = async () => {
    try {
      let res = await axiosPost("/jobs/location", {
          city: search.cities,
        }),
        json = await res.data;
      setResults({ ...results, jobsByLocation: json });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setSearch({
      ...search,
      categories: [...new Set(filter.categories)],
      countries: [...new Set(filter.countries)],
      provinces: [...new Set(filter.provinces)],
      cities: [...new Set(filter.cities)],
    });
  }, [filter]);

  useEffect(() => {
    categorySearch();
    countrySearch();
    provinceSearch();
    citySearch();
  }, [search]);

  useEffect(() => {
    searchHandler(results);
    /* console.log("Categorías:", results.jobsByCategory);
    console.log("Ubicación:", results.jobsByLocation); */
  }, [results]);

  return (
    <MainContainer>
      <nav>
        <ul>
          <h2 className="text-xl text-accent">Categorías</h2>
          {categories.map((element) => {
            return (
              <Category>
                <input
                  type="checkbox"
                  value={element}
                  onChange={(e) => {
                    filterCategoriesCheckboxes(e);
                  }}
                />
                <label>{element}</label>
              </Category>
            );
          })}
        </ul>
      </nav>
    </MainContainer>
  );
};

const MainContainer = tw.aside`
border-2
border-purple-600
rounded-2xl
px-5
py-5
flex
flex-col
w-1/12
mx-14
text-lg
mb-20
`;
const Divider = tw.hr`
border-2
border-b-purple-600
my-2
w-auto
`;

const Category = tw.li`
m-auto
flex
flex-row
items-center
gap-1
`;

export default Categories;
