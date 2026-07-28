import { PricingItem } from "@/types/home";

export const PricingRow = ({
    minutes,
    price,
    popular,
    free,
}: PricingItem) => {
    return (
        <div
            className="flex items-center justify-between p-4 sm:px-8 sm:py-7 border-t border-foreground/8 bg-surface hover:bg-[#eef0ff] dark:hover:bg-[#191E4A] transition-colors"
        >
            <div className="flex items-center max-sm:flex-col gap-4">
                <span className="text-sm text-foreground">{minutes}</span>

                {popular && (
                    <span className="rounded-full bg-[#9B4CDB] px-2 py-px text-xs font-bold text-white">
                        Most Popular
                    </span>
                )}
            </div>

            <span
                className={`font-bold text-nowrap ${free ? "text-[#9B4CDB] text-base" : "text-foreground text-sm"
                    }`}
            >
                {price}
            </span>
        </div>
    );
};