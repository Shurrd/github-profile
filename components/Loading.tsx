import React from "react";
import Head from "next/head";

const Loading = ({ username }: { username: string | any }) => {
  return (
    <>
      <Head>
        <title>
          {`${
            username
              ? `OctoProfile | ${
                  username.toString().charAt(0).toUpperCase() +
                  username.slice(1)
                }`
              : "OctoProfile"
          }`}
        </title>
      </Head>
      <div className="h-[100vh] bg-gray-100 flex items-center justify-center">
        <div className="lds-grid absolute">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Loading;
