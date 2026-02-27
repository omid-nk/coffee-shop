import { Search } from "@/components/ui/Search";

export function HeroSection() {
  return (
    <section className="mx-auto flex h-100 max-w-480 items-start bg-[url('/images/hero-section.png')] bg-contain bg-no-repeat sm:h-140 sm:items-center sm:bg-cover sm:bg-bottom md:h-160 lg:h-180 xl:h-220">
      {/* content */}
      <div className="mx-auto flex w-full max-w-7xl justify-center px-2 pt-4 sm:pt-0 md:justify-end">
        <div className="flex max-w-md flex-col gap-1 rounded-xl bg-zinc-950/60 p-3 text-white shadow-md shadow-black/50 backdrop-blur-md sm:gap-3 sm:p-6">
          <Search />
          <h1 className="text-xl font-bold sm:text-3xl md:text-4xl">
            قهوه عربیکا تانزانیا
          </h1>

          <h3 className="text-balance opacity-90 sm:text-lg md:text-xl">
            یک فنجان بالانس!
          </h3>

          <span className="bg-primary-1 my-1 block h-px w-32 rounded sm:my-2" />

          <p className="text-base leading-relaxed opacity-90 md:text-lg">
            قطعا نام آشنای عربیکا را شنیده‌اید، عربیکا یکی از گونه‌های قهوه است
            که در نواحی مختلف کمربند قهوه کشت میشود.
          </p>
        </div>
      </div>
    </section>
  );
}
