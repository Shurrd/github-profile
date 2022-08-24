import React from "react";
import { ILanguageData } from "../types";
import MostStarredLanguages from "./charts/MostStarredLanguages";
import StarsPerLanguage from "./charts/StarsPerLanguage";
import TopLanguages from "./charts/TopLanguages";

const Charts = ({ languageData }: { languageData: ILanguageData }) => {
  return (
    <div className="grid place-items-center lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 md:gap-6 px-32 py-8 bg-gray-50">
      <TopLanguages languageData={languageData} />
      <MostStarredLanguages />
      <StarsPerLanguage />
    </div>
  );
};

export default Charts;
