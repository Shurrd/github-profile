import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import UserInfo from "../components/UserInfo";
import { IUser } from "../types";
import Loading from "../components/Loading";

const User = () => {
  const [userData, setUserData] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const username = router.query.username;
  const url = `https://api.github.com/users/${username}`;

  // fetching userdata
  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const userData = await response.json();
        setUserData(userData);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchUserData();
  }, [url, username]);

  if (loading) {
    return <Loading />;
  }

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
