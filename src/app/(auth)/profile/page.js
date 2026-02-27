"use client";

import { useState, useEffect } from "react";
import {
  HiOutlineUser,
  HiOutlineLockClosed,
  HiOutlineArrowRightOnRectangle,
  HiOutlineSquares2X2,
  HiHome,
} from "react-icons/hi2";
import Link from "next/link";
import { supabase } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Image from "next/image";

function ProfilePage() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("dashboard");
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadProfile() {
      const { data: authData } = await supabase.auth.getUser();
      const currentUser = authData?.user;
      if (!currentUser) return;

      setUser(currentUser);

      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", currentUser.id)
        .single();

      if (error) {
        console.error(error);
        toast.error("بارگذاری پروفایل انجام نشد");
        return;
      }

      setProfile(data);
      setFullName(data.full_name || "");
      setUsername(data.username || "");
      setPhone(data.phone || "");
    }

    loadProfile();
  }, []);

  async function updateProfile(e) {
    e.preventDefault();
    if (!user) return;

    setLoading(true);
    const { error } = await supabase
      .from("profiles")
      .update({ full_name: fullName, username, phone })
      .eq("id", user.id);

    setLoading(false);
    if (error) return toast.error(error.message);
    toast.success("اطلاعات با موفقیت ذخیره شد");
  }

  async function changePassword(e) {
    e.preventDefault();
    if (!currentPassword || !newPassword)
      return toast.error("همه فیلدها الزامی هستند");

    // اعتبارسنجی رمز فعلی
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: user.email,
      password: currentPassword,
    });
    if (signInError) return toast.error("رمز فعلی اشتباه است");

    const { error } = await supabase.auth.updateUser({ password: newPassword });
    if (error) return toast.error(error.message);

    toast.success("رمز عبور تغییر کرد");
    setCurrentPassword("");
    setNewPassword("");
  }

  async function logout() {
    await supabase.auth.signOut();
    router.push("/login");
  }

  if (!user || !profile)
    return <div className="p-10 text-center">در حال بارگذاری...</div>;

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-zinc-200 px-4 py-10 dark:bg-zinc-900">
      <div className="relative mx-auto w-full max-w-4xl rounded-2xl border border-white/10 bg-white/60 p-6 shadow-xl backdrop-blur-xl dark:bg-zinc-950/70">
        <div className="mb-8 flex items-center gap-4">
          <Image
            src={profile.avatar_url || "/images/user-image.jpg"}
            width={500}
            height={0}
            alt="avatar"
            className="h-20 w-20 rounded-full object-cover"
          />
          <div>
            <h1 className="text-lg font-bold text-zinc-900 dark:text-white">
              {profile.full_name || "کاربر"}
            </h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {user.email}
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-[220px_1fr]">
          <div className="flex flex-col gap-2">
            <SidebarButton
              active={activeTab === "dashboard"}
              onClick={() => setActiveTab("dashboard")}
              icon={<HiOutlineSquares2X2 />}
              label="داشبورد"
            />
            <SidebarButton
              active={activeTab === "account"}
              onClick={() => setActiveTab("account")}
              icon={<HiOutlineUser />}
              label="اطلاعات حساب"
            />
            <SidebarButton
              active={activeTab === "security"}
              onClick={() => setActiveTab("security")}
              icon={<HiOutlineLockClosed />}
              label="امنیت"
            />
            <SidebarButton
              onClick={logout}
              danger
              icon={<HiOutlineArrowRightOnRectangle />}
              label="خروج از حساب"
            />
          </div>

          <div>
            {activeTab === "dashboard" && (
              <Section title="داشبورد">
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  ایمیل: <span className="font-medium">{user.email}</span>
                </p>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  تاریخ عضویت:{" "}
                  {new Date(user.created_at).toLocaleDateString("fa-IR")}
                </p>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  شماره تماس:{" "}
                  <span className="font-medium">{profile.phone || "-"}</span>
                </p>
              </Section>
            )}

            {activeTab === "account" && (
              <Section title="اطلاعات حساب">
                <form onSubmit={updateProfile} className="flex flex-col gap-4">
                  <input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="نام کامل"
                    className="rounded-lg border border-zinc-300 bg-transparent px-3 py-2 text-sm dark:border-zinc-700 dark:text-white"
                  />
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="نام کاربری"
                    className="rounded-lg border border-zinc-300 bg-transparent px-3 py-2 text-sm dark:border-zinc-700 dark:text-white"
                  />
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="شماره تماس"
                    className="rounded-lg border border-zinc-300 bg-transparent px-3 py-2 text-sm dark:border-zinc-700 dark:text-white"
                  />
                  <button
                    className="self-start rounded-lg bg-zinc-900 px-5 py-2 text-sm font-semibold text-white dark:bg-white dark:text-zinc-900"
                    disabled={loading}
                  >
                    {loading ? "در حال ذخیره..." : "ذخیره تغییرات"}
                  </button>
                </form>
              </Section>
            )}

            {activeTab === "security" && (
              <Section title="تغییر رمز عبور">
                <form onSubmit={changePassword} className="flex flex-col gap-4">
                  <input
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder="رمز فعلی"
                    className="rounded-lg border border-zinc-300 bg-transparent px-3 py-2 text-sm dark:border-zinc-700 dark:text-white"
                  />
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="رمز عبور جدید"
                    className="rounded-lg border border-zinc-300 bg-transparent px-3 py-2 text-sm dark:border-zinc-700 dark:text-white"
                  />
                  <button className="self-start rounded-lg bg-zinc-900 px-5 py-2 text-sm font-semibold text-white dark:bg-white dark:text-zinc-900">
                    تغییر رمز
                  </button>
                </form>
              </Section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarButton({ icon, label, active, danger, ...props }) {
  return (
    <button
      {...props}
      className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition ${
        danger
          ? "text-red-500 hover:bg-red-500/10"
          : active
            ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
            : "text-zinc-600 hover:bg-zinc-900/5 dark:text-zinc-400 dark:hover:bg-white/5"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-6">
      <h2 className="mb-4 text-lg font-bold text-zinc-900 dark:text-white">
        {title}
      </h2>
      {children}
    </div>
  );
}

export default ProfilePage;
