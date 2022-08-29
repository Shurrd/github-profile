import React from "react";
import { IProps } from "../types";

const Filter = ({ handleChange }: IProps) => {
  return (
    <div className="flex gap-5 items-center">
      <p className="mb-5 pb-2 text-xl lg:text-2xl font-semibold text-gray-700 border-dashed border-b-2 w-max">
        Top Repos
      </p>
      <p className="-mt-6 text-xl">by</p>
      <select
        name=""
        id=""
        className="h-10 border w-28 -mt-5 pl-3 outline-none bg-gray-100 text-gray-800 font-semibold rounded"
        onChange={handleChange}
      >
        <option value="stars">Stars</option>
        <option value="forks">Forks</option>
        <option value="size">Size</option>
      </select>
    </div>
  );
};

export default Filter;
