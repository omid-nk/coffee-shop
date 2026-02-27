"use client";

import { useState } from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

export function Search() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("search:", query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative z-20 mb-4 w-full max-w-md rounded-xl bg-white/90 p-1 shadow-md backdrop-blur dark:bg-zinc-900/80"
    >
      <div className="focus-within:border-primary-1 hover:border-primary-1/60 flex items-center gap-2 rounded-lg border-2 border-dashed border-zinc-300 px-3 py-2 transition dark:border-zinc-700">
        <input
          type="text"
          placeholder="هوس چی کردی؟ ☕"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-transparent text-sm text-zinc-800 outline-none placeholder:text-zinc-400 md:text-base dark:text-zinc-100"
        />

        <button
          type="submit"
          className="hover:bg-primary-1/15 hover:text-primary-1 grid h-9 w-9 place-items-center rounded-md text-zinc-700 transition dark:text-zinc-200"
          aria-label="Search"
        >
          <HiOutlineMagnifyingGlass className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
}
