import { integrations } from "@/constants/home";

export const IntegrationStrip = () => {
  return (
    <section className="border-y w-full border-foreground/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-7.5">
        <span className="text-center text-xs font-normal uppercase tracking-[1.1px] text-[#8B5CF6]">
          Works with the systems your practice already runs on
        </span>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-16 gap-y-6">
          {integrations.map((item) => (
            <span
              key={item}
              className="text-sm font-bold text-foreground/45 transition-colors duration-300 hover:text-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};