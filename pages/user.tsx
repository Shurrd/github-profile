import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import UserInfo from "../components/UserInfo";
import Loading from "../components/Loading";
import GhPolyglot from "gh-polyglot";
import Charts from "../components/Charts";
import { ILanguageData, IRepoData, IUser } from "../types";
import Filter from "../components/Filter";

const User = () => {
  const [userData, setUserData] = useState<IUser | any>([]);
  const [languageData, setLanguageData] = useState<ILanguageData | any>([]);
  const [repoData, setRepoData] = useState<IRepoData | any>([]);
  const [sortedStars, setSortedStars] = useState<IRepoData | any>([]);
  const [starredLanguages, setStarredLanguages] = useState<IRepoData | any>([]);
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
    me.userStats((err: string, stats: any) => {
      if (err) {
        console.error("Error:", err);
      }
      setLanguageData(stats);
    });
  };

  // fetching repo data and sorted them by the most starred
  const fetchRepoData = () => {
    const me = new GhPolyglot(`${username}/git-stats`);
    me.getAllRepos((err: string, stats: any[]) => {
      if (err) {
        console.log(err);
      } else {
        const repos = stats
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .map((item) => item);
        const slicedRepos = repos.slice(0, 8);
        setSortedStars(slicedRepos);
        setRepoData(slicedRepos);
        setStarredLanguages(repos);
      }
    });
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
      <Charts
        languageData={languageData}
        sortedStars={sortedStars}
        starredLanguages={starredLanguages}
      />
      <Filter repoData={repoData} />
    </>
  );
};

export default User;
