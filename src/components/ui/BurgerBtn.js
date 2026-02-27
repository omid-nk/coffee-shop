"use client";

import { useState } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Link from "next/link";
import { menuItems } from "@/data/navItems";
import { HiOutlineBars3BottomRight, HiMiniXMark } from "react-icons/hi2";

function BurgerBtn() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {/* Burger Button */}
      <button
        onClick={() => setShowMenu(true)}
        className="grid h-10 w-10 place-items-center rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
        aria-label="Open menu"
      >
        <HiOutlineBars3BottomRight className="h-7 w-7" />
      </button>

      <div
        onClick={() => setShowMenu(false)}
        className={`${showMenu === true ? "" : "hidden"} fixed top-0 right-0 bottom-0 left-0 z-90 h-screen w-full bg-zinc-950/95`}
      />

      {/* Slide Menu */}
      <aside
        className={`fixed top-0 right-0 z-100 h-screen w-72 bg-white shadow-2xl shadow-black transition-transform duration-300 dark:bg-zinc-900 ${showMenu ? "translate-x-0" : "translate-x-full"} `}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-200 p-4 dark:border-zinc-800">
          <p className="text-lg font-semibold">کافی‌شاپ</p>
          <button
            onClick={() => setShowMenu(false)}
            className="grid h-9 w-9 place-items-center rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
            aria-label="Close menu"
          >
            <HiMiniXMark className="h-6 w-6 text-red-400" />
          </button>
        </div>

        {/* Nav */}
        <ul className="mb-4 flex flex-col gap-2 p-4">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.link}
                onClick={() => setShowMenu(false)}
                className="hover:bg-primary-1/10 hover:text-primary-1 block rounded-lg px-3 py-2 text-base transition"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Login / Signup Buttons */}
        <div className="flex flex-col gap-2 px-4">
          <Link
            href="/login"
            onClick={() => setShowMenu(false)}
            className="w-full rounded-lg border border-zinc-300 py-2 text-center text-sm font-medium text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800"
          >
            ورود
          </Link>
          <Link
            href="/signup"
            onClick={() => setShowMenu(false)}
            className="bg-primary-1 hover:bg-primary-2 w-full rounded-lg py-2 text-center text-sm font-medium text-white transition"
          >
            ثبت‌نام
          </Link>
        </div>

        {/* Bottom */}
        <div className="absolute right-4 bottom-4">
          <ThemeToggle />
        </div>
      </aside>
    </>
  );
}

export default BurgerBtn;
