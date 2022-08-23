import React from "react";
import { IUser } from "../types";
import Link from "next/link";
import { IoCalendarOutline, IoLocationOutline } from "react-icons/io5";

const UserInfo = ({ userData }: { userData: IUser }) => {
  const card =
    "bg-gray-700 text-white flex flex-col gap-1 items-center justify-center text-2xl py-2 px-5 lg:px-7 rounded w-28 md:w-full";
  const cardText = "text-gray-400 text-[10px] uppercase font-semibold";

  return (
    <section className="h-[85vh] lg:h-[95vh] bg-[#24292e] flex flex-col pt-10">
      <div className="flex flex-col items-center justify-center gap-4 w-full">
        {userData.avatar_url && (
          <div className="border-8 h-max w-max rounded-full border-blue-600">
            <img
              src={userData.avatar_url}
              alt={userData.name}
              className="h-full w-32 rounded-full"
            />
          </div>
        )}
        {userData.name && (
          <p className="text-gray-200 text-4xl font-semibold">
            {userData.name}
          </p>
        )}
        {userData.bio && (
          <p className="text-xl text-gray-200">{userData.bio}</p>
        )}
        {userData.login && (
          <Link href={userData?.html_url}>
            <a>
              <p className="text-blue-600 text-2xl hover:underline cursor-pointer">
                @{userData.login}
              </p>
            </a>
          </Link>
        )}
        <div className="flex items-center text-gray-400 gap-8">
          {userData.location && (
            <div className="flex items-center justify-center gap-2">
              <p>
                <IoLocationOutline />
              </p>
              <p>{userData.location}</p>
            </div>
          )}
          {userData.created_at && (
            <div className="flex items-center justify-center gap-2">
              <p>
                <IoCalendarOutline />
              </p>
              <p>
                {new Date(userData.created_at).toLocaleString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
          )}
        </div>
        <div className="flex gap-5 mt-4">
          {userData.followers && (
            <div className={card}>
              <p>{userData.followers}</p>
              <p className={cardText}>Followers</p>
            </div>
          )}
          {userData.following && (
            <div className={card}>
              <p>{userData.following}</p>
              <p className={cardText}>Following</p>
            </div>
          )}
          {userData.public_repos && (
            <div className={card}>
              <p>{userData.public_repos}</p>
              <p className={cardText}>Repositories</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
