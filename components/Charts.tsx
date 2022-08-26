import React from "react";
import { IProps } from "../types";
import MostStarredLanguages from "./charts/MostStarredLanguages";
import StarsPerLanguage from "./charts/StarsPerLanguage";
import TopLanguages from "./charts/TopLanguages";

const Charts = ({ languageData, repoData }: IProps) => {
  return (
    <div className="grid xl:grid-cols-3 gap-10 md:gap-x-1 md:gap-y-28 xl:gap-2 place-items-center md:grid-cols-2 grid-cols-1 border py-8 bg-gray-50">
      <TopLanguages languageData={languageData} />
      <MostStarredLanguages repoData={repoData} />
      <StarsPerLanguage />
    </div>
  );
};

export default Charts;
