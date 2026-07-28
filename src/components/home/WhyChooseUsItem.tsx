import { CheckIcon } from "@/icon";
import { WhyChooseUsItemProps } from "@/types/home";

export const WhyChooseUsItem = ({
  title,
  description,
}: WhyChooseUsItemProps) => {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-foreground/8 bg-surface p-4 md:p-6 transition-colors hover:border-primary/30">
      <div className="mt-1 shrink-0">
        <CheckIcon size={24} />
      </div>

      <p className="text-sm leading-7 text-foreground/60 md:text-base">
        <span className="font-semibold text-foreground">
          {title}
        </span>{" "}
        — {description}
      </p>
    </div>
  );
};