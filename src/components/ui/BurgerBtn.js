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
      {/* burger btn */}
      <button onClick={() => setShowMenu(true)}>
        <HiOutlineBars3BottomRight className="h-7 w-7" />
      </button>

      {/* backdrop */}
      <span
        onClick={() => setShowMenu(false)}
        className={`${showMenu === false ? "top-0 right-0 bottom-0 left-full opacity-0" : "top-0 right-0 bottom-0 left-0 opacity-100"} fixed z-20 bg-zinc-700/30 backdrop-blur-xs transition-all sm:hidden`}
      />

      {/* slide menu */}
      <div
        className={`${showMenu === false ? "-right-full" : "right-0"} absolute top-0 bottom-0 z-50 h-screen w-fit bg-gray-100 p-4 shadow-md transition-all dark:bg-zinc-900`}
      >
        {/* top */}
        <div className="flex items-center justify-between gap-22">
          <p className="text-xl">کافی‌شاپ</p>
          <button onClick={() => setShowMenu(false)}>
            <HiMiniXMark className="h-6 w-6 text-red-400" />
          </button>
        </div>

        {/* navs */}
        <ul className="mt-8 flex flex-col gap-3">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link className="text-base" href={item.link}>
                - {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* bottom btns */}
        <div className="absolute right-4 bottom-4">
          <ThemeToggle />
        </div>
      </div>
    </>
  );
}

export default BurgerBtn;
