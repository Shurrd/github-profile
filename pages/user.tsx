import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import UserInfo from "../components/UserInfo";
import Loading from "../components/Loading";
import GhPolyglot from "gh-polyglot";
import Charts from "../components/Charts";
import { ILanguageData, IRepo, IRepoData, IUser } from "../types";
import Filter from "../components/Filter";
import Repos from "../components/Repos";
import Footer from "../components/Footer";

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

  // fetching repo data and sorting them by the most starred
  const fetchRepoData = async () => {
    try {
      const response = await fetch(userRepoUrl);
      const repoData = await response.json();
      const repoList = [...repoData]
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .map((item) => item);
      const slicedRepos = repoList.slice(0, 8);
      setSortedStars(slicedRepos);
      setRepoData(slicedRepos);
      setStarredLanguages(repoList);
    } catch (error) {
      console.log(error);
    }
  };

  // sorting the repos by value
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (repoData) {
      const repoList = [...repoData];
      if (value === "stars") {
        const sorted = repoList.sort(
          (a, b) => b.stargazers_count - a.stargazers_count
        );
        setRepoData(sorted);
      }
      if (value === "forks") {
        const sorted = repoList.sort((a, b) => b.forks_count - a.forks_count);
        setRepoData(sorted);
      }
      if (value === "size") {
        const sorted = repoList.sort((a, b) => b.size - a.size);
        setRepoData(sorted);
      }
    } else return;
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
      <div className="px-20 lg:px-24 pt-16 bg-gray-50">
        <Filter repoData={repoData} handleChange={handleChange} />
        <Repos repoData={repoData} />
        <Footer />
      </div>
    </>
  );
};

export default User;
