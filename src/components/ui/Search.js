"use client";

import { useState } from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

export function Search() {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("search:", query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 w-full max-w-md rounded-xl bg-white p-1 dark:bg-zinc-900"
    >
      <div className="focus-within:border-primary-1 flex items-center gap-2 rounded-lg border-2 border-dashed border-zinc-300 px-3 py-2 transition dark:border-zinc-700">
        <input
          type="text"
          id="search"
          name="search"
          placeholder="هوس چی کردی؟"
          value={query}
          onChange={handleChange}
          className="w-full bg-transparent text-sm text-zinc-800 outline-none placeholder:text-zinc-400 md:text-base dark:text-zinc-200"
        />
        <HiOutlineMagnifyingGlass className="h-6 w-6 text-zinc-700 dark:text-zinc-200" />
      </div>
    </form>
  );
}
