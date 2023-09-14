"use client";

// React
import { useState } from "react";

// lib
import { IoIosSearch } from "react-icons/io";

export default function SearchInput() {
  const [searchValue, setSearchValue] = useState("");

  // Input Value Update
  const getInputValue = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchValue(e.target.value);

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="검색어"
        onChange={getInputValue}
        className="w-80 h-11 border-solid px-4 rounded-md border-2 border-gray-600 focus:outline-none"
      />
      <IoIosSearch className="absolute top-[7px] right-4 text-3xl text-gray-500 cursor-pointer" />
    </div>
  );
}
