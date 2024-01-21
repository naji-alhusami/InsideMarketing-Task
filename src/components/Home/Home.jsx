import { HomeData } from "./HomeData";
import { FaCheck } from "react-icons/fa";
import RatingIcon from "../../assets/RatingIcon";
import ApplePay from "../../assets/ApplePay";
import GooglePay from "../../assets/GooglePay";

const Home = () => {
  return (
    <div className="bg-gray-100 z-10 sm:px-4 xl:p-16">
      <h1 className="text-center text-sky-950 font-bold text-3xl md:text-5xl p-12">
        Kreditkarten-Vergleich: Top Kreditkarten 2024
      </h1>
      <div className="w-full flex flex-col justify-center items-center lg:flex-row lg:gap-x-4">
        {HomeData.map((data) => (
          <div
            key={data.id}
            className="w-full flex flex-row justify-center items-center my-4"
          >
            <div
              className={`w-full bg-white ${
                data.id === "1"
                  ? "border border-blue-500"
                  : data.id === "2"
                  ? "border-none"
                  : null
              }  rounded-md shadow-md hover:shadow-xl`}
            >
              <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                  <div className="flex flex-col sm:flex sm:flex-row-reverse">
                    <div className="flex flex-col sm:justify-center sm:items-center">
                      <img
                        src={data.bankImg}
                        alt="bank-cart"
                        className="w-[120px] h-[80px] ml-4 mt-4"
                      />

                      <h1 className="text-sm font-bold text-sky-950 py-4  ml-4 mt-4">
                        {data.header}
                      </h1>
                    </div>
                    <div className="relative bg-blue-400 text-white mb-12 shadow-lg rounded-r-lg px-4 py-2 ml-0 sm:mb-20 sm:mt-6 sm:ml-[-10px] sm:rounded-b-lg">
                      <div className=" sm:w-0 sm:h-0 sm:border-t-[10px] sm:border-t-transparent sm:border-r-[10px] sm:border-r-violet-900 sm:absolute sm:left-0 sm:top-[-10px]"></div>
                      <span>
                        <p>Top Empfehlung:</p>
                        <p>Gebührenfrei Mastercard Gold</p>
                      </span>
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
                      0.0 €
                    </span>
                    <span className="float-right">Grundgebühr</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-end sm:flex-row sm:justify-between sm:pl-4">
                <div className="float-right flex flex-row my-8  mr-4 mt-4">
                  <ApplePay />
                  <GooglePay />
                </div>
                <div className="w-full flex items-center justify-center p-4  sm:justify-end">
                  <button className="w-full bg-blue-800 text-white px-6 py-4 rounded-lg sm:w-[190px]">
                    Zum Angebot
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
