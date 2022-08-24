import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import { ILanguageData } from "../../types";

const TopLanguages = ({ languageData }: { languageData: ILanguageData }) => {
  const language = languageData?.map((lang) => lang.label);
  const value = languageData?.map((lang) => lang.value);
  const color = languageData?.map((lang) => lang.color);

  const data = {
    labels: language,
    datasets: [
      {
        label: "Top languages",
        backgroundColor: color,
        borderColor: color,
        data: value,
      },
    ],
  };

  return (
    <div className="bg-white py-6 shadow-md rounded-md md:-mt-16 -mt-0 z-50 w-[24rem] flex items-center justify-center flex-col">
      <p className="text-center mb-5 pb-2 text-2xl font-semibold text-gray-700 border-dashed border-b-2 w-max">
        Top Languages
      </p>
      <Pie data={data} />
    </div>
  );
};

export default TopLanguages;
