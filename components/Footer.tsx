import React from "react";
import Link from "next/link";
import { GoStar } from "react-icons/go";

const Footer = () => {
  return (
    <footer className="text-center py-10 text-blue-500 md:text-[8px] text-[6px]  font-semibold flex flex-col gap-3">
      <p className="tracking-wider">
        Original Idea by{" "}
        <Link href="https://octoprofile.vercel.app/">
          <a className="underline hover:no-underline text-gray-500 font-bold">
            Brittany Chiang
          </a>
        </Link>
      </p>
      <p className="tracking-wider">
        <span className="text-gray-400 font-semibold">Built</span> with NextJs,
        TypeScript,{" "}
        <Link href="https://github.com/IonicaBizau/node-gh-polyglot">
          <a target="_blank" rel="noreferrer" className="hover:underline">
            Github Polyglot
          </a>
        </Link>
        ,{" "}
        <Link href="https://www.chartjs.org/">
          <a target="_blank" rel="noreferrer" className="hover:underline">
            ChartJs
          </a>
        </Link>{" "}
        and{" "}
        <Link href="https://github.com/joshwcomeau/react-flip-move">
          <a target="_blank" rel="noreferrer" className="hover:underline">
            React Flip Move
          </a>
        </Link>{" "}
        by{" "}
        <Link href="https://github.com/Shurrd/github-profile">
          <a
            className="underline hover:no-underline text-gray-500 font-bold"
            target="_blank"
            rel="noreferrer"
          >
            Adeyemi Abraham
          </a>
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
