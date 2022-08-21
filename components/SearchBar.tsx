import React, { useState } from "react";
import { useRouter } from "next/router";

const SearchBar = () => {
  const [username, setUsername] = useState("");
  const router = useRouter();
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    router.push({
      pathname: "/user",
      query: { username },
    });
  };

  return (
    <div className="w-[90%] md:w-[40%] lg:w-[30%] h-16">
      <form className="w-full h-full" onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full h-full bg-gray-700 outline-none text-3xl text-center text-blue-300 rounded-sm tracking-widest"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
