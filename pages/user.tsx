import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import UserInfo from "../components/UserInfo";
import { IUser } from "../types";

const User = () => {
  const [userData, setUserData] = useState<any>([]);

  const router = useRouter();
  const username = router.query.username;
  const url = `https://api.github.com/users/${username}`;

  // fetching userdata
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(url);
        const userData = await response.json();
        setUserData(userData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserData();
  }, [url, username]);

  return (
    <>
      <Head>
        <title>
          {`${username ? `OctoProfile | ${username}` : "OctoProfile"}`}
        </title>
      </Head>
      <UserInfo userData={userData} />
    </>
  );
};

export default User;
