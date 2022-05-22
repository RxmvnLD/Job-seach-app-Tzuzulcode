import React, { useState } from "react";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const DropDownMenu = ({ text, child }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(child);
  return (
    <>
      <div>
        <Btn
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <MenuText>{text}</MenuText>
          <div className="self-center">
            <FontAwesomeIcon className="text-xl" icon={solid("caret-down")} />
          </div>
        </Btn>
      </div>
      {isOpen ? (
        <DropdDown>
          <MenuDivider>
            {child.map((el) => (
              <label className="text-black">
                <input type="checkbox" value={el} />
                {el}
              </label>
            ))}
          </MenuDivider>
        </DropdDown>
      ) : (
        <></>
      )}
    </>
  );
};
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
flex
flex-col
`;

const MenuText = tw.h2`
text-lg mx-2
`;
export default DropDownMenu;
