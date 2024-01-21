import { FaCheck } from "react-icons/fa";
import RatingIcon from "../../assets/RatingIcon";

import { ImportantCardsData } from "./ImportantCardsData";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import ImportandCardsDetails from "./ImportandCardsDetails";

const ImportantCards = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedBank, setSelectedBank] = useState("");

  const showDetailsHandler = (id, bank) => {
    setShowDetails(!showDetails);
    setSelectedBank(bank);
  };

  return (
    <div className=" z-10 sm:px-4 xl:p-16">
      <div className="w-full flex flex-col justify-center items-center">
        {ImportantCardsData.map((data) => (
          <div key={data.id} className="w-full">
            <div
              className={`w-full   my-4  bg-white ${
                data.id === "1"
                  ? "border border-blue-500"
                  : data.id === "2"
                  ? "border-gray-100"
                  : null
              }  rounded-md shadow-lg hover:shadow-xl`}
            >
              <div className="flex flex-col">
                <div className="flex flex-col lg:flex-row lg:justify-between">
                  <div className="flex flex-row justify-between py-4">
                    <div className="flex flex-col justify-between lg:flex-row">
                      <div className="flex flex-col ">
                        <img
                          src={data.bankImg}
                          alt="bank-cart"
                          className="w-[120px] h-[80px] ml-4 mt-4"
                        />
                        <h1 className="text-sm font-bold text-sky-950  ml-4 mt-4">
                          {data.bank}
                        </h1>
                      </div>
                      <div className="hidden lg:flex lg:flex-col lg:justify-center lg:pb-4">
                        <span className="font-bold text-sky-950 text-2xl float-right">
                          0.0 $
                        </span>
                        <span className="float-right">Grundgebühr</span>
                      </div>
                      <div className="hidden lg:flex lg:flex-col lg:justify-center lg:items-center lg:pb-4">
                        <span className="font-bold">0,00 %</span>
                        <span>Abhebegebühren</span>
                        <span className="font-bold">24,79 %</span>
                        <span>Zins</span>
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
                    <div className="flex flex-col justify-between lg:flex-row-reverse lg:items-center">
                      <div className="flex flex-row justify-between">
                        <div className="relative pt-4 pr-4">
                          <RatingIcon />
                          <span className="font-bold text-sky-950 text-2xl absolute top-10 left-7">
                            1.1
                          </span>
                          <span className="absolute top-20 left-4 text-gray-500">
                            Exzellent
                          </span>
                        </div>
                      </div>
                      <div className="lg:hidden flex flex-col pb-4">
                        <span className="font-bold text-sky-950 text-2xl float-right">
                          0.0 $
                        </span>
                        <span className="float-right">Grundgebühr</span>
                      </div>
                    </div>
                  </div>

                  <div className="w-full flex items-center justify-end p-4 lg:w-[190px]">
                    <button className="w-full bg-blue-800 text-white px-6 py-4 rounded-lg sm:w-[190px]">
                      Zum Angebot
                    </button>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-full border border-gray-200"></div>
                  <div className="flex flex-row justify-center items-center py-4">
                    {showDetails && selectedBank === data.bank ? (
                      <button
                        className="flex flex-row justify-center items-center"
                        onClick={() => showDetailsHandler(data.id, data.bank)}
                      >
                        Weniger Info <IoIosArrowUp />
                      </button>
                    ) : (
                      <button
                        className="flex flex-row justify-center items-center"
                        onClick={() => showDetailsHandler(data.id, data.bank)}
                      >
                        Mehr Info
                        <IoIosArrowDown />
                      </button>
                    )}
                  </div>
                  {showDetails && selectedBank === data.bank && (
                    <ImportandCardsDetails selectedBank={selectedBank} />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImportantCards;
