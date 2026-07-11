import { CheckIcon } from "@/icon";
import { WhyChooseUsItemProps } from "@/types/home";

export const WhyChooseUsItem = ({
  title,
  description,
}: WhyChooseUsItemProps) => {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-white/8 bg-[#1C1A2C] p-4 md:p-6 transition-colors hover:border-primary/30">
      <div className="mt-1 shrink-0">
        <CheckIcon size={24} />
      </div>

      <p className="text-sm leading-7 text-white/60 md:text-base">
        <span className="font-semibold text-white">
          {title}
        </span>{" "}
        — {description}
      </p>
    </div>
  );
};