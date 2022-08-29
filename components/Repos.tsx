import React from "react";
import { IProps } from "../types";
import Repo from "./Repo";
import Link from "next/link";
import FlipMove from "react-flip-move";

const Repos = ({ repoData }: IProps) => {
  return (
    <>
      {repoData && repoData?.length > 0 ? (
        <FlipMove
          typeName="ul"
          className="grid grid-cols-1 gap-x-4 gap-y-2 md:grid-cols-2 xl:grid-cols-3"
        >
          {repoData?.map((item) => (
            <li key={item.id}>
              <Link href={item.html_url}>
                <a target="_blank" rel="noreferrer">
                  <Repo {...item} />
                </a>
              </Link>
            </li>
          ))}
        </FlipMove>
      ) : (
        "No Available Repositories"
      )}
    </>
  );
};

export default Repos;
