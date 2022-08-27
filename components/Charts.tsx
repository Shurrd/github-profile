import React from "react";
import { IProps } from "../types";
import MostStarred from "./charts/MostStarred";
import StarsPerLanguage from "./charts/StarsPerLanguage";
import TopLanguages from "./charts/TopLanguages";

const Charts = ({ languageData, sortedStars, starredLanguages }: IProps) => {
  return (
    <div className="grid xl:grid-cols-3 gap-10 md:gap-x-1 md:gap-y-28 xl:gap-2 place-items-center md:grid-cols-2 grid-cols-1 py-8 px-14 bg-gray-50">
      <TopLanguages languageData={languageData} />
      <MostStarred languageData={languageData} sortedStars={sortedStars} />
      <StarsPerLanguage
        starredLanguages={starredLanguages}
        languageData={languageData}
      />
    </div>
  );
};

export default Charts;
