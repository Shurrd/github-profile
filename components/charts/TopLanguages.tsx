import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import { IProps } from "../../types";
import ChartContainer from "./ChartContainer";

const TopLanguages = ({ languageData }: IProps) => {
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
    <ChartContainer title="Top Languages">
      <Pie data={data} />
    </ChartContainer>
  );
};

export default TopLanguages;
