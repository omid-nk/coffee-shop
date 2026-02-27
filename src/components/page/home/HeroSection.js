import { Search } from "@/components/ui/Search";

export function HeroSection() {
  return (
    <section className="relative z-10 mx-auto flex h-100 max-w-480 items-start bg-[url('/images/hero-section.png')] bg-contain bg-no-repeat pt-18 sm:h-140 sm:items-center sm:bg-cover sm:bg-bottom sm:pt-20 md:h-160 lg:h-180 xl:h-220">
      {/* content */}
      <div className="mx-auto flex w-full max-w-7xl justify-center px-2 md:justify-end">
        <div className="flex max-w-md flex-col gap-2 rounded-2xl border border-white/10 bg-zinc-950/70 p-4 text-white shadow-xl backdrop-blur-lg sm:gap-4 sm:p-6">
          <Search />

          <span className="bg-primary-1/20 text-primary-1 w-fit rounded-full px-3 py-1 text-xs font-medium">
            Single Origin • Tanzania
          </span>

          <h1 className="text-2xl font-extrabold sm:text-3xl md:text-4xl">
            قهوه عربیکا تانزانیا
          </h1>

          <h3 className="text-base text-zinc-200 sm:text-lg">
            بالانس بی‌نقص، طعمی فراموش‌نشدنی
          </h3>

          <span className="bg-primary-1 my-1 h-px w-24 sm:my-2" />

          <p className="text-sm leading-relaxed text-zinc-200 sm:text-base">
            قهوه عربیکا تانزانیا با اسیدیته متعادل، عطر میوه‌ای لطیف و بادی نرم،
            انتخابی ایده‌آل برای یک فنجان قهوه‌ی متوازن و خوش‌طعم.
          </p>

          <button className="bg-primary-1 hover:bg-primary-1/90 mt-2 w-fit rounded-lg px-5 py-2 text-sm font-semibold text-black transition active:scale-95">
            مشاهده و خرید
          </button>
        </div>
      </div>
    </section>
  );
}
