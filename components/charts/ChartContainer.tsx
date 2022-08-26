import React from "react";
import { IChart } from "../../types";

const ChartContainer = ({ title, children }: IChart) => {
  return (
    <div className="bg-white py-6 px-8 shadow-md rounded-md md:-mt-16 -mt-0 z-50 w-[20rem] flex items-center justify-center flex-col">
      <p className="text-center mb-5 pb-2 text-2xl font-semibold text-gray-700 border-dashed border-b-2 w-max">
        {title}
      </p>
      {children}
    </div>
  );
};

export default ChartContainer;
