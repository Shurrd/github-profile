import React from "react";
import { Doughnut } from "react-chartjs-2";
import { IProps } from "../../types";
import ChartContainer from "./ChartContainer";

const StarsPerLanguage = ({ starredLanguages, languageData }: IProps) => {
  const langColors = languageData?.map((item) => item.color);
  const filteredRepos = starredLanguages?.filter(
    (item) => !item.forks_count && item.stargazers_count > 0
  );
  const newLanguages = new Set(filteredRepos?.map((repo) => repo.language));
  const labels = Array.from(newLanguages.values()).filter((item) => item);
  const info = labels.map((language) => {
    const repos = filteredRepos?.filter((item) => item.language === language);
    const stars = repos?.map((item) => item.stargazers_count);

    return stars?.reduce((a, b) => a + b, 0);
  });

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Stars per Language",
        data: info,
        backgroundColor: langColors,
        borderColor: langColors,
        borderWidth: 1,
        hoverOffset: 4,
      },
    ],
  };

  return (
    <ChartContainer title="Stars per Language">
      <Doughnut data={data} />
    </ChartContainer>
  );
};

export default StarsPerLanguage;
