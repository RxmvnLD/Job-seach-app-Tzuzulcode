import React, { useState, useEffect } from "react";
import { axiosGet } from "../axiosInstance";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import tw from "twin.macro";
import DropDownMenu from "./DropDownMenu";

function SortBy() {
  //Opened dropdowns
  const [isOpen, setIsOpen] = useState(false),
    [catIsOpen, setCatIsOpen] = useState(false),
    [locIsOpen, setLocIsOpen] = useState(false),
    //Available options
    [categories, setCategories] = useState([]),
    [countries, setCountries] = useState([]),
    [provinces, setProvinces] = useState([]),
    [cities, setCities] = useState([]),
    //Selected Options
    [catSel, setCatSel] = useState([]),
    [countsSel, setCountSel] = useState([]),
    [provSel, setProvSel] = useState([]),
    [citSel, setCitSel] = useState([]);
  const catArr = [],
    countArr = [],
    provArr = [],
    citiArr = [],
    filtCatArr = [],
    filtCountArr = [],
    filtProvArr = [],
    filtCitiArr = [];
  const getCategories = async () => {
    try {
      let res = await axiosGet("/jobs"),
        json = await res.data;
      let categoriesArr = await [];
      await json.forEach(async (job) => {
        await job.category.forEach((el) => categoriesArr.push(el));
      });
      await setCategories([...new Set(categoriesArr)]);
    } catch (error) {
      console.log(error);
    }
  };

  const getLocations = async () => {
    try {
      let res = await axiosGet("/jobs"),
        json = await res.data;
      let countriesArr = await [],
        provincesArr = await [],
        citiesArr = await [];
      await json.forEach(async (job) => {
        await countriesArr.push(job.location.country);
        await provincesArr.push(job.location.province);
        await citiesArr.push(job.location.city);
      });
      await setCountries([...new Set(countriesArr)]);
      await setProvinces([...new Set(provincesArr)]);
      await setCities([...new Set(citiesArr)]);
    } catch (error) {
      console.log(error);
    }
  };
  /* console.log(categories);
  console.log(countries, provinces, cities); */
  //console.log(categoriesSel);

  useEffect(() => {
    getCategories();
    getLocations();
  }, []);

  return (
    <>
      <MainContainer>
        <div>
          <Btn
            aria-expanded="true"
            aria-haspopup="true"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <p className="text-lg mx-2">Sort By</p>
            <div className="self-center">
              <FontAwesomeIcon className="text-xl" icon={solid("caret-down")} />
            </div>
          </Btn>
        </div>
        {isOpen ? (
          <DropdDown>
            <MenuDivider>
              <>
                <div>
                  <Btn
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={() => {
                      setCatIsOpen(!catIsOpen);
                    }}
                  >
                    <MenuText>Categories</MenuText>
                    <div className="self-center">
                      <FontAwesomeIcon
                        className="text-xl"
                        icon={solid("caret-down")}
                      />
                    </div>
                  </Btn>
                </div>
                {catIsOpen ? (
                  <DropdDown>
                    <MenuDivider>
                      <OptionsContainer>
                        {categories.map((el) => (
                          <label className="text-black inline-block">
                            <input
                              type="checkbox"
                              value={el}
                              onChange={(event) => {}}
                            />
                            {el}
                          </label>
                        ))}
                      </OptionsContainer>
                    </MenuDivider>
                  </DropdDown>
                ) : (
                  <></>
                )}
              </>
            </MenuDivider>
            <MenuDivider>
              <>
                <div>
                  <Btn
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={() => {
                      setLocIsOpen(!locIsOpen);
                    }}
                  >
                    <MenuText>Location</MenuText>
                    <div className="self-center">
                      <FontAwesomeIcon
                        className="text-xl"
                        icon={solid("caret-down")}
                      />
                    </div>
                  </Btn>
                </div>
                {locIsOpen ? (
                  <DropdDown>
                    <MenuDivider>
                      <OptionsContainer>
                        {countries.map((el) => (
                          <label className="text-black inline-block">
                            <input type="checkbox" value={el} />
                            {el}
                          </label>
                        ))}
                      </OptionsContainer>
                    </MenuDivider>
                    <MenuDivider>
                      <OptionsContainer>
                        {provinces.map((el) => (
                          <label className="text-black inline-block">
                            <input type="checkbox" value={el} />
                            {el}
                          </label>
                        ))}
                      </OptionsContainer>
                    </MenuDivider>
                    <MenuDivider>
                      <OptionsContainer>
                        {cities.map((el) => (
                          <label className="text-black inline-block">
                            <input type="checkbox" value={el} />
                            {el}
                          </label>
                        ))}
                      </OptionsContainer>
                    </MenuDivider>
                  </DropdDown>
                ) : (
                  <></>
                )}
              </>
            </MenuDivider>
          </DropdDown>
        ) : (
          <></>
        )}
      </MainContainer>
    </>
  );
}

const MainContainer = tw.div`
relative
inline-block
text-left
mx-10
`;

const Btn = tw.button`
inline-flex
justify-center
w-full
rounded-md
border
border-gray-300
shadow-sm px-4
py-2
bg-white
text-sm
font-medium
text-gray-700
hover:bg-gray-50
focus:outline-none
focus:ring-2
focus:ring-offset-2
focus:ring-offset-gray-100
focus:ring-indigo-500`;

const DropdDown = tw.div`
origin-top-right
absolute
right-0
mt-2
w-56
rounded-md
shadow-lg
bg-white
ring-1
ring-black
ring-opacity-5
divide-y
divide-gray-100
focus:outline-none
`;

const MenuDivider = tw.div`
py-1
`;

const OptionsContainer = tw.div`
flex
flex-col
`;
const MenuText = tw.h2`
text-lg mx-2
`;
export default SortBy;
