import React from "react";
import { IRepo } from "../types";
import { GoStar, GoRepoForked, GoRepo } from "react-icons/go";

const Repo = ({
  id,
  description,
  forks_count,
  html_url,
  name,
  language,
  size,
  stargazers_count,
}: IRepo) => {
  return (
    <div className="flex flex-col justify-center bg-white py-6 px-6 shadow-md hover:shadow">
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Repo;
