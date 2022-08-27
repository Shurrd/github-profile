import React from "react";
import { IProps } from "../types";
import Repos from "./Repos";

const Filter = ({ repoData }: IProps) => {
  return (
    <div className="px-20 lg:px-24 pt-16 bg-gray-50 h-[100vh]">
      <div className="flex gap-5 items-center">
        <p className="mb-5 pb-2 text-xl lg:text-2xl font-semibold text-gray-700 border-dashed border-b-2 w-max">
          Top Repos
        </p>
        <p className="-mt-6 text-xl">by</p>
        <select
          name=""
          id=""
          className="h-10 border w-28 -mt-5 outline-none bg-gray-100 text-gray-800 font-semibold rounded"
        >
          <option value="">Stars</option>
          <option value="">Forks</option>
          <option value="">Size</option>
        </select>
      </div>
      <Repos repoData={repoData} />
    </div>
  );
};

export default Filter;
