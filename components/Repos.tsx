import React from "react";
import { IProps } from "../types";
import Repo from "./Repo";
import Link from "next/link";

const Repos = ({ repoData }: IProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {repoData?.map((item) => (
        <Link href={item.html_url} key={item.id}>
          <a>
            <Repo {...item} />
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Repos;
