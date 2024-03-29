import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { TbLetterX } from "react-icons/tb";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { GrCircleInformation } from "react-icons/gr";

import ImportandCardsDetails from "./ImportandCardsDetails";
import RatingIcon from "../../assets/RatingIcon";
import { ImportantCardsData } from "./ImportantCardsData";

const ImportantCards = () => {
  const [openBank, setOpenBank] = useState(null);

  const toggleDetailsVisibility = (bank) => {
    setOpenBank((prevBank) => (prevBank === bank ? null : bank));
  };

  return (
    <div className=" z-10 sm:px-4 lg:p-16">
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
                          0.0 €
                        </span>
                        <span className="float-right">Grundgebühr</span>
                      </div>
                      <div className="hidden lg:flex lg:flex-col lg:justify-center lg:items-center lg:pb-4">
                        <span className="font-bold">{data.WithdrawalFees}</span>
                        <div className="relative group">
                          <span className="flex flex-row items-center justify-center">
                            Abhebegebühren{" "}
                            <GrCircleInformation className="pl-1 cursor-pointer" />
                          </span>
                          <div className="hidden w-[220px] group-hover:block absolute bg-white text-black border border-black text-sm py-1 px-2 rounded-md bottom-6 left-32 transform -translate-x-1/2 shadow-lg z-10">
                            {data.info}
                          </div>
                        </div>
                        <span className="font-bold">{data.interest}</span>
                        <span>Zins</span>
                      </div>
                      <div className="text-gray-500  ml-4 mt-4">
                        <div className="flex flex-row items-center">
                          <FaCheck className="mr-2" />
                          <p
                            className={`${
                              data.advantage1 ===
                              "Gold-Karte mit Versicherungspaket"
                                ? "text-green-400 bg-green-100 rounded-lg"
                                : ""
                            }`}
                          >
                            {data.advantage1}
                          </p>
                        </div>
                        <div className="flex flex-row items-center py-2">
                          <FaCheck className="mr-2" />
                          <p
                            className={`${
                              data.advantage2 === "Flexible Rückzahlung" &&
                              data.bank !== "Extra Karte Mastercard"
                                ? "text-green-400 bg-green-100 rounded-lg"
                                : ""
                            }`}
                          >
                            {data.advantage2}
                          </p>
                        </div>
                        <div className="flex flex-row items-center">
                          {data.advantage3 === "Niedrigere Annahmequote" ? (
                            <TbLetterX className="mr-2" />
                          ) : (
                            <FaCheck className="mr-2" />
                          )}
                          <p>{data.advantage3}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between lg:flex-row-reverse lg:items-center">
                      <div className="flex flex-row justify-between">
                        <div className="relative pt-4 pr-4">
                          <RatingIcon />
                          <span className="font-bold text-sky-950 text-2xl absolute top-10 left-7 ">
                            {data.rate}
                          </span>
                          <span className="absolute top-20 left-4 text-gray-500 ">
                            {data.rateInWord}
                          </span>
                        </div>
                      </div>
                      <div className="lg:hidden flex flex-col pb-4">
                        <span className="font-bold text-sky-950 text-2xl float-right">
                          0.0 €
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
                    <button
                      className="flex flex-row justify-center items-center"
                      onClick={() => toggleDetailsVisibility(data.bank)}
                    >
                      {openBank === data.bank ? (
                        <>
                          Weniger Info <IoIosArrowUp />
                        </>
                      ) : (
                        <>
                          Mehr Info <IoIosArrowDown />
                        </>
                      )}
                    </button>
                  </div>
                  {openBank === data.bank && (
                    <ImportandCardsDetails selectedBank={data.bank} />
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
