import Link from "next/link";
import Head from "next/head";
import React from "react";

const Error = () => {
  return (
    <>
      <Head>
        <title>OctoProfile | Error</title>
      </Head>

      <section className="flex flex-col items-center justify-center h-[100vh] bg-gray-100 gap-7 md:p-0 px-8 text-center">
        <p className="text-4xl md:text-6xl font-bold">Woospy Daisy!</p>
        <p className="text-gray-600 font-semibold md:text-xl">
          Looks like something went completely wrong
        </p>
        <p className="text-gray-600 font-semibold -mt-7 md:text-xl">
          It can happen to the best of us, and it just happened to be you
        </p>
        <Link href={"/"}>
          <a>
            <p className="bg-blue-700 py-3 px-3 md:px-5 md:py-5 text-gray-100 md:text-xl shadow-md">
              Go to HomePage
            </p>
          </a>
        </Link>
      </section>
    </>
  );
};

export default Error;
