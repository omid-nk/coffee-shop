"use client";

import { useState } from "react";
import {
  HiOutlineUser,
  HiOutlineLockClosed,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiHome,
} from "react-icons/hi2";
import Link from "next/link";

function Page() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-zinc-200 px-4 dark:bg-zinc-900">
      {/* Background Pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(rgba(0,0,0,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.12)_1px,transparent_1px)] bg-size-[40px_40px] dark:bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]"
      />

      {/* Card */}
      <div className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-white/60 p-6 shadow-xl backdrop-blur-xl dark:bg-zinc-950/70">
        {/* Home button */}
        <Link
          href="/"
          className="absolute top-4 right-4 z-10 text-zinc-500 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          aria-label="صفحه اصلی"
        >
          <HiHome size={20} />
        </Link>

        {/* Header */}
        <div className="mb-6 cursor-default text-center">
          <h1 className="text-xl font-extrabold text-zinc-900 dark:text-white">
            ورود به حساب کاربری
          </h1>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            خوش اومدی! اطلاعاتت رو وارد کن
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-4">
          {/* Username */}
          <div className="relative">
            <HiOutlineUser className="absolute top-1/2 right-3 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="ایمیل یا نام کاربری"
              className="w-full rounded-lg border border-zinc-300 bg-transparent py-2 pr-10 pl-3 text-sm text-zinc-900 transition outline-none focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/20 dark:border-zinc-700 dark:text-white dark:focus:border-white dark:focus:ring-white/20"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <HiOutlineLockClosed className="absolute top-1/2 right-3 -translate-y-1/2 text-zinc-400" />

            {/* Toggle eye */}
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute top-1/2 left-3 -translate-y-1/2 text-zinc-400 transition hover:text-zinc-700 dark:hover:text-white"
            >
              {showPassword ? (
                <HiOutlineEyeSlash size={18} />
              ) : (
                <HiOutlineEye size={18} />
              )}
            </button>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="رمز عبور"
              className="w-full rounded-lg border border-zinc-300 bg-transparent py-2 pr-10 pl-10 text-sm text-zinc-900 transition outline-none focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/20 dark:border-zinc-700 dark:text-white dark:focus:border-white dark:focus:ring-white/20"
            />
          </div>

          {/* Forgot password */}
          <div className="text-left">
            <Link
              href="/forgot-password"
              type="button"
              className="cursor-pointer text-xs text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              رمز عبور را فراموش کرده‌اید؟
            </Link>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-2 cursor-pointer rounded-lg bg-zinc-900 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800 active:scale-95 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            ورود
          </button>

          {/* signup */}
          <Link
            href="/signup"
            className="text-center text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-gray-300 dark:hover:text-white"
          >
            حساب کاربری نداری؟ ثبت‌نام
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Page;
