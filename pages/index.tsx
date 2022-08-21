import type { NextPage } from "next";
import Head from "next/head";
import { FaGithub } from "react-icons/fa";
import SearchBar from "../components/SearchBar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>OctoProfile</title>
      </Head>
      <div className="bg-[#24292e] w-full h-[100vh] flex justify-center items-center flex-col gap-8 pb-48">
        <div className="flex flex-col items-center justfify-center gap-5">
          <p className="text-blue-600 text-6xl md:text-7xl">
            <FaGithub />
          </p>
          <p className="text-center text-gray-200 text-3xl md:text-4xl font-semibold tracking-wide">
            Find Your OctoProfile
          </p>
        </div>
        <SearchBar />
      </div>
    </>
  );
};

export default Home;
