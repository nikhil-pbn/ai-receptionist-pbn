import { HowItWorksItem } from "@/types/home";

export const HowItWorksCard = ({
  number,
  title,
  description,
}: HowItWorksItem) => {
  return (
    <div className="rounded-3xl border border-white/8 bg-[#1C1A2C] p-6 md:p-10 transition-all duration-300 hover:border-primary/30">
      <h3 className="text-5xl font-extrabold leading-none text-[#5750E5]/50">
        {number}
      </h3>

      <h4 className="mt-10 text-base font-bold text-white">
        {title}
      </h4>

      <p className="mt-6 text-sm leading-9 text-white/55">
        {description}
      </p>
    </div>
  );
};