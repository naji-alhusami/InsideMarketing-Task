/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { NavbarItemsData } from "./NavbarItemsData";

const NavbarMobile = ({ isToggled }) => {
  const [selectedHeader, setSelectedHeader] = useState(null);

  function showNavbarItemsHandler(headerId) {
    setSelectedHeader(headerId === selectedHeader ? null : headerId);
  }

  return (
    <div className="absolute w-full top-16 left-0 text-slate-500">
      {isToggled && (
        <ul>
          {NavbarItemsData.map((header) => (
            <>
              <div
                className={`w-full cursor-pointer ${
                  selectedHeader === header.id ? "" : "border-b border-gray-300"
                }`}
                key={header.id}
              >
                <li
                  onClick={() => showNavbarItemsHandler(header.id)}
                  className={`w-full flex flex-row justify-between items-center px-6 py-4 text-3xl transition duration-300  ${
                    selectedHeader === header.id
                      ? "text-blue-500 font-bold border-l-4 border-blue-500"
                      : ""
                  }`}
                >
                  <div>{header.header}</div>
                  <div>
                    {selectedHeader === header.id ? (
                      <IoIosArrowUp className="text-lg mx-5" />
                    ) : (
                      <IoIosArrowDown className="text-lg mx-5" />
                    )}
                  </div>
                </li>
              </div>
              <div>
                {selectedHeader === header.id && (
                  <div>
                    {header.details.map((detail) => (
                      <div key={detail.id} className="mx-8 py-2">
                        <h1 className="text-gray-400 border-b border-gray-200 py-2">
                          {detail.detailHeader}
                        </h1>
                        <p className="cursor-pointer py-2 hover:text-blue-600 hover:bg-blue-200">
                          {detail.detail1}
                        </p>
                        <p className="cursor-pointer py-2 hover:text-blue-600 hover:bg-blue-200">
                          {detail.detail2}
                        </p>
                        <p className="cursor-pointer py-2 hover:text-blue-600 hover:bg-blue-200">
                          {detail.detail3}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavbarMobile;
