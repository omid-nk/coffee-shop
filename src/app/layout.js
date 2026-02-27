import "@/styles/globals.css";

// layouts
import { Header } from "@/layout/Header/Header";
import { HeaderMobile } from "@/layout/Header/HeaderMobile";

export const metadata = {
  title: "Coffe Shop",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-dana bg-gray-100 text-zinc-700 antialiased dark:bg-zinc-700 dark:text-gray-100">
        <HeaderMobile />
        <Header />
        {children}
      </body>
    </html>
  );
}
