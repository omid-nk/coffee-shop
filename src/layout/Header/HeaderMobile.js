import BurgerBtn from "@/components/ui/BurgerBtn";
import CartBtn from "@/components/ui/CartBtn";
import Image from "next/image";

export function HeaderMobile() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-zinc-200/70 bg-white/90 backdrop-blur-md sm:hidden dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="flex h-14 items-center justify-between px-3">
        <BurgerBtn />

        {/* Logo */}
        <Image
          src="/images/logo-coffee-shop.svg"
          width={90}
          height={24}
          alt="Coffee Shop Logo"
          className="transition dark:invert"
          priority
        />

        <CartBtn />
      </div>
    </header>
  );
}
