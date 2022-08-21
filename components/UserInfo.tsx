import React from "react";
import { IUser } from "../types";
import Image from "next/image";
import Link from "next/link";
import { IoCalendarOutline, IoLocationOutline } from "react-icons/io5";

const UserInfo = ({ userData }: { userData: IUser }) => {
  return (
    <section className="h-[90vh] bg-[#24292e] flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center">
        {userData.avatar_url && (
          <div className="border-[10px] h-max w-max rounded-full border-blue-600">
            <img
              src={userData.avatar_url}
              alt={userData.name}
              className="h-full w-36 rounded-full"
            />
          </div>
        )}
        {userData.name && (
          <p className="text-gray-200 text-4xl font-semibold">
            {userData.name}
          </p>
        )}
        {userData.login && (
          <Link href={userData?.html_url}>
            <a>
              <p className="text-blue-500 text-3xl hover:underline cursor-pointer">
                @{userData.login}
              </p>
            </a>
          </Link>
        )}
        {userData.location && (
          <div className="flex items-center text-gray-300">
            <p>
              <IoLocationOutline />
            </p>
            <p>{userData.location}</p>
          </div>
        )}
        )
      </div>
      <div></div>
    </section>
  );
};

export default UserInfo;
