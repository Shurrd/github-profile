import React from "react";
import { IRepo } from "../types";
import { GoStar, GoRepoForked, GoRepo } from "react-icons/go";
import languageColors from "../utils/languageColors";

const Repo = ({
  description,
  forks_count,
  name,
  language,
  size,
  stargazers_count,
}: IRepo) => {
  return (
    <div className="flex flex-col justify-between bg-white px-4 lg:px-6 py-8 shadow-md hover:shadow gap-6 duration-300 h-56 sm:h-48 md:h-52 lg:h-48">
      <div className="flex gap-4 items-center text-xl font-semibold text-gray-900">
        <p>
          <GoRepo />
        </p>
        <p>{name?.length > 25 ? `${name?.substring(0, 25)}...` : name}</p>
      </div>
      {description && (
        <p className="text-sm text-gray-500">
          {description.length > 70
            ? `${description?.substring(0, 70)}...`
            : description}
        </p>
      )}
      <div className="flex justify-between">
        <div className="flex gap-1 lg:gap-4">
          {language && (
            <div className="flex items-center gap-[0.1rem] md:gap-2 text-gray-500 text-sm">
              <div
                style={{
                  backgroundColor: languageColors[language],
                  height: "12px",
                  width: "12px",
                  borderRadius: "50%",
                }}
              ></div>
              <p className="text-sm text-gray-500">{language}</p>
            </div>
          )}
          <div className="flex items-center gap-[0.1rem] sm:gap-1 text-gray-500 text-sm">
            <p>
              <GoStar />
            </p>
            <p>{stargazers_count?.toLocaleString()}</p>
          </div>
          <div className="flex items-center gap-[0.1rem] sm:gap-1 text-gray-500 text-sm">
            <p>
              <GoRepoForked />
            </p>
            <p>{forks_count?.toLocaleString()}</p>
          </div>
        </div>
        <p className="md:text-sm text-[8px] text-gray-600 font-semibold">
          {size?.toLocaleString()} KB
        </p>
      </div>
    </div>
  );
};

export default Repo;
