import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import UserInfo from "../components/UserInfo";
import Loading from "../components/Loading";
import GhPolyglot from "gh-polyglot";
import Charts from "../components/Charts";
import { ILanguageData, IUser } from "../types";

const User = () => {
  const [userData, setUserData] = useState<IUser | any>([]);
  const [languageData, setLanguageData] = useState<ILanguageData | any>([]);
  const [repoData, setRepoData] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const username = router.query.username;
  const userUrl = `https://api.github.com/users/${username}`;
  const userRepoUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

  // fetching user data
  const fetchUserData = async (): Promise<any> => {
    setLoading(true);
    try {
      const response = await fetch(userUrl);
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

  // fetching user repo data
  const fetchRepoData = async () => {
    try {
      const response = await fetch(userRepoUrl);
      const data = await response.json();
      setRepoData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserData();
    fetchLanguageData();
    fetchRepoData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Head>
        <title className="capitalize">
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
      <UserInfo userData={userData} />
      <Charts languageData={languageData} repoData={repoData} />
    </>
  );
};

export default User;
