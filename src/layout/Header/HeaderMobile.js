import BurgerBtn from "@/components/ui/BurgerBtn";
import CartBtn from "@/components/ui/CartBtn";

export function HeaderMobile() {
  return (
    <>
      <div className="flex items-center justify-between border-zinc-400 bg-white p-3 shadow sm:hidden dark:bg-zinc-800">
        <BurgerBtn />
        <h1 className="text-primary-1 mt-1 text-xl font-bold uppercase">
          coffe shop
        </h1>
        <CartBtn />
      </div>
    </>
  );
}
