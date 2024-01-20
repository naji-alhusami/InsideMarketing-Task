import { FaCheck } from "react-icons/fa";
import RatingIcon from "../../assets/RatingIcon";
import golden from "../../assets/golden.png";
import golden2 from "../../assets/golden-2.png";
import { ImportantCartsData } from "./ImportantCardsData";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

const ImportantCards = () => {
  const [showDetails, setShowDetails] = useState(false);

  const showDetailsHandler = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className=" z-10 sm:px-4 xl:p-16">
      <div className="w-full flex flex-col justify-center items-center">
        {ImportantCartsData.map((data) => (
          <div
            key={data.id}
            className="w-full flex flex-row justify-center items-center my-4"
          >
            <div
              className={`w-full bg-white ${
                data.id === "1"
                  ? "border border-blue-500"
                  : data.id === "2"
                  ? "border-gray-100"
                  : null
              }  rounded-md shadow-lg hover:shadow-xl`}
            >
              <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                  <div className="flex flex-col sm:flex sm:flex-row-reverse">
                    <div className="flex flex-col sm:justify-center sm:items-center">
                      {data.id === "1" ? (
                        <img
                          src={golden}
                          alt="golden-cart"
                          className="w-[120px] h-[80px] ml-4 mt-4"
                        />
                      ) : data.id === "2" ? (
                        <img
                          src={golden2}
                          alt="golden-cart-2"
                          className="w-[120px] h-[80px] ml-4 mt-4"
                        />
                      ) : null}
                      <h1 className="text-sm font-bold text-sky-950 py-4  ml-4 mt-4">
                        {data.header}
                      </h1>
                    </div>
                  </div>
                  <div className="text-gray-500  ml-4 mt-4">
                    <div className="flex flex-row items-center">
                      <FaCheck className="mr-2" />
                      <p>{data.advantage1}</p>
                    </div>
                    <div className="flex flex-row items-center">
                      <FaCheck className="mr-2" />
                      <p>{data.advantage2}</p>
                    </div>
                    <div className="flex flex-row items-center">
                      <FaCheck className="mr-2" />
                      <p>{data.advantage3}</p>
                    </div>
                  </div>
                </div>
                <div className="relative flex flex-col justify-between items-end  mr-4 mt-4">
                  <div>
                    <RatingIcon />
                    <span className="font-bold text-sky-950 text-2xl absolute top-6 left-8">
                      1.1
                    </span>
                    <span className="absolute top-16 left-4 text-gray-500">
                      Exzellent
                    </span>
                  </div>
                  <div className="flex flex-col pb-4">
                    <span className="font-bold text-sky-950 text-2xl float-right">
                      0.0 $
                    </span>
                    <span className="float-right">Grundgebühr</span>
                  </div>
                </div>
              </div>
              <div className="w-full flex items-center justify-center p-4 sm:justify-end">
                <button className="w-full bg-blue-800 text-white px-6 py-4 rounded-lg sm:w-[190px]">
                  Zum Angebot
                </button>
              </div>
              <div className="w-full border border-gray-200"></div>
              <div className="flex flex-row justify-center items-center py-4">
                {showDetails ? (
                  <button
                    onClick={showDetailsHandler}
                    className="flex flex-row justify-center items-center"
                  >
                    Mehr Info
                    <IoIosArrowUp />
                  </button>
                ) : (
                  <button
                    className="flex flex-row justify-center items-center"
                    onClick={showDetailsHandler}
                  >
                    Weniger Info <IoIosArrowUp />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImportantCards;
