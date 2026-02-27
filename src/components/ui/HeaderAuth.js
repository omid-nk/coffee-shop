"use client";

import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/lib/supabase/client";
import toast from "react-hot-toast";
import { HiArrowRightEndOnRectangle } from "react-icons/hi2";

export default function HeaderAuth() {
  const { user, loading } = useAuth();

  async function logout() {
    const { error } = await supabase.auth.signOut();
    if (error) return toast.error(error.message);
    toast.success("خارج شدی");
  }

  if (loading) return null;

  if (user) {
    return (
      <Link href="/profile" className="cursor-pointer pr-3 text-xs md:text-sm">
        پروفایل
      </Link>
    );
  }

  return (
    <Link href="/login" className="flex items-center gap-2 pr-3">
      <HiArrowRightEndOnRectangle className="hidden h-5 w-5 md:block" />
      <p className="mb-1 text-xs md:text-sm">ورود | ثبت‌نام</p>
    </Link>
  );
}
