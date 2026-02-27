import Link from "next/link";
import { menuItems } from "@/data/navItems";

// components
import ThemeToggle from "@/components/ui/ThemeToggle";
import CartBtn from "@/components/ui/CartBtn";

// icons
import { SiBuymeacoffee } from "react-icons/si";
import HeaderAuth from "@/components/ui/HeaderAuth";

export function Header() {
  return (
    <div className="fixed top-2 right-2 left-2 z-50 mx-auto hidden max-w-7xl items-center justify-between gap-4 rounded-xl bg-zinc-950/50 p-3.5 text-gray-200 shadow backdrop-blur-md sm:flex md:top-4 md:right-4 md:left-4 md:p-4">
      {/* right */}
      <div className="flex items-center gap-2 md:gap-4">
        <SiBuymeacoffee className="text-primary-1 h-8 w-8" />
        <ul className="flex gap-6">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link className="text-sm md:text-base" href={item.link}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* left */}
      <div className="flex items-center divide-x divide-zinc-400">
        <div className="flex items-center gap-2 pl-3">
          <CartBtn />
          <ThemeToggle />
        </div>

        <HeaderAuth />
      </div>
    </div>
  );
}
