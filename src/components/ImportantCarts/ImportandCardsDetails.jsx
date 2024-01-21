/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { ImportantCartsDetailsData } from "./ImportantCardsDetailsData";
import { CheckIcon } from "../../assets/CheckIcon";
import { FalseIcon } from "../../assets/FlaseIcon";

const ImportandCardsDetails = ({ selectedBank }) => {
  const [selectedDetail, setSelectedDetail] = useState("");

  const bankDetails = ImportantCartsDetailsData.filter(
    (bankName) => bankName.bank === selectedBank
  );

  const selectedDetailsData =
    bankDetails.length > 0
      ? bankDetails[0].details.find(
          (data) => data.mainHeader === selectedDetail
        )
      : null;

  console.log(selectedDetailsData);

  return (
    <div className="flex flex-col flex-wrap px-4 md:flex md:flex-col">
      <div className="flex flex-row flex-wrap justify-between items-center border-b-2 border-gray-300 ">
        {bankDetails.length > 0 &&
          bankDetails[0].details.map((data) => (
            <div key={data.id}>
              <h2
                onClick={() => setSelectedDetail(data.mainHeader)}
                className={`pr-8 pb-4 hover:text-blue-500 cursor-pointer text-center ${
                  selectedDetail === data.mainHeader
                    ? "active border-b-4 border-blue-400"
                    : ""
                }`}
              >
                {data.mainHeader}
              </h2>
            </div>
          ))}
      </div>
      {(selectedDetail === "Allgemein" ||
        selectedDetail === "Bargeld / Bezahlung") &&
        selectedDetailsData && (
          <div className="py-6">
            <table className="table-auto w-full">
              <tbody>
                {selectedDetailsData.details.map((item) => (
                  <React.Fragment key={item.id}>
                    <tr className="bg-gray-100 border m-4 font-bold underline">
                      <td className="pl-4 py-2">{item.detailHeader}</td>
                    </tr>
                    {item.details.map((test) => (
                      <tr key={test.id}>
                        <td className="border px-4 py-2">{test.title}</td>
                        <td className="border px-4 py-2">{test.detail}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        )}
      {(selectedDetail === "Versicherung" || selectedDetail === "Bonus") &&
        selectedDetailsData && (
          <div className="py-6">
            <table className="table-auto w-full">
              <tbody>
                {selectedDetailsData.details.map((item) => (
                  <tr key={item.id}>
                    <td className="border px-4 py-2">{item.title}</td>
                    <td className="border px-4 py-2">
                      {item.detail === "true" ? <CheckIcon /> : <FalseIcon />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      {selectedDetail === "Bewertung" && selectedDetailsData && (
        <div className="py-6">
          <table className="table-auto w-full">
            <tbody>
              {selectedDetailsData.details.map((item) => (
                <tr key={item.id}>
                  <td className="border px-4 py-2 font-bold">{item.title}</td>
                  <td className="border px-4 py-2">{item.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ImportandCardsDetails;
