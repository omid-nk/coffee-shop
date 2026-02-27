"use client";

import { useEffect, useState } from "react";
import useTheme from "@/hooks/useTheme";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button onClick={toggleTheme}>
      {theme === "dark" ? (
        <HiOutlineSun className="h-5 w-5" />
      ) : (
        <HiOutlineMoon className="h-5 w-5" />
      )}
    </button>
  );
}
