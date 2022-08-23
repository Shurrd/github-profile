import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import UserInfo from "../components/UserInfo";
import Loading from "../components/Loading";
import GhPolyglot from "gh-polyglot";

const User = () => {
  const [userData, setUserData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [languageData, setLanguageData] = useState([]);

  const router = useRouter();
  const username = router.query.username;
  const url = `https://api.github.com/users/${username}`;

  // fetching user data
  const fetchUserData = async (): Promise<any> => {
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

  // fetching language data
  const fetchLanguageData = (): void => {
    const me = new GhPolyglot(`${username}`);
    me.userStats((err: any, stats: any) => {
      if (err) {
        console.error("Error:", err);
      }
      setLanguageData(stats);
    });
  };

  useEffect(() => {
    fetchUserData();
    fetchLanguageData();
  }, []);

  console.log(languageData);

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
